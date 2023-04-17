const goLogin = () => {
    // location.href = "login.html";
    window.open("login.html", "_blank");
};
const goJoin = () => {
    location.href = "join.html";
};
const portfolio = () => {
    const ele = document.getElementById("container");
    ele.style.display="block";
    ele.style.animation="fadeIn 1.8s ease-in-out";
    window.scrollTo(0, 800);
};