//now it is no need to create separate folder and files
// for every category of constants so i store all here.
const defaultShelfId = -1;
const numberOfHamsters = 3;
const numberOfShelves = 5;

const pickHamsterEventName = 'hamsterPicked';

export class Constants {
  static get numberOfHamsters() {
    return numberOfHamsters;
  }

  static get numberOfShelves() {
    return numberOfShelves;
  }

  static get pickHamsterEventName() {
    return pickHamsterEventName;
  }

  static get defaultShelfId() {
    return defaultShelfId;
  }
}

export default Constants;
