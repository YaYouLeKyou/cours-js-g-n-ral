//les erreurs et les inspecter
//throw new Error("Je leve une erreur....");
try {
  //code sensible qui pourrait enlever une exeption
  throw new Error("Une erreur s' est produite...");
} catch (err) {
  console.log(err.message); //||stack, lineNumber, code...
} finally {
  document.write("OK");
}
