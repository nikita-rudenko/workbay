export type Note = {
  _id: string;
  title: string;
  body: string;
};

export type NotesList = Note[];

export type NotesState = {
  isLoading: boolean;
  notesList: NotesList;
  error: string | null;
};
