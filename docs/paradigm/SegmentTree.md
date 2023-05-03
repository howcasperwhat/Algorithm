
# 线段树
## 代码
::: code-group
``` java [代码框架]
public class SegmentTree {
	private int MAXN;
	private int[] array;
	private int[] sum;
	private int[] lazy;
	private int[] change;
	private boolean[] update;
	
	public SegmentTree(int[] origin) {...}
	
	public void build(int l, int r, int rt) {...}
	
	private void pushUp(int rt) {...}
	private void pushDown(int rt, int ln, int rn) {...}
	
	public void add(int L, int R, int C,
                    int l, int r, int rt) {...}
	
	public void update(int L, int R, int C,
					   int l, int r, int rt) {...}

	public long query(int L, int R,
					  int l, int r, int rt) {...}
}
```
``` java [<code>constructor</code>]
public SegmentTree(int[] origin) {
  MAXN = origin.length + 1;
  array = new int[MAXN];
  for (int i = 1; i < MAXN; ++i)
    array[i] = origin[i - 1];
  sum = new int[MAXN << 2];
  lazy = new int[MAXN << 2];
  change = new int[MAXN << 2];
  update = new boolean[MAXN << 2];
}
```
``` java [<code>build</code>]
public void build(int l, int r, int rt) {
  if (l == r) {
    sum[rt] = array[l];
  } else {
    int mid = l + ((r - l) >> 1);
    build(l, mid, rt << 1);
    build(mid + 1, r, rt << 1 | 1);
    pushUp(rt);
  }
}
```
``` java [<code>pushUp/pushDown</code>]
private void pushUp(int rt) {
  sum[rt] = sum[rt << 1] + sum[rt << 1 | 1];
}
private void pushDown(int rt, int ln, int rn) {
  if (update[rt]) {
    update[rt << 1] = true;
    update[rt << 1 | 1] = true;
    change[rt << 1] = change[rt];
    change[rt << 1 | 1] = change[rt];
    lazy[rt << 1] = 0;
    lazy[rt << 1 | 1] = 0;
    sum[rt << 1] = change[rt] * ln;
    sum[rt << 1 | 1] = change[rt] * rn;
    update[rt] = false;
  }
  if (lazy[rt] != 0) {
    lazy[rt << 1] += lazy[rt];
    sum[rt << 1] += ln * lazy[rt];
    lazy[rt << 1 | 1] += lazy[rt];
    sum[rt << 1 | 1] += rn * lazy[rt];
    lazy[rt] = 0;
  }
}
```
``` java [<code>add</code>]
public void add(int L, int R, int C,
                int l, int r, int rt) {
  if (L <= l && r <= R) {
    lazy[rt] += C;
    sum[rt] += C * (r - l + 1);
  } else {
    int mid = l + ((r - l) >> 1);
    pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid)
      add(L, R, C, l, mid, rt << 1);
    if (mid + 1 <= R)
      add(L, R, C, mid + 1, r, rt << 1 | 1);
    pushUp(rt);			
  }
}
```
``` java [<code>update</code>]
public void update(int L, int R, int C,
            int l, int r, int rt) {
  if (L <= l && r <= R) {
    update[rt] = true;
    change[rt] = C;
    sum[rt] = C * (r - l + 1);
    lazy[rt] = 0;
  } else {
    int mid = l + ((r - l) >> 1);
    pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid)
      update(L, R, C, l, mid, rt << 1);
    if (mid + 1 <= R)
      update(L, R, C, mid + 1, r, rt << 1 | 1);
    pushUp(rt);
  }
}
```
``` java [<code>query</code>]
public long query(int L, int R,
          int l, int r, int rt) {
  long result = 0;
  if (L <= l && r <= R) {
    result = sum[rt];
  } else {
    int mid = l + ((r - l) >> 1);
    pushDown(rt, mid - l + 1, r - mid);
    if (L <= mid)
      result += query(L, R, l, mid, rt << 1);
    if (mid + 1 <= R)
      result += query(L, R, mid + 1, r, rt << 1 | 1);
  }
  return result;
}
```
:::
::: details 完整代码
``` java
public class SegmentTree {
	private int MAXN;
	private int[] array;
	private int[] sum;
	private int[] lazy;
	private int[] change;
	private boolean[] update;
	
	public SegmentTree(int[] origin) {
		MAXN = origin.length + 1;
		array = new int[MAXN];
		for (int i = 1; i < MAXN; ++i)
			array[i] = origin[i - 1];
		sum = new int[MAXN << 2];
		lazy = new int[MAXN << 2];
		change = new int[MAXN << 2];
		update = new boolean[MAXN << 2];
	}
	
	public void build(int l, int r, int rt) {
		if (l == r) {
			sum[rt] = array[l];
		} else {
			int mid = l + ((r - l) >> 1);
			build(l, mid, rt << 1);
			build(mid + 1, r, rt << 1 | 1);
			pushUp(rt);
		}
	}
	
	private void pushUp(int rt) {
		sum[rt] = sum[rt << 1] + sum[rt << 1 | 1];
	}
	private void pushDown(int rt, int ln, int rn) {
		if (update[rt]) {
			update[rt << 1] = true;
			update[rt << 1 | 1] = true;
			change[rt << 1] = change[rt];
			change[rt << 1 | 1] = change[rt];
			lazy[rt << 1] = 0;
			lazy[rt << 1 | 1] = 0;
			sum[rt << 1] = change[rt] * ln;
			sum[rt << 1 | 1] = change[rt] * rn;
			update[rt] = false;
		}
		if (lazy[rt] != 0) {
			lazy[rt << 1] += lazy[rt];
			sum[rt << 1] += ln * lazy[rt];
			lazy[rt << 1 | 1] += lazy[rt];
			sum[rt << 1 | 1] += rn * lazy[rt];
			lazy[rt] = 0;
		}
	}
	
	public void add(int L, int R, int C,
					int l, int r, int rt) {
		if (L <= l && r <= R) {
			lazy[rt] += C;
			sum[rt] += C * (r - l + 1);
		} else {
			int mid = l + ((r - l) >> 1);
			pushDown(rt, mid - l + 1, r - mid);
			if (L <= mid)
				add(L, R, C, l, mid, rt << 1);
			if (mid + 1 <= R)
				add(L, R, C, mid + 1, r, rt << 1 | 1);
			pushUp(rt);			
		}
	}
	
	public void update(int L, int R, int C,
					   int l, int r, int rt) {
		if (L <= l && r <= R) {
			update[rt] = true;
			change[rt] = C;
			sum[rt] = C * (r - l + 1);
			lazy[rt] = 0;
		} else {
			int mid = l + ((r - l) >> 1);
			pushDown(rt, mid - l + 1, r - mid);
			if (L <= mid)
				update(L, R, C, l, mid, rt << 1);
			if (mid + 1 <= R)
				update(L, R, C, mid + 1, r, rt << 1 | 1);
			pushUp(rt);
		}
		
	}

	public long query(int L, int R,
					 int l, int r, int rt) {
		long result = 0;
		if (L <= l && r <= R) {
			result = sum[rt];
		} else {
			int mid = l + ((r - l) >> 1);
			pushDown(rt, mid - l + 1, r - mid);
			if (L <= mid)
				result += query(L, R, l, mid, rt << 1);
			if (mid + 1 <= R)
				result += query(L, R, mid + 1, r, rt << 1 | 1);
		}
		return result;
	}
}
```
:::
## 解释
1. `MAXN`：原始数组长度 `+1`
2. `array[i]`：`array[i] = origin[i - 1]`，`array[0]`不使用
3. `sum[i]`：结点`i`对应的范围的和
4. `lazy[i]`：结点`i`下面的所有节点（不包括结点`i`）都需要加`lazy[i]`，但是还没加
5. `change[i]`：结点`i`对应的范围内的所有元素被改变为`change[i]`
6. `update[i]`：结点`i`对应的范围内的所有元素都被改变了，`update[i] == true`时，`change[i]`才有意义  