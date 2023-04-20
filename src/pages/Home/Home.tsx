import React from "react";

import { NoteList } from "../../components/modules";
import { Note } from "../../types";
import { ApolloError } from "@apollo/client";
import { Link } from "react-router-dom";

type HomeProps = {
  notes?: Note[];
  isLoading?: boolean;
  error?: ApolloError;
};

const Home: React.FC<HomeProps> = ({ notes, isLoading, error }) => {
  return (
    <>
      <Link to="new">Новая заметка</Link>
      {isLoading && <p>Загрузка...</p>}
      {error && <p>Произошла ошибка</p>}
      <NoteList note={notes} />
    </>
  );
};

export default Home;
