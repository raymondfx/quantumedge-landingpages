import {
  Factory,
  Truck,
  Stethoscope,
  Landmark,
  Briefcase,
  HandHeart,
} from "lucide-react";
import Reveal from "./Reveal";

const INDUSTRIES = [
  { icon: Factory, label: "Industry & Manufacturing" },
  { icon: Truck, label: "Transportation & Logistics" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Landmark, label: "Banks & Insurance" },
  { icon: Briefcase, label: "Consulting Providers" },
  { icon: HandHeart, label: "Non-Profit" },
];

export default function Industries() {
  return (
    <section className="relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <span className="font-ui inline-block rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            What We Do
          </span>
          <h2 className="font-heading mt-4 max-w-2xl text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Solving IT challenges in every industry, every day.
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="flex items-center gap-3 rounded-full bg-surface py-2 pl-2 pr-6 sm:w-auto"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <industry.icon size={20} strokeWidth={1.75} />
              </span>
              <span className="font-ui text-sm font-semibold text-navy">
                {industry.label}
              </span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={150}>
          <a
            href="#contact"
            className="font-ui mt-6 inline-block text-sm font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            View All Industries
          </a>
        </Reveal>
      </div>
    </section>
  );
}
