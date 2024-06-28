const getValue = (id) => document.getElementById(id).value;

const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username");
    const first_name = getValue("first_name");
    const last_name = getValue("last_name");
    const email = getValue("email");
    const password = getValue("password");
    const confirm_password = getValue("confirm_password");
    const info = {
        username,
        first_name,
        last_name,
        email,
        password,
        confirm_password,
    };

    if (password === confirm_password) {
        document.getElementById("error").innerText = "";
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            console.log(info);

            fetch("http://127.0.0.1:8000/account/register/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => {
                    
                    alert("Sign Up Success Message");
                    window.location.href = "index.html";
                    
                })
                .catch((error) => {
                    console.error("Error:", error);
                    document.getElementById("error").innerText = "An error occurred. Please try again.";
                });
        } else {
            document.getElementById("error").innerText =
                "Password must contain at least eight characters, including one letter, one number, and one special character.";
        }
    } else {
        document.getElementById("error").innerText = "Password and confirm password do not match";
        alert("Password and confirm password do not match");
    }
};



