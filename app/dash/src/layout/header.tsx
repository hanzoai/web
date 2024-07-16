import type { FC } from "react";

const AdminHeader: React.FC<{
  content: string
}> = ({
  content='Karma'
}) => {
  return (
    <div className="w-full h-[80px] flex items-center justify-between border-b-[1px] border-dashed border-[#AAAAAA33]">
      <div className="py-2 pl-8">
        <div className="text-xl font-bold">{content}</div>
      </div>
      <div className="py-2 pr-8">
        <img src="assets/images/01.png" className="aspect-square rounded-full" alt="profile" width={30} />
      </div>
    </div>
  )
}

export default AdminHeader;
