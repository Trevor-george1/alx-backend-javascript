/* eslint-disable */
export default function getStudentsByLocation (ListStudents, city) {
    const studentbylocation = ListStudents.filter(item => item.location === city);

    return studentbylocation;
}