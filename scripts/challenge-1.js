// change skills name values :

// search with index
/*
let skillsList = document.querySelector(".skills__list");

let nthChild = skillsList.children.item(3);
let nthChildHeading = nthChild.querySelector(".skills__item_heading");
nthChildHeading.textContent = "Node.js";

let lastChild = skillsList.lastElementChild;
let lastChildHeading = lastChild.querySelector(".skills__item_heading");
lastChildHeading.textContent = "MongoDB";
*/

// search with skill name

function replaceSkillHeading(elementclass, currentSkill, newSkill) {
  let skillsList = document.querySelector(elementclass);

  let skillArray = Array.from(skillsList.children);
  let skillElement = skillArray.find((item) => {
    let itmeList = item.querySelector(".skills__item_heading");
    return itmeList.textContent == currentSkill;
  });

  let skillHeading = skillElement.querySelector(".skills__item_heading");
  skillHeading.textContent = newSkill;
}

replaceSkillHeading(".skills__list", "Command Line", "Node.js");
replaceSkillHeading(".skills__list", "Git/GitHub", "MongoDB");

function addElement(skill, years, targetElement) {
  let newSkill =
    '<li class="skills__item"><h3 class="skills__item_heading">' +
    skill +
    '</h3><p class="skills__item_paragraph">' +
    years +
    " years</p></li>";
  targetElement.insertAdjacentHTML("afterend", newSkill);
}

function addNthSkill(elementClass, currentSkill, newSkill, yearsExp) {
  let skillsList = document.querySelector(elementClass);

  let skillArray = Array.from(skillsList.children);
  let skillElement = skillArray.find((item) => {
    let itmeList = item.querySelector(".skills__item_heading");
    return itmeList.textContent == currentSkill;
  });

  addElement(newSkill, yearsExp, skillElement);
}

addNthSkill(".skills__list", "Wordpress", "Typescript", 2);

// remove download element

let rmBtn = document.querySelector(".bio__btn");
rmBtn.remove();

// change img's width

let img = document.querySelector(".bio__img");
img.style.width = "36rem";
// 160px = 36 rem
img.width = 160;

// under line bonus

function underLineToggle() {
  let nodeElement = document.querySelectorAll(".skills__item");
  nodeElement.forEach((element) => {
    element.addEventListener("click", function () {
      element.classList.toggle("under_line");
    });
  });
}

underLineToggle();
