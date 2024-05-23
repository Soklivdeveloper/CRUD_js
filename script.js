function errValid() {
    let check = true;
    let fullName = document.getElementById('fullName').value;
    if (fullName == '') {
        document.getElementById('Validation').classList.remove('hide');
        check = false;
    }
    else{
        document.getElementById('Validation').classList.add('hide');
        check = true;
    }
    return check;
}
function insertTable(){
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let salary = document.getElementById('salary').value;
    let city = document.getElementById('city').value;

    let tbody = document.getElementById('tbody');
    let tr = tbody.insertRow(0);

        let td0 = tr.insertCell(0);
        let td1 = tr.insertCell(1);
        let td2 = tr.insertCell(2);
        let td3 = tr.insertCell(3);   
        let td4 = tr.insertCell(4);

        td0.innerHTML = fullName;
        td1.innerHTML = email;
        td2.innerHTML = salary;
        td3.innerHTML = city;
        td4.innerHTML = `<a onclick="editValue(this)">Edit</a> <a onclick="deleteItem(this)">Detete</a>`;      
}
function clearValue(){
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('city').value = '';
}
function deleteItem(tr){
    let row = tr.parentElement.parentElement;
    row.remove();
    // row.parentElement.removeChild(row);
}

selectedRow = null;
function editValue(tr){
    let selectedRow = tr.parentElement.parentElement;


    document.getElementById('fullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('salary').value = selectedRow.cells[2].innerHTML;
    document.getElementById('city').value = selectedRow.cells[3].innerHTML;

}
function updateValue(){
    selectedRow.cells[0].innerHTML = document.getElementById('fullName').value;
    selectedRow.cells[1].innerHTML = document.getElementById('email').value;
    selectedRow.cells[2].innerHTML = document.getElementById('salary').value;
    selectedRow.cells[3].innerHTML = document.getElementById('city').value;

    selectedRow = null;
}
function btnCreate(){
    if(errValid()){
        if(selectedRow == null){
            insertTable();
        }
        else{
            updateValue();
        }
        clearValue();
    }
}

