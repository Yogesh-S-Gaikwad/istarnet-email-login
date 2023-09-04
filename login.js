function handleButtonClick() {
    welcome_text.style.display = "flex";
    Welcome_to.style.fontSize = "1.2rem";
    Welcome_to.style.marginRight = "0.8rem";
    i_starnet.style.height = "2rem";
    i_starnet.classList.add("i_starnet_css");
    btn_get_otp.style.background = "#007bff";
    input_sec.style.height = "250px";
    input_sec.style.top = "15%";
    Terms.style.display = "none";
    login_page.style.height = "200px";
    your_compony_logo.style.marginTop = "1vh";
    your_compony_logo.style.marginBottom = "1vh";
}

mail.addEventListener("click", handleButtonClick);
password.addEventListener("click", handleButtonClick);