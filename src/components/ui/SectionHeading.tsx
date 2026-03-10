import { clsx } from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export default function SectionHeading({ children, className, as: Tag = "h2" }: Props) {
  return (
    <Tag className={clsx("section-heading", className)}>
      {children}
    </Tag>
  );
}
