export default class GameSaving {
  constructor(str) {
    const obj = JSON.parse(str);
    this.id = obj.id;
    this.created = obj.created;
    this.userInfo = obj.userInfo;
  }
}
