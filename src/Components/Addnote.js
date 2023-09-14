import React from "react";
import NoteContext from "../contexts/notes/noteContext";
import { useContext, useState } from "react";
const Addnote = (props) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const { showAlert } = props;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    showAlert("success", "New Note Added"); // fix typo here
  };
  return (
    <div className="container" style={{ marginTop: "60px" }}>
      <h2 className="my-2">Add a note</h2>
      <form className="my-2">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            placeholder="Enter a minimum of 5 letter title"
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            onChange={onChange}
            value={note.title}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            placeholder="Enter a minimum of 5 letter description"
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
           placeholder="Enter a minimum of 3 letter tag"
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={
            note.title.length < 5 ||
            note.description.length < 5 ||
            note.tag.length < 3
          }
        >
          Add note
        </button>
      </form>
    </div>
  );
};

export default Addnote;
