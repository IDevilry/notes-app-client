import { Outlet } from "react-router-dom";
import { Footer, Header } from "../modules";

const Layout: React.FC = () => {
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="mx-[30px]">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
