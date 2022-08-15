const $ = (selector) => {
    return document.querySelector(selector)
}

let background = $(".background")
let colorPicker = $(".picker")
let code = $("#code")
colorPicker.addEventListener("input", () => {
    background.style.backgroundColor = colorPicker.value
    code.innerText = colorPicker.value
})