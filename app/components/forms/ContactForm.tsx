"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  type ContactInput
} from "@/app/lib/validation/contact";
import { clsx } from "clsx";
import { Button } from "../common/Button";

const inputBase =
  "w-full rounded-md border border-slate-300 bg-slate-50 px-3 py-2 text-sm shadow-sm focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-primary placeholder:text-black  text-black";

  export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      email: "",
      fleetType: "individual",
      fleetSize: "",
      message: "",
      // agreeToTerms: false,
      // companyHidden: ""
    }
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setStatusMessage(
        "Thank you. Our team will contact you shortly."
      );
      reset();
    } catch (err) {
      setStatus("error");
      setStatusMessage(
        "Something went wrong while submitting your request. Please try again."
      );
    }
  }

  return (
    <form
     onSubmit={handleSubmit<ContactInput>(onSubmit)}
      className="mx-auto w-full max-w-3xl rounded-2xl bg-white/95 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:p-8"
      noValidate
    >
      {/* Name row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700 sm:text-sm">
            First name<span className="text-red-500">*</span>
          </label>
          <input className={inputBase} {...register("firstName")} />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 sm:text-sm">
            Last name<span className="text-red-500">*</span>
          </label>
          <input className={inputBase} {...register("lastName")} />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Company */}
      <div className="mt-4">
        <label className="block text-xs font-medium text-slate-700 sm:text-sm">
          Company name<span className="text-red-500">*</span>
        </label>
        <input className={inputBase} {...register("companyName")} />
        {errors.companyName && (
          <p className="mt-1 text-xs text-red-600">
            {errors.companyName.message}
          </p>
        )}
      </div>

      {/* Phone + email */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700 sm:text-sm">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            className={inputBase}
            type="tel"
            placeholder="### ### ####"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 sm:text-sm">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            className={inputBase}
            type="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Fleet row */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-medium text-slate-700 sm:text-sm">
            Fleet type
          </label>
          <select
            className={inputBase}
            {...register("fleetType")}
          >
            <option value="individual">Individual</option>
            <option value="small">Small fleet (1–20)</option>
            <option value="medium">Medium fleet (21–100)</option>
            <option value="large">Large fleet (100+)</option>
            <option value="other">Other</option>
          </select>
          {errors.fleetType && (
            <p className="mt-1 text-xs text-red-600">
              {errors.fleetType.message}
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-700 sm:text-sm">
            Fleet size
          </label>
          <input
            className={inputBase}
            type="text"
            min={0}
            {...register("fleetSize")}
          />
          {errors.fleetSize && (
            <p className="mt-1 text-xs text-red-600">
              {errors.fleetSize.message as string}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="mt-4">
        <label className="block text-xs font-medium text-slate-700 sm:text-sm">
          What is the nature of your request?
          <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          className={clsx(inputBase, "resize-y")}
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden for humans */}
      {/* <div className="hidden">
        <label>
          Company
          <input
            type="text"
            autoComplete="off"
            {...register("companyHidden")}
          />
        </label>
      </div> */}

      {/* Terms */}
      {/* <div className="mt-4 flex items-start gap-2">
        <input
          id="agreeToTerms"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary"
          {...register("agreeToTerms")}
        />
        <label
          htmlFor="agreeToTerms"
          className="text-xs text-slate-700 sm:text-sm"
        >
          I agree to the{" "}
          <a href="/terms" className="underline">
            Terms
          </a>{" "}
          &amp;{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </label>
      </div> */}
      {/* {errors.agreeToTerms && (
        <p className="mt-1 text-xs text-red-600">
          {errors.agreeToTerms.message}
        </p>
      )} */}

      {/* Submit + status */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit request"}
        </Button>

        {status !== "idle" && statusMessage && (
          <p
            className={clsx(
              "text-xs sm:text-sm",
              status === "success"
                ? "text-emerald-600"
                : "text-red-600"
            )}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </form>
  );
}
