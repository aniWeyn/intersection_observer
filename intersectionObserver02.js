const p1 = document.querySelector(".p1");

const options = {
  root: null, // the view port
  treshold: 0, //between 0 and 1, default 0, when at 0 - as soon as any part arrives there it will be fired
  rootMargin: "-150px", //like margin on viewport, px or %
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
}, options);

observer.observe(p1);
