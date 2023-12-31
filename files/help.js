helpObject = {
  awk: "awk -F\' \' \'{print \$2}\'",
  reduce: "array.reduce((b,c) => b + c,0)"
}
if (process.argv.length === 2) {
  console.log("run with command on following")
  console.log(Object.keys(helpObject))
} else if (helpObject[process.argv[2]]) {
  console.log(helpObject[process.argv[2]])
} else {
  console.log('not found, try one of following')
  console.log(Object.keys(helpObject))
}
