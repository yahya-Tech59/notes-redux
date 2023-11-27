import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./NoteSlice";

export default configureStore({
  reducer: notesReducer,
});
