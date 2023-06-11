function spracujDatum() {
  var birthdateInput = document.getElementById("birthdate");
  var birthdate = moment(birthdateInput.value, "YYYY-MM-DD");
  birthdate.year(moment().year());
  var today = moment();
  
  if (today.isAfter(birthdate)) {
    birthdate.add(1, "year");
  }
  
  var daysUntilBirthday = birthdate.diff(today, "days");
  var daysToBirthdayElement = document.getElementById("days");
  daysToBirthdayElement.textContent = "Počet dní do najbližších narodenín: " + daysUntilBirthday;
  
  var season = getSeason(birthdate.month());
  var seasonImage = getSeasonImage(season);
  var seasonImageElement = document.getElementById("obdobie-image");
  seasonImageElement.src = seasonImage;
  seasonImageElement.alt = "Ročné obdobie: " + season;
}

function getSeason(month) {
  switch (month) {
    case 0:
    case 1:
    case 11:
      return "ZIMA";
    case 2:
    case 3:
    case 4:
      return "JAR";
    case 5:
    case 6:
    case 7:
      return "LETO";
    case 8:
    case 9:
    case 10:
      return "JESEŇ";
    default:
      return "Neznáme";
  }
}

function getSeasonImage(season) {
  switch (season) {
    case "ZIMA":
      return "/winter.jpg";
    case "JAR":
      return "/jar.jpg";
    case "LETO":
      return "/leto.jpg";
    case "JESEŇ":
      return "/jesen.jpg";
    default:
      return "";
  }
}