# element-ui

### no-tag

```html
<!--结合dom标签无内容时 无边框无背景色-->
<div :class="tag ? '' : 'no-tag'">
  <el-tag size="small">
    {{ tag }}
  </el-tag>
</div>
```