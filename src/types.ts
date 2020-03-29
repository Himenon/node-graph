export type Edges = {
  [key: string]: string[] | undefined;
};

export interface State {
  nodes: string[];
  edges: Edges;
}

export interface Graph {
  addNode: (nodeName: string) => void;
  addEdge: (src: string, dest: string) => void;
  removeNode: (targetNode: string) => void;
  removeEdge: (src: string, dest: string) => void;
  removeEdgeAll: (src: string) => void;
  getInputEdges: (targetNode: string) => string[];
  getIndependentNodes: () => string[];
  getState: () => State;
  getStateByName: (source: string) => State;
  clone: () => Graph;
  createGraphByFilteredFunc: (
    sourceFilter?: ((source: string) => boolean) | undefined,
    edgeFilter?: ((source: string, target?: string | undefined) => boolean) | undefined,
  ) => Graph;
  createGraphBySources: (sources: string[]) => Graph;
  getNodeLength: () => number;
  getEdgeLength: () => number;
  breadthFirstSearch: (source: string) => string[];
  topologicalSort: (source: string) => string[];
  createReverseGraph: () => Graph;
}
