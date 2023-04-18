import { ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

type NavLinkProps = {
  children: ReactNode | string;
  to: string;
};

const NavLink = ({ children, to, ...props }: NavLinkProps) => {
  const match = useMatch({
    path: to,
    end: to.length === 1
  });
  return (
    <Link className={match ? "text-sky-600" : ""} to={to} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
