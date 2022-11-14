/** @format */
var selectedRow = null
function onFormSubmit() {
  var formData = readFormData();
  if(selectedRow == null){
    insertNewRecord(formData);
  }
  else{
    updateFormData(formData);
  }
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["id"] = document.getElementById("id").value;
  formData["name"] = document.getElementById("name").value;
  formData["email"] = document.getElementById("email").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("stdList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;

  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>`
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;
}

function onEdit(td){
  selectedRow = td.parentElement.parentElement;
  document.getElementById('id').value = selectedRow.cells[0].innerHTML
  document.getElementById('name').value = selectedRow.cells[1].innerHTML
  document.getElementById('email').value = selectedRow.cells[2].innerHTML
}

function updateFormData(formData){
  selectedRow.cells[0].innerHTML = formData.id;
  selectedRow.cells[1].innerHTML = formData.name;
  selectedRow.cells[2].innerHTML = formData.email;
}

function onDelete(td){
  if(confirm("Are you sure to DELETE this record")){
    row = td.parentElement.parentElement;
    document.getElementById('stdList').deleteRow(row.rowIndex);
    resetForm();
  } 
}

function resetForm() {
  document.getElementById("id").value = "";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  selectedRow = null
}




