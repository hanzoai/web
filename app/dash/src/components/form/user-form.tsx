"use client"

import { useState, useEffect } from "react";
import { Button, Input } from "@hanzo/ui/primitives";

import { DataTableDemo } from "@/components/data-table/data-table";
import DashSelect from "@/components/dash-select/dash-select";
import { UserOrderTableColumn, type UserOrderTableDataType } from "@/components/data-table/user-order-table-column";

import { useStore } from "@/stores";
import { set } from "react-hook-form";

import moment from "moment-timezone";
import { useRouter } from "next/navigation";

const UserForm = (props: { userId?: string, create: boolean }) => {
    const { userId, create } = props;
    const { usersStore, credentialStore, settingsStore } = useStore()
    const router = useRouter();

    const [page, setPage] = useState(0)

    const [statisticId, setStatisticId] = useState<string>('');
    const [statisticCreated, setStatisticCreated] = useState<string>('');
    const [statisticUpdated, setStatisticUpdated] = useState<string>('');
    const [referrals, setReferrals] = useState([])

    const [userEmail, setUserEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [suite, setSuite] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [postalCode, setPostalCode] = useState<string>('');

    const [state, setState] = useState<string>('');
    const [country, setCountry] = useState<string>('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (credentialStore.isLoggedIn) {
                clearInterval(interval)
                getUser()
            }
        }, 500)
    }, [])

    const getUser = () => {
        if (userId) {
            usersStore.getUser(userId).then((user: any) => {
                setUserEmail(user.email)
                setFirstName(user.firstName)
                setLastName(user.lastName)
                setAddress(user.shippingAddress.line1)
                setSuite(user.shippingAddress.line2)
                setCity(user.shippingAddress.city)
                setPostalCode(user.shippingAddress.postalCode)
                setState(user.shippingAddress.state)
                setCountry(user.shippingAddress.country)
                setStatisticId(user.id)
                setStatisticCreated(moment(user.createdAt).format("MM/DD/YYYY"))
                setStatisticUpdated(moment(user.updatedAt).format("MM/DD/YYYY"))
                setReferrals(user.referrals)
            })
        }
    }

    const onChangeState = (value: string) => {
        setState(value);
    }

    const onChangeCountry = (value: string) => {
        setCountry(value);
    }

    const handleButtonClick = async () => {
        const user = {
            email: userEmail,
            firstName: firstName,
            lastName: lastName,
            shippingAddress: {
                line1: address,
                // suite: suite,
                city: city,
                postalCode: postalCode,
                state: state,
                country: country
            }
        }
        usersStore.user = user
        const u = await (create ? usersStore.createUser() : usersStore.updateUser())
        router.push(`/users/details?id=${u.id}`)
    }

    return (
        <div className="flex flex-col gap-4 p-2 md:p-4 overflow-y-auto">
            <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
            {!create && <div className="flex flex-col lg:flex-row w-full items-center bg-background shadow gap-4 truncate">
                <div className="lg:flex-[33%] w-full flex flex-col border border-level-1 rounded-md p-4 gap-2">
                    <div className="font-medium text-xl text-foreground">Statistics ID</div>
                    <span className="font-medium text-base text-muted-1">{statisticId}</span>
                </div>
                <div className="lg:flex-[67%] w-full flex flex-row gap-4">
                    <div className="flex-1 flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                        <div className="font-medium text-xl text-foreground">Created At</div>
                        <span className="font-medium text-base text-muted-1">{statisticCreated}</span>
                    </div>
                    <div className="flex-1 flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                        <div className="font-medium text-xl text-foreground">Updated At</div>
                        <span className="font-medium text-base text-muted-1">{statisticUpdated}</span>
                    </div>
                </div>
            </div>}
            <div className="flex flex-col space-y-4 w-full rounded-md border border-level-1 bg-background shadow p-4 text-muted-1">
                <div>
                    <h1 className="text-primary text-xl">Personal Information</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-sm text-primary">Email</div>
                    <Input placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="text-sm text-primary">First Name</div>
                        <Input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="text-sm text-primary">Last Name</div>
                        <Input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-full rounded-md border border-level-1 bg-background shadow p-4 text-muted-1">
                <div>
                    <h1 className="text-primary text-xl">Default Shipping Information</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-primary">Address</div>
                        <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
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
                        <div className="text-sm text-primary">ZIP/Postal Code</div>
                        <Input placeholder="Zip Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
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
                <div>
                    <Button onClick={() => handleButtonClick()}>{create ? 'Create' : 'Save'}</Button>
                </div>
            </div>
            {!create && referrals.length !== 0 && <DataTableDemo
                data={referrals}
                columns={UserOrderTableColumn}
                title='Order'
                page={page}
                setPage={setPage}
            />}
        </div>
    )
}

export default UserForm;