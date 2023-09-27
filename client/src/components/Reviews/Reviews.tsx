import React from "react";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { REVIEWS } from "./data";
import { ReviewCard } from "./Card/ReviewCard";

export const Reviews = () => {
  return (
    <section
      className="flex flex-col items-center h-screen py-28"
      data-id="reviews"
    >
      <SectionHeading text="Reviews" />
      <div className="flex justify-center gap-10 w-full">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </div>
    </section>
  );
};
