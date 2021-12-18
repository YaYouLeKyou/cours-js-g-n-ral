// Js est un language prototype
/*
 superninja => ninja => objet => null
*/

//façon prototype, plus flexible

/*
let naruto = {
  attack: function () {
    return "Rasengan";
  },
  name: "Naruto Uzumaki",
  weapon: "kunai",
};
document.write("<h2>Ecriture Litterale</h2>");
document.write(naruto.name + "<br>");
document.write(naruto.attack() + "<br>");
//---------------------------------------------------

function Ninja(name, weapon) {
  this.attack = function () {
    return "Raaahhh !!";
  };
  this.name = name || "Naruto Uzumaki";
  this.weapon = weapon || "shuriken";
}
document.write("<h2>Constructeur via function</h2>");
let hinata = new Ninja("Hinata Hyuga");
document.write(hinata.name + "<br>");
document.write(hinata.attack() + "<br>");
*/
//-----------------------------------------------------
// autre type de synthaxe, façon classe !!!!! a mettre a jour, probleme synthaxique*/
/*

class Genin {
  constructor(name = "Naruto Uzumaki", weapon = "shuriken") {
    this.name = name;
    this.weapon = weapon;
  }
  attack()
    {
      return: "rhaaaaa!!!";
    }
}
document.write("<h2>Constructeur via classes</h2>");
let sasuke = new Genin("Sasuke Uchiha", "nunshaku");
document.write(sasuke.name + "<br>");
document.write(sasuke.attack() + "<br>");

class Shuunin
{
    defend()
}
*/
//parent, enfant || cloner, affilier lié     façon prototype
/*
function Ninja(name = Inconnu) {
  //parent
  this.attack = function () {
    return "Aya !!";
  };
  this.name = name;
}

function SuperNinja(name = "Inconnu", weapon = "kunai") {
  //enfant
  Ninja.call(this, name);
  this.weapon = weapon;
}

SuperNinja.prototype = Object.create(Ninja.prototype); //clonage ( 2 objets distincts)
SuperNinja.prototype = Ninja.prototype; // liaison d' un prototype a un autre

let naruto = new SuperNinja("shuriken");

SuperNinja.prototype.age = 24;
console.log(Ninja.prototype);
console.log(SuperNinja.prototype);
*/
// façon classe
class ninja {
  constructor(name = "Naruto") {
    this.name = name;
  }
}

class SuperNinja extends ninja {
  constructor(name = "Naruto", weapon = "shuriken") {
    super(name);
    this.weapon = weapon;
  }
}
let neji = new SuperNinja("Neji Hyuga", "kunai");
document.write(neji.name + "<br>");
document.write(neji.weapon + "<br>");
