import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Note from '../Note/Note'
import CircleButton from '../CircleButton/CircleButton'
import './NoteListMain.css'
import { callbackify } from 'util';
import NotesContext from '../NotesContext';

function deleteNote() {
  fetch ({
    method: 'DELETE',
    headers: {

    }
  })
  .then (res => {
    if (!res.ok) {
      return res.json().then(error => {
        throw error
      })
    }
    return res.json()
  })
  .then(data => {
    callback()
  })
  .catch(error => {
    console.error(error)
  })
}


export default function NoteListMain(props) {
  return (
    <NotesContext.Consumer>
      {(context) => (
        <section className='NoteListMain'>
          <ul>
            {props.notes.map(note =>
              <li key={note.id}>
                <Note
                  id={note.id}
                  name={note.name}
                  modified={note.modified}
                />
              </li>
            )}
          </ul>
          <div className='NoteListMain__button-container'>
            <CircleButton
              tag={Link}
              to='/add-note'
              type='button'
              className='NoteListMain__add-note-button'
            >
              <FontAwesomeIcon icon='plus' />
              <br />
              Note
            </CircleButton>
          </div>
          <div className='NoteListMain_deleteButton'>
              <button 
                className='deleteButton'
                  onClick={() => {
                  deleteNote(
                    props.id,
                    context.deleteNote,
                  )
                  }}
                >
                  Delete
              </button>
          </div>
        </section>
      )}
    </NotesContext.Consumer>
  )
}

NoteListMain.defaultProps = {
  notes: [],
}
