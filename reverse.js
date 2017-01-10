function reverse(args) {
  for (var i = 2; i < args.length; i++){
    var word = args[i].split("");
    var reversed = "";
    for (var j = word.length-1; j >= 0; j--){
      reversed += word[j];
    }
    console.log(reversed);
  }
}

reverse(process.argv);