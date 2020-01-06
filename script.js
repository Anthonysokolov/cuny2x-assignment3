// Select section with id of container without using query selector
document.getElementById("container")

// Select section with id of container using query selector
document.querySelector("#container")

// Select all of the list items with a class of second
document.getElementsByClassName("second")

// Select a list item with a class of third, but only the list item inside of the ol tag
document.querySelector("ol").getElementsByClassName("third")

// Give the section with an id of container the text Hello
//document.getElementById("container").innerHTML = "Hello!"

// Add the class main to the div with a class of footer
var main = document.createElement("main")
document.querySelector(".footer").appendChild(main)

// Remove the class main on the div with a class of footer
document.querySelector(".footer").removeChild(main)

// Create a new li element
var newli = document.createElement("li")

// Give the li the text four
newli.innerHTML = "four"

// Append the li to the ul element
document.querySelector("ul").appendChild(newli)

// Loop over all the lis inside the ol tag and give them a background color of green
const liArr = Array.from(document.getElementsByTagName("ol"))
for(i = 0; i < liArr.length; i++){
  liArr[i].style.backgroundColor = "green"
}

// Remove the div with a class of footer
var footer = document.querySelector(".footer")
footer.parentNode.removeChild(footer)
