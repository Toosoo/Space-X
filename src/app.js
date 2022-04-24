gsap.registerPlugin(Flip, TextPlugin);

gsap.from(".m-1", {
  y: "-50%",
  x: "110vw",
  duration: 1,
  repeat: -1,
  repeatDelay: 6,
});
gsap.from(".m-2", {
  y: "-50%",
  x: "110vw",
  duration: 1,
  repeat: -1,
  delay: 1,
  repeatDelay: 5,
});
let body = document.querySelector("body");
for (let i = 0; i < 50; i++) {
  let star = document.createElement("span");
  star.setAttribute("class", "star");
  let posX = Math.floor(Math.random() * 90) + "%";
  let posY = Math.floor(Math.random() * 90) + "%";
  star.style = `top:${posX};left:${posY}`;
  body.append(star);
}

gsap.to(".star", {
  opacity: 0.1,
  duration: 0.7,
  repeat: -1,
  yoyo: true,
  ease: "linear",
});

let planets = gsap.utils.toArray(".planet");
let planetDetails = document.querySelector(".planet-details");
let planetsContainer = document.querySelector(".planets-container");
let stars = gsap.utils.toArray(".star");
let layout = document.querySelector(".layout");
let dynamic = gsap.utils.toArray(".main , .planet , .planets-container");

planets.forEach((planet) => {
  planet.addEventListener("click", (e) => {
    let state = Flip.getState(".planet");

    if (planet.parentNode === planetsContainer && planetDetails.children.length === 0) {
      planetDetails.appendChild(planet);
    } else if (planet.parentNode === planetsContainer && planetDetails.children.length === 1) {
      let activePlanet = document.querySelector(" .planet-details .planet");
      planetsContainer.appendChild(activePlanet);
      planetDetails.appendChild(planet);
    } else if (planet.parentNode === planetDetails) {
      planetsContainer.appendChild(planet);
    }
    Flip.from(state, {
      duration: 1,
      ease: "power4.inOut",
      absolute: true,
      scale: true,
    });
    if (planetDetails.children.length === 1) {
      changeText();
    } else {
      originalText();
    }

    gsap.utils.shuffle(stars);
  });
});

function changeText() {
  let activePlanetName = document.querySelector(" .planet-details .planet").attributes.name.value;
  let aboutPlanet = document.querySelector(" .planet-details .planet").attributes.details.value;
  gsap.to(".title", {
    text: {
      value: activePlanetName,
    },
    duration: 2,
    ease: "power1.inOut",
  });
  gsap.to(".details", {
    text: {
      value: aboutPlanet,
    },
    delay: 0.5,
    duration: 2,
    ease: "power1.inOut",
  });
}

function originalText() {
  gsap.to(".title", {
    text: {
      value: "Space X",
    },
    duration: 2,
    ease: "power1.inOut",
  });
  gsap.to(".details", {
    text: {
      value: "Click on any planet",
    },
    delay: 0.5,
    duration: 2,
    ease: "power1.inOut",
  });
}

layout.addEventListener("click", () => {
  let state2 = Flip.getState(dynamic);

  body.classList.toggle("row-design");

  Flip.from(state2, {
    duration: 1,
    absolute: true,
    ease: "power4.inOut",
    nested: true,
  });
});
