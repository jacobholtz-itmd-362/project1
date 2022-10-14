function checkForm() {
    var email = document.forms["email_form"]["email"].value
    var firstName = document.forms["email_form"]["first_name"].value
    var lastName = document.forms["email_form"]["last_name"].value
    if ((!firstName) || (!lastName) || (!email)) {
        alert("Please complete all the necessary fields!");
        return false;
    }
    else {
        alert("You have successfully registered for our mailing list!")
    }
}