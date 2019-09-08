import React from 'react';

function NewFolder() {
    fetch({
        method: 'POST',
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
      });
    }

export default class AddFolder {
    
    handleSubmit(event) {
        event.preventDefault();
        const folderName = event.target.name.value;
        console.log('Name: ', name);
    }

    render() {
        return (
            <form className="folderAdd" onSubmit={e => this.handleSubmit(e)}>
                <h2>Folder Name</h2>
                <div className="formInput">
                    <input type="text" className="folderName" name="name" id="name"/>
                </div>
                <div className="formSubmit">
                    <button type="submit" className="buttonSubmit">
                        Create Folder
                    </button>
                </div>
            </form>
        )
    }
}