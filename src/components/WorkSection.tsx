"use client";
import { ExpandableCardDemo } from "./ExpandableCardDemo";
import SectionHeading from "./SectionHeading";

export default function WorkSection() {
  const title = "Case Studies";
  const desc =
    "From front-end frameworks to backend systems and cloud deployment, these are the technologies I specialize in.";
  return (
    <div className="bg-white dark:bg-black">
      <SectionHeading title={title} description={desc} />
      <ExpandableCardDemo />
    </div>
  );
}
