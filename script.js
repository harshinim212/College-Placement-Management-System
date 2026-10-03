
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    document.getElementById("message").textContent =
        "Demo login form submitted for " + role + ": " + email;

    return false;
}

function registerStudent(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const email = document.getElementById("studentEmail").value;
    const branch = document.getElementById("branch").value;
    const cgpa = document.getElementById("cgpa").value;

    document.getElementById("registerMessage").textContent =
        "Demo registration completed for " + name +
        " (" + roll + "), " + branch + ", CGPA: " + cgpa +
        ". No data has been saved to a database.";

    return false;
}