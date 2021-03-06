// # ground
// . air
// _ surface, y
// - gentle slope, y[left], y[right]
// | steep slope, x[top], x[bottom]
// [ cliff to left, x[base], x[top], y[right]
// ] cliff to right, y[left], x[top], x[base]
// v pit, y[level], x, y[depth]
// ^ hill, y[level], x, y[height]
// v, ^ pit, hill' y[start] x[mid] y[mid] y[end]
// @ landing pad, x
// / small slope right, x, y
// \ small slope left, y, x
// ) small slope high right, x, y
// ( small slope high left, y, x

const chunkSize = 1000;

const levels = {
  area1: {
    id: 1,
    name: 'Area One',
    matrix: [
      ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '.', '.', '.', '.', '.', '^A66A', '.', '.', '.', '.', '.', '.', '.', '/48', '\\85', '.', '.', '.', '.'],
      ['-63', ']35', '.', '.', '/57', '-70', '#', '-05', ']54', '.', '.', '/87', '_7', '-72', '(24', '|59', '.', '.', '/27', '_7'],
      ['#', '|58', '.', '[84', '(45', '#', '#', '#', '|47', '.', '.', '|84', '#', '#', '#', ')94', '-46', '_6', '(62', '#'],
      ['#', ')87', 'v7397', '(78', '#', '#', '#', '#', ')75', '_5@8', '-52', '(24', '#', '#', '#', '#', '#', '#', '#', '#']
    ],
    width: 20,
    height: 5,
    start: {
      x: 9,
      y: 4
    },
    gravity: 1,
    wind: {
      max: 5,
      min: -5
    }
  },
  test: {
    id: 1,
    name: 'TEST AREA',
    matrix: [
      [
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
      ],
      [
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
      ],
      [
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
      ],
      [
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
      ],
      [
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}@5`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
        `]${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
      ]
    ],
    width: 20,
    height: 5,
    start: {
      x: 0,
      y: 4
    },
    gravity: 1,
    wind: {
      max: 5,
      min: -5
    }
  }
};

export { levels, chunkSize };
