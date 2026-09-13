import { Puzzle, Handshake, ShieldCheck, Code2, Smartphone, Cloud } from "lucide-react";
import Reveal from "./Reveal";

export const SOLUTIONS = [
  {
    id: "solution-managed-services",
    icon: Puzzle,
    title: "Managed Services",
    description:
      "Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.",
  },
  {
    id: "solution-it-consulting",
    icon: Handshake,
    title: "IT Consulting & Advisory",
    description:
      "The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth",
  },
  {
    id: "solution-cyber-security",
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.",
  },
  {
    id: "solution-web-development",
    icon: Code2,
    title: "Web Development",
    description:
      "Our web development services can help you establish an impactful online presence and reach your target audience effectively.",
  },
  {
    id: "solution-mobile-development",
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.",
  },
  {
    id: "solution-cloud-services",
    icon: Cloud,
    title: "Cloud Services",
    description:
      "With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-solutions-gradient relative scroll-mt-20 py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <Reveal>
          <span className="font-ui inline-block rounded-md border border-border bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            How We Do
          </span>
          <h2 className="font-heading mt-4 text-4xl font-bold leading-[1.2] text-navy sm:text-[3rem]">
            Solutions
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <Reveal key={solution.title} delay={(i % 3) * 100}>
              <div
                id={solution.id}
                className="card-shadow flex h-full scroll-mt-28 flex-col rounded-2xl bg-white"
              >
                <div className="flex-1 p-8">
                  <solution.icon size={40} strokeWidth={1.5} className="text-accent" />
                  <h3 className="font-heading mt-5 text-xl font-bold leading-[1.3] text-navy">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.4] text-muted">
                    {solution.description}
                  </p>
                </div>
                <div className="border-t border-border px-8 py-5">
                  <a
                    href="#contact"
                    className="font-ui text-sm font-semibold text-accent underline underline-offset-2 hover:text-accent-hover"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="btn-primary inline-flex items-center justify-center rounded-lg px-8 py-3.5"
          >
            View All Solutions
          </a>
        </Reveal>
      </div>
    </section>
  );
}
