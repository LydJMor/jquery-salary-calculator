$(document).ready(onReady);

function onReady(){
console.log('test')
$('#btn-add').on('click', handleClick);
appendEmployees();
}

const employees = []

function handleClick( event ) {
    console.log('in handleClick');
    event.preventDefault();

    const first = $('#in-first').val();
    const last = $('#in-last').val();
    const id = $('#in-id').val();
    const title = $('#in-title').val();
    const salary = $('#in-salary').val();
    console.log('Got inputs', first, last, id, title, salary);

    $('#in-first').val('');
    $('#in-last').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-salary').val('');

    

    addEmployee(first, last, id, title, salary);
    appendEmployees();

    

    console.log(employees);
}//sumbit button pushes input into array

function addEmployee(first, last, id, title, salary){
    console.log('in addEmployee');
    const employee = {first, last, id, title, salary}
    console.log('New employee is', employee);
    employees.push(employee)
} //pushes into array

function appendEmployees(){
    const $tr = $('#tableInput')
    // const $tableFirst = $('#tableFirst');
    // const $tableLast = $('#tableLast');
    // const $tableID = $('#tableID');
    // const $tableTitle = $('#tableTitle');
    // const $tableSalary = $('#tableSalary');

    $tr.empty();

    for (const employee of employees){
        let $td = $(`<td>${employee.first}</td>` + `<td>${employee.last}</td>` + `<td>${employee.id}</td>` + `<td>${employee.title}</td>` + `<td>${employee.salary}</td>` )
       
        $tr.append($td)
        
    }
}//should append employees to DOM, debugging.
addEmployee('Ben', 'Sisko', 1234, 'Captain', 20000);
// appendEmployees()
console.log(employees)