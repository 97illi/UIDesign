function myFunction() {
  // names
  var names1 = ["Bride","The World", "Shining", "Temptation", "First", "Winter", "Everybody", "Sky", "Stairway", "Penthouse", "Life", "Secret", "New Tales"];
  var names2 = ["<span style='font-size: 15px'>of</span>","<span style='font-size: 15px'>to</span>", "<span style='font-size: 15px'>within</span>", "<span style='font-size: 15px'>a</span> War <span style='font-size: 15px'>in</span>", "<span style='font-size: 15px'>and</span>", "<span style='font-size: 15px'>without</span>", "<span style='font-size: 15px'>Next to</span>", "Wives", "<span style='font-size: 20px'>Say</span>", "Stairway"];
  var names3 = ["Club", "Wife", "Married", "Gisaeng", "Castle","Sonata", "Kimchi","Heaven", "Inheritance", "Life"];
  //fonts
  var fonts = ["Cinzel", "Aoboshi", "Playfair", "Lobster", "Great Vibes", "Castoro", "Novacut", "Amita", "Purple", "Italiano"];
  
  var randomNum1 = Math.floor(Math.random() * names1.length);
  var randomNum2 = Math.floor(Math.random() * names2.length);
  var randomNum3 = Math.floor(Math.random() * names3.length);
 
  // fonts
  var randomFontNum1 = Math.floor(Math.random() * fonts.length);
  var randomFontNum2 = Math.floor(Math.random() * fonts.length);
  var randomFontNum3 = Math.floor(Math.random() * fonts.length);
  var randomFont1 = fonts[randomFontNum1];
  var randomFont2 = fonts[randomFontNum2];
  var randomFont3 = fonts[randomFontNum3];
  

  var randomName = "<span class='"+randomFont1+"'> <span style='font-family: "+randomFont1+"'>"+names1[randomNum1]+ "</span> <span style='font-family: "+randomFont2+"'>"+names2[randomNum2]+ "</span> <span style='font-family: "+randomFont3+"'>"+ names3[randomNum3]+"</span>";
  document.getElementById("name").innerHTML = randomName;
}
function openPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}