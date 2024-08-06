import type { FC } from "react";

export interface ReviewCardProps {
  reviewerName: string;
  reviewerRole: string;
  reviewerAvatar: string;
  reviewDetail: string;
}

const ReviewCard: FC<ReviewCardProps> = (props) => {
  const { reviewerName, reviewerRole, reviewerAvatar, reviewDetail } = props;

  return (
    <div className="pt-[57px] px-[21px] pb-[21px] bg-primary-black flex-none max-w-[280px]">
      <p className="text-white-85 text-base leading-normal">
        “
        {reviewDetail}
        ”
      </p>
      <div className="flex flex-row mt-[39px] gap-[5px]">
        <img src={reviewerAvatar} alt={reviewerName} className="w-[35px] h-[35px]" />
        <div>
          <h3 className="text-base">{reviewerName}</h3>
          <h3 className="text-[14px] text-white-65">{reviewerRole}</h3>
        </div>
      </div>
    </div>
  )
};

export default ReviewCard