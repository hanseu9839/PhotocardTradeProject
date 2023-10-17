import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkProps) => {
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath);
  console.log(as);

  const onMenu = "p-2 m-2 text-md text-red-500";
  const offMenu = "p-2 m-2 text-md text-black-500";

  return (
    <Link href={href} as={as} passHref legacyBehavior>
      <a
        className={`${
          encodeURIComponent(asPath) === encodeURIComponent(as)
            ? ` ${onMenu}`
            : `${offMenu} `
        }`}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
