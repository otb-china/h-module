# 安装 npm
---

```sh
npm i otb-module
```

> 组件是在element-ui上进行的二次开发, 依赖于element-ui, 使用前须先引入element-ui

#### 在 main.js 引入

```js
import "otb-module/lib/otb-module.css";
import hui from "otb-module";

Vue.use(hui);
```

#### 使用指令（全局）

```js
import directives from "otb-module/src/utils/directives";

Vue.use(directives);
```

#### 使用样式（建议全局）

```js
import "otb-module/src/styles/index.scss";
```

#### 使用基本工具（建议局部）

```js
import {type} from "otb-module/src/utils/tool";
```

#### 使用时间工具（建议全局）

```js
import time from "otb-module/src/utils/time";

Vue.prototype.$time = time;
```

#### 配置指令 v-go/方法 go 路由数据（main.js）

```js
import {setLinkList} from "otb-module/src/utils/config";

setLinkList([
  {
    code: "USER_DETAIL",
    url: "/user/detail"
  }
]);
```

> 除动态路由外, 项目中的跳转路由可统一在一处配置使用, 方便维护管理


