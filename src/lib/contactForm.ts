export const HELP_OPTIONS = [
  "Custom Enterprise Software",
  "LPO / Procurement Automation",
  "Enterprise AI Workflow",
  "Cloud & Systems Integration",
  "Other",
];

export type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  companyEmail: string;
  phone: string;
  helpType: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  company: "",
  companyEmail: "",
  phone: "",
  helpType: "",
  message: "",
};

export function validateContactForm(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.company.trim()) errors.company = "Organization name is required.";

  if (!values.companyEmail.trim()) {
    errors.companyEmail = "Company email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.companyEmail)) {
    errors.companyEmail = "Enter a valid email address.";
  }

  if (!values.helpType) errors.helpType = "Please select how we can help.";

  if (!values.message.trim()) {
    errors.message = "Please describe how we can help.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please provide at least 20 characters of detail.";
  }

  return errors;
}
