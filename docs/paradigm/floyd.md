# 最短路径 --Floyd 
## 代码
::: code-group
``` java
public static int[][] floyd(int[][] graph) {
  int length = graph.length;
  int[][] dist = new int[length][length];
  for (int i = 0; i < length; ++i) {
    for (int j = 0; j < length; ++j) {
      dist[i][j] = graph[i][j];
    }
  }
  for (int k = 0; k < length; ++k) {
    for (int i = 0; i < length; ++i) {
      for (int j = 0; j < length; ++j) {
        if (dist[i][k] != -1 && dist[k][j] != -1) {
          if (dist[i][j] == -1 || dist[i][j] > dist[i][k] + dist[k][j]) {
            dist[i][j] = dist[i][k] + dist[k][j];
          }
        }
      }
    }
  }
  return dist;
}
```
:::

## 路径压缩求经过所有点的最短路径
::: code-group
``` java
import java.util.Scanner;

public class MinPath {
	public static double MAX = Double.MAX_VALUE / 2;
	public static int n;
	public static int D;
	public static int[][] positions;
	public static double[][] dist;
	public static double[][] dp;
	public static double distanceOf(int i, int j) {
		int x = positions[i][0] - positions[j][0];
		int y = positions[i][1] - positions[j][1];
		return Math.sqrt(x * x + y * y);
	}
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		n = scan.nextInt();
		D = scan.nextInt();
		positions = new int[n][2];
		dist = new double[n][n];
		dp = new double[1 << n][n];
		for (int i = 0; i < n; ++i) {
			positions[i][0] = scan.nextInt();
			positions[i][1] = scan.nextInt();
		}
		
		// floyd
		for (int i = 0; i < n; ++i)
			for (int j = i + 1; j < n; ++j) {
				double distance = distanceOf(i, j);
				if (distance > D) distance = MAX;
				dist[i][j] = dist[j][i] = distance;
			}
		for (int k = 0; k < n; ++k)
			for (int i = 0; i < n; ++i)
				for (int j = 0; j < n; ++j)
					dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
		
		// dp
		for (int i = 0; i < 1 << n; ++i)
			for (int j = 0; j < n; ++j)
				dp[i][j] = MAX;
		dp[1][0] = 0;
		for (int i = 0; i < 1 << n; ++i)
			for (int j = 0; j < n; ++j) 
				if ((i >> j & 1) == 1) 
					for (int k = 0; k < n; ++k) 
						if (((i - (1 << j)) >> k & 1) == 1)
							dp[i][j] = Math.min(dp[i][j], dp[i - (1 << j)][k] + dist[k][j]);	
		
		double ans = MAX;
		for (int i = 1; i < n; ++i)
			ans = Math.min(ans, dp[(1 << n) - 1][i] + dist[i][0]);
		
		System.out.printf("%.2f", ans);
		scan.close();
	}
}
```