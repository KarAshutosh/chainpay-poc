const loginCreds = "chainPayTest"

const pwdIn = document.getElementById("passwordIn")
const userIn = document.getElementById("usernameIn")

const loginBtn = document.getElementById("login-btn")

const errorText = document.getElementById("login-error")

loginBtn.addEventListener("click", () => {

    console.log("Clicked")
    const pwdVal = pwdIn.value
    var userVal = userIn.value

    console.log(pwdVal)
    console.log(userVal)
    
    if(userVal == loginCreds && pwdVal == loginCreds)
    {
        console.log("success")
        window.location.href = "store.html"

    }
    else
    {
        console.log("failure")
        errorText.innerHTML = "Username or Password doesn't match"
    }

})

const clickerBtn = document.getElementById("click-btn")

