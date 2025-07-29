function toggleNotesList(button) {
  // Get all note sections (Notes, PYQs, Sample Papers, etc.)
  const parentContainer = button.closest('.notes-container');
  const allLists = parentContainer.querySelectorAll('.notes-list');

  // Loop to close all notes lists in the same container
  allLists.forEach(list => {
    if (list !== button.nextElementSibling) {
      list.style.display = 'none';
    }
  });

  // Toggle only the clicked one
  const currentList = button.nextElementSibling;
  currentList.style.display = currentList.style.display === 'block' ? 'none' : 'block';
}



function toggleNotesList(button) {
  // Find the container (Notes, Sample Papers, PYQs, Experiments)
  const parentContainer = button.closest('.notes-container');
  const allCards = parentContainer.querySelectorAll('.note-card');

  allCards.forEach(card => {
    const list = card.querySelector('.notes-list');
    const btn = card.querySelector('.view-notes-btn');
    
    // Close all other lists
    if (list !== button.nextElementSibling) {
      list.style.display = 'none';
      btn.textContent = 'View Notes';
    }
  });

  // Toggle clicked card
  const currentList = button.nextElementSibling;
  if (currentList.style.display === 'block') {
    currentList.style.display = 'none';
    button.textContent = 'View Notes';
  } else {
    currentList.style.display = 'block';
    button.textContent = 'Hide Notes';
  }
}



function searchContent() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".note-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const items = card.querySelectorAll("li");
    let matchFound = false;

    // Check heading
    if (title.includes(input)) {
      matchFound = true;
    }

    // Check inside list items
    items.forEach(li => {
      if (li.innerText.toLowerCase().includes(input)) {
        matchFound = true;
      }
    });

    // Show/hide card based on match
    if (matchFound) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


function searchContent() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();

  if (input.includes("note")) {
    document.getElementById("all-notes").scrollIntoView({ behavior: "smooth" });
    return;
  } else if (input.includes("sample")) {
    document.getElementById("sample-papers").scrollIntoView({ behavior: "smooth" });
    return;
  } else if (input.includes("pyq") || input.includes("previous")) {
    document.getElementById("pyqs").scrollIntoView({ behavior: "smooth" });
    return;
  } else if (input.includes("experiment") || input.includes("cbse")) {
    document.getElementById("cbse").scrollIntoView({ behavior: "smooth" });
    return;
  }

  const cards = document.querySelectorAll(".note-card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    const items = card.querySelectorAll("li");
    let matchFound = false;

    if (title.includes(input)) matchFound = true;

    items.forEach(li => {
      if (li.innerText.toLowerCase().includes(input)) matchFound = true;
    });

    card.style.display = matchFound ? "block" : "none";
  });
}

// Trigger search on Enter key
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchContent();
  }
});

// Reset note cards when search input is cleared
document.getElementById("searchInput").addEventListener("input", function () {
  if (this.value === "") {
    document.querySelectorAll(".note-card").forEach(card => {
      card.style.display = "block";
    });
  }
});

document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchContent();
  }
});


 function toggleNotesList(button) {
  const notesList = button.nextElementSibling;
  notesList.style.display = notesList.style.display === 'none' ? 'block' : 'none';
}

function openPDF(pdfUrl) {
  document.getElementById('pdfModal').style.display = 'flex';
  document.getElementById('pdfFrame').src = pdfUrl;
  document.getElementById('downloadLink').href = pdfUrl;
}

function closePDF() {
  document.getElementById('pdfModal').style.display = 'none';
  document.getElementById('pdfFrame').src = '';
}



// dropdown

 
