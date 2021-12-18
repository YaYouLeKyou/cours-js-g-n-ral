/*
console.log 
document.write

factorisation et organisation du code grace aux fonctions

*/
{
  function helloWorld() {
    document.write("hello");
    document.write("world!");
  }
}

helloWorld();
/*
essayer de faire 1 chose par fonction ex:
{
    function getNewsFromDatabase()
    {
        Code
    }
}
*/
/*
myFunction
my_function
MyFunction
My_Function
*/
{
  let data = "OK";
  let data2 = 24;
  function functionName() {
    document.write(data2);
    document.write("TEST : + data");
  }

  functionName();
  console.log(data2);
}
// retour de fonction
{
  function sum(nb1, nb2) {
    document.write(nb1 + nb2);
  }
  sum(4, 3);
}

{
  function sum(nb1, nb2) {
    //"parametres"
    return nb1 + nb2;
  }
  let res = sum(4, 3); //  let res  <=  sum(4, 3) "arguments"
  console.log(res);
}
{
  function sum(nb1, nb2) {
    return nb1 + nb2;
  }
  let n1 = 14;
  let n2 = 66;
  document.write(sum(n1, n2));
}
{
  function sum(nb1 = 5, nb2 = 10) {
    return nb1 + nb2;
  }
  let n1 = 14;
  let n2 = 66;
  document.write(sum(n1));
}
{
  function sum(nb1 = 5, nb2 = 10) {
    return nb1 + nb2;
  }
  let n1 = 14;
  let n2 = 66;
  document.write(sum());
}
/*{
  function sum(...args) {
    return nb1 + nb2;
  }
  let n1 = 14;
  let n2 = 66;
  document.write(sum());
}
*/

//portée
{
  function some_function() {
    //fonction parente
    let data = 16;

    function another_function() {
      // fonction imbriquée ( a accès a la fonction parente)
      document.write(data);
    }
    another_function();
  }

  some_function();
}

//Les expréssions permet de changer le nom d' emplois d' une fonction

{
  let hi = function helloWorld() {
    document.write("Hello World !");
  };
  hi();
}
//synthaxe
{
  let sum = (x, y) => {
    return x + y;
  };
  document.write(sum(45, 6));
}
