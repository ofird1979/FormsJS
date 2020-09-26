function validate() {
    const myForm = document.getElementById("MyForm");
    const firstName = myForm.firstName.value;
    const lastName = myForm.lastName.value;
    const email = myForm.email.value;
    const phone = myForm.phone.value;
    alert(firstName + "|" + lastName + "|" + email + "|" + phone);


    myForm.firstName.style.backgroundColor = "";
    myForm.lastName.style.backgroundColor = "";
    myForm.email.style.backgroundColor = "";
    myForm.phone.style.backgroundColor = "";


    if (myForm.firstName.value === "") {
        myForm.firstName.style.backgroundColor = "Pink";
        myForm.firstName.focus();
        alert("First ame required");
        event.preventDefault();
        return;
    }
    if (myForm.lastName.value === "") {
        myForm.lastName.style.backgroundColor = "Pink";
        myForm.lastName.focus();
        alert("Last name required");
        event.preventDefault();
        return;
    }
    if (myForm.email.value === "") {
        myForm.email.style.backgroundColor = "Pink";
        myForm.email.focus();
        alert("Email required");
        event.preventDefault();
        return;
    }
    if (form.phone.value === "") {
        form.phone.style.backgroundColor = "Pink";
        form.phone.focus();
        alert("Phone required");
        event.preventDefault();
        return;
    }




}

function getQueryString() {
    const queryStr = window.location.search;
    // console.log(queryStr.split("&"));

    const urlParams = new URLSearchParams(queryStr);
    document.getElementById("firstName").innerHTML = urlParams.get('firstName');
    document.getElementById("lastName").innerHTML = urlParams.get('lastName');
    document.getElementById("email").innerHTML = urlParams.get('email');
    document.getElementById("phone").innerHTML = urlParams.get('phone');
}