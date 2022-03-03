import Link from "next/link";

const Component = ({ className, label, url, type = "primary", onClick }) => {
  if (!url)
    return (
      <button className={`${classes} ${type} heading-font`} onClick={onClick}>
        {label}
      </button>
    );

  return (
    <Link href={url} className={className}>
      <a className={className}>{label}</a>
    </Link>
  );
};

export default Component;
