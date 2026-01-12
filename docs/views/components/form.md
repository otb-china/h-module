# Form 表单

### 使用

```html
<!--基本使用-->
<h-form :form="selectForm" :option="selectOption"/>
```

### 表单属性

| 属性名        | 类型      | 说明      | 默认值         |
|:-----------|:--------|:--------|:------------|
| form       | object  | 表单的数据   |             |
| option     | array   | 表单项配置   |             |
| rules      | array   | 表单项校验   |             |
| size       | string  | 表单项默认大小 | small       |
| formWidth  | string  | 表单宽度    | fit-content |
| labelWidth | string  | 表单项标签宽度 | 5vw         |
| itemWidth  | string  | 表单项宽度   | 10vw        |
| disabled   | boolean | 表单禁用    | false       |

> 宽度单位建议vw/rem, 也可用css的属性  
> size 可选值 medium / small / mini

### 表单方法

| 方法名            | 说明            | 触发条件              |
|:---------------|:--------------|:------------------|
| change         | 具有可操作性的表单项    | 输入框失去焦点或用户按下回车时触发 |
| input          | 表单项为输入框时      | 输入框值改变时触发         |
| blur           | 具有可操作性的表单项    | 失去焦点时触发           |
| upload-update  | 表单项为 upload 时 | 更改附件后触发           |
| upload-success | 表单项为 upload 时 | 上传成功后触发           |
| upload-remove  | 表单项为 upload 时 | 删除成功后触发           |

> 如使用多个相同表单项且表单项绑定方法不通用, 可在表单项单独编写方法

### 表单项配置

##### 表单项（type 属性可选值）

| 可选值         | 说明      | 可选值           | 说明        |
|:------------|:--------|---------------|-----------|
| input       | 文本输入框   | datetime      | 日期类型选择框   |
| number      | 数字输入框   | daterange     | 日期范围类型选择框 |
| textarea    | 文本域输入框  | datetimerange | 日期范围类型选择框 |
| select      | 下拉框     | switch        | 开关        |
| time        | 时间选择框   | span          | 展示文本      |
| timerange   | 时间范围选择框 | hint          | 提示信息      |
| year        | 日期类型选择框 | button        | 按钮        |
| date        | 日期类型选择框 | upload        | 附件        |
| preview     | 预览      | radio         | 单选框       |
| checkbox    | 多选框     | slider        | 滑块        |
| rate        | 评分      | divider       | 分割线       |
| inputNumber | 计数器     |               |           |

> 表单项 为 upload 时属性配置详见 Upload 组件  
> 表单项 为 preview 时属性配置详见 Preview 组件

##### 表单项通用属性

| 属性名         | 类型       | 说明                | 默认值        |
|:------------|:---------|:------------------|:-----------|
| type        | string   | 子项类型              |            |
| label       | string   | 子项标签              |            |
| prop        | string   | 子项字段              |            |
| show        | boolean  | 是否展示              | true       |
| margin      | string   | 外边距               |            |
| placeholder | string   | 输入框占位文本           | 请输入 + 项标签名 |
| labelWidth  | string   | 标签宽度              | 5vw        |
| itemWidth   | string   | 宽度                | 10vw       |
| clearable   | boolean  | 是否可清空             | true       |
| disabled    | boolean  | 是否禁用              | false      |
| size        | string   | 大小                | small      |

> 表单项属性优先级高于表单属性, 例如 labelWidth itemWidth size  
> size 可选值 medium / small / mini

##### 表单项所有方法

| 方法名     | 说明            | 触发条件              |
|:--------|:--------------|:------------------|
| change  | 具有可操作性的表单项    | 输入框失去焦点或用户按下回车时触发 |
| input   | 表单项为输入框时      | 输入框值改变时触发         |
| click   | 表单项为按钮时       | 按钮点击时触发           |
| blur    | 具有可操作性的表单项    | 失去焦点时触发           |
| update  | 表单项为 upload 时 | 更改附件后触发           |
| success | 表单项为 upload 时 | 上传成功后触发           |
| remove  | 表单项为 upload 时 | 删除成功后触发           |

##### 表单项（时间类型）通用属性

| 属性名              | 类型     | 说明       | 默认值               |
|:-----------------|:-------|:---------|:------------------|
| valueFormat      | string | 日期时间格式化  | 详见表valueFormat默认值 |
| startPlaceholder | string | 双输入框占位文本 | 开始时间/开始日期         |
| endPlaceholder   | string | 双输入框占位文本 | 结束时间/结束日期         |

##### valueFormat 默认值

| 属性名                    | 默认值                 |
|:-----------------------|:--------------------|
| year                   | yyyy                |
| month                  | yyyy-MM             |
| time/timerange         | HH:mm:ss            |
| date/daterange         | yyyy-MM-dd          |
| datetime/datetimerange | yyyy-MM-dd HH:mm:ss |

##### datetime

| 属性名         | 类型     | 说明    | 默认值      |
|:------------|:-------|:------|:---------|
| defaultTime | string | 时间默认值 | 00:00:00 |

##### datetimerange

| 属性名              | 类型     | 说明    | 默认值      |
|:-----------------|:-------|:------|:---------|
| defaultStartTime | string | 时间默认值 | 00:00:00 |
| defaultEndTime   | string | 时间默认值 | 00:00:00 |

##### number/inputNumber

| 属性名  | 类型     | 说明     | 默认值 |
|:-----|:-------|:-------|:----|
| step | number | 合法数字间隔 |     |
| min  | number | 最小值    | 0   |
| max  | number | 最大值    |     |

##### textarea

| 属性名  | 类型     | 说明    | 默认值 |
|:-----|:-------|:------|:----|
| rows | number | 输入框行数 | 2   |

##### select

| 属性名         | 类型       | 说明                           | 默认值   |
|:------------|:---------|:-----------------------------|:------|
| option      | array    | 下拉框展示数据                      |       |
| valueKey    | string   | 作为 value 唯一标识的键名，绑定值为对象类型时必填 |       |
| optionKey   | string   | 展示数据key                      |       |
| optionVal   | string   | 展示数据value                    |       |
| multiple    | boolean  | 是否多选                         | false |
| allowCreate | boolean  | 是否允许用户创建新条目                  | false |

##### span

| 属性名     | 类型     | 说明                           |
|:--------|:-------|:-----------------------------|
| content | string | 文本内容（如设置prop属性, 则prop属性优先级高） |   
| color   | string | 展示文本颜色                       |   

##### hint

| 属性名  | 类型     | 说明     |
|:-----|:-------|:-------|
| hint | string | 提示信息内容 |

##### button

| 属性名     | 类型     | 说明   | 默认值     |
|:--------|:-------|:-----|:--------|
| btnType | string | 按钮类型 | primary |

> btnType 可选值 primary / success / warning / danger / info / text

##### radio/checkbox

| 属性名       | 类型      | 说明                      | 默认值   |
|:----------|:--------|:------------------------|:------|
| button    | boolean | 按钮组                     | false |
| fill      | string  | 按钮形式的 Radio 激活时的填充色和边框色 |       |
| textColor | string  | 按钮形式的 Radio 激活时的文本颜色    |       |
| min       | number  | 可被勾选的 checkbox 的最小数量    |       |
| max       | number  | 可被勾选的 checkbox 的最大数量    |       |

##### slider

| 属性名               | 类型              | 说明                                                      | 默认值 |
|:------------------|:----------------|:--------------------------------------------------------|:----|
| height            | string          | Slider 高度，竖向模式时必填                                       |     |
| vertical          | boolean         | 是否竖向模式                                                  |     |
| range             | string          | 是否为范围选择                                                 |     |
| min               | number          | 最小值                                                     | 0   |
| max               | number          | 最大值                                                     | 100 |
| showInput         | boolean         | 是否显示输入框，仅在非范围选择时有效                                      |     |
| inputSize         | string          | 输入框的尺寸                                                  |     |
| debounce          | number          | 输入时的去抖延迟，毫秒，仅在show-input等于true时有效                       | 300 |
| tooltipClass      | string          | tooltip 的自定义类名                                          |     |
| showInputControls | boolean         | 在显示输入框的情况下，是否显示输入框的控制按钮                                 |     |
| showStops         | boolean         | 是否显示间断点                                                 |     |
| tooltip           | boolean         | 是否显示 tooltip                                            |     |
| formatTooltip     | function(value) | 格式化 tooltip message                                     |     |
| step              | number          | 步长                                                      | 1   |
| marks             | object          | 标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式 |     |

##### rate

| 属性名               | 类型           | 说明                                                                    | 默认值   |
|:------------------|:-------------|:----------------------------------------------------------------------|:------|
| top               | number       | 相对于顶部距离                                                               |       |
| colors            | array/object | icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 |       |
| voidColor         | string       | 未选中 icon 的颜色                                                          |       |
| disabledVoidColor | string       | 只读时未选中 icon 的颜色                                                       |       |
| showText          | boolean      | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容                               | false |
| textColor         | string       | 辅助文字的颜色                                                               |       |
| texts             | array        | 辅助文字数组                                                                |       |
| icon              | array/object | icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名 |       |
| voidIcon          | string       | 未选中 icon 的类名                                                          |       |
| disabledVoidIcon  | string       | 只读时未选中 icon 的类名                                                       |       |
| showScore         | boolean      | 是否显示当前分数，show-score 和 show-text 不能同时为真                                |       |
| allowHalf         | boolean      | 是否允许半选                                                                |       |
| lowThreshold      | number       | 低分和中等分数的界限值，值本身被划分在低分中                                                | 2     |
| highThreshold     | number       | 高分和中等分数的界限值，值本身被划分在高分中                                                | 4     |

##### divider

| 属性名             | 类型      | 说明         | 默认值    |
|:----------------|:--------|:-----------|:-------|
| vertical        | boolean | 是否水平       |        |
| contentPosition | string  | 设置分割线文案的位置 | center |
| iconPosition    | string  | 设置icon的位置  | left   |
| content         | string  | 文案内容       |        |


