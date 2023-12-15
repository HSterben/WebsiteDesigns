document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.getElementById("customCursor");
    const imageTag = customCursor.querySelector("img");
    const button1 = document.getElementById("button1");

    document.addEventListener("mousemove", (e) => {
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });

    button1.addEventListener("mouseenter", () => {
        imageTag.src = "pointer.png";
    });

    button1.addEventListener("mouseleave", () => {
        imageTag.src = "default.png";
    });
});