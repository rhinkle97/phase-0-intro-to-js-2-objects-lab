// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: undefined
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }
    employee.name = 'Sam';
});

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmployee = {...employee};
    updateEmployee['streetAddress'] = '11 Broadway';
    return updateEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['streetAddress'] = '12 Broadway';
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    newEmployee.name = undefined;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
};