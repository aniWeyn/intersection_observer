const sections = document.querySelectorAll("section");

const options = {
  root: null,
  treshold: 0,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target, entry);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// will display on is isIntersecting true and false
