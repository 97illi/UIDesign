var div = $(".item").toArray();
while(div.length > 0) {
      var idx = Math.floor((Math.random() * (div.length-1)));
      var element = div.splice(idx, 1);
      $('#items').append(element[0]);
}
