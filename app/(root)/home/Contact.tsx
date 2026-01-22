import { ContactForm } from "@/app/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <section className="bg-[#fff] py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="text-center">
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-blue-600 sm:text-4xl uppercase">
            Contact Us
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Tell us about your fleet or roadside needs and our team will reach
            out with the right program.
          </p>
        </div>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
