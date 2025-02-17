function addNote() {
    const notesContainer = document.querySelector('.notes-container');
    const newNote = document.createElement('div');
    newNote.className = 'note';
    newNote.textContent = `Note ${notesContainer.childElementCount - 1}`;
    newNote.onclick = function() {
        alert(`You clicked on Note ${notesContainer.childElementCount - 2}`);
    };
    
    // Move the add-note button to the end
    const addNoteButton = notesContainer.querySelector('.add-note');
    notesContainer.insertBefore(newNote, addNoteButton);
}