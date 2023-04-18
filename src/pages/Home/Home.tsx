import React from "react";

import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../../apollo";
import { Notes } from "../../types";
import { NoteList } from "../../components/modules";

const Home: React.FC = () => {
  
  const { data, loading, error } = useQuery<Notes>(GET_NOTES);

  return (
    <>
      {loading && <p>Загрузка...</p>}
      <NoteList note={data} />
    </>
  );
};

export default Home;
