const id_check = () => {
    const id = document.getElementById("login-id");
    const idResult = document.getElementById("id-result");
    if(id.value.length == 0) {
        idResult.innerHTML = "필수 입력입니다"
        idResult.style.color = "red";
        return false;
    } else {
        idResult.innerHTML = "";
        return true;
    }
}
const password_check = () => {
    const password = document.getElementById("login-password");
    const passwordResult = document.getElementById("password-result");
    if(password.value.length == 0) {
        passwordResult.innerHTML = "필수 입력입니다"
        passwordResult.style.color = "red";
        return false;
    } else {
        passwordResult.innerHTML = "";
        return true;
    }
}
const login_check = () => {
    // email, password 중 하나라도 입력되지 않았으면 submit을 하지 않고
    // 입력자히 않은 항목에 focus를 줌
    const id = document.getElementById("login-id");
    const password = document.getElementById("login-password");
    if (id_check() && password_check()) {
        return true;
    } else {
        if (!id_check()) {
            // email 입력에 focus
            id.focus();
            return false;
        } else if (!password_check()) {
            password.focus();
            return false;
        }
    }
}