import { HELP_OPTIONS, type FormState, type FormErrors } from "@/lib/contactForm";

const inputClasses =
  "mt-2 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm text-navy placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export default function ContactFormFields({
  values,
  errors,
  onChange,
  idPrefix = "",
}: {
  values: FormState;
  errors: FormErrors;
  onChange: (field: keyof FormState, value: string) => void;
  idPrefix?: string;
}) {
  const id = (field: string) => `${idPrefix}${field}`;

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={id("firstName")} className="block text-sm font-medium text-navy">
            First name
          </label>
          <input
            id={id("firstName")}
            type="text"
            value={values.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className={inputClasses}
            placeholder="Jane"
          />
          {errors.firstName && <p className="mt-1.5 text-xs text-red-600">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor={id("lastName")} className="block text-sm font-medium text-navy">
            Last name
          </label>
          <input
            id={id("lastName")}
            type="text"
            value={values.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className={inputClasses}
            placeholder="Mwangi"
          />
          {errors.lastName && <p className="mt-1.5 text-xs text-red-600">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={id("company")} className="block text-sm font-medium text-navy">
          Company / Organization
        </label>
        <input
          id={id("company")}
          type="text"
          value={values.company}
          onChange={(e) => onChange("company", e.target.value)}
          className={inputClasses}
          placeholder="Acme Distributors Ltd."
        />
        {errors.company && <p className="mt-1.5 text-xs text-red-600">{errors.company}</p>}
      </div>

      <div>
        <label htmlFor={id("companyEmail")} className="block text-sm font-medium text-navy">
          Company email
        </label>
        <input
          id={id("companyEmail")}
          type="email"
          value={values.companyEmail}
          onChange={(e) => onChange("companyEmail", e.target.value)}
          className={inputClasses}
          placeholder="jane@company.com"
        />
        {errors.companyEmail && (
          <p className="mt-1.5 text-xs text-red-600">{errors.companyEmail}</p>
        )}
      </div>

      <div>
        <label htmlFor={id("phone")} className="block text-sm font-medium text-navy">
          Phone
        </label>
        <input
          id={id("phone")}
          type="tel"
          value={values.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className={inputClasses}
          placeholder="+254 700 000 000"
        />
        {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor={id("helpType")} className="block text-sm font-medium text-navy">
          How Can We Help You?
        </label>
        <select
          id={id("helpType")}
          value={values.helpType}
          onChange={(e) => onChange("helpType", e.target.value)}
          className={inputClasses}
        >
          <option value="" disabled>
            Select Option
          </option>
          {HELP_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.helpType && <p className="mt-1.5 text-xs text-red-600">{errors.helpType}</p>}
      </div>

      <div>
        <label htmlFor={id("message")} className="block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id={id("message")}
          rows={5}
          value={values.message}
          onChange={(e) => onChange("message", e.target.value)}
          className={`${inputClasses} resize-none`}
          placeholder="To better assist you, please describe how we can help..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>
    </>
  );
}
