import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center px-7 py-3 text-[0.7rem] uppercase tracking-widest transition-colors duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-bronze";

const variants = {
  solid: "bg-void text-cream hover:bg-iron",
  outline:
    "border border-bronze/50 text-void hover:border-bronze hover:bg-bronze/10",
};

export default function Button(props: ButtonProps) {
  const { children, variant = "solid", className } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} className={classes}>
      {children}
    </button>
  );
}
