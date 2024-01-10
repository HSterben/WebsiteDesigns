// const enhance = id => {
//     const element = document.getElementById(id),
//         text = element.innerText.split("");

//     element.innerText = "";

//     text.forEach(letter => {
//         const span = document.createElement("span");

//         span.className = "letter";

//         span.innerText = letter;

//         element.appendChild(span);
//     });
// }

const enhance = cName => {
    let elements = Array.from(document.getElementsByClassName(cName));

        elements.forEach(element => {
            text = element.innerText.split("");
            element.innerText = "";

            text.forEach(letter => {
                let span = document.createElement("span");

                span.className = "letter";

                span.innerText = letter;

                element.appendChild(span);
            });
        });
}

enhance("explode");