//choix oui ou non par rapport a un name
{
  let name = "Yuna";

  if (name === "Yuna") document.write("OUI");
  else {
    document.write("NON");
  }
}
//chiffre
{
  let number = 6;

  if (number < 0) document.write("<0");
  else if (number > 10) document.write("> 10");
  else document.write(number);
}
//switch
//break permet de sortir du switch, arrete les verification...
{
  let number = 3;

  switch (number) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      document.write("number < 5");
      break;
    case 5:
      document.write("number = 5");
      break;
    default:
      alert("pas de valeur reconnue...");
      break;
  }
}
{
  let name = "Yuna";

  switch (name) {
    case "Yuna":
      document.write("OK");
      break;

    default:
      alert("Pas OK");
      break;
  }
}
//? Operateur conditionné, ternaire
/*
<condition> ? <cas-vrai> : <cas-faux>
*/
{
  let number = 15;
  let res = number > 10 ? "number > 10" : "number <=10";
  document.write(res);
}
