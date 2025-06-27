function validation(values) {
    alert("Validation function called");
    const error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 
    
    if (values.email === "") {
        error.email = "Name should not be empty";
    } 
    else if (!email_pattern.test(values.email)) {
        error.email = "Email Does not match the pattern";
    } 
    else{
        error.email = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } 
    else if (!password_pattern.test(values.password)) {
        error.password = "Password must be at least 8 characters long and contain at least one letter and one number";
    } 
    else {
        error.password = "";
    }
    return error;
   
} 
export default validation;