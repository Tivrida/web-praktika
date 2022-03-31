
const submit = document.querySelector("#bu");
submit.addEventListener('click', e => {
    const log = document.querySelector("#log");
    const pass = document.querySelector("#pass");

    // Если корректно введены логин и пароль
    if (log.value && pass.value.length >= 10)
        document.location.replace("https://soundcloud.com/thomasmr4z/sangria-feat-markul");

    else {

        if (!log.value) {

            alert("Введите логин");
           log.style.outline = "2px solid";
            log.style.outlineColor = 'red';
        }

        if (!pass.value) {
            alert("Введите пароль");
            pass.style.outline = "2px solid";
            pass.style.outlineColor = 'red';
        }

        else if (pass.value.length < 8){
            alert("Длина пароля должна быть больше девяти");
            pass.style.outline = "2px solid";
            pass.style.outlineColor = '#red';
        }
    }
})

