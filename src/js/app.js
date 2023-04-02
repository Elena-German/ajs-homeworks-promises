import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => saving, () => new Error('Ошибка сохранения игры'));
