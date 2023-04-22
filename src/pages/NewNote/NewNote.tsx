import React, { useState } from "react";

import { Button, Form, Input } from "../../components/shared";
import { useMutation } from "@apollo/client";
import { NEW_NOTE, NOTES } from "../../apollo";

type newNote = {
  title: string;
  content: string;
  category: string;
};

const categories = [
  "Web Technologies",
  "Web API",
  "HTML",
  "CSS",
  "JS",
  "TS",
  "React",
  "Redux",
  "Testing",
  "Node JS",
];

const NewNote: React.FC = () => {
  const [newNoteData, setNewNote] = useState<newNote>({
    title: "",
    content: "",
    category: categories[0],
  });

  const getNotes = () => ({
    query: NOTES,
  });

  const [submitNewNote] = useMutation(NEW_NOTE, {
    refetchQueries: [getNotes()],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitNewNote({
      variables: {
        ...newNoteData,
      },
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setNewNote({
      ...newNoteData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Form handleSubmit={handleSubmit}>
      <Input onChange={handleChange} htmlForName="title" type="text">
        Title
      </Input>
      <Input onChange={handleChange} htmlForName="content" type="text">
        Content
      </Input>
      <select name="category" onChange={handleChange}>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default NewNote;
