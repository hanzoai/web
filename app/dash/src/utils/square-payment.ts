'use server'

import { Client, Environment } from 'square'
import { randomUUID } from 'crypto'

// https://developer.squareup.com/blog/online-payments-with-square-and-react/
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

BigInt.prototype.toJSON = function() { return this.toString(); }

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.SQUARE_ENVIRONMENT as Environment
})

const processPayment = async (sourceId: string, amount: number, verificationToken: string) => {
  // Square API accepts amount in cents
  const amountInCents = amount * 100

  try {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: sourceId,
      amountMoney: {
        currency: 'USD',
        amount: BigInt(amountInCents)
      },
      verificationToken
    })
    return result
  } catch (error) {
    console.error('Error processing payment:', error)
    return null
  }
}

export {
  processPayment as default 
}