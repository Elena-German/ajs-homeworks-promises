import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((buffer) => json(buffer))
      .then((str) => new GameSaving(str));
  }
}
