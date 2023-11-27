import React from "react";
import { NoteItem } from "./NoteItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Content = () => {
  let items = useSelector((state) => state.items);
  let filteredNotes = items;
  const searchText = useSelector((state) => state.searchText);
  if (searchText && searchText !== "") {
    filteredNotes = filteredNotes.filter((note) =>
      note.note.toLowerCase().include.searchText.toLowerCase()
    );
  } else {
    filteredNotes = items;
  }
  return (
    <div>
      <NoteItem items={filteredNotes} focuc={items.length > 0} />
    </div>
  );
};
