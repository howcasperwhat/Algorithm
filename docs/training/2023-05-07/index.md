# 蓝桥杯国赛培训 第一周
## 二分
### 基础模板
``` java{2,3,4}
int search(int x) {
  int l = -1, r = n;
  while (l + 1 < r) {
    int mid = (l + r) >> 1;
    if (check(mid)) r = mid;
    else l = mid;
  }
}
```
::: tip
- 左右边界(`index = 0` 和 `index = length`)初始化时指向空
:::

### 模板练习
1. 最后一个小于3的数(x)
``` java{5,8}
// [ < 3 | >= 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] < 3) l = mid;
  else r = mid;
}
result = l;
```

2. 第一个大于等于3的数
``` java{5,8}
// [ < 3 | >= 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] < 3) l = mid;
  else r = mid;
}
result = r;
```

3. 最后一个小于等于3的数
``` java{5,8}
// [ <= 3 | > 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] <= 3) l = mid;
  else r = mid;
}
result = l;
```

4. 第一个大于3的数
``` java{5,8}
// [ <= 3 | > 3]
int l = -1, r = n;
while (l + 1 < r) {
  int mid = (l + r) >> 1;
  if (arr[mid] <= 3) l = mid;
  else r = mid;
}
result = r;
```

### 例题
1. [数组分段](./Q1) | [原题](https://www.luogu.com.cn/problem/P1182)
2. [奶牛晒衣服](./Q2) | [原题](https://www.luogu.com.cn/problem/P1843)
3. [借教室](./Q3) | [原题](https://www.luogu.com.cn/problem/P1083)

### 练习
1. [填涂颜色](./E1.md) | [原题](https://www.luogu.com.cn/problem/P8647)
2. [油滴扩展](./E2.md) | [原题](https://www.luogu.com.cn/problem/AT_abc144_e)
3. [机器人塔](./E3.md) | [原题](https://www.luogu.com.cn/problem/AT_abc153_f)
4. [移动字母](./E4.md) | [原题](https://www.luogu.com.cn/problem/P8660)

## 搜索
### 基础模板
``` java
// identify the definition of dfs
void dfs(int arg...) {
  if (dfsEnd(arg...)) {
    updateAns();
    return;
  }
  for (allSubState) {
    updateBefore();
    dfs(subStateArg...);
    updateAfter();
  }
}
```

### 例题
1. [数的划分](./Q4) | [原题](https://www.luogu.com.cn/problem/P1025)
2. [Don't Really Like How The Story Ends](./Q5)
3. [01迷宫](./Q6) | [原题](https://www.luogu.com.cn/problem/P1141)

### 练习
1. [填涂颜色](./E5.md) | [原题](https://www.luogu.com.cn/problem/P1162)
2. [油滴扩展](./E6.md) | [原题](https://www.luogu.com.cn/problem/P1378)
3. [机器人塔](./E7.md) | [原题](https://www.luogu.com.cn/problem/P8644)
4. [移动字母](./E8.md) | [原题](https://www.lanqiao.cn/problems/280/learning/)