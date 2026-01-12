# 基本工具

```js
import {type} from "otb-module/src/utils/tool";
```

### fileSize 文件大小

```js
fileSize(value);
```

> value 传入文件大小数值, 返回Tb, Gb, Mb, Kb, 字节 等单位字符串

### validator 判断检验

```js
validator(value, type);
```

> 传入目标值进行判断, 返回布尔值  
> type 目前支持链接(link)  数字(number) 小数(decimals) 手机号(phone) 银行卡(bank) 身份证(idCard)

### go 路由跳转

```js
go(code, params);
```

> code 预先配置的code 或路由路径 或链接   
> params 为路由参数 选传 取参用sessionStorage.getItem(code)

### type 类型

```js
type(value);
```

> 返回值有 Array, Object, String, Number, Undefined, Boolean, Function

### fileLinkFileType 链接文件类型

```js
fileLinkFileType(value);
```

> 返回值有 jpg, jpeg, png, pdf, doc, docx, xsl, xslx 等

### sort 排序

```js
// 普通排序
sort(target, rank, field);

// 树形排序
treeSort(target, rank, field, children);
```

> target 目标数组  
> rank 排序方式 默认正序 asc 可选 asc desc  
> field 需进行排序的字段  
> children 子集合字段 默认 children

### getObject 获取对象

```js
getObject(target, id, props);
```

> target 目标数组  
> id 主键值  
> props 主键与子集配置 默认{id: "id", children: "children"}  
> 返回所需对象（支持树形结构）  
