const noteForm = document.getElementById("noteForm");
const noteInput = document.getElementById("noteInput");
const searchInput = document.getElementById("searchInput");
const notesList = document.getElementById("notesList");
const message = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

// ADD NOTE

noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const noteText = noteInput.value.trim();

  if (noteText === "") {
    message.textContent = "Note cannot be empty.";
    message.style.color = "red";
    return;
  }

  notes.push(noteText);

  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  renderNotes(notes);
});

// RENDER NOTES

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredNotes = notes.filter(function (note) {
    return note.toLowerCase().includes(searchText);
  });

  renderNotes(filteredNotes);
});

// DISPLAY NOTES

function renderNotes(noteArray) {
  notesList.innerHTML = "";

  noteArray.forEach(function (note, index) {
    const li = document.createElement("li");
    li.innerText = note;
    notesList.appendChild(li);
  });
}

// CLEAR ALL

clearBtn.addEventListener("click", function () {
  notes = [];

  localStorage.removeItem("notes");

  renderNotes(notes);

  message.innerText = "All notes cleared";
  message.style.color = "red";
});

renderNotes(notes);
