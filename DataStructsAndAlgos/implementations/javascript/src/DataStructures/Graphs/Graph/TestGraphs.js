export const graphOneSchema = {
  1: {
    root: true,
    connections: [
      { key: 2, weight: -1 },
      { key: 4, weight: -1 }
    ]
  },
  2: {
    connections: [
      { key: 3, weight: -1 },
      { key: 1, weight: -1 }
    ]
  },
  3: {
    connections: []
  },
  4: {
    connections: [{ key: 3, weight: -1 }]
  }
};
