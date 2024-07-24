/* eslint-disable */
export default function createEmployeesObject(departmentName, employees) {

    const my_object = {
    [departmentName] : [...employees]
    }

    return my_object
}