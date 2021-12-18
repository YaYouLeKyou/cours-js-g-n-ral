/*
document.write("a ");
document.write("a ");
document.write("a ");
document.write("a ");
document.write("a ");
*/
//iteration = passage dans la boucle
{
  let i = 0;
  {
    while (i < 5) {
      document.write("a ");
      i++;
    }
  }
}
//do
{
  let i = 10;

  do {
    document.write("AAA ");
    i++;
  } while (i < 10);
}
//boucle for      elements sur lequel on peut itérer, permettent de parcourir... ex:tableau
// (initialisation; expression a vérifié, operation a éffectuer en fin d' itération)
{
  for (let i = 0; i < 5; i++) document.write("b ");
}
{
  for (let i = 0; i < 50; ++i) {
    document.write("c ");

    if (i === 20) break;
  }
}
{
  for (let i = 0; i < 50; ++i) {
    document.write("d ");
    if (i === 5) continue;

    document.write("e ");
  }
}
/*{
    for(let element in sac)
}
{
    for(let element of sac)
}
*/
//mots clés: break, continue
