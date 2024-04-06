const headers = document.querySelectorAll(".faq-header")

headers.forEach(header => {
    let hidden = true
    header.addEventListener("click", () => {
        if(hidden) {
            headers.forEach(head => {
                head.nextSibling.nextSibling.classList.add("hidden")
                head.children[1].innerHTML = "&#10011;"
            })
            header.nextSibling.nextSibling.classList.remove("hidden")
            header.children[1].innerHTML = "&#10005;"
            hidden = false
        } else {
            header.nextSibling.nextSibling.classList.add("hidden")
            header.children[1].innerHTML = "&#10011;"
            hidden = true
        }
    })
})

const inputOnFocus = (ev) =>{
    inputTouched[ev.name] = true;
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validatePhone = email => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
}
