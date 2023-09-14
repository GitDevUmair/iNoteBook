import React from "react";
import NoteContext from "../contexts/notes/noteContext";
import { useContext, useState } from "react";
const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { title, description } = props.note;
  const { note, updateNote, showAlert } = props;
  return (
    <div className="col-md-3">
      <div className="card my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            {" "}
            <h5 className="card-title">{title}</h5>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(props.note._id);
                showAlert("danger", "Deleted Successfully");
              }}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
          </div>

          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
