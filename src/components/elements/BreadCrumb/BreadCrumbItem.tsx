import Link from "next/link";

export default function BreadcrumbItem({
  href,
  children,
  isLast = false,
}: {
  href: string;
  children: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <li>
      {isLast ? (
        <p>{children}</p>
      ) : (
        <>
          <Link href={href}>{children}</Link>
          <span>&nbsp;/&nbsp;</span>
        </>
      )}
    </li>
  );
}
