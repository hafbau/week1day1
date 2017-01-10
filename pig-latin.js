function pigLatin(args) {
  var len = args.length;
  var output = [];
  for(var i = 2; i < len; i++) {
    output.push(pigLatinWord(args[i]));
  }
  console.log(output.join(" "))
}

function pigLatinWord(word) {
  return word.slice(1) + word[0] + "ay"
}

pigLatin(process.argv)