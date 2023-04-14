export interface formData {
  username: string;
  email: string;
  password: string;
}

export interface Note {
  notes: [
    {
      id?: string;
      title?: string;
      content?: string;
      createdAt?: string;
      updatedAt?: string;
      author?: string;
    }
  ];
}
