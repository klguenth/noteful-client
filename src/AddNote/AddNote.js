import React from 'react';

export default class AddNote extends React.Component {
    
    handleSubmit(event) {
        event.preventDefault();
        const noteName = event.target.name.value;
        const noteContent = event.target.noteContent.value;
        const noteFolder = event.target.noteFolder.value;
    }

    render() {
        return (
            <form className="addNote">
                <h2>Create Note</h2>
                <div className="noteTitle">
                    <div className="noteHint">* = Required Field</div>
                    <label htmlFor="name">Name*</label>
                    <input type="text" className="noteName" name="name" id="noteName" onSubmit={e => this.handleSubmit(e)}/>
                    <input type="text" className="noteContent" name="content" id="noteContent"/>
                    <input type="text" className="noteFolder" name="folder" id="noteFolder"/>
                </div>
                <div className="noteButton">
                    <button type="submit" className="noteSubmit">
                        Save
                    </button>
                </div>
            </form>
        )
    }
}