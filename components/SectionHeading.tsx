import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, lead, align = "left", className = "" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className="eyebrow mb-5">{eyebrow}</p>
      <h2 className="h-section">{title}</h2>
      {lead && <p className={`mt-6 text-lg leading-relaxed text-muted text-pretty ${center ? "mx-auto" : ""} max-w-2xl`}>{lead}</p>}
    </Reveal>
  );
}
