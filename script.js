const codeInput= document.querySelectorAll("input");
const button = document.querySelector("button");
window.addEventListener("load", () => codeInput[0].focus());

codeInput.forEach((input) => {
    input.addEventListener("input", () => {
        const oldInput= input;
        const newInput = input.nextElementSibling;
        if (oldInput.value.length > 1 && oldInput.value.length==2){
            oldInput.value="";
        }
        if (newInput !== null && newInput.hasAttribute ("disabled") && oldInput.value !== " "){
            newInput.removeAttribute("disabled");
            newInput.focus();	
        }
        if (!codeInput[3].disabled && codeInput[3].value !== "") {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }     
});

input.addEventListener("keyup", (e) => {
    if (e.key === "Backspace"){
        if (input.previousElementSibling !== null) {
            e.target.value="";
            e.target.setAttribute("disabled", true);
            input.previousElementSibling.focus();
        }
    }
})
});