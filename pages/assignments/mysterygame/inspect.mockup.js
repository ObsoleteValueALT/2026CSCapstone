const inspect_title = document.getElementById("inspect_title");
const inspect_description = document.getElementById("inspect_description");
const inspect_box = document.getElementById("inspect_box");
var init_title = inspect_title.textContent;
var init_description = inspect_title.textContent;

var inspecting = "none";

const opt1 = document.getElementById("choice1");
const opt2 = document.getElementById("choice2");
const opt3 = document.getElementById("choice3");
const opt4 = document.getElementById("choice4");

document.getElementById("sel1").addEventListener("mouseenter", function () {

    inspect_description.innerHTML = "A mysterious vent. If you had a <strong>certain tool</strong> you could open it.";
    inspect_title.innerHTML = "Air Vent";
    if (inspecting != sel1) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("sel1").addEventListener("mouseleave", function () {
    if (inspecting != sel1) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("sel1").addEventListener("click", function () {
    if (!inspect_box.classList.contains('inspect_box_inspecting')) {
        inspect_box.classList.add("inspect_box_inspecting"); 
    }
    init_title = inspect_title.innerHTML;
    init_description = inspect_description.innerHTML;
    inspect_box.style.backgroundColor = "lightgray";
    inspect_box.style.borderStyle = "ridge";
    opt1.value = "Open"
    opt1.title = "This Vent cannot be opened without proper tools."
    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;
    opt2.value = "Search"
    opt2.title = "This Vent must be opened to be searched."
    opt3.value = "   -   "
    opt4.value = "   -   "
    inspecting = sel1;
});

//
//
//

document.getElementById("sel2").addEventListener("mouseenter", function () {

    inspect_description.innerHTML = "An informational poster. Seems to be attached to the wall with some kind of adhesive implement.";
    inspect_title.innerHTML = "Poster";
    if (inspecting != sel2) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("sel2").addEventListener("mouseleave", function () {
    if (inspecting != sel2) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("sel2").addEventListener("click", function () {
    if (!inspect_box.classList.contains('inspect_box_inspecting')) {
        inspect_box.classList.add("inspect_box_inspecting");
        
        
    }
    init_title = inspect_title.innerHTML;
    init_description = inspect_description.innerHTML;
    inspect_box.style.backgroundColor = "lightgray";
    inspect_box.style.borderStyle = "ridge";

    opt1.value = "Inspect"
    opt1.title = "Inspect the Poster."
    opt1.disabled = false;
    opt2.disabled = false;
    opt2.value = "Remove"
    opt2.title = "Remove the Poster and add it to your Items."
    opt3.disabled = true;
    opt4.disabled = true;
    opt3.value = "   -   "
    opt4.value = "   -   "

    inspecting = sel2;
});

//
//
//

document.getElementById("sel3").addEventListener("mouseenter", function () {

    inspect_description.innerHTML = "A sliding door. As of now, you don't know where it leads.";
    inspect_title.innerHTML = "Door to <em>???</em>";
    if (inspecting != sel3) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("sel3").addEventListener("mouseleave", function () {
    if (inspecting != sel3) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("sel3").addEventListener("click", function () {
    if (!inspect_box.classList.contains('inspect_box_inspecting')) {
        inspect_box.classList.add("inspect_box_inspecting");
        
    }
    init_title = inspect_title.innerHTML;
    init_description = inspect_description.innerHTML;
    inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";

    opt1.value = "Enter"
    opt1.title = "Enter ???."
    opt1.disabled = false;
    opt2.disabled = true;
    opt2.value = "   -   "
    opt3.disabled = true;
    opt4.disabled = true;
    opt3.value = "   -   "
    opt4.value = "   -   "

    inspecting = sel3;
});

//
//
//

document.getElementById("sel4").addEventListener("mouseenter", function () {

    inspect_description.innerHTML = "Window leading to the outside. In theory, you could walk up to it and look outside.";
    inspect_title.innerHTML = "Window";
    if (inspecting != sel4) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("sel4").addEventListener("mouseleave", function () {
    if (inspecting != sel4) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("sel4").addEventListener("click", function () {
    if (!inspect_box.classList.contains('inspect_box_inspecting')) {
        inspect_box.classList.add("inspect_box_inspecting");
    }
    init_title = inspect_title.innerHTML;
    init_description = inspect_description.innerHTML;
    inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";

    opt1.value = "Inspect"
    opt1.title = "Look through the Window."
    opt1.disabled = false;
    opt2.disabled = true;
    opt2.value = "   -   "
    opt3.disabled = true;
    opt4.disabled = true;
    opt3.value = "   -   "
    opt4.value = "   -   "

    inspecting = sel4;
});