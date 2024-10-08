/* eslint-disable */
import { uploadPhoto, createUser } from "./utils";
export default async function handleProfileSignup() {
    const photo = await uploadPhoto();
    const create = await createUser();

    return Promise.all([photo, create]).then((res) => {
        console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
        .catch(() => { console.log( new Error('Signup system offline')); });
}