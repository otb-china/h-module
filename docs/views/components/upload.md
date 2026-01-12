# Upload 上传

#### 使用

```html
<!--基本使用-->
<h-upload :value.sync="value" @update="update" @success="success" @remove="remove"/>
```

> value 需配合.sync  
> file-type 使用时传数组 例如 ['jpg', 'png', 'jpeg', 'pdf']

#### 属性

| 属性名         | 类型      | 说明           | 默认值          |
|:------------|---------|--------------|:-------------|
| list-type   | string  | 文件列表的类型      | picture-card |
| file-type   | array   | 可上传类型        | 所有           |
| limit       | number  | 最大允许上传个数     | 10           |
| tip         | string  | 提示说明文字       |              |
| action      | string  | 上传的地址        |              |
| upload-text | string  | 上传按钮文本       | 点击上传         |
| drag        | boolean | 是否可拖拽        | false        |
| multiple    | Boolean | 是否批量上传       | false        |
| disabled    | Boolean | 是否禁用         | false        |
| size        | number  | 附件上传的大小 单位Mb | 10           |

> list-type 可选值 text / picture / picture-card  
> file-type 可选值 jpg / jpeg / png / pdf / xls / xlsx / doc / docx

#### 方法

| 方法名     | 触发条件    |
|:--------|---------|
| update  | 更改附件后触发 |
| success | 上传成功后触发 |
| remove  | 删除成功后触发 |
