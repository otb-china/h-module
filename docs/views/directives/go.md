# v-go 跳转

---

#### 使用

```html
<!--使用方式-->
<div v-go="code"></div>

<div v-go="[code,params]"></div>
```

> code 预先配置的code 或路由路径 或链接   
> params 路由跳转的带参

#### 配置指令路由数据（main.js）

```js
import {setLinkList} from "otb-module/src/utils/config";

setLinkList([
  {
    code: "USER_DETAIL",
    url: "/user/detail"
  }
]);
```