"use client";

import DashSelect from "@/components/dash-select/dash-select";
import { DataTableDemo } from "@/components/data-table/data-table";
import { OrderDetailTableColumn } from "@/components/data-table/order-detail-table-column";
import { Button, Input, Label, Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogFooter } from "@hanzo/ui/primitives";
import { useState, useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "@/stores";
import { useRouter } from "next/navigation";
import moment from "moment-timezone";

const OrderForm = observer((props: { orderId?: string, create: boolean }) => {
    const { orderId, create } = props
    const router = useRouter()
    const { ordersStore, credentialStore, settingsStore } = useStore()

    const [isLoading, setIsLoading] = useState(true)
    const [open, setOpen] = useState(false)
    const [refundAmount, setRefundAmount] = useState('0')
    const [refundSuccess, setRefundSuccess] = useState(false)
    const [page, setPage] = useState<number>(0)

    const [id, setId] = useState<string>('');
    const [createdAt, setCreatedAt] = useState<string>('');
    const [updatedAt, setUpdatedAt] = useState<string>('');

    const [userId, setUserId] = useState<string>('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [address, setAddress] = useState<string>('');
    const [suite, setSuite] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');
    const [paymentObject, setPaymentObject] = useState();

    const orderStatusOptions = {
        "cancelled": "Cancelled",
        "locked": "Locked",
        "onhold": "OnHold",
        "completed": "Completed",
        "open": "Open"
    };
    const paymentStatusOptions = {
        "credit": "Credit",
        "disputed": "Disputed",
        "cancelled": "Cancelled",
        "failed: ": "Failed",
        "fraudulent": "Fraudulent",
        "paid": "Paid",
        "refunded": "Refunded",
        "unpaid": "Unpaid"
    };

    const [state, setState] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [orderStatus, setOrderStatus] = useState<string>('');
    const [paymentStatus, setPaymentStatus] = useState<string>('');

    const [number, setNumber] = useState<string>('');
    const [subTotal, setSubTotal] = useState<string>('');
    const [discount, setDiscount] = useState<string>('');
    const [total, setTotal] = useState<string>('');

    const onChangeState = (value: string) => {
        setState(value);
    }
    const onChangeCountry = (value: string) => {
        setCountry(value);
    }
    const onChangeOrderStatus = (value: string) => {
        setOrderStatus(value);
    }
    const onChangePaymentStatus = (value: string) => {
        setPaymentStatus(value);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (credentialStore.isLoggedIn) {
                clearInterval(interval)
                getProduct()
            }
        }, 500)
    }, [])

    const getProduct = () => {
        if (orderId) {
            ordersStore.getOrder(orderId).then((order: any) => {
                console.log(order)
                setId(order.id)
                setCreatedAt(moment(order.createdAt).format("MM/DD/YYYY"))
                setUpdatedAt(moment(order.updatedAt).format("MM/DD/YYYY"))
                setUserId(order.userId)
                setEmail(order.email)
                setName(order.shippingAddress.name)
                setAddress(order.shippingAddress.line1)
                setSuite(order.shippingAddress.line2)
                setCity(order.shippingAddress.city)
                setPostalCode(order.shippingAddress.postalCode)
                setState(order.shippingAddress.state)
                setCountry(order.shippingAddress.country)
                setOrderStatus(order.status)
                setPaymentStatus(order.paymentStatus)
                setNumber(order.number)
                setSubTotal((order.subtotal / 100).toString())
                setDiscount((order.discount / 100).toString())
                setTotal((order.total / 100).toString())
                const tableData = order.paymentObjects.map((item: any) => (
                    {
                        externalId: item.account.chargeId,
                        type: item.type,
                        last: item.account.lastFour,
                        ip: item.client.ip,
                        country: item.client.country,
                        status: item.status,
                        fee: item.fee,
                        amount: item.amount,
                        refunded: item.amountRefunded
                    }
                ))
                setPaymentObject(tableData)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }

    const handleSaveButtonClick = async () => {
        const order = {
            id: id,
            email: email,
            shippingAddress: {
                name: name,
                line1: address,
                line2: suite,
                city: city,
                postalCode: postalCode,
                state: state,
                country: country,
            },
            status: orderStatus,
            paymentStatus: paymentStatus,
        }

        console.log(order)

        ordersStore.order = order
        const u = await (create ? ordersStore.createOrder() : ordersStore.updateOrder())
        router.push(`/orders/details?id=${u.id}`)
    }

    const handleRefundButtonClick = () => {
        setRefundAmount('0')
        setRefundSuccess(false)
        setOpen(true)
    }

    const handleCancelButtonClick = () => {
        setOpen(false)
    }

    const handleConfirmButtonClick = async () => {
        try {
            console.log(Number(refundAmount))
            await ordersStore.refundOrder(orderId, Number(refundAmount))
            setRefundSuccess(true)
        } catch (e: any) {
            console.log(e)
        }
    }

    const handleRefundAmountChange = (value: string) => {
        let cleanedValue = value.replace(/[^0-9.]/g, '');
        if (!isNaN(Number(cleanedValue))) {
            setRefundAmount(cleanedValue);
        }
    }

    const onRowClick = (rowData: any) => {
        try {
            if (rowData.type === 'stripe') {
                window.open(`//dashboard.stripe.com/payments/${rowData.externalId}`, '_blank')
            }
        } catch (e) {
            console.error(e)
        }
    }

    return (
        isLoading ? <div className="w-full flex justify-center p-4">Loading...</div> :
            <>
                <div className="flex-1 space-y-4 p-2 md:p-4 overflow-y-auto">
                    <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
                    <div className="flex flex-col lg:flex-row w-full items-center bg-background shadow gap-4 truncate">
                        <div className="lg:flex-[33%] w-full flex flex-col border border-level-1 rounded-md p-4 gap-2">
                            <div className="font-medium text-xl text-foreground">Statistics ID</div>
                            <span className="font-medium text-base text-muted-1">{id}</span>
                        </div>
                        <div className="lg:flex-[67%] w-full flex flex-row gap-4">
                            <div className="flex-1 flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                                <div className="font-medium text-xl text-foreground">Created At</div>
                                <span className="font-medium text-base text-muted-1">{createdAt}</span>
                            </div>
                            <div className="flex-1 flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                                <div className="font-medium text-xl text-foreground">Updated At</div>
                                <span className="font-medium text-base text-muted-1">{updatedAt}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="w-full lg:flex-[60%] gap-4 flex flex-col bg-background shadow">
                            <div className="flex flex-col w-full rounded-md border border-level-1 bg-background shadow p-4 gap-8">
                                <h1 className="text-primary text-xl">User Information</h1>
                                <div className="flex flex-col font-medium text-base">
                                    <p className="text-primary">User ID</p>
                                    <p className="text-muted-1">{userId}</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full rounded-md border border-level-1 bg-background shadow p-4 gap-4">
                                <h1 className="text-primary text-2xl">Order Information</h1>
                                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Email</div>
                                        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Name</div>
                                        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Address</div>
                                        <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Postal Code</div>
                                        <Input placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Suite</div>
                                        <Input placeholder="Suite" value={suite} onChange={(e) => setSuite(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">City</div>
                                        <Input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Region/State</div>
                                        <DashSelect placeholder="Select a State" value={state} options={country !== '' ? settingsStore.stateOptions[country] : null} onChange={onChangeState} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Country</div>
                                        <DashSelect placeholder="Select a Country" value={country} options={settingsStore.countryOptions} onChange={onChangeCountry} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full rounded-md border border-level-1 bg-background shadow p-4 gap-4">
                                <div>
                                    <h1 className="text-primary text-xl">Order Status</h1>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2 md:flex-row">
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Order Status</div>
                                        <DashSelect placeholder="Order Status" value={orderStatus} options={orderStatusOptions} onChange={onChangeOrderStatus} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-sm text-primary">Payment Status</div>
                                        <DashSelect placeholder="Payment Status" value={paymentStatus} options={paymentStatusOptions} onChange={onChangePaymentStatus} />
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4 w-full md:w-[50%]">
                                    <Button variant="primary" className="flex-1" onClick={handleSaveButtonClick}>Save</Button>
                                    <Button variant="outline" className="flex-1" onClick={handleRefundButtonClick}>Refund</Button>

                                </div>
                            </div>
                        </div>
                        <div className="w-full h-fit lg:flex-[40%] flex flex-col rounded-md border border-level-1 shadow p-4 text-muted-1 text-base font-medium gap-8">
                            <p className="text-primary text-xl w-full">Receipt</p>
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex flex-col font-medium text-base gap-2">
                                    <p className="text-primary">Number</p>
                                    <span>{number}</span>
                                </div>
                                <p className="text-primary">Terms</p>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-primary">Subtotal</p>
                                    <span>{'$' + subTotal}</span>
                                </div>
                                <div className="flex flex-row items-center justify-between">
                                    <p className="text-primary">Discount</p>
                                    <span>{'$' + discount}</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between">
                                <p className="text-primary">Total</p>
                                <span>{'$' + total}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <DataTableDemo
                    data={paymentObject ?? []}
                    columns={OrderDetailTableColumn}
                    onClickHandler={onRowClick}
                    page={page}
                    setPage={setPage}
                    title="Payments" />
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="p-0 gap-0 transform overflow-hidden rounded-lg border border-level-3 bg-background sm:max-w-[500px]">
                        <DialogHeader className="text-xl lg:text-2xl bg-background p-4 gap-4 overflow-hidden">
                            <DialogTitle>Refund</DialogTitle>
                            <DialogDescription>
                                {refundSuccess ? "This refund was successfully processed." : "Enter an amount to refund."}
                            </DialogDescription>
                        </DialogHeader>
                        <div className="p-4 flex flex-row gap-4 items-center">
                            <Label htmlFor="refund" className="text-right">
                                Amount
                            </Label>
                            <Input
                                id="refund"
                                value={'$' + refundAmount}
                                className="col-span-3"
                                onChange={(e) => handleRefundAmountChange(e.target.value)}
                            />
                        </div>
                        <DialogFooter className="p-4 flex flex-row items-right">
                            <Button variant="outline" onClick={handleCancelButtonClick}>{refundSuccess ? "Confirm" : "Cancel"}</Button>
                            {!refundSuccess && <Button variant="primary" onClick={handleConfirmButtonClick}>Confirm</Button>}
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
    )
})

export default OrderForm;