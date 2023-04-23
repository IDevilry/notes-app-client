import { useMutation } from "@apollo/client";
import { DELETE_NOTE, NOTES } from "../../../apollo";
import { ButtonHTMLAttributes } from "react";

import Button from "../Button/Button";

type DeleteNoteProps = {
  id: string;
  otherProps?: ButtonHTMLAttributes<HTMLButtonElement>;
};

const DeleteNoteButton: React.FC<DeleteNoteProps> = ({ id, ...otherProps }) => {
  if (!id) {
    throw new Error("ID not found");
  }

  const getNotes = () => ({
    query: NOTES,
  });

  const [deleteNote] = useMutation(DELETE_NOTE, {
    refetchQueries: [getNotes()],
  });
  
  const handleDeleteNote = (id: string) => {
    deleteNote({
      variables: { id },
    });
  };

  return (
    <Button
      type="button"
      variant="secondary"
      handleClick={() => handleDeleteNote(id)}
      {...otherProps}
    >
      X
    </Button>
  );
};

export default DeleteNoteButton;
