function obfuscate(arg) {
  var pass = arg.replace(/a/g, '4');
  pass = pass.replace(/e/g, '3');
  pass = pass.replace(/o/g, '0');
  pass = pass.replace(/l/g, '1');

  return pass
}

console.log(obfuscate(process.argv[2]))