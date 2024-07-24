/* eslint-disable */
export default function createReportObject(employeeList) {
    const allEmployees = {}

    for ( const [departmentName, employees] of Object.entries(employeeList)) {
        allEmployees[departmentName] = [...employees]
    }

    return {
        allEmployees,
        getNumberOfDepartments(){
            return Object.entries(employeeList).length;        }
    }
}