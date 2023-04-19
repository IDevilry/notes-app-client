import React from "react";

import { useQuery } from "@apollo/client";
import { NOTES } from "../../apollo";
import { Notes } from "../../types";
import { NoteList } from "../../components/modules";

const Home: React.FC = () => {
  const { data, loading, error } = useQuery<Notes>(NOTES);

  return (
    <>
      {loading && <p>Загрузка...</p>}
      <NoteList note={data} />
    </>
  );
};

export default Home;
