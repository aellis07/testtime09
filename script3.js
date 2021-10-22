function gethighScore() {
  var newuserInitial = JSON.parse(localStorage.getItem("userScore"));
  var newuserScore = JSON.parse(localStorage.getItem("secondsLeft"));
  if (newuserInitial !== null) {
    document.getElementById("userInitials").innerHTML =
      "User initials: " + newuserScore;
  }
  if (newuserScore !== null) {
    document.getElementById("displayScore").innerHTML =
      "User score: " + newuserScore;
  } else {
    return;
  }
}

gethighScore();
