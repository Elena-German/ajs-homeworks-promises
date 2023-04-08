import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer))
      .then((str) => {
        const save = JSON.parse(str);
        return new GameSaving(save.id, save.created, save.userInfo);        
      });
  }
}
