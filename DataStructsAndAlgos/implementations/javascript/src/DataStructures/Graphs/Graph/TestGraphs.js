export const graphs = {
  graphOne: {
    1: {
      root: true,
      connections: [
        { key: 2, weight: 1 },
        { key: 4, weight: 1 }
      ]
    },
    2: {
      connections: [
        { key: 3, weight: 1 },
        { key: 1, weight: 1 }
      ]
    },
    3: {
      connections: []
    },
    4: {
      connections: [{ key: 3, weight: 1 }]
    }
  },
  graphTwo: {
    1: {
      root: true,
      connections: [
        { key: 2, weight: 1 },
        { key: 3, weight: 1 }
      ]
    },
    2: {
      connections: [{ key: 5, weight: 1 }]
    },
    3: {
      connections: [
        { key: 2, weight: 1 },
        { key: 6, weight: 1 }
      ]
    },
    4: {
      connections: [{ key: 7, weight: 1 }]
    },
    5: {
      connections: [{ key: 7, weight: 1 }]
    },
    6: {
      connections: [{ key: 4, weight: 1 }]
    },
    7: {
      connections: []
    }
  }
};
