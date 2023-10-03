"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "./schema";
import { IContactFormData } from "./types";

import { InputGroup } from "@/components/common/InputGroup/InputGroup";
import { Button } from "@/components/Button/Button";
import { EButtonType } from "@/components/Button/types";

import SubmitIcon from "@/assets/icons/SubmitIcon";

export const ContactForm = () => {
  const defaultValues: IContactFormData = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: IContactFormData) => {
    try {
      console.log("className", formData);
    } catch (err: any) {}
  };

  return (
    <form
      id="contact"
      className="flex flex-wrap gap-y-5 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputGroup
        name="fullname"
        label="Your Full Name"
        register={register}
        error={errors.fullname?.message}
        isHalf
      />
      <InputGroup
        name="email"
        label="Your E-mail"
        register={register}
        error={errors.email?.message}
        isHalf
      />
      <InputGroup
        name="subject"
        label="Your Subject"
        register={register}
        error={errors.subject?.message}
      />
      <InputGroup
        type="textarea"
        name="message"
        label="Your Message"
        register={register}
        error={errors.message?.message}
      />
      <div className="flex justify-end px-5 w-full">
        <Button text="Submit" icon={<SubmitIcon />} type={EButtonType.submit} />
      </div>
    </form>
  );
};
