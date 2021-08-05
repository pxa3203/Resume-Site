function showContact() {
    var selection = document.getElementById("contactInfo").value;

    if (selection == "United States") {
        hideContact();
        document.getElementById("US-Contact").style.display = "inline";
    } else if (selection == "Australia") {
        hideContact();
        document.getElementById("AU-Contact").style.display = "inline";
    } else if (selection == "select") {
        hideContact();
    }

}

function hideContact() {
    document.getElementById("US-Contact").style.display = "none";
    document.getElementById("AU-Contact").style.display = "none";
}

function iconRight() {
    document.getElementById("right-col").style.display = "none";
    document.getElementById("left-col").style.width = "100%";
    document.getElementById("left-col").style.display = "inline";
    document.getElementById("left-icon").style.display = "inline";
    document.getElementById("left-icon").style.float = "left";
    document.getElementById("left-icon").style.margin = "3%";
}

function iconLeft() {
    document.getElementById("left-icon").style.display = "none";
    document.getElementById("left-col").style.display = "none";
    document.getElementById("right-col").style.display = "inline";
    document.getElementById("right-col").style.width = "100%";
}