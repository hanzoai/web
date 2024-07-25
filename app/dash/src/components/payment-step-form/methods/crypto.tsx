'use client'

import React, { useEffect, useState } from 'react'
import { autorun } from 'mobx'
import { observer } from 'mobx-react-lite'

import { ethers } from 'ethers'

import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  toast
} from '@hanzo/ui/primitives'

import Eth from '../crypto-icons/eth'

import type { PaymentMethodComponentProps } from '@/type'
import { sendFBEvent, sendGAEvent } from '@/utils/analytics'
import { usePaymentPlan } from '@/context/payment-plan-context'

import ContactForm from '../contact-form'

declare global {
  interface Window {
    ethereum?: any
  }
}

const PayWithCrypto: React.FC<PaymentMethodComponentProps> = observer(({
  onDone,
  transactionStatus,
  setTransactionStatus,
  storePaymentInfo,
  contactForm
}) => {
  // const cmmc = useCommerce()
  const plan = usePaymentPlan()

  if (!plan) { return (<></>) }

  const [loadingPrice, setLoadingPrice] = useState(false)
  //const [selectedToken, setSelectedToken] = useState('eth')
  const [amount, setAmount] = useState<number>()
  const [provider, setProvider] = useState<ethers.BrowserProvider>()

  //const selectedToken = 'eth'

  useEffect(() => {
    setTransactionStatus('unpaid')
    // responding to changes in user.walletAddress
    return autorun(() => {
      const newProvider = new ethers.BrowserProvider(window.ethereum)
      setProvider(newProvider)
    })
  }, [])

  // Get latest USD -> ETH exchange rate
  useEffect(() => {
    const fetchPrice = () => {
      setLoadingPrice(true)
      fetch(process.env.NEXT_PUBLIC_ETH_EXCHANGE_RATE_API ?? '')
        .then(res => res.json())
        .then((exchangeRate) => {
          if (plan.paymentPlan) {
            const oneUsdInWei = (10 ** 18) / exchangeRate.data.amount
            const usdAmountInWei = oneUsdInWei * plan.paymentPlan.price
            setAmount(usdAmountInWei)
            setLoadingPrice(false)
          }
        })
    }

    // Call immediately on load
    fetchPrice()

    // Then set interval to call every 30 seconds
    const interval = setInterval(fetchPrice, 30000)

    return () => clearInterval(interval)
  }, [plan.paymentPlan])

  const sendPayment = async (ether: number) => {
    contactForm.handleSubmit(async () => {
      // Check that we are on ethereum network
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: "0x1" }],
        })
        const newProvider = new ethers.BrowserProvider(window.ethereum)
        setProvider(newProvider)
      } catch (err) {
        toast('Please switch your wallet to the Ethereum network.')
        return
      }

      try {
        if (!provider) {
          // :aa TODO string table
          throw new Error('No crypto wallet found. Please install it.')
        }

        await window.ethereum.send('eth_requestAccounts')

        const signer = await provider.getSigner()
        ethers.getAddress(process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS ?? '')
        const price = ethers.parseEther(ether.toString())
        const tx = await signer.sendTransaction({
          to: process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS,
          value: price
        })
        console.log({ ether, addr: process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS })
        console.log('tx', tx)
        setTransactionStatus('paid')
        await storePaymentInfo({
          ether,
          transactionHash: tx.hash,
          to: process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS,
          paymentMethod: 'crypto'
        })

        provider.waitForTransaction(tx.hash)
          .then(async (receipt) => {
            console.log(receipt)
            await storePaymentInfo({
              ether,
              addr: process.env.NEXT_PUBLIC_ETH_PAYMENT_ADDRESS,
              receipt,
              paymentMethod: 'crypto'
            })
            sendGAEvent('purchase', {
              transaction_id: tx.hash,
              value: price,
              currency: 'ETH',
              plan: plan.paymentPlan?.plan,
              duration: plan.paymentPlan?.duration,
            })
            sendFBEvent('Purchase', {
              plan: plan.paymentPlan?.plan,
              duration: plan.paymentPlan?.duration,
              value: price,
              currency: 'ETH',
            })
            setTransactionStatus('confirmed')
          })
          .catch((error) => {
            console.error(error)
            setTransactionStatus('error')
          })
      } catch (err) {
        console.log(err)
        // :aa TODO string table
        toast('Not enough funds in your wallet')
      }
    })()
  }

  const nextStep = async () => {
    await storePaymentInfo({
      paymentMethod: 'crypto'
    })
    onDone()
  }

  return (
    <div className='flex flex-col gap-6 mt-6'>
      <div className='flex flex-col w-full'>
        <ContactForm form={contactForm} />
        <div className='gap-2 grid grid-cols-3'>
          <Select onValueChange={(token) => {/*ONLY ETH  setSelectedToken(token) */ }} defaultValue='eth'>
            <SelectTrigger>
              <SelectValue defaultValue='eth' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='eth'><div className='flex items-center gap-2'><Eth height={14} />ETH</div></SelectItem>
                {/* <SelectItem value='btc' ><div className='flex items-center gap-2'><Btc height={14}/>BTC</div></SelectItem>
                <SelectItem value='usdt' ><div className='flex items-center gap-2'><Usdt height={14}/>USDT</div></SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className='col-span-2'>
            <Input
              value={amount ? amount / (10 ** 18) : amount}
              contentEditable={false}
            />
            <div className='relative flex items-center gap-2 -top-[32px] justify-end px-2 py-1 rounded-lg bg-muted-4 w-fit text-xs float-right mr-3'>
              <Eth height={10} />
              ETH
            </div>
          </div>
        </div>

        {transactionStatus === 'error' ? (
          <h4 className='text-destructive'>There was an error while confirming the transaction.</h4>
        ) : transactionStatus === 'paid' ? (
          <h4>Waiting for transaction to be confirmed on chain.</h4>
        ) : transactionStatus === 'confirmed' ? (
          <h4>Transaction confirmed!</h4>
        ) : null}

        {transactionStatus === 'unpaid' ? (
          <Button
            onClick={() => sendPayment(amount ? amount / (10 ** 18) : 0)}
            className='mx-auto w-full'
            disabled={loadingPrice}
          >
            Pay
          </Button>
        ) : (
          <Button onClick={nextStep} className='mx-auto w-full'>Continue</Button>
        )}
      </div>
    </div>
  )
})

export default PayWithCrypto
