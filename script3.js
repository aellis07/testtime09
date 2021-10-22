function gethighScore() {
  var newuserScore = JSON.parse(localStorage.getItem("userScore"));
  {
    document.getElementById("userInitials").innerHTML =
      "User: " + localStorage.getItem(newuserScore);
    console.log(newuserScore);

    return;
  }
}

gethighScore();
