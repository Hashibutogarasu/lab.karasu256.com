import Link from "next/link";

export function PrimaryLinkButton({ href, children, ...props }: { href: string, children: React.ReactNode | undefined }) {
  return <Link href={href} target="_blank">
    <div className="bg-primary text-white p-2 rounded-md cursor-pointer" {...props}>
      {children}
    </div>
  </Link>
}

export function SecondaryLinkButton({ href, children, ...props }: { href: string, children: React.ReactNode | undefined }) {
  return <Link href={href} target="_blank">
    <div className="bg-secondary text-white p-2 rounded-md cursor-pointer" {...props}>
      {children}
    </div>
  </Link>
}