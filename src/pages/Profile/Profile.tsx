import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { USER_BY_ID } from "../../apollo/users";
import { User } from "../../types";
import { NoteCard } from "../../components/shared";

const Profile: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<{ userById: User }>(USER_BY_ID, {
    variables: {
      id: id,
    },
  });
  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {error && <p>Произошла ошибка</p>}
      {data?.userById?.username}
      {data?.userById?.createdAt}
      {data?.userById.notes?.map((note) => (
        <NoteCard key={data.userById.id} note={note} />
      ))}
      {data?.userById.notes?.map((note) => (
        <NoteCard key={data.userById.id} note={note} />
      ))}
    </div>
  );
};

export default Profile;
