"use client";
import { ExpandableCardDemo } from "./ExpandableCardDemo";
import SectionHeading from "./SectionHeading";

export default function WorkSection() {
  const title = "My Work";
  const desc =
    "From front-end frameworks to backend systems and cloud deployment, these are the technologies I specialize in.";
  return (
    <div>
      <SectionHeading title={title} description={desc} />
      <ExpandableCardDemo />
    </div>
  );
}
