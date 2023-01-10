//STEP 1 - choose element to observe
//here I'm looking through HTML documents to find all "section" elements) 
const sections = document.querySelectorAll("section");
// "const section" is a variable, variable is like a backpack in which we are keeping things that we want to use later

//other ways to search through HTML document for elements which we want to animate: 
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName


/****** INTERSECTION OBSERVER  ******/
//STEP 2 - declare options
//if you keep {} empty you will work with default settings of intersection observer 
const options = {};

//STEP 3 - tell Intersection Observer what should it do with HTML element

const observer = new IntersectionObserver(function (entries, observer) {
  //below line means: look for elements entries, and for each entry do behaviour from {}:
  entries.forEach((entry) => {
    //below condtion means: if it is not true that entry is intersecting then stop running this function 
    if (!entry.isIntersecting) {
      return;
    }

//STEP 4 - tell intersection observer how to behave
//in below example to element which is entering the view we add a class "green" if this class is not there, 
//if this class is already there then we will remove it 
    entry.target.classList.toggle("green");
    //https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    //https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
    ///https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
    //https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace
  });
}, options);

//STEP 5 - adding observer to HTML element
//for each section from variable "const sections" add observer
sections.forEach((section) => {
  observer.observe(section);
});

