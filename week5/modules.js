//modules
// es modules are the efficient way to use them

//refactoring is when you go back and revisit your code in order to improve it

//modules.js
import aCourse from "./course.mjs";

aCourse.init()

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);