// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (astronauts) {
            console.log(astronauts);
            const count = document.getElementById("count");
            count.innerText = `${astronauts.length} Astronauts`;
            let astro = document.getElementById("container").innerHTML;
            for (person of astronauts) {
                astro += `<div class="astronaut">
            <div class="bio">
              <!-- List of astronauts will be added here dynamically -->
              <h3>${person.firstName} ${person.lastName}</h3>
              <ul>
                <li>Hours in space: ${person.hoursInSpace}</li>
                <li class="${person.active ? 'active' : ''}">Active: ${person.active}</li>
                <li>Skills: ${person.skills}</li>
              </ul>
            </div>
            <img class="avatar" src="${person.picture}"></img>
          </div>`;

            }
            container.innerHTML = astro;
        });
    });
});
