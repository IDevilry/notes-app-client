import { gql } from "@apollo/client";

export const NOTES = gql`
  query Notes {
    notes {
      id
      title
      content
      author {
        username
      }
      addedToFavoriteTimes
      createdAt
    }
  }
`;

export const NOTE_BY_ID = gql`
  query Note($noteId: ID) {
    note(id: $noteId) {
      id
      title
      content
      addedToFavoriteTimes
      createdAt
    }
  }
`;

export const NEW_NOTE = gql`
  mutation NewNote($content: String!, $title: String!, $category: String!) {
    newNote(content: $content, title: $title, category: $category) {
      id
      title
      content
      category
      createdAt
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($updateNoteId: ID!, $content: String!, $title: String!) {
    updateNote(id: $updateNoteId, content: $content, title: $title) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`;

export const TOGGLE_FAVORITE = gql`
  mutation ToggleFavoriteNote($id: ID!) {
    toggleFavoriteNote(id: $id) {
      id
      addedToFavoriteTimes
    }
  }
`;
