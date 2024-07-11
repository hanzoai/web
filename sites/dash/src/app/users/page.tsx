import { DataTableDemo, type Payment } from "@/components/DataTable/DataTable";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
]

const UniversalPage = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Users
              </h2>
              <p className="text-muted-1">Here's a list of users</p>
            </div>
          </div>
          <div className="space-y-4">
            <DataTableDemo data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniversalPage;