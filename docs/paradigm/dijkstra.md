# 最短路径 - dijkstra
## 代码
::: code-group
``` java{17} [dijkstra]
public static int[] dijkstra(int[][] graph, int start) {
  int length = graph.length;
  boolean[] found = new boolean[length];
  int[] dist = new int[length];
  Arrays.fill(dist, Integer.MAX_VALUE);
  dist[start] = 0;
  for (int i = 0; i < length; ++i) {
    int u = -1;
    for (int j = 0; j < length; ++j) {
      if (!found[j] && (u == -1 || dist[j] < dist[u])) {
        u = j;
      }
    }
    found[u] = true;
    for (int j = 0; j < length; ++j) {
      if (!found[j] && graph[u][j] != -1) {
        dist[j] = Math.min(dist[j], dist[u] + graph[u][j]);
      }
    }
  }
  return dist;
}
```
:::