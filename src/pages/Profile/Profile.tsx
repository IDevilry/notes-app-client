import React from "react";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { USER_BY_ID } from "../../apollo/users";
import { User } from "../../types";
import { NoteList } from "../../components/modules";

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
    </div>
  );
};

export default Profile;
