const getValue = (id) => document.getElementById(id)?.value || '';

const handleLogin = (event) => {
    event.preventDefault();
    const username = getValue("login-username");
    const password = getValue("login-password");
    console.log(username, password);
    if (username && password) {
        fetch("http://127.0.0.1:8000/account/login/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.token && data.user_id) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user_id", data.user_id);
                    window.location.href = "index.html";
                } else {
                    document.getElementById("error").innerText = "Invalid login credentials.";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                document.getElementById("error").innerText = "An error occurred. Please try again.";
            });
    } else {
        document.getElementById("error").innerText = "Please enter both username and password.";
    }
};
