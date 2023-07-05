class Music {
    constructor(title, singer, img, file, bgImage) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
        this.bgImage = bgImage;
    }

    getName() {
        return this.title;
    }
}


const musicList = [
    new Music("Alag aasmaan", "Anuv jain", "1.jpg", "1.mp3", "1.jpg"),
    new Music("BAARISHEIN", "Anuv Jain", "2.jpg", "2.mp3", "2.jpg"),
    new Music("Iraaday", "Abdul Hannan & Rovalio", "3.jpg", "3.mp3", "3.jpg"),
    new Music("Made you look", "Meghan Trainor", "4.jpg", "4.mp3", "4.jpg"),
    new Music("Tere bina", "Zaeden", "5.jpg", "5.mp3", "5.jpg"),
    new Music("Who Says", "Selena Gomez", "6.jpg", "6.mp3", "6.jpg"),
]