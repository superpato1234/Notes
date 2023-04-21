
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "../../redux/notes/notesSlice";

const Notes = () => {
  const notes = useSelector((state: any) => state.notes.notes);
  const [note,setNote] = useState('');
  const dispatch = useDispatch();

  return (
    <>
    <h2 className='text-amber-300 text-6xl font-Roboto font-extralight'>Notes</h2>
      <div className="flex flex-col w-80">
        <div className="flex">
          <input
          className="min-w-full px-2 py-2 bg-slate-600 rounded text-slate-400 outline-none focus:border-2" 
          value={note} 
          onChange={(event)=>{setNote(event.target.value)}}
          placeholder="do homework, do anything ..."></input>
          <button 
          className="bg-slate-600 rounded text-slate-400 text-2xl font-extralight min-w-[8rem] max-w-md"
          onClick={() => dispatch(addNote(note as never))}>
            add note
          </button>
        </div>
        <button
        className="bg-slate-600 rounded text-slate-400 text-2xl font-extralight min-w-[8rem] max-w-md"
        onClick={() => dispatch(deleteNote())}>remove last note</button>
      </div>
      {notes.length > 0 &&
        notes.map((note, index) => {
          return (
            <div key={index} className="bg-sky-500 w-full px-8 py-2 my-1">
              <p className="font-normal text-white">{note.title}</p>
            </div>
          );
        })}
    </>
  );
};

export default Notes;