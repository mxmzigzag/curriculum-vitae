import type { StaticImageData } from "next/image";

export interface IReview {
  name: string;
  bio: string;
  body: string;
  img: StaticImageData;
}
