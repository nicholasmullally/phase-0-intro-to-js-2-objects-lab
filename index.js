// Write your solution in this file!
const employee = {name1: "Nick", name2: "Sam"};

function updateEmployeeWithKeyAndValue(employee, key, value) {
   const employeeCopy = {...employee}
   employeeCopy[key] = value
   return employeeCopy
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value
    return employee 
}
const obj = {}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name2
    return employee
}