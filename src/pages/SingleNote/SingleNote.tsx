import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_NOTE_BY_ID } from "../../apollo/notes";
import { NoteCard } from "../../components/shared";
import { Note } from "../../types";

type QueryNote = {
  note: Note;
};

const SingleNote = () => {
  const { id } = useParams();

  const { data, error } = useQuery<QueryNote>(GET_NOTE_BY_ID, {
    variables: { noteId: id },
  });

  if (error || !data) {
    return <p>Error...</p>;
  } else return <NoteCard note={data?.note} />;
};

export default SingleNote;
