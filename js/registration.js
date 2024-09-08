const getValue = (id) => document.getElementById(id).value;

const handleRegistration = async (event) => {
    event.preventDefault();

    const name = getValue("username");
    const email = getValue("email");
    const password = getValue("password");
    const password2 = getValue("confirm_password");

    const info = {
        name,
        email,
        password,
        password2,
    };

    // Clear error message before validation
    const errorElement = document.getElementById("error");
    errorElement.innerText = "";

    // Validate passwords match
    if (password !== password2) {
        errorElement.innerText = "Password and confirm password do not match";
        return;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        errorElement.innerText =
            "Password must contain at least eight characters, including one letter, one number, and one special character.";
        return;
    }

    try {
        // Disable submit button to avoid multiple submissions
        const submitButton = document.querySelector(".submit-btn");
        submitButton.disabled = true;

        const response = await fetch("http://127.0.0.1:8000/api/user/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info),
        });

        const data = await response.json();
                console.log(data);

        // Handle success response
        if (response.ok) {
            alert("Sign Up Success");
            window.location.href = "index.html";
        } else {
            // Show error message if response is not ok
            errorElement.innerText = data.message || "An error occurred. Please try again.";
        }
    } catch (error) {
        console.error("Error:", error);
        errorElement.innerText = "An error occurred. Please try again.";
        console.log(info);
    } finally {
        // Re-enable the submit button
        const submitButton = document.querySelector(".submit-btn");
        submitButton.disabled = false;
    }
};
