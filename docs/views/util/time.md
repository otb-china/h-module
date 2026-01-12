# 时间工具

```js
import time from "otb-module/src/utils/time";

Vue.prototype.$time = time;
```

### initDate 初始化

```js
// 传参（时间）
this.$time.initDate(date);

// 返回
return {
  year: 2022,
  month: 11,
  day: 2,
  hour: 14,
  minute: 17,
  second: 19
};
```

### date 日期

```js
// 传参（时间, 间隔符号 默认"-"）
this.$time.date(date, symbol);

// 返回
return "2022-11-02";
```

### time 时间

```js
// 传参（时间, 间隔符号 默认":"）
this.$time.time(time, symbol);

// 返回
return "14:17:19";
```

### datetime 日期时间

```js
// 传参（时间, 间隔符号 默认["-", ":"]）
this.$time.datetime(datetime, symbol);

// 返回
return "2022-11-02 14:17:19";
```

### timestamp 时间戳

```js
this.$time.timestamp(date);
```

> 传参（时间） 返回时间戳

### timeDifference 时间差

```js
this.$time.timeDifference(begin, end);
```

> 传参（开始时间, 结束时间） 返回时间差

### howLongAgo 多久以前

```js
this.$time.howLongAgo(d, m, y, symbol);
```

> 传参（日, 月, 年, 间隔符号 默认 ["-", ":"]） 返回时间