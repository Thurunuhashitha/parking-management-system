function validation(values) {
    alert("Validation function called");
    const error = {}; 
    const mobile_pattern = /^[0-9]{10}$/; // Pattern for a 10-digit mobile number
    const date_pattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/; // Pattern for datetime-local input
    
    if (values.place === "") {
        error.place = "Place should not be empty";
    }
    else {
        error.place = "";
    }
    if (values.vehicleType === "") {
        error.vehicleType = "Vehicle type should not be empty";
    }
    else {
        error.vehicleType = "";
    }
    if (values.name === "") {
        error.name = "Name should not be empty";
    } 
     
    else{
        error.name = "";
    }

    if (values.mobile === "") {
        error.mobile = "Mobile number should not be empty";
    } 
    else if (!mobile_pattern.test(values.mobile)) {
        error.mobile = "Mobile number must be 10 digits long";
    } 
    else{
        error.mobile = "";
    }
    if (values.entryDateTime === "") {
        error.entryDateTime = "Entry date and time should not be empty";
    }
    else if (!date_pattern.test(values.entryDateTime)) {
        error.entryDateTime = "Entry date and time must be in the format YYYY-MM-DDTHH:MM";
    }
    else {
        error.entryDateTime = "";
    }
    if (values.exitDateTime === "") {
        error.exitDateTime = "Exit date and time should not be empty";
    }
    else if (!date_pattern.test(values.exitDateTime)) {
        error.exitDateTime = "Exit date and time must be in the format YYYY-MM-DDTHH:MM";
    }
    else {
        error.exitDateTime = "";
    }
    return error;
   
} 
export default validation;