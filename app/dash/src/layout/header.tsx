import type { FC } from "react";

const AdminHeader: FC = () => {
  return (
    <div className="w-screen h-[80px] flex items-center justify-between">
      <div className="py-2 pl-8">
        <img src="assets/images/logo.png" alt="logo" width={40} />
      </div>
      <div className="py-2 pr-8">
        <img src="assets/images/01.png" className="aspect-square rounded-full" alt="profile" width={30} />
      </div>
    </div>
  )
}

export default AdminHeader;
