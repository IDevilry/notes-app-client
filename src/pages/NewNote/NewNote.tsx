import React, { useState } from "react";
import { Button, Form, Input } from "../../components/shared";
import { useMutation } from "@apollo/client";
import { NEW_NOTE, NOTES, USER_FAVORITE_NOTES } from "../../apollo";
import { Category } from "../../types";

type FormData = {
  title: string;
  content: string;
  category: string;
};

const NewNote: React.FC = () => {
  const [submitNewNote] = useMutation(NEW_NOTE, {
    refetchQueries: [
      {
        query: NOTES,
      },
      {
        query: USER_FAVORITE_NOTES,
      },
    ],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    submitNewNote({
      variables: {
        ...formData,
      },
    });
  };
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
    category: "",
  });
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
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
      <select onChange={handleChangeSelect}>
        <option value="JS">JS</option>
        <option value="React">React</option>
      </select>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default NewNote;
