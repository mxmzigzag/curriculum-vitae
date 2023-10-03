import React, { type FC, memo } from "react";
import type { IContactInfoBlockProps } from "./types";
import { sedgwick } from "@/app/layout";

export const ContactInfoBlock: FC<IContactInfoBlockProps> = memo(
  ({ title, body, icon, isEmail = false, isPhone = false }) => {
    const renderBody = () => {
      if (isEmail) {
        return <a href={`mailto:${body}`}>{body}</a>;
      }
      if (isPhone) {
        return <a href={`tel:${body.replace(/[\s-]/g, "")}`}>{body}</a>;
      }
      return body;
    };

    return (
      <div className="flex">
        <div className="flex flex-1 ">
          <div className="relative rounded-full border-2 border-solid border-cGray p-3 h-fit before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-14 before:w-14 before:h-[2px] before:bg-cGray">
            {icon}
          </div>
        </div>
        <div className="flex flex-col flex-[3] mt-2">
          <p className={`${sedgwick.className} text-3xl mb-1`}>{title}</p>
          <p className="text-sm font-light tracking-widest opacity-70">
            {renderBody()}
          </p>
        </div>
      </div>
    );
  }
);

ContactInfoBlock.displayName = "ContactInfoBlock";
