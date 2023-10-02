import React, { memo, type FC } from "react";
import Link from "next/link";

import { IDownloadButtonProps } from "./types";
import { Button } from "../Button/Button";

import DownloadIcon from "@/assets/icons/DownloadIcon";

export const DownloadButton: FC<IDownloadButtonProps> = memo(
  ({ text, filePath }) => {
    return (
      <Link
        href={filePath}
        download
        target="_blank"
        rel="noreferrer"
        className="w-full max-w-[220px]"
      >
        <Button text={text} icon={<DownloadIcon />} />
      </Link>
    );
  }
);

DownloadButton.displayName = "DownloadButton";
