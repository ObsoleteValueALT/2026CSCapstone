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

ResetOptions();

var sel1Status;
var sel2Status;
var sel3Status;
var sel4Status;

var health = 100;
var lastDamageSource;

var items = ["cheese","flat_soda"]

function ResetOptions() {
    opt1.value = "   -   "
    opt2.value = "   -   "
    opt3.value = "   -   "
    opt4.value = "   -   "
    opt1.disabled = true;
    opt2.disabled = true;
    opt3.disabled = true;
    opt4.disabled = true;
}

function ModifyHealth(add, source) {
    health += add;
    document.getElementById("health").innerHTML = "HP: "+ health + " / 100 "
    lastDamageSource = source;

    if (health < 1) {
        Death()
    }
}

function Death() {
    ResetOptions();

    document.getElementById("foreground_inspect").hidden = false;
    document.getElementById("background_image").style.filter = 'blur(4px)';
    document.getElementById("sel1").hidden = true;
    document.getElementById("sel2").hidden = true;
    document.getElementById("sel3").hidden = true;
    document.getElementById("sel4").hidden = true;

    document.getElementById("foreground_inspect").src = "../../../images/placeholder/placeholder_room_dead.png";

    if (lastDamageSource = "brick_wall") {
        inspect_description.innerHTML = "<em>Fruitlessly kicking a brick wall.</em>";
    }
    else {
        inspect_description.innerHTML = "<em>Unknown.</em>";
    }
    inspect_title.innerHTML = "<strong>Cause of Death:</strong>";
}

function SetItem(slot,src,desc,title) {
    var item = document.getElementById("item"+slot)
    item.src = src;
}

SetItem(1,"../../../images/placeholder/placeholder_item_cheese.png")

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
    if (sel2Status == "inspected") {
        inspect_description.innerHTML = "An informational poster. You recall it reads \"This poster is very important because it details extremely vital content necessary for everyone to understand clearly.\"";
        inspect_title.innerHTML = "Poster";
    }
    else {
        inspect_description.innerHTML = "An informational poster. Seems to be attached to the wall with some kind of adhesive implement.";
        inspect_title.innerHTML = "Poster";
    }
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
    opt2.title = "Remove the Poster from the wall."
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
    if (sel3Status == "inspected") {
        inspect_description.innerHTML = "A sliding door, the other side of which is blocked by a well-masoned brick wall which conveniently prevents you from entering another room.";
        inspect_title.innerHTML = "Door to <em>Brick Wall</em>";
    }
    else {
        inspect_description.innerHTML = "A sliding door. As of now, you don't know where it leads.";
        inspect_title.innerHTML = "Door to <em>???</em>";
    }
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

    if (sel3Status == "inspected") {
        opt1.value = "Kick"
        opt1.title = "Fruitlessly kick the brick wall."
    }
    else {
        opt1.value = "Enter"
        opt1.title = "Enter ???."
    }
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

//
//
//

document.getElementById("item1").addEventListener("mouseenter", function () {
    inspect_description.innerHTML = "Large cylinder of goat's cheese with a slice taken out of it.";
    inspect_title.innerHTML = "Wheel of Cheese";
    if (inspecting != item1) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("item1").addEventListener("mouseleave", function () {
    if (inspecting != item1) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("item1").addEventListener("click", function () {
    if (!inspect_box.classList.contains('inspect_box_inspecting')) {
        inspect_box.classList.add("inspect_box_inspecting");
    }
    init_title = inspect_title.innerHTML;
    init_description = inspect_description.innerHTML;
    inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";

    ResetOptions();

    inspecting = item1;
});

//
//
//

document.getElementById("item2").addEventListener("mouseenter", function () {

    inspect_description.innerHTML = "An opened can of brand-name soft drink, slightly flattened.";
    inspect_title.innerHTML = "Can of Soda";
    if (inspecting != item2) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("item2").addEventListener("mouseleave", function () {
    if (inspecting != item2) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("item2").addEventListener("click", function () {
    if (!inspect_box.classList.contains('inspect_box_inspecting')) {
        inspect_box.classList.add("inspect_box_inspecting");
    }
    init_title = inspect_title.innerHTML;
    init_description = inspect_description.innerHTML;
    inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";

    ResetOptions();

    inspecting = "item2";
});


//
//
//

document.getElementById("item3").addEventListener("mouseenter", function () {

    if (items.at(2) == "poster") {
        inspect_description.innerHTML = "A poster you removed from the wall. For some reason.";
        inspect_title.innerHTML = "Poster";
    }
    if (inspecting != item3) {
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
    }
});
document.getElementById("item3").addEventListener("mouseleave", function () {
    if (inspecting != item3) {
        inspect_description.innerHTML = init_description;
        inspect_title.innerHTML = init_title;
    }
    if (inspecting != "none") {
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";
    }
});
document.getElementById("item3").addEventListener("click", function () {
    if (items.at(2) != null) {
        if (!inspect_box.classList.contains('inspect_box_inspecting')) {
            inspect_box.classList.add("inspect_box_inspecting");
        }
        init_title = inspect_title.innerHTML;
        init_description = inspect_description.innerHTML;
        inspect_box.style.backgroundColor = "lightgray";
        inspect_box.style.borderStyle = "ridge";

        ResetOptions();

        opt1.value = "Inspect"
        opt1.title = "Inspect the Poster."
        opt1.disabled = false;

        inspecting = item3;
    }
});


// 
/*

// ------------- //

*/
//

opt1.addEventListener("click", function () {
    if (inspecting == sel2 || inspecting == item3) {
        document.getElementById("foreground_inspect").hidden = false;
        document.getElementById("background_image").style.filter = 'blur(4px)';
        document.getElementById("sel1").hidden = true;
        document.getElementById("sel2").hidden = true;
        document.getElementById("sel3").hidden = true;
        document.getElementById("sel4").hidden = true;
        ResetOptions()

        inspect_description.innerHTML = "On closer inspection, it reads \"This poster is very important because it details extremely vital content necessary for everyone to understand clearly.\"";
        inspect_title.innerHTML = "Poster";

        sel2Status = "inspected";

        opt1.disabled = false;
        opt1.value = "Uninspect";
        opt1.title = "Continue searching."
        inspecting = "poster";
    }
    else if (inspecting == "poster") {
        document.getElementById("foreground_inspect").hidden = true;
        document.getElementById("background_image").style.filter = 'blur(0px)';
        document.getElementById("sel1").hidden = false;
        document.getElementById("sel2").hidden = false;
        document.getElementById("sel3").hidden = false;
        document.getElementById("sel4").hidden = false;
        
        opt1.value = "Inspect"
        opt1.title = "Inspect the Poster."
        opt1.disabled = false;
        
        if (items.at(2) != "poster") {
            opt2.disabled = false;
            opt2.value = "Remove"
            opt2.title = "Remove the Poster and add it to your Items."
        }
        opt3.disabled = true;
        opt4.disabled = true;
        opt3.value = "   -   "
        opt4.value = "   -   "

        inspecting = "none";
    }
    else if (inspecting == sel3) {
        if (sel3Status != "inspected") {
            sel3Status = "inspected";

            document.getElementById("background_select_3").src = "../../../images/placeholder/placeholder_room_door_open.png"
            if (sel2Status == "removed") {
                document.getElementById("background_image").src = "../../../images/placeholder/placeholder_room_poster_removed_open.png"
            }
            else {
                document.getElementById("background_image").src = "../../../images/placeholder/placeholder_room_open.png"
            }


            inspect_description.innerHTML = "A sliding door, the other side of which is blocked by a well-masoned brick wall which conveniently prevents you from entering another room.";
            inspect_title.innerHTML = "Door to <em>Brick Wall</em>";

            init_title = inspect_title.innerHTML;
            init_description = inspect_description.innerHTML;

            opt1.value = "Kick"
            opt1.title = "Kick the wall."
        }
        else {
            inspect_description.innerHTML = "Kicking the brick wall reduced your <strong>Health</strong> by <em>10</em> Points.";
            inspect_title.innerHTML = "<em>Brick Wall</em>";
            init_title = inspect_title.innerHTML;
            init_description = inspect_description.innerHTML;
            ModifyHealth(-10, "brick_wall");
        }

    }
    else if (inspecting == sel4) {
        inspect_description.innerHTML = "It's a beautiful day outside. Why are you inside. Why are you here.";
        inspect_title.innerHTML = "Window to <em>Outside</em>";
        init_title = inspect_title.innerHTML;
        init_description = inspect_description.innerHTML;
    }
    else if (inspecting == item2) {
        opt1.disabled = false;
        opt1.value = "Drink";
        opt1.title = "Consume the delicious soda."
    }
});

opt2.addEventListener("click", function () {
    if (inspecting == sel2) {
        sel2Status = "removed";
        document.getElementById("background_select_2").src = "../../../images/placeholder/placeholder_room_poster_ripped.png"
        if (sel3Status == "inspected") {
            document.getElementById("background_image").src = "../../../images/placeholder/placeholder_room_poster_removed_open.png"
        }
        else {
            document.getElementById("background_image").src = "../../../images/placeholder/placeholder_room_poster_removed.png"
        }
        document.getElementById("background_select_2").hidden = true;
        ResetOptions();
        document.getElementById("foreground_inspect").hidden = true;

        inspect_description.innerHTML = "For whatever reason, you removed the Poster from the wall.";
        inspect_title.innerHTML = "Poster";
        init_title = inspect_title.innerHTML;
        init_description = inspect_description.innerHTML;
        inspect_box.style.backgroundColor = "white";
        inspect_box.style.borderStyle = "solid";
        inspecting = "none"

        items.push("poster");
        document.getElementById("item" + items.length).src = "../../../images/placeholder/placeholder_room_poster.png";
    }
});
