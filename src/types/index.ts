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
}

export interface Notes {
  notes?: Note[];
}
