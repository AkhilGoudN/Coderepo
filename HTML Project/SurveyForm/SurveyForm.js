function showPopup() {
    
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderElements = document.getElementsByName("gender");
    const gender = [...genderElements]
        .filter(element => element.checked)
        .map(element => element.value)
        .join(', ');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    
    document.getElementById("result-first-name").textContent = firstName;
    document.getElementById("result-last-name").textContent = lastName;
    document.getElementById("result-dob").textContent = dob;
    document.getElementById("result-country").textContent = country;
    document.getElementById("result-gender").textContent = gender;
    document.getElementById("result-profession").textContent = profession;
    document.getElementById("result-email").textContent = email;
    document.getElementById("result-mobile").textContent = mobile;

    
    document.getElementById("popup").style.display = "block";

    
    return false;
}

function closePopup() {
   
    document.getElementById("popup").style.display = "none";

    resetForm();
}

function resetForm() {
    document.getElementById("survey-form").reset();
}