import GameSaving from '../GameSaving';

test('тестирование класса GameSaving', () => {
  const save = JSON.parse('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');  
  const saving = new GameSaving(save.id, save.created, save.userInfo);
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
