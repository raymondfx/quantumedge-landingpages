"use client";

import { useState, type FormEvent } from "react";
import { Check, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import ContactFormFields from "./ContactFormFields";
import ContactSuccessPanel from "./ContactSuccessPanel";
import {
  initialFormState,
  validateContactForm,
  type FormState,
  type FormErrors,
} from "@/lib/contactForm";

const BENEFITS = [
  "Client-oriented",
  "Results-driven",
  "Independent",
  "Problem-solving",
  "Competent",
  "Transparent",
];

const STEPS = [
  { number: 1, text: "We schedule a call at your convenience" },
  { number: 2, text: "We do a discovery and consulting meeting" },
  { number: 3, text: "We prepare a proposal" },
];

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<FormState | null>(null);

  const handleChange = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(values);
      setValues(initialFormState);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-20">
      <div className="bg-navy pb-28 pt-24 lg:pb-40 lg:pt-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <Reveal className="max-w-xl">
            <span className="font-ui text-xs font-semibold uppercase tracking-widest text-accent-soft">
              Project Scoping
            </span>
            <h2 className="font-heading mt-3 text-4xl font-bold leading-[1.2] text-white sm:text-[3rem]">
              Partner with Us for Comprehensive IT
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="bg-solutions-gradient pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="lg:pt-10">
              <p className="max-w-md text-base leading-[1.4] text-navy/70">
                We&rsquo;re happy to answer any questions you may have and
                help you determine which of our services best fit your needs.
              </p>

              <h3 className="font-heading mt-9 text-lg font-semibold text-navy">
                Your benefits:
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-base text-navy/85">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <h3 className="font-heading mt-9 text-lg font-semibold text-navy">
                What happens next?
              </h3>
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-3">
                {STEPS.map((step, i) => (
                  <div key={step.number} className="flex items-start gap-3 sm:flex-1">
                    <span className="font-heading shrink-0 text-2xl font-bold text-navy">
                      {step.number}
                    </span>
                    <p className="flex-1 text-sm leading-[1.4] text-navy/70">{step.text}</p>
                    {i < STEPS.length - 1 && (
                      <ChevronRight
                        className="mt-1 hidden shrink-0 text-navy/25 sm:block"
                        size={18}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:-mt-40">
              <div className="card-shadow rounded-2xl bg-white p-8 sm:p-10">
                {submitted ? (
                  <ContactSuccessPanel
                    data={submitted}
                    onClose={() => setSubmitted(null)}
                  />
                ) : (
                  <>
                    <h3 className="font-heading text-center text-xl font-bold text-navy">
                      Schedule a Free Consultation
                    </h3>
                    <div className="mt-5 border-t border-border" />

                    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-6">
                      <ContactFormFields
                        values={values}
                        errors={errors}
                        onChange={handleChange}
                      />

                      <button
                        type="submit"
                        className="btn-primary rounded-lg px-8 py-3"
                      >
                        Submit
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
