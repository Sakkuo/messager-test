import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import "./SkeletonLoad.css";

export default function SkeletonLoad() {
  const renderSkeleton = () => {
    const massArr = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div>
        {massArr.map((i) => (
          <div className="SkeletonLoad__block" key={i}>
            <Skeleton variant="circular" width={72} height={72} />
            <div className="SkeletonLoad__text">
              <Skeleton variant="rounded" width={144} height={16} />
              <Skeleton variant="rounded" width={80} height={12} />
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
  <div className='Skeleton'>
    <Stack spacing={1}>{renderSkeleton()}</Stack>
    </div>);
}
