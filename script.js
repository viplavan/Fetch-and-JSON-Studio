// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);
            let bio = document.querySelector(".bio");
            bio.innerText = astronaut[0].
        });
    });
});
