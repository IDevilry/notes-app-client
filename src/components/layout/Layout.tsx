import { Outlet } from "react-router-dom";
import { Footer, Header } from "../modules";
import { useAuth } from "../../hooks";

const Layout: React.FC = () => {
  const { id } = useAuth();
  return (
    <div>
      <div>
        <Header id={id} />
        <main className="max-w-[1170px] mx-auto mt-[50px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
