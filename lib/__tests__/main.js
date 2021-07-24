const current = require('../main.js');
const _ = require('lodash');

describe('sharTeel', () => {
  it.each([
    ['with a key string', ['amn', 'baldur'], 'imoen', 'amn'],
    ['with a key number', ['amn', 'baldur'], 42, 'baldur'],
    ['with only one item in the list', ['amn'], 'whatever', 'amn'],
    ['with a string as list', 'amn', 'whatever', 'amn'],
    ['with random list order', ['baldur', 'amn'], 'imoen', 'amn'],
    [
      'with duplicate items in list',
      ['baldur', 'amn', 'amn', 'baldur'],
      'imoen',
      'amn',
    ],
  ])('%s', async (_name, list, key, expected) => {
    const actual = current(list, key);
    expect(actual).toEqual(expected);
  });

  it('has a stable repartition', async () => {
    const iterationCount = 1000;
    const keys = _.chain(0)
      .range(iterationCount)
      .map(() => {
        return _.random(0, 1000000000).toString(16);
      })
      .value();

    const list = ['amn', 'baldur', 'cormyr', 'darklands'];
    const groups = _.chain(keys)
      .map((key) => {
        return current(list, key);
      })
      .countBy()
      .value();

    // Each group should have ~250 items
    _.each(list, (listItem) => {
      const count = groups[listItem];
      expect(count).toBeGreaterThanOrEqual(200);
      expect(count).toBeLessThanOrEqual(300);
    });
  });
});
