function myFunction() {
  // List of names
  var names1 = ["Bride", "Heaven", "Temptation", "First", "Everybody", "Sky", "Penthouse", "Life", "Secret", "Mother"];
  var names2 = ["of the", "within", "and", "without", "Next to", "Wives", "Say", "Stairway", "in-law"];
  var names3 = ["Golden", "Club", "Wife", "Gisaeng", "Castle", "Kimchi", "Inheritance"];
  
//random generate
  var randomNum1 = Math.floor(Math.random() * names1.length);
  var randomNum2 = Math.floor(Math.random() * names2.length);
  var randomNum3 = Math.floor(Math.random() * names3.length);
  
  // Get the name from the array using the random number
  var randomName = names1[randomNum1]+ " " + names2[randomNum2]+ " " + names3[randomNum3];
  
  // Display the name on the page
  document.getElementById("name").innerHTML = randomName;
}