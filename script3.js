function gethighScore() {
  var newuserScore = JSON.parse(localStorage.getItem("userScore"));
  if (newuserScore !== null) {
    document.getElementById("userInitials").innerHTML =
      "User initials: " + newuserScore;
  } else {
    return;
    // {
    //   document.getElementById("userInitials").innerHTML =
    //     "User: " + localStorage.getItem(newuserScore);
    //   console.log(newuserScore);

    //   return;
  }
}

gethighScore();
