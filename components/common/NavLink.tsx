import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps {
  href: string;
  as: string;
  children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkProps) => {
  const router = useRouter();
  const groupId = router.query.groupId;

  const { asPath } = router;

  const onMenu = "p-2 m-2 text-xl text-red-500";
  const offMenu = "p-2 m-2 text-xl text-black-500";

  return (
    <Link href={href} as={as} passHref legacyBehavior>
      {groupId ? (
        <a
          className={`${
            encodeURIComponent(asPath) === encodeURIComponent(as)
              ? "p-2 m-2 text-xl text-green-500"
              : `${offMenu} `
          }`}>
          {children}
        </a>
      ) : (
        <a
          className={`${
            encodeURIComponent(asPath) === encodeURIComponent(as)
              ? ` ${onMenu}`
              : `${offMenu} `
          }`}>
          {children}
        </a>
      )}
    </Link>
  );
};

export default NavLink;
