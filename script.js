function updateTable() {
    const subjectSelect = document.getElementById("subjectSelect");
    const selectedSubject = subjectSelect.value;
    const table = document.querySelector("table tbody");

    // Clear existing rows except for the header row
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }

    // Populate the table with the selected subject
    const newRow = table.insertRow(1);
    const cell1 = newRow.insertCell(0);
    cell1.textContent = selectedSubject;

    // saang column mag x
    const columnIndices = {
      "Understanding The Self": 3,
      "Reading in Philippine History": 3,
      "The Contemporary World": 3,
      "Mathematics in the modern world": 9,
      "Basic Microeconomics": 3,
      "Physical Fitness and Gymnastics": 12,
      "National Service Training Program": 13,
      "OLLC Culture and Ethics 1": 3,
      "Operations Management": 10,
      "Environmental Management System": 3,
      "Art Appreciation": 3,
      "Science, Technology & Society": 3,
    "Ethics": 3,
      "Rhythmic Activities": 12,
      "Nat'l Service Training Program 2": 13,
      "OLLC Culture & Ethics 2": 3,
      "Purposive Communication": 2,
    "Great Books": 3, 
    "Philippine popular Culture": 3,
    "Rizal's Works and Writings": 5, 
    "Business Law ( Obligations and Contracts)": 7,
    "Income Taxation": 8,
    "Sining ng Komunikasyon": 2,
    "Individual Dual Sports and Games": 12,
    };

    for (let i = 1; i <= 15; i++) {
      const cell = newRow.insertCell(i);
      cell.contentEditable = "true";
      cell.textContent = columnIndices[selectedSubject] === i ? "X" : "";
    }
  
     // Set the units in the "UNITS" column based on the selected subject
  const unitsCell = newRow.cells[15]; // Units column
  unitsCell.textContent = calculateUnits(selectedSubject);
}

function calculateUnits(subject) {
  const unitsMap = {
    "Understanding The Self": 3,
    "Reading in Philippine History": 3,
    "The Contemporary World": 3,
    "Mathematics in the modern world": 3,
    "Basic Microeconomics": 3,
    "Physical Fitness and Gymnastics": 2, 
    "National Service Training Program": 3,
    "OLLC Culture and Ethics 1": 2,
    "Operations Management": 3,
    "Environmental Management System": 3,
    "Art Appreciation": 3,
    "Science, Technology & Society": 3,
    "Ethics": 3,
    "Rhythmic Activities": 2,
    "Nat'l Service Training Program 2": 3,
    "OLLC Culture & Ethics 2": 2,
    "Purposive Communication": 3,
    "Great Books": 3, 
    "Philippine popular Culture": 3,
    "Rizal's Works and Writings": 3, 
    "Business Law ( Obligations and Contracts)": 3,
    "Income Taxation": 3,
    "Sining ng Komunikasyon": 3,
    "Individual Dual Sports and Games": 2,


    // Add more sub tas units kung ilan
  };

  return unitsMap[subject] || "";
}


  function addSubject() {
    const subjectSelect = document.getElementById("subjectSelect");
    const selectedSubject = subjectSelect.value;
    const table = document.querySelector("table tbody");

    // new riw
    const newRow = table.insertRow(-1); // -1 inserts at the end
    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = `
  <select onchange="updateSubject(this)">
    <option value="Understanding The Self">Understanding The Self</option>
    <option value="Reading in Philippine History">Reading in Philippine History</option>
    <option value="The Contemporary World">The Contemporary World</option>
    <option value="Mathematics in the modern world">Mathematics in the modern world</option>
    <option value="Basic Microeconomics">Basic Microeconomics</option>
    <option value="Physical Fitness and Gymnastics">Physical Fitness and Gymnastics</option>
    <option value="National Service Training Program">National Service Training Program</option>
    <option value="OLLC Culture and Ethics 1">OLLC Culture and Ethics 1</option>
    <option value="Operations Management">Operations Management</option>
      <option value="Environmental Management System">Environmental Management System</option>
      <option value="Art Appreciation">Art Appreciation</option>
      <option value="Science, Technology & Society">Science, Technology & Society</option>
      <option value="Ethics">Ethics</option>
      <option value="Rhythmic Activities">Rhythmic Activities</option>
      <option value="Nat'l Service Training Program 2">Nat'l Service Training Program 2</option>
      <option value="OLLC Culture & Ethics 2">OLLC Culture & Ethics 2</option>
    <!-- Add more options as needed -->
  </select>
`;
    // subject sa dropdown
    cell1.querySelector("select").value = selectedSubject;

    // column ulit saan lagay x
    const columnIndices = {
      "Understanding The Self": 3,
      "Reading in Philippine History": 3,
      "The Contemporary World": 3,
      "Mathematics in the modern world": 9,
      "Basic Microeconomics": 3,
      "Physical Fitness and Gymnastics": 12,
      "National Service Training Program": 13,
      "OLLC Culture and Ethics 1": 3,
      "Operations Management": 10,
      "Environmental Management System": 3,
      "Art Appreciation": 3,
      "Science, Technology & Society": 3,
    "Ethics": 3,
      "Rhythmic Activities": 12,
      "Nat'l Service Training Program 2": 13,
      "OLLC Culture & Ethics 2": 3,
      "Purposive Communication": 2,
    "Great Books": 3, 
    "Philippine popular Culture": 3,
    "Rizal's Works and Writings": 5, 
    "Business Law ( Obligations and Contracts)": 7,
    "Income Taxation": 8,
    "Sining ng Komunikasyon": 2,
    "Individual Dual Sports and Games": 12,
    };

    // formula kay x
    for (let i = 1; i <= 15; i++) {
      const cell = newRow.insertCell(i);
      cell.contentEditable = "true";
      cell.textContent = columnIndices[selectedSubject] === i ? "X" : "";
    }

   // Set the units in the "UNITS" column based on the selected subject
   const unitsCell = newRow.cells[15]; // Units column
  unitsCell.textContent = calculateUnits(selectedSubject);
}

  function updateSubject(selectElement) {
    const selectedSubject = selectElement.value;
    const table = selectElement.closest("table");

    // Update the subject name in the same row
    const cell1 = selectElement.parentElement;
    cell1.textContent = selectedSubject;

     // Set the units in the "UNITS" column based on the selected subject
  const unitsCell = cell1.parentElement.cells[15]; // Units column
  unitsCell.textContent = calculateUnits(selectedSubject);
}


  function addSemester() {
    const semesterYearInput = document.getElementById("semesterYear");
    const semesterYear = semesterYearInput.value;

    if (semesterYear.trim() === "") {
      alert("Please enter a semester and year.");
      return;
    }

    // new sem
    const table = document.querySelector("table tbody");
    const newRow = table.insertRow(-1);
    const cell = newRow.insertCell(0);
    cell.colSpan = 16; // Span all columns
    cell.style.fontWeight = "500";
    cell.style.textAlign = "left";
    cell.style.paddingLeft = "16px";
    cell.style.textTransform = "uppercase";
    cell.textContent = semesterYear;

    // clear sem
    semesterYearInput.value = "";
  }