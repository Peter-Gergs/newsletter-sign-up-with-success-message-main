const form = document.querySelector(".sign-up-form .text form");
const input = document.querySelector(
  ".sign-up-form .text form input[type='email']"
);
const errorSpan = document.querySelector(".sign-up-form .text form .error ");
const validation = /\w+@\w+\.\w+/;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.match(validation) === null) {
    console.log("peter");
    input.style.cssText = `background-color: #ffe8e6;border-color:#d37470;`;
    errorSpan.style.display = "block";
  } else {
    document.querySelector(".sign-up-form").classList.add("hide");
    document
      .querySelector(".success-message  p span")
      .appendChild(document.createTextNode(input.value));
    setTimeout(() => {
      document.querySelector(".sign-up-form").remove();
      document.querySelector(".success-message").classList.add('active');
    }, 320);
  }
});
