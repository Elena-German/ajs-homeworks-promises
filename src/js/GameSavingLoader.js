import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then((buffer) => json(buffer))
        .then((str) => {
          resolve(new GameSaving(str));
          reject(new Error('Ошибка сохранения игры'));
        });
    });
  }
}
