import React, { memo, type FC } from "react";

import type { IServiceCardProps } from "./types";
import {
  serviceCardDescriptionStyles,
  serviceCardIconStyles,
  serviceCardStyles,
  serviceCardTitleStyles,
} from "./assets";

export const ServiceCard: FC<IServiceCardProps> = memo(({ service }) => {
  return (
    <div className={serviceCardStyles}>
      <div className={serviceCardIconStyles}>{service.icon}</div>
      <p className={serviceCardTitleStyles}>{service.title}</p>
      <p className={serviceCardDescriptionStyles}>{service.description}</p>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";
