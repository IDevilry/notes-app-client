import React from "react";

import { useQuery } from "@apollo/client";
import { GET_NOTES } from "../../apollo";
import { Notes } from "../../types";

const Home: React.FC = () => {
  
  const { data, loading, error } = useQuery<Notes>(GET_NOTES);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.notes?.map((note) => (
        <ul key={note.id}>
          <li>{note.author?.username}</li>
          <li>{note.content}</li>
          <li>{note.title}</li>
          <li>{note.createdAt}</li>
        </ul>
      ))}
    </div>
  );
};

export default Home;
