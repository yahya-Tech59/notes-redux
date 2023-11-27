import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/NoteSlice";
import { nanoid } from "nanoid";
import { ColorButton } from "./ColorButton";

export const NoteInput = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("red");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addNewNote = () => {
    if (text === "") {
      alert("Enter Something");
      return;
    }

    const note = items.filter((item) => item.note === text);
    if (note.length > 0) {
      alert("This Note Exists in the store");
      return;
    }
    dispatch(addNote({ id: nanoid(5), note: text, bgColor }));
  };
  return (
    <div className="textarea-box">
      <textarea
        className="textarea-input"
        placeholder="Enter your note here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="textarea-inner-container">
        <ColorButton setBgColor={setBgColor} bgColor={bgColor} />
        <button onClick={addNewNote} className="btn-add">
          Add
        </button>
      </div>
    </div>
  );
};
