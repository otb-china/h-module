# Paging 分页

#### 使用

```html
<!--基本使用-->
<h-paging
    :total="total"
    :page.sync="page"
    :limit.sync="limit"
    @pagination="pagingChange"
/>
```
> limit page 需配合.sync

#### 属性

| 属性名   | 类型     | 说明                  | 默认值 |
|:------|:-------|:--------------------|-----|
| total | number | 总条目数                |     |
| page  | number | 每页显示条目个数, 需配合sync使用 | 1   |
| limit | number | 当前页数, 需配合sync使用     | 10  |

#### 方法

| 方法名        | 触发条件          |
|:-----------|:--------------|
| pagination | 每页条数或当前页改变时触发 |
