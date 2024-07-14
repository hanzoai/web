"use client";

import { useRouter } from "next/navigation"

const UniversalPage = () => {
  const router = useRouter();

  const onClickSignIn = () => {
    router.push("/dashboard");
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center justify-center [&>div:w-full]">
        <div className="rounded-xl border bg-background text-primary shadow">
          <div className="flex flex-col p-6 space-y-1">
            <h3 className="font-semibold tracking-tighter text-2xl">Sign In</h3>
            <p className="text-sm text-muted-1">Enter your email below to create your account</p>
          </div>
          <div className="p-6 pt-0 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="m@example.com" type="email"></input>
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
              <input className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" type="password" />
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-muted-4 shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" onClick={onClickSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversalPage
