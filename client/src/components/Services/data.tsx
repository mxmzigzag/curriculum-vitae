import { IService } from "./types";

import FrontendIcon from "@/assets/icons/FrontendIcon";
import BackendIcon from "@/assets/icons/BackendIcon";
import MobileIcon from "@/assets/icons/MobileIcon";
import SEOIcon from "@/assets/icons/SEOIcon";

export const SERVICES: IService[] = [
  {
    title: "Frontend Development",
    description: "Development of the client side of application.",
    icon: <FrontendIcon size={50} className="text-cGold" />,
  },
  {
    title: "Backend Development",
    description: "Development of the aplication's server side.",
    icon: <BackendIcon size={50} className="text-cGold" />,
  },
  {
    title: "Mobile Development",
    description: "Mobile app designing and creation.",
    icon: <MobileIcon size={50} className="text-cGold" />,
  },
  {
    title: "SEO Optimization",
    description: "Planning and implementing the SEO strategies.",
    icon: <SEOIcon size={50} className="text-cGold" />,
  },
];
