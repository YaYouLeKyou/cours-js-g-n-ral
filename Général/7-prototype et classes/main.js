//ECMAScript 6 ES6

/*
 Classe : pas d' attribut privés
          pas d' attribut statiques
*/
//public methode moderne
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
    }
  }
  let song = new MusicPlayer("MP3");
  document.write(song.filetype + "<br>");
  song.filetype = "OGG";
  document.write(song.filetype + "<br>");
}
//privé a l' ancienne => tout le code doit etre a l' interieur en privé
{
  function MusicPlayer(filetype) {
    var filetype = filetype;
    this.filetype = function () {
      return filetype;
    };
  }
  let song = new MusicPlayer("MP3");
  document.write(song.filetype() + "<br>");
}
//public a l' ancienne pour utilisé des éléments statique
{
  function MusicPlayer(filetype) {
    var filetype = filetype;
    this.filetype = function () {
      return filetype;
    };
  }
  MusicPlayer.data = 14;
  //let song = new MusicPlayer("MP3");
  document.write(MusicPlayer.data);
}
{
  function MusicPlayer(filetype) {
    var filetype = filetype;
    this.filetype = function () {
      return filetype;
    };
  }
  MusicPlayer.hello = function () {
    return "Hello World !";
  };
  //let song = new MusicPlayer("MP3");
  document.write(MusicPlayer.hello());
}
// static methode moderne
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
    }
    static hello() {
      return "hello World !";
    }
  }
  document.write(MusicPlayer.hello());
}
// ajout d' attributs
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
    }
    static hello() {
      return "hello World !";
    }
  }
  let song = new MusicPlayer("MP3"); // cette attribut ne sera pas affiché car avant MusicPlayer.prototype.filename = "C:"
  document.write(song.filename);
  MusicPlayer.prototype.filename = "C:";

  let song2 = new MusicPlayer("OGG");
  document.write(song2.filename);

  song2.filename = "C:\\User\\";
  document.write(song2.filename + "<br>"); // cet attribut a bien été ajouté
}
//supprimé un attribut
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
    }
    static hello() {
      return "hello World !";
    }
  }

  document.write(song.filename);
  MusicPlayer.prototype.filename = "C:";

  let song2 = new MusicPlayer("OGG");
  document.write(song2.filename);

  song2.filename = "C:\\User\\";
  document.write(song2.filename + "<br>"); // cet attribut a bien été ajouté

  delete song2.filename;
  document.write(song2.filename + "<br>");
}
//ne marche pas, pourquoi?
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
    }
  }

  MusicPlayer.prototype.hello = function () {
    return "Hello !";
  };

  let song = Object.create(MusicPlayer);
  document.write(song.hello());
}
