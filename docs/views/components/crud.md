# CRUD

---

### 使用

```html
<!--基本使用-->
<h-crud :data="data" :column="column"/>

<!--特殊说明 limit page 需配合sync-->
<h-crud :total="total" :limit.sync="limit" :page.sync="page"/>
```

### 属性

| 属性名          | 类型     | 说明                     | 默认值   |
|:-------------|:-------|:-----------------------|:------|
| data         | array  | 表格的数据                  |       |
| option       | object | 表格配置项                  |       |
| size         | string | 组件统一设置默认大小             | small |
| search       | object | 搜索（配置项可见表单组件）          |       |
| operation    | object | 搜索右侧按钮操作区配置            |       |
| exportOption | object | 导出配置项                  |       |
| addDialog    | object | 新增弹窗                   |       |
| updDialog    | object | 编辑弹窗                   |       |
| beforeRowAdd | object | 新增弹窗之前可选回调(需返回Promise) |       |
| beforeRowUpd | object | 编辑弹窗之前可选回调(需返回Promise) |       |
| author       | object | 权限配置(目前仅支持按钮)          |       |
| total        | object | 总条目数（值不小于0时展示分页）       |       |
| page         | object | 当前页数, 需配合sync使用        | 1     |
| limit        | object | 每页显示条目个数, 需配合sync使用    | 10    |

> size 可选值 medium / small / mini  
> search addDialog updDialog 的部分配属性置可参考表单组件

### 属性详述

##### option

| 属性名                 | 类型      | 说明          | 默认值             |
|:--------------------|:--------|:------------|:----------------|
| column              | object  | 表格列配置       |                 |
| updBtn              | object  | 编辑按钮对象      |                 |
| delBtn              | object  | 删除按钮对象      |                 |
| viewBtn             | object  | 详情按钮对象      |                 |
| customBtn           | array   | 扩展按钮        | []              |
| fit                 | boolean | 表格列的宽度是否自撑开 | true            |
| border              | boolean | 表格是否带有纵向边框  | true            |
| maxHeight           | number  | 表格最大高度      |                 |
| summary             | boolean | 表格合计        | false           |
| currentRow          | boolean | 表格行可选中      | false           |
| LoadingText         | string  | 加载时文本       | 拼命加载中           |
| loadingIcon         | string  | 加载时icon     | el-icon-loading |
| tableSelection      | boolean | 表格复选框       | false           |
| tableSelectionWidth | number  | 复选框列宽       | 80              |
| tableSelectionFixed | boolean | 复选框列固定      | true            |
| tableIndex          | boolean | 表格索引        | false           |
| tableIndexWidth     | number  | 索引列宽        | 80              |
| tableIndexLabel     | string  | 索引列文本       | 序号              |
| tableIndexFixed     | boolean | 索引列固定       | true            |
| operationShow       | boolean | 表格操作列       | true            |
| operationWidth      | number  | 操作列宽度       | 200             |
| operationLabel      | number  | 操作列名        |                 |
| customBtn           | array   | 表格操作列扩展按钮   | []              |

> 按钮大小可选值 medium / small / mini  
> 按钮类型可选值 primary / success / warning / danger / info / text / primary  
> 扩展按钮/表格扩展按钮示例
>```js
> let option = {
>   customBtn: [{
>     click: () => {},
>     type: "primary",
>     size: "small",
>     plain: false,
>     content: "扩展按钮名"
>   }]
> }
> ```

##### option=>column

| 属性名       | 类型      | 说明            | 可选值                   | 默认值  |
|:----------|:--------|:--------------|:----------------------|:-----|
| label     | string  | 列名            |                       |      |
| prop      | string  | 列字段           |                       |      |
| width     | number  | 列宽            |                       |      |
| fixed     | string  | 固定方式          | left / right          |      |
| align     | string  | 对其方式          | left / center / right | left |
| unit      | string  | 单位            |                       |      |
| tag       | boolean | 标签            |                       |      |
| type      | string  | 标签类型          | 与按钮一样                 |      |
| size      | string  | 标签大小          | 与按钮一样                 |      |
| option    | array   | 配置数组, 用于展示对应值 |                       |      |
| optionKey | string  | 唯一key         |                       |      |
| optionVal | string  | 唯一key对应的值     |                       |      |

> 示例
>```js
>let column = [
>  {
>    label: "姓名",
>    prop: "name",
>    width: 150,
>    fixed: "left",
>    align: "center"
>  }
>]
>```

##### operation

| 属性名       | 类型     | 说明     | 可选值 | 默认值 |
|:----------|:-------|:-------|:----|:----|
| addBtn    | object | 新增按钮对象 |     |
| exportBtn | object | 导出按钮对象 |     |
| customBtn | array  | 扩展按钮   | []  |

##### addDialog/updDialog

| 属性名            | 类型      | 说明     | 默认值     |
|:---------------|:--------|:-------|:--------|
| title          | string  | 弹窗名    | 新增/编辑   |
| width          | string  | 弹窗宽度   | 18%     |
| confirmBtn     | boolean | 取消按钮   | true    |
| confirmBtnSize | string  | 取消按钮大小 | small   |
| confirmBtnType | string  | 取消按钮类型 |         |
| confirmBtnName | string  | 取消按钮文本 | 取消      |
| cancelBtn      | boolean | 确定按钮   | true    |
| cancelBtnSize  | string  | 确定按钮大小 | small   |
| cancelBtnType  | string  | 确定按钮类型 | primary |
| cancelBtnName  | string  | 确定按钮文本 | 确定      |
| hasValRules    | array   | 有值时校验  |         |

> 此为新增/编辑弹窗部分属性, 其他属性配置可参考表单组件  
> 表单组件的 form option 属性必须配置  
> hasValRules 属性示例（type 参考 validator 判断检验工具）
>```js
>let hasValRules = [
>  {
>    prop: "mobile",
>    type: "phone",
>    message: "手机号格式有误"
>  },
>  {
>    prop: "id_card",
>    type: "idCard",
>    message: "身份证格式有误"
>  },
>  {
>    prop: "bank_card",
>    type: "bank",
>    message: "银行卡号格式有误"
>  }
>]
>```

### 方法

| 方法名             | 触发条件              |
|:----------------|:------------------|
| searchChange    | 搜索区任一搜索项改变时触发     |
| pagingChange    | 分页的每页条数或当前页改变时触发  |
| dialogChange    | 新增/编辑弹窗任一内容改变时触发  |
| rowAdd          | 提交新增内容时触发         |
| rowUpd          | 提交编辑内容时触发         |
| rowDel          | 点击删除按钮时触发         |
| close           | 新增/编辑弹窗关闭时回调      |
| export          | 点击导出按钮时触发         |
| download        | 点击导出列表下载 icon 时触发 |
| selectionChange | 表格复选框改变时触发        |
