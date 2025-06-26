import { genSalt, hash } from 'bcryptjs';

async function saltAndHashPassword(password) {
    try {
        // Generate a salt
        const salt = await genSalt(10);

        // Hash the password with the salt
        const hashedPassword = await hash(password, salt);

        return hashedPassword;
    } catch (error) {
        // Handle any errors that occur during the hashing process
        console.error('Error salting and hashing password:', error);
        throw error;
    }
}
export default saltAndHashPassword;