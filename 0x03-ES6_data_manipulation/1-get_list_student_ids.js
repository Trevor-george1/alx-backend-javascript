/* eslint-disable */
export default function getListStudentIds (myarray) {
    if (!Array.isArray(myarray)) {
        return [];
    }
    
    const ids = myarray.map(item => item.id);

    return ids;
}