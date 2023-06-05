// Write your solution in this file!
const employee = {}
const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newObj = Object.assign({}, employee, { [key]: value })
    return newObj
}
const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee
}
const deleteFromEmployeeByKey = (employee, key) => {
    const newObj = { ...employee };
    delete newObj[key];
    return newObj
}
const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}