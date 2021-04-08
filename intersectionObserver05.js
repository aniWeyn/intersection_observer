const sections = document.querySelectorAll("section");

const options = {
  root: null,
  treshold: 0,
  rootMargin: "-250px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("green");

    // UNOBSERVE
    observer.unobserve(entry.target);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
