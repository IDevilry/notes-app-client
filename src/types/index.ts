export interface formData {
  username?: string;
  email: string;
  password: string;
}

export interface User {
  id?: string;
  username?: string;
  favoritesNotes?: Note[];
  notes?: Note[];
  createdAt?: string;
}

export interface Users {
  users: User[];
}

export interface Note {
  id?: string;
  title?: string;
  content?: string;
  createdAt?: Date;
  updatedAt?: Date;
  favoritedBy?: User;
  author?: User;
  addedToFavoriteTimes?: number;
  category?: Category;
}

export interface Notes {
  notes?: Note[];
}

export type Category =
  | "Web Technologies"
  | "Web API"
  | "HTML"
  | "CSS"
  | "JS"
  | "TS"
  | "React"
  | "Redux"
  | "Testing"
  | "Node JS";
