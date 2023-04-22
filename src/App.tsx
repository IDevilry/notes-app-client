import { Routes, Route } from "react-router-dom";
import {
  Favorites,
  Home,
  NotFound,
  SingleNote,
  Profile,
  SignIn,
  SignUp,
  EditProfile,
  NewNote,
} from "./pages";
import { Layout } from "./components/layout/Layout";
import { RequireAuth } from "./providers/requireAuth";
import { useQuery } from "@apollo/client";
import { Notes } from "./types";
import { NOTES } from "./apollo";

const App: React.FC = () => {
  const { data: notes, loading, error } = useQuery<Notes>(NOTES);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home
              notes={notes?.notes || []}
              isLoading={loading}
              error={error}
            />
          }
        />
        <Route path="new" element={<NewNote />} />
        <Route
          path="profile/:id/*"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        >
          <Route path="edit" element={<EditProfile />} />
        </Route>

        <Route
          path="favorites"
          element={
            <RequireAuth>
              <Favorites/>
            </RequireAuth>
          }
        />

        <Route
          path="note/:id/*"
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
