// courses.js

//if the curly braces are on the right side of the = then you are making an object
//objects are similar to dictionaries in python
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ]
};

// aCourse["name"]; //not the perfered way
// aCourse.name //use this to call objects, but if your name in the object with quotes, you must use the []

// aCourse.sections[0].sectionNum

function setName(course){
    const courseNameElement = document.querySelector('#couseName')
    const courseCodeElement = document.querySelector('#courseCode')
    courseNameElement.textContent = course.name
    courseCodeElement.textContent = course.code


    // className = aCourse.name
    // classCode = aCourse.code
    // document.getElementById("#courseName").textContent = className
    // document.getElementById("#courseCode").textContent = classCode
}

function sectionTemplate(section){
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
}

function setSection(sections){
    const html = sections.map(sectionTemplate)
    document.querySelector("#sections").innerHTML = html.join('')
}
setSection(aCourse.sections)
setName(aCourse)

