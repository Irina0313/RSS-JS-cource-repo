import { LocalStorageActions } from './functions';

const localStor = new LocalStorageActions();
const level = localStor.getItem('active-level').toLowerCase();
function getMines() {
  if (!localStor.getItem(`${level}-mines`)) {
    return 10;
  }
  if (localStor.getItem(`${level}-mines`)) {
    return Number(localStor.getItem(`${level}-mines`));
  }
}

const mines = getMines();

export const options = {
  Beginner: {
    width: 10,
    height: 10,
    mines: mines,
  },
  Intermediate: {
    width: 15,
    height: 15,
    mines: mines,
  },
  Expert: {
    width: 25,
    height: 25,
    mines: mines,
  },
};

function getWidthSetting() {
  return Number(localStor.getItem('custom-width'));
}
function getHeightSetting() {
  return Number(localStor.getItem('custom-height'));
}


export class GetLevelOptions {
  constructor(level) {
    if (level !== 'Custom') {
      this.width = options[level].width;
      this.height = options[level].height;
      this.mines = options[level].mines;
    } else {
      this.width = getWidthSetting();
      this.height = getHeightSetting();
      this.mines = getMines();
    }
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
