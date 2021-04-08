console.log("hello!");

const p1 = document.querySelector(".p1");

//CREATING OBSERVER
//const observer = new IntersectionObserver(callback, options);

//const observer = new IntersectionObserver(function(entries, observer){}, options);

const options = {};

/*const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
}, options);*/

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    //try as well console.log(entry.target);
    console.log(entry);
  });
}, options);

observer.observe(p1);
