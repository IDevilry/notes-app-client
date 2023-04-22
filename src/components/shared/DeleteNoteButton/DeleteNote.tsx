import { useMutation } from "@apollo/client";
import { DELETE_NOTE, NOTES } from "../../../apollo";
import Button from "../Button/Button";

type DeleteNoteProps = {
  id: string;
};

const DeleteNoteButton: React.FC<DeleteNoteProps> = ({ id }) => {
  if (!id) {
    throw new Error("ID not found");
  }
  const [deleteNote] = useMutation(DELETE_NOTE);
  const handleDeleteNote = (id: string) => {
    deleteNote({
      variables: { id },
      refetchQueries: [{ query: NOTES }],
    });
  };

  return (
    <Button
      type="button"
      variant="secondary"
      handleClick={() => handleDeleteNote(id)}
    >
      X
    </Button>
  );
};

export default DeleteNoteButton;
