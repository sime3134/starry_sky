let timer = 200;

const generateSmallStars = (count) => {
  let starsContainer = document.querySelector("main");
  for (let i = 0; i < count; i++) {
    let star = document.createElement("div");
    star.className = "small-star"; // Ensure this class has your base star styling
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let size = Math.random() * 3;
    let delay = Math.random() * 3 + 1; // Random delay between 0 to 2 seconds

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animation = `3s twinkle ${delay}s infinite`;
    star.className = "small-star";

    starsContainer.appendChild(star);
  }
};

const createFallingStar = () => {
  let starsContainer = document.querySelector("main");

  const fallingStar = document.createElement("div");
  fallingStar.classList.add("falling-star");

  //Randomize starting position
  const x = Math.random() * window.innerWidth;
  const y =
    Math.random() * (window.innerHeight * 0.9) + window.innerHeight * 0.1;

  //Randomize duration
  const duration = Math.random() * 1 + 0.8;

  fallingStar.style.left = `${x}px`;
  fallingStar.style.top = `${y}px`;

  fallingStar.style.animation = `falling-star ${duration}s linear forwards`;

  starsContainer.appendChild(fallingStar);

  //Remove the star from the DOM once it's done animating
  fallingStar.addEventListener("animationend", () => {
    fallingStar.remove();
  });
};

const animateFallingStar = () => {
  if (timer % 400 === 0) {
    createFallingStar();
    timer = 1;
  } else {
    timer++;
  }

  requestAnimationFrame(animateFallingStar);
};

document.addEventListener("DOMContentLoaded", () => {
  const numberOfStars = window.innerWidth / 6;
  generateSmallStars(numberOfStars);
  animateFallingStar();
});

document.addEventListener("resize", () => {
  const numberOfStars = window.innerWidth / 6;
  generateSmallStars(numberOfStars);
});

const toggleMenu = () => {
  let header = document.querySelector("header");
  header.style.display == "none" ? displayMenu(header) : closeMenu(header);
};

const displayMenu = (menuObj) => {
  menuObj.style.display = "block";
  menuObj.style.animation = "slideInFromLeft 1s ease forwards";
};

const closeMenu = (menuObj) => {
  menuObj.style.animation = "slideOutToLeft 1s ease forwards";
  setTimeout(() => {
    menuObj.style.display = "none";
  }, 1000);
};
