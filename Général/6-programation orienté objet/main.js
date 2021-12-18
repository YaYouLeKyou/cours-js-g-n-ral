{
  class MusicPlayer {
    constructor() {
      document.write("Objet crée !");
    }
  }
  let player = new MusicPlayer();
}
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
      document.write(this.filetype);
    }
  }
  let player = new MusicPlayer("MP3");
  let player2 = new MusicPlayer("OGG");
}
//accesseur
/*
{
  class MusicPlayer {
    constructor(filetype) {
      this.filetype = filetype;
      
  
    getfiletype()
    {
        return this.filetype;
    }
    setfiletype(new filetype)
    {
        this.filetype = new filetype;
    }
  }
  let song = new MusicPlayer("MP3");
  
      
  }
}

