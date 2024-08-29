"use client"

import { Button, Input, TextArea, Switch } from "@hanzo/ui/primitives";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import moment from "moment-timezone";
import { useStore } from "@/stores";
import { set } from "react-hook-form";

const ProductForm = (props: { productId?: string, create: boolean }) => {
    const { productId, create } = props
    const { productsStore, credentialStore, settingsStore } = useStore()
    const router = useRouter();

    const [page, setPage] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const [id, setId] = useState<string>("");
    const [created, setCreated] = useState<string>("")
    const [updated, setUpdated] = useState<string>("")
    const [sold, setSold] = useState<number>(0)

    const [slug, setSlug] = useState<string>('');
    const [sku, setSku] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [displayPrice, setDisplayPrice] = useState<string>('');
    const [msrf, setMsrf] = useState<string>('');
    const [projectedPrice, setProjectedPrice] = useState<string>('');
    const [taxable, setTaxable] = useState<boolean>(false);
    const [preOrder, setPreOrder] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (credentialStore.isLoggedIn) {
                clearInterval(interval)
                getProduct()
            }
        }, 500)
    }, [])

    const getProduct = () => {
        if (productId) {
            productsStore.getProduct(productId).then((product: any) => {
                console.log(product)
                setId(product.id)
                setCreated(moment(product.createdAt).format("MM/DD/YYYY"))
                setUpdated(moment(product.updatedAt).format("MM/DD/YYYY"))
                setSold(product.sold)
                setSlug(product.slug)
                setSku(product.sku)
                setName(product.name)
                setDescription(product.description)
                setDisplayPrice((product.price / 100).toString())
                setMsrf((product.listPrice / 100).toString())
                setProjectedPrice((product.projectedPrice / 100).toString())
                setTaxable(product.taxable)
                setPreOrder(product.preorder)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }

    const handleButtonClick = async () => {
        const product = {
            description: description,
            listPrice: Number(msrf) * 100,
            name: name,
            price: Number(displayPrice) * 100,
            projectedPrice: Number(projectedPrice) * 100,
            sku: sku,
            slug: slug,
            taxable: taxable,
            preorder: preOrder,
        }

        console.log(product)

        productsStore.product = product
        const u = await (create ? productsStore.createProduct() : productsStore.updateProduct())
        router.push(`/products/details?id=${u.id}`)
    }

    const numberInput = (value: string, set: any) => {
        let cleanedValue = value.replace(/[^0-9.]/g, '');
        if (!isNaN(Number(cleanedValue))) {
            set(cleanedValue);
        }
    }

    return (
        isLoading ?
            <div className="w-full flex justify-center p-4">Loading...</div> :
            <div className="flex flex-col space-y-4 p-2 md:p-4 overflow-y-auto w-full">
                <p className="p-2 md:p-4 block md:hidden text-2xl font-medium">Karma</p>
                {!create && <div className="grid xl:grid-cols-4 grid-cols-2 w-full items-center justify-center bg-background shadow gap-4 truncate">
                    <div className="flex flex-col border border-level-1 rounded-md p-4 gap-2">
                        <div className="font-medium text-xl text-foreground">Statistics ID</div>
                        <span className="font-medium text-base text-muted-1">{id}</span>
                    </div>
                    <div className="flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                        <div className="font-medium text-xl text-foreground">Created At</div>
                        <span className="font-medium text-base text-muted-1">{created}</span>
                    </div>
                    <div className="flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                        <div className="font-medium text-xl text-foreground">Updated At</div>
                        <span className="font-medium text-base text-muted-1">{updated}</span>
                    </div>
                    <div className="flex flex-col border border-level-1 rounded-md text-muted-1 p-4 gap-2">
                        <div className="font-medium text-xl text-foreground">Units Sold</div>
                        <span className="font-medium text-base text-muted-1">{sold}</span>
                    </div>
                </div>}
                <div className="flex flex-col space-y-4 w-full rounded-md border border-level-1 bg-background shadow p-4 text-muted-1">
                    <div>
                        <h1 className="text-primary text-2xl">Product Information</h1>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row w-full">
                        <div className="flex-1 flex flex-col gap-2 w-full">
                            <div className="text-sm text-primary">Slug</div>
                            <Input placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 w-full">
                            <div className="text-sm text-primary">SKU</div>
                            <Input placeholder="SKU" value={sku} onChange={(e) => setSku(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-primary">Name</div>
                        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-sm text-primary">Description</div>
                        <TextArea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="bg-background" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-start justify-between gap-6 md:flex-row w-full">
                        <div className="flex flex-col gap-2 w-full">
                            <div className="text-sm text-primary">Display Price</div>
                            <Input placeholder="Display Price" value={'$' + displayPrice} onChange={(e) => numberInput(e.target.value.substring(1), setDisplayPrice)} />
                            <div className="flex text-sm text-primary gap-2">
                                <p>Preorder</p>
                                <Switch className="bg-level-1 data-[state=checked]:bg-[#375DFB]" checked={preOrder} onCheckedChange={setPreOrder} ></Switch>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="text-sm text-primary">MSRF(Optional)</div>
                            <Input placeholder="MSRP" value={'$' + msrf} onChange={(e) => numberInput(e.target.value.substring(1), setMsrf)} />
                            <div className="flex text-sm text-primary gap-2">
                                <p>Taxable</p>
                                <Switch className="bg-level-1 data-[state=checked]:bg-[#375DFB]" checked={taxable} onCheckedChange={setTaxable} ></Switch>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="text-sm text-primary">Project Price(Optional)</div>
                            <Input placeholder="Projected Price" value={'$' + projectedPrice} onChange={(e) => numberInput(e.target.value.substring(1), setProjectedPrice)} />
                        </div>
                    </div>
                    <div>
                        <Button onClick={handleButtonClick}>{create ? 'Create' : 'Save'}</Button>
                    </div>
                </div>
            </div>
    )
}

export default ProductForm;