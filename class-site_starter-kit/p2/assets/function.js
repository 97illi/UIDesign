function myFunction() {
  // names
  var names1 = ["<span class='big'>Bride</span>", "Heaven", "Temptation", "First", "Everybody", "Sky", "Penthouse", "Life", "Secret", "Mother"];
  var names2 = ["<span class='small'>of the</span>", "<span class='small'>within</span>", "<span class='small'>and</span>", "<span class='small'>without</span>", "Next to", "Wives", "Say", "Stairway", "in-law"];
  var names3 = ["Golden", "Club", "Wife", "Gisaeng", "Castle", "Kimchi", "Inheritance"];
  //fonts
  var fonts = ["Alice", "Aoboshi", "Playfair", "Lobster", "Great Vibes", "Castoro", "Novacut", "Purple"];
  
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