# 求素数
## 三种方法及代码
::: code-group
``` java [O(n*sqrt{n})]
	public static int[] rangePrime1(int n) {
		int cnt = 0;
		int[] result = new int[n + 1];
		for (int i = 2; i <= n; ++i) {
			boolean isPrime = true;
			for (int j = 2; j * j <= i; ++j)
				if (i % j == 0) {
					isPrime = false;
					break;
				}
			if (isPrime)
				result[cnt++] = i;
		}
		return Arrays.copyOf(result, cnt);
	}
```
``` java [O(n*log{n})]
	public static int[] rangePrime2(int n) {
		int cnt = 0;
		int[] result = new int[n + 1];
		boolean[] notPrime = new boolean[n + 1];
		for (int i = 2; i <= n; ++i) {
			if (!notPrime[i]) {
				result[cnt++] = i;
				for (int j = 2; j * i <= n; ++j)
					notPrime[i * j] = true;
			}
		}
		return Arrays.copyOf(result, cnt);
	}
```
``` java [O(n)]
	public static int[] rangePrime3(int n) {
		int cnt = 0;
		int[] result = new int[n + 1];
		boolean[] notPrime = new boolean[n + 1];
		for (int i = 2; i <= n; ++i) {
			if (!notPrime[i]) 
				result[cnt++] = i;
			for (int j = 0; j < cnt && i * result[j] <= n; ++j) {
				notPrime[i * result[j]] = true;
				if (i % result[j] == 0) break;
			}
		}
		return Arrays.copyOf(result, cnt); 
	}
```
:::