document.getElementById("tableForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const startCol = parseInt(document.getElementById("startCol").value);
  const endCol = parseInt(document.getElementById("endCol").value);
  const startRow = parseInt(document.getElementById("startRow").value);
  const endRow = parseInt(document.getElementById("endRow").value);
  const errorMsg = document.getElementById("errorMsg");
  const table = document.getElementById("multTable");

  errorMsg.textContent = "";
  table.innerHTML = "";

  if (
    isNaN(startCol) || isNaN(endCol) ||
    isNaN(startRow) || isNaN(endRow) ||
    startCol < -50 || endCol > 50 ||
    startRow < -50 || endRow > 50 ||
    startCol > endCol || startRow > endRow
  ) {
    errorMsg.textContent = "Invalid input: Use numbers between -50 and 50, and make sure start values are less than or equal to end values.";
    return;
  }

  const headerRow = document.createElement("tr");
  headerRow.appendChild(document.createElement("th")); // top-left cell

  for (let col = startCol; col <= endCol; col++) {
    const th = document.createElement("th");
    th.textContent = col;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  for (let row = startRow; row <= endRow; row++) {
    const tr = document.createElement("tr");
    const rowHeader = document.createElement("th");
    rowHeader.textContent = row;
    tr.appendChild(rowHeader);

    for (let col = startCol; col <= endCol; col++) {
      const td = document.createElement("td");
      td.textContent = row * col;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
});
