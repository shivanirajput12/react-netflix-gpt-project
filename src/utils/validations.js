export const checkValidData = (email, password, name) => {

    const isEmaiValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);

    const isNameValid = /^[a-zA-Z\\s]+$/.test(name);

    if (!isEmaiValid) return "Email Id is not valid!";
    if (!isPasswordValid) return "Password is not valid!";
    if (!isNameValid) return "Name is not valid!"
    return null;

}