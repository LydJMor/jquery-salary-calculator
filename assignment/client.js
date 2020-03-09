$(document).ready(onReady);

function onReady(){
console.log('test')
$('#btn-add').on('click', handleClick);
appendEmployees();
// $('.tableInput').on('click', '#terminate', removeEmployee);
$('.tableBody').on('click', 'td', removeEmployee)
calculateWages()

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
    const $tr = $('.tableBody')

    $tr.empty();

    for (const employee of employees){
        
        let $td = $(`<tr><td>${employee.first}</td>` + `<td>${employee.last}</td>` + `<td>${employee.id}</td>` + `<td>${employee.title}</td>` + `<td>${employee.salary}</td><td id="tableTerminate"><button class="terminate">terminate</button></td></tr>` )
       
        $tr.append($td)
        
    }
}//should append employees to DOM.
addEmployee('Ben', 'Sisko', 1234, 'Captain', 20000);
addEmployee('Jake', 'Sisko', 1234, 'Journalist', 13200);
addEmployee('Kira', 'Nerys', 1234, 'XO', 15000);
addEmployee('Jadzia', 'Dax', 1234, 'CSO', 22000);

console.log(employees)



function removeEmployee(event){

    console.log(`in click handler`, `.tableInput`);

    $('td').remove();

}//should delete one, deletes all

function calculateWages(){
    let totalWages = 0
    for (let i = 0; i < employees.length; i++){
        let employee = employees[i];
        let salary = employee.salary;
        totalWages += salary;
        console.log('Total Wages:', totalWages);
        
    }
    $('.wages').append('<h3>Total Wages: $' + totalWages + '</h3>')
}//calculates total wages of all employees


