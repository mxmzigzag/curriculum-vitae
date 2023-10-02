import React, { memo, type FC } from "react";
import Image from "next/image";

import type { IReviewCardProps } from "./types";
import QuoteIcon from "@/assets/icons/QuoteIcon";

export const ReviewCard: FC<IReviewCardProps> = memo(
  ({ review: { name, bio, body, img } }) => {
    return (
      <div className="flex flex-col w-1/4 bg-cLightBlack rounded-lg p-10 h-[55vh]">
        <div className="relative mb-10">
          <div className="absolute -top-1 -left-1 w-14 h-14 rounded-br-lg bg-cLightBlack flex items-center justify-center">
            <QuoteIcon size={24} className="text-cGold" />
          </div>
          <Image src={img} alt={name} className="rounded-lg" />
        </div>
        <p className="text-sm text-cWhite leading-6 opacity-80 mb-10">{body}</p>
        <div className="flex flex-col mt-auto">
          <span className="text-xl font-bold tracking-widest mb-0.5">
            {name}
          </span>
          <span className="text-xs text-cWhite tracking-wide opacity-80">
            {bio}
          </span>
        </div>
      </div>
    );
  }
);

ReviewCard.displayName = "ReviewCard";
