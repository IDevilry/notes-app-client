import React from "react";
import { User } from "../../../types";

type UserCardProps = {
  user?: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return <div>{user?.username}</div>;
};

export default UserCard;
