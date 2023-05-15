let activeLevel = document.querySelector('.level.level_active');
let widthSetting = document.querySelector('#custom-width');
let heightSetting = document.querySelector('#custom-height');
let mines = document.querySelector('#custom-mines');



let options = {
  Beginner: {
    width: 10,
    height: 10,
    mines: 10,
  },
  Intermediate: {
    width: 15,
    height: 15,
    mines: 40,
  },
  Expert: {
    width: 25,
    height: 25,
    mines: 99,
  },
  Custom: {
    width: widthSetting,
    height: heightSetting,
    mines: mines,
  }
}


export class getLevelOptions {
  constructor(level) {

    this.width = options[level].width;
    this.height = options[level].height;
    this.mines = options[level].mines;
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  getMines() {
    return this.mines;
  }

  getGameMaxWidth() {
    return ((this.width * 24) + (18 * 2));
  }

  getWidthPixels() {
    return (this.width * 24);
  }
  getHeightPixels() {
    return (this.height * 24);
  }
}



