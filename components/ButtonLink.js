import Link from "next/link"

export default function ButtonLink({children, link, styles}) {
    return (
        <Link href={link} className={`border-0  px-2 py-2 rounded-md ${styles}`}>{children}</Link>
    );
}