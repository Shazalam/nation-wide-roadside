"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactInputRequest, contactSchema } from "@/lib/validation/contact";
import { Button } from "../common/Button";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { createContactLeadThunk } from "@/app/store/contactLead/contactLeadThunks";
import { ContactResultModal } from "./ContactResultModal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Textarea } from "../ui/Textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.contactLead);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactInputRequest>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      email: "",
      fleetType: "passenger_light",
      fleetSize: 0,
      message: "",
    },
  });

  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsWaitingForResponse(true);
    }
  }, [loading]);

  useEffect(() => {
    if (!isWaitingForResponse || loading) return;

    if (error) {
      setModalSuccess(false);
      setModalMessage(
        error.message || "Something went wrong. Please try again.",
      );
      setModalOpen(true);
      setIsWaitingForResponse(false);
    } else {
      setModalSuccess(true);
      setModalMessage(
        "Thank you for reaching out. A roadside specialist will contact you shortly to confirm your dispatch request.",
      );
      setModalOpen(true);
      reset();
      setIsWaitingForResponse(false);
    }
  }, [loading, error, isWaitingForResponse, reset]);

  function onSubmit(values: ContactInputRequest) {
    setHasSubmitted(true);
    dispatch(createContactLeadThunk(values));
  }

  const fleetOptions = [
    { label: "Passenger/Light Utility", value: "passenger_light" },
    { label: "Utility Vehicle", value: "utility" },
    { label: "Medium Duty", value: "medium_duty" },
    { label: "Heavy Duty", value: "heavy_duty" },
    { label: "Motorcycle", value: "motorcycle" },
    { label: "Specialty", value: "specialty" },
    { label: "Super Duty", value: "super_duty" },
    { label: "EV", value: "ev" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                  Request Commercial Towing Support
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg text-slate-300"
                >
                  Our nationwide network ensures your fleet stays moving. Fill out the form and get prioritised queuing.
                </motion.p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Truck, title: "Nationwide Coverage", text: "24/7 access to thousands of vetted service providers." },
                  { icon: ShieldCheck, title: "Enterprise Grade", text: "Fully insured and compliant roadside assistance solutions." },
                  { icon: Clock, title: "Rapid Response", text: "Average dispatch time under 45 minutes across the US." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex gap-4"
                  >
                    <div className="flex-none rounded-lg bg-white/10 p-2 ring-1 ring-white/20">
                      <item.icon className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="lg:col-span-3">
              <Card className="overflow-hidden border-none bg-white/95 shadow-2xl backdrop-blur-sm">
                <CardHeader className="bg-slate-50 border-b border-slate-100 p-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-brand-primary" />
                    <CardTitle className="text-xl">Dispatch Request Form</CardTitle>
                  </div>
                  <CardDescription>
                    All fields marked with an asterisk (*) are required
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        label="First Name"
                        placeholder="John"
                        required
                        {...register("firstName")}
                        error={errors.firstName?.message}
                      />
                      <Input
                        label="Last Name"
                        placeholder="Doe"
                        required
                        {...register("lastName")}
                        error={errors.lastName?.message}
                      />
                    </div>

                    <Input
                      label="Company Name"
                      placeholder="Your Business LLC"
                      required
                      {...register("companyName")}
                      error={errors.companyName?.message}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="(555) 000-0000"
                        required
                        {...register("phone")}
                        error={errors.phone?.message}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@company.com"
                        required
                        {...register("email")}
                        error={errors.email?.message}
                      />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Select
                        label="Fleet Vehicle Type"
                        options={fleetOptions}
                        {...register("fleetType")}
                        error={errors.fleetType?.message}
                      />
                      <Input
                        label="Estimated Fleet Size"
                        type="number"
                        min={0}
                        {...register("fleetSize", { valueAsNumber: true })}
                        error={errors.fleetSize?.message as string}
                      />
                    </div>

                    <Textarea
                      label="Reason for Dispatch / Request Details"
                      placeholder="e.g. Towing required for heavy duty truck at Mile Marker 54..."
                      required
                      rows={4}
                      {...register("message")}
                      error={errors.message?.message}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={loading}
                        fullWidth
                        size="lg"
                        className="h-12 text-base font-bold uppercase tracking-wider"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              className="h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            Processing Dispatch...
                          </span>
                        ) : (
                          "Submit Request"
                        )}
                      </Button>
                      <p className="mt-3 text-center text-[10px] text-slate-400">
                        By submitting this form, you agree to our Terms of Service and Privacy Policy. A specialist will call you immediately.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {modalOpen && (
          <ContactResultModal
            open={modalOpen}
            success={modalSuccess}
            message={modalMessage}
            onClose={() => setModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
