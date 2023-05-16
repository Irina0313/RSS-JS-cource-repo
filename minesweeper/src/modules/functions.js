export class LocalStorageActions {
  constructor(name, value) {
    this.name = String(name);
    this.value = String(value);
  }

  setItem(name, value) {
    this.name = String(name);
    this.value = String(value);
    localStorage.setItem(this.name, this.value);
  }

  getItem(name) {
    this.name = String(name);
    return localStorage.getItem(this.name);
  }

  changeValue(name, value) {
    this.name = String(name);
    this.value = String(value);
    localStorage[this.name] = this.value;
  }
}
