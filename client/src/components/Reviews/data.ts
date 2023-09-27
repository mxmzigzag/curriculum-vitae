import type { IReview } from "./types";

import p1 from "@/assets/images/person-1.jpg";
import p2 from "@/assets/images/person-2.jpg";
import p3 from "@/assets/images/person-3.jpg";

export const REVIEWS: IReview[] = [
  {
    name: "Vincent Tam",
    bio: "CEO, Trybe",
    body: "Great work! Max is a great guy and professional of web development. He greatly boosted our development speed and quality.",
    img: p1,
  },
  {
    name: "Roderick Morgan",
    bio: "CEO, StoryStartr",
    body: "Max was great, he's a quiet and stoic guy but I never needed to worry that the job would get done.",
    img: p2,
  },
  {
    name: "Alice Davis",
    bio: "CEO, EllaCosm",
    body: "The Max's work exceeded my expectations. He demonstrated exceptional skill and creativity in bringing my vision to life, and the website he created is not only visually stunning but also incredibly user-friendly.",
    img: p3,
  },
];
