function obfuscate(arg) {
  var pass = "";
  var len = arg.length;

  for(var i = 0; i < len; i++) {
    switch(arg[i]) {
    case "a":
      pass += '4';
      break;
    case "e":
      pass += '3';
      break;
    case "o":
      pass += '0';
      break;
    case "l":
      pass += '1';
      break;
    default:
      pass += arg[i]
    }
  }

  return pass
}
