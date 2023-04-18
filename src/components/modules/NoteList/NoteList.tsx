import React from "react";
import { NoteCard } from "../../shared";
import { Notes } from "../../../types";
import { Link } from "react-router-dom";

type NoteListProps = {
  note?: Notes;
};

const NoteList = ({ note }: NoteListProps) => {
  return (
    <ul>
      {note?.notes?.map((note) => (
        <Link key={note.id} to={`/note/${note.id}`}>
          <NoteCard note={note} />
        </Link>
      ))}
    </ul>
  );
};

export default NoteList;
