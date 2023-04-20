import { NavLink } from "../../shared";

type HeaderProps = {
  id: string | undefined;
};

const Header = ({ id }: HeaderProps) => {
  return (
    <header className="mx-auto bg-[#535354]">
      <nav className="flex items-center justify-center h-20 max-w-[1170px] mx-auto">
        <ul className="flex w-full justify-between font-medium text-[20px]">
          <li>
            <NavLink to={"/"}>Домашнаяя страница</NavLink>
          </li>
          {id && (
            <>
              <li>
                <NavLink to={`/profile/${id}`}>Профиль</NavLink>
              </li>{" "}
              <li>
                <NavLink to={`/favorites`}>Избранное</NavLink>
              </li>
            </>
          )}

          {id ? null : (
            <ul className="flex gap-3">
              <li>
                <NavLink to={"/reg"}>Регистрация</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Вход</NavLink>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
