import { NavLink } from "../../shared";

type HeaderProps = {
  id: string | undefined;
};

const Header = ({ id }: HeaderProps) => {
  return (
    <header className="mx-auto">
      <nav className="flex items-center justify-center h-20">
        <ul className="flex gap-6">
          <li className="font-medium text-[20px]">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {id && (
            <>
              <li className="font-medium text-[20px]">
                <NavLink to={`/profile/${id}`}>Profile</NavLink>
              </li>{" "}
              <li className="font-medium text-[20px]">
                <NavLink to={`/favorites`}>Favorites</NavLink>
              </li>
            </>
          )}

          {id ? null : (
            <>
              <li className="font-medium text-[20px]">
                <NavLink to={"/reg"}>Sign Up</NavLink>
              </li>
              <li className="font-medium text-[20px]">
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
