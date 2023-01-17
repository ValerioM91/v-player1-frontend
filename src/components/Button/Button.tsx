import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

export type Props = {
  className?: string;
  label?: string;
  url?: string;
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "transparent";
  type?: "button" | "submit" | "reset";
  onClick?: (any: any) => any;
  children?: React.ReactNode;
};

const Component = ({ className, label, url, onClick, type, children }: Props) => {
  if (!url)
    return (
      <button className={className} onClick={onClick} type={type}>
        {label || children}
      </button>
    );

  return (
    <Link href={url} scroll={false}>
      <a className={className}>{label}</a>
    </Link>
  );
};

export default Component;
