# 最小公倍数 最大公约数
## 代码
::: code-group
``` java [gcd]
public static int gcd(int a, int b) {
  if (a == 0)
    return b;
  return gcd(b % a, a);
}
```

``` java [lcm]
public static int lcm(int a, int b) {
  return a * b / gcd(a, b);
}
```
:::