import { Outlet } from "react-router-dom";
import { Footer, Header } from "../modules";
import { useAuth } from "../../hooks";

const Layout: React.FC = () => {
  const { id } = useAuth();
  return (
    <div className="max-w-[1170px]">
      <div className="mx-[30px]">
        <Header id={id} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
