import React from "react";

import { ContactInfoBlock } from "./InfoBlock/ContactInfoBlock";

import MapLocationIcon from "@/assets/icons/MapLocationIcon";
import AvailabilityIcon from "@/assets/icons/AvailabilityIcon";
import MailIcon from "@/assets/icons/MailIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";
import { ContactForm } from "./Form/ContactForm";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Contact = () => {
  return (
    <section id="contact" className="flex flex-col items-center h-screen py-28">
      <SectionHeading text="Contact me" />
      <div className="flex w-full">
        <div className="flex flex-col flex-1 gap-10">
          <ContactInfoBlock
            title="Address"
            body="Vinnytsia, Ukraine"
            icon={<MapLocationIcon />}
          />
          <ContactInfoBlock
            title="Availability"
            body="Available now"
            icon={<AvailabilityIcon />}
          />
          <ContactInfoBlock
            title="Email"
            body="qzzik97@gmail.com"
            icon={<MailIcon />}
            isEmail
          />
          <ContactInfoBlock
            title="Phone"
            body="+38 093-022-67-07"
            icon={<PhoneIcon />}
            isPhone
          />
        </div>
        <div className="flex flex-[1.5]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
