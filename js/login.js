const handleLogin = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Clear previous error message
    document.getElementById("error").innerText = "";

    if (email && password) {
        fetch("http://127.0.0.1:8000/api/user/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
            .then((res) => {
                // Check if response status is OK
                if (!res.ok) {
                    throw new Error("Invalid login credentials.");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if (data) {
                    document.getElementById("error").innerText = "You are successfully logged in";
                    window.location.href = "index.html";
                } else {
                    document.getElementById("error").innerText = "Invalid login credentials.";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                document.getElementById("error").innerText = error.message || "An error occurred. Please try again.";
            });
    } else {
        document.getElementById("error").innerText = "Please enter both email and password.";
    }
};
