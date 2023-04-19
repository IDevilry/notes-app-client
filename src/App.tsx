import { Routes, Route } from "react-router-dom";
import {
  Favorites,
  Home,
  NotFound,
  SingleNote,
  Profile,
  SignIn,
  SignUp,
} from "./pages";
import { Layout } from "./components/layout/Layout";
import { RequireAuth } from "./providers/requireAuth";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route
          path="profile/:id"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path="favorites/:id"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />

        <Route
          path="note/:id"
          element={
            <RequireAuth>
              <SingleNote />
            </RequireAuth>
          }
        />

        <Route path="reg" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
