/* eslint-disable */
export default function hasValuesFromArray(myset, myarray) {
    let status = true;
    myarray.map((x) => {
        if(!myset.has(x)) {
            status = false;
        }
    })
    return status;
}