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