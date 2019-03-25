# Anglesign 角签

----

### 基础用法

使用position定义Anglesign位置。

<div class="demo-block">
  <div style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign>提示</vq-anglesign>
  </div>
  <div class="m-10" style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign position="lb" bgcolor="#F04D00">通知</vq-anglesign>
  </div>
  <div class="m-10" style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign position="rt" bgcolor="#FD2261" color="#0000cc">紧急</vq-anglesign>
  </div>
  <div class="m-10" style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign position="rb" width="2em">提示</vq-anglesign>
  </div>
</div>



:::demo

```html
<div class="demo-block">
  <div style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign>提示</vq-anglesign>
  </div>
  <div class="m-10" style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign position="lb" bgcolor="#F04D00">通知</vq-anglesign>
  </div>
  <div class="m-10" style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign position="rt" bgcolor="#FD2261" color="#0000cc">紧急</vq-anglesign>
  </div>
  <div class="m-10" style="position: relative;
    background: #F7F7F7;
    height: 3em;
    overflow: hidden;">
    <vq-anglesign position="rb" width="2em">提示</vq-anglesign>
  </div>
</div>
```
:::



### Anglesign 参数



| 参数     | 说明       | 类型    | 可选值      | 默认值  |
| -------- | ---------- | ------- | ----------- | ------- |
| position | 角签位置   | String  | lt,lb,rt,rb | Lt      |
| bgcolor  | 背景颜色， | String  | --          | #47bac1 |
| color    | 字体颜色   | String  | --          | #fff    |
| width    | 宽度       | String  | --          | 3em     |
| hidden | 是否可见   | Boolean | --          | false   |

