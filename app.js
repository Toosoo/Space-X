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
  delay:1,
  repeatDelay: 5,
});
let posX = Math.floor(Math.random() * 200);
let posY = Math.floor(Math.random() * 200);
let body = document.querySelector("body")
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
  stagger:.08,
  yoyo: true,
  ease: "linear",
});

let planets = gsap.utils.toArray(".planet");
    planetDetails = document.querySelector(".planet-details");
    planetsContainer = document.querySelector(".planets-container");
    stars = gsap.utils.toArray(".star");
    blackhole = document.querySelector(".blackhole")
  
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
    if(planetDetails.children.length === 1) {
      changeText();
    } else {
        originalText()
    }

    gsap.utils.shuffle(stars)
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
    delay:.5,
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
    delay:.5,
    duration: 2,
    ease: "power1.inOut",
  });
}

// planetsContainer,planetDetails,".main",planets,

blackhole.addEventListener("click",()=>{
    let state2 = Flip.getState(body ,{props:"flexDirection"});
body.classList.toggle("row-design")
  
if(body.classList.contains("row-design")) {
    body.style = "flex-direction:row";
    // planetsContainer.style = " width: 8vw; height: 90%;flex-direction: column;";
    // document.querySelector(".main").style = " width: 90vw;"
}

else {
    body.style = "flex-direction:column";
    // planetsContainer.style = " width: 80vw;height: 10%;;flex-direction: row;";
    // document.querySelector(".main").style = " width: 98vw;";
}
Flip.from(state2, {
    duration: 1,
    ease: "power4.inOut",

    scale:true,
    nested: true
  });

})



