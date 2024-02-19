/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived

const infoPersonal = {
    name: "Nick Howard",
    photo: "/week2/images/IMG_1606.jpg",
    favoriteFoods: ["Chicken", "Potato", "Cheese", "Bread", "Brisket"],
    hobbies: ["Disc golf", "Shopping", "Running", "Biking", "Video games"],
}

infoPersonal.placesLived = [
    {
        place: "Rexburg, Id",
        length: "2 years"
    },
    {
        place: "Sumter, SC",
        length: "16 years"
    },
    {
        place: "Decator, IL",
        length: "7 years"
    },
    {
        place: "Provo, UT",
        length: "2 months"
    }
]


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").textContent = infoPersonal.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("src", infoPersonal.photo)

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute("alt", infoPersonal.photo)


// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
infoPersonal.favoriteFoods.forEach((food) => {
    let favoriteFoodElememnt = document.createElement("li")
    favoriteFoodElememnt.textContent = food

    document.querySelector("#favorite-foods").appendChild(favoriteFoodElememnt)
})

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
infoPersonal.favoriteFoods.forEach((hobby) => {
    let hobbyElement = document.createElement("li")
    hobbyElement.textContent = hobby

    document.querySelector("#hobbies").appendChild(hobbyElement)
})

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
infoPersonal.placesLived.forEach((location) => {
    let locationName = document.createElement("dt")
    locationName.textContent = location.place

    let locationTime = document.createElement("dd")
    locationTime.textContent = location.length

    document.querySelector("#places-lived").appendChild(locationName)
    document.querySelector("#hobbies").appendChild(locatoinTime)
})

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
