const main = document.querySelector("#main");
const addNoteButton = document.getElementById("addNote");
addNoteButton.addEventListener('click', () => addNote());

function addNote(text = "") {
//     <!-- <div class="note">
//     <div class="tool">
//         <span class="material-icons"> save </span>
//         <span class="material-icons"> delete </span>
//     </div>
//     <textarea></textarea>
// </div> -->   

    const div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `
        <div class="tool">
            <span class="save material-icons"> save </span>
            <span class="trash material-icons"> delete </span>
        </div>
        <textarea>${text}</textarea>
    `;

    div.querySelector(".save").addEventListener('click', saveNote);

    div.querySelector(".trash").addEventListener('click', () => { 
        div.remove(); 
        saveNote();
    });

    div.querySelector("textarea").addEventListener('focusout', saveNote)
    main.appendChild(div);
    saveNote();
}

function saveNote() {
    const textarea = document.querySelectorAll(".note textarea");
    const data = [];

    textarea.forEach((note) => data.push(note.value));

    if(data.length === 0) localStorage.removeItem("notes");
    else localStorage.setItem("notes", JSON.stringify(data));
}

(
    () => {
        const lsnNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnNotes === null) addNote();
        else lsnNotes.forEach((lsNote) => { addNote(lsNote) });
    }
)()