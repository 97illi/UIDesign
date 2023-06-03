function myFunction() {
  // names
  var names1 = ["Bride", "Heaven", "Temptation", "First", "Everybody", "Sky", "Penthouse", "Life", "Secret", "Mother"];
  var names2 = ["of the", "within", "and", "without", "Next to", "Wives", "Say", "Stairway", "in-law"];
  var names3 = ["Golden", "Club", "Wife", "Gisaeng", "Castle", "Kimchi", "Inheritance"];
  //fonts
  var fonts = ["serif", "sans-serf"];
  
  var randomNum1 = Math.floor(Math.random() * names1.length);
  var randomNum2 = Math.floor(Math.random() * names2.length);
  var randomNum3 = Math.floor(Math.random() * names3.length);
  // fonts
  var fonts = Math.floor(Math.random() * fonts.length);
  
  var randomName = names1[randomNum1]+ " " + names2[randomNum2]+ " " + names3[randomNum3];
  //fonts
  var randomFont = fonts[Math.floor(Math.random() * fonts.length)];

  document.getElementById("name").innerHTML = randomName + randomFont;
}