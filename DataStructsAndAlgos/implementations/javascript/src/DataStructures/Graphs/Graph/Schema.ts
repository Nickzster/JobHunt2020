export interface Edges {
  key: Number;
  weight?: Number;
}

export interface Node {
  root?: boolean;
  connections: Edges[];
}

export interface GraphSchema {
  Graph: {
    [key: number]: Node;
  };
}
