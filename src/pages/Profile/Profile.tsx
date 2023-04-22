import React from "react";

import { useQuery } from "@apollo/client";

import { USER_BY_ID } from "../../apollo/users";
import { User } from "../../types";
import { UserCard } from "../../components/modules";
import { Link, Outlet, useParams } from "react-router-dom";

const Profile: React.FC = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery<{ profile: User }>(USER_BY_ID, {
    variables: {
      id: id,
    },
  });
  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {error && <p>Произошла ошибка</p>}
      <UserCard user={data?.profile} />
      <Link to="edit">Edit</Link>
      <Outlet />
    </div>
  );
};

export default Profile;
