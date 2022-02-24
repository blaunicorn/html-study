### 知讲堂 web 前端 20 天

F:\code-tencent\html-study\求知讲堂 web 前端
https://www.bilibili.com/video/BV1i7411Z7d8?p=50

#### css 第三天

11. 属性选择器:属性选择器可以根据元素的属性及属性值来选择元素
    [属性名]：包含于指定属性名称的元素
    [属性名=值]:属性名的值为指定值的元素
    [属性名~=值]:属性名的值 包含 指定值的元素
    [属性名^=值]:属性名的值 以指定值为开头 的元素
    [属性名$=值]:属性名的值 以指定值为结尾 的元素
    ps: 属性如果是数组，可以以空格隔开

```
// style
div.content[title] {
  font-weight:bold;
}
input[name=user] {
  boackground-color:#999;
}
div[class~=1] {
  background-color:#5aff29;
}
// body
<div class="content box1" title="title">content1</div>
<div class="content box2">content2</div>
<form action=">
  <input type="text" name="account">
  <input type="text" name="user">

</form>
```

12. 关系选择器

    ```
      <style>
        /* 后代选择器 */
        /* h1 strong {
          color: blue;
        } */
        /* 父子选择器 */
        /* h1 > strong {
          color: blue;
          background-color: black;
        } */
        /* 兄弟选择器 */
        strong + span {
          color: red;
          background-color: blueviolet;
        }
      </style>
      <body>
        <h1>
          <strong>子元素1 </strong><span>兄弟<strong>孙元素</strong></span
          ><br />
          <strong
            >不相邻兄弟元素 <span><strong>孙元素</strong></span></strong
          ><br />
          <strong
            >跟第一个比，不是相邻兄弟元素 <strong></strong><span>孙元素</span></strong></strong
          >
        </h1>
      </body>
    ```

    后代选择器：可以选择作为某元素后代的元素
    ps：需要用空格把两个属性隔开

    父子关系选择器：只能选择为某一元素子元素的元素
    ps：用>表示只选择儿子。孙子等是不选择的

    兄弟关系选择器：相邻兄弟选择器，可以选择紧接在另一个元素后的元素，且二者有相同父元素
    ps:用+表示兄弟选择

13. css 伪类选择器

    伪类允许出现在选择器的任何位置，而伪元素只能跟在选择器的最后一个简单选择器后面
    :before/:after/:first-letter/:first-line 可以单冒号，单尽量双冒号。
    ::selection/::placehoder/::backdrop

14. 浮动
    目的是把块级标签排在一行上
    float: left right none,，脱离了标准文档空间，容易引起高度塌陷
    清除浮动：浮动后，后面的元素会填充到浮动的位置，需要清除浮动
    1） 添加空标签，并设置样式
    clear: left 清除左浮动 right 清除右浮动 both 清除左右浮动 none 左右浮动都不清除
    .clear {
    clear:both
    }
    2）在要清除浮动的父级添加样式：overflow:hidden 或 position:absolute 样式

    ```
      <div class="wrapper" style="overflow: hidden;">
          <div class="box1" style="float:left"></div>
          <div class="box2" style="float:left"></div>
        </div>
      <div class="box3"></div>
    ```

    overflow 属性
    当子元素的尺寸超过父元素的尺寸时，需要设置父元素显示溢出的子元素的方式。
    visible：默认值，内容不会被修剪，会呈现在元素框外，不剪切也不添加滚动条
    auto：自动根据内容添加滚动条
    hidden：内容会被修剪，其余内容不可见，此属性还可有清除浮动，清除 margin-top 塌陷的功能
    scroll：内容会被修剪，但在浏览器会显示滚动条以便查看其它的内容
    3）：after ，减少空标签的多余,在父级上添加伪元素
    .clear:after{
    display:block;
    content:'';
    clear:both;
    }

    快捷方式
    .info-show>head-sculpture>.photo+.txt

    ```
    		<div class="info-show">
    		<div class="head-sculpture">
    			<div class="photo"></div>
    			<div class="txt"></div>
    		</div>
    	</div>
    ```

    ```
    	<div class="info-show" style="width: 600px; padding: 20px;border:1px solid #ccc;margin: 100px autp;overflow: hidden;">
    		<div class="head-sculpture" style="float: left;">
    			<div class="photo" style="width: 200px;height: 300px;border: 1px solid #000;text-align: center;line-height:300px;">头像</div>
    			<div class="txt" style="text-align: center;">姓名</div>

    		</div>
    		<div class="description" style="height: 300px; float: left;margin-left:10px;border:1px solid #ccc; width: 380px;">描述</div>
    	</div>
    ```

    display:talbe-cell; vertical-align:middle
    与 line-height:300px; height:300px;效果一直，都是文字垂直居中

### 如何触发 BFC

    根元素
    loat的值不为none
    overflow的值不为visible
    display的值为inline-block、table-cell、table-caption
    position的值为absolute或fixed
    display：table也认为可以生成BFC，其实这里的主要原因在于Table会默认生成一个匿名的table-cell，正是这个匿名的table-ccell生成了BFC

6. 盒子模型
   每个元素都是一个盒子，包括 margin、border、padding、content 组成
   系统默认外边距为 8px；
   1）外边距（margin）：margin-left、margin-right、margin-bottom、margin-top
   1 个参数（上下左右同一个外边距） 2 个参数（参数 1 上下，参数 2 左右） 3 个参数（参数 1 上 参数 2 左右 参数 3 下） 4 个参数（一次为上右下左）
   margin 不起作用的原因往往是没有考虑到 display：“display:block”或者“display:inline”
   margin 不能为内联元素指定边距
   表格中的 tr 和 td 元素或者 display 计算值为 table-cell 或 table-row 的元素
   margin 合并的时候，更改 margin 值可能是没有效果的。以父子 margin 重叠为例，假设父元素设置有 margin-top:50px，则此时子元素设置 margin-top:30px 就没有任何效果表现，除非大小比 50px 大，或者是负值。
   绝对定位元素非定位方位的 margin 值“无效”。
   主要是因为绝对定位元素的渲染是独立的，普通元素和兄弟元素是心连心，你动我也动，但是绝对定位元素由于独立渲染无法和兄弟元素插科打诨，因此，margin 无法影响兄弟元素定位，所以看上去就“无效”。
   定高容器的子元素的 margin-bottom 或者宽度定死的子元素的 margin-right 的定位“失效”。原因在于，若想使用 margin 属性改变自身的位置，必须是和当前元素定位方向一样的 margin 属性才可以，否则，margin 只能影响后面的元素或者父元素。
   2）padding：内边距，
   3）border：边框（内边距与外边距之间的线框）
   border-width:设置边框的宽度
   border-style:设置边框的样式 :noe solid double dotted dashed
   border-color:边框颜色
   边框的简写，也可写 border-top border-bottom border-left border-right
   border：width style color

box-sizing:CSS3 中添加了 box-sizing 属性来改变默认的盒子模型，
content-box 默认值，元素的实际宽度或高度等于元素内容区的宽度或高度、内边距和边框的和
border-box 在元素的内容区内绘制内边距或边框，内边距或边框不会影响元素的实际宽度或高度
inherit 从父元素继承 box-sizing 属性的值。

7. display 属性
   属性值：
   none: 不显示元素；
   block： 块显示
   inline:默认值，此元素会被显示为内联元素，元素前后没有换行符，内联元素所占据的空间就是他的标签所定义的大小（不能设置 width 和 height）
   inline-block:行内块元素，可并列

8. table 样式
   border-collapse:collapse 单线边框
   margin：0 auto 表格居中
   width 设置宽度后，每个单元格会默认等分宽度
   height： 设置高度后，每个单元格会默认等分高度
   border：不太常用
   cellspacing: 单元格间距
   td\tr 属性：

   ````
   width
   height
   border
   text-align 文本左右对齐方式(left\center\right)
   vertical-align 文本上下对齐方式(middle\top\bottom)
   ```
   table>tr*3>td{\_内容$}*4
   table {
   border:1px solid #666;
   border-collapse:collapse;
   margin:0 auto;
   width:500px;
   height:300px;
   text-align:center; 下级左右居中
   }
   td {
   border:1px solid #666;
   vertical-align:top; 本级顶端对齐 bottom 低端对齐，center 上下居中对齐
   }
   ````

9. 列表样式
   可用于 菜单、商品列表等
   1）列表类型：无序列表 ul》li、有序列表 ol》li、用户自定义列表（dl>dt>一个或多个 dd）
   dl 一般用于设定一个定义，比如名词解释等。dt 是标题，dd：是描述
   2）样式( 用来修改标识类型)
   list-style-image:用图像标识标识
   list-style-position:标识的位置 inside（占用字符空间） outside(默认值，不占用默认空间)
   list-style-type:标识类型
   简写（复写方式）list-style: list-style-image list-style-position list-style-type
   list-style 的值可以按任意顺序列出，而且可以忽略，只要提供一个值，其他的都自动默认

   list-style-type 的属性值：
   a）无序： disc（默认值）\circel\square
   b) 有序：decimal(默认值)\decimal-leading-zero(数字前补 0)\lower-roman\upper-roman\lower-alpha\upper-alpha\lower-greak\lower-latin\upper-latin\....
   有序和无序都有一个属性：none

   ```
   ul 或li都可以
   ul {
     list-style-type: circel;
     list-style-type: none;
     list-style-position:inside;
     list-style-image:url("close_icon.png")
   }
   ol {
   list-style-type: decimal-leading-zero;
   }
   dl {

   }
   ```

10. 轮播图
    主要用于产品展示或公司相关宣传
    1）轮播的组图（至少两张以上）
    2）控制器
    3）计数器

#### 第五章 css 定位布局

    定位(position)
        规定元素的定位类型，绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型，相对定位元素会相对于它在正常流中的默认位置偏移。
        属性值
        static：默认值，没有定位，元素出现在正常的文档流中，这时给这个元素设置的left、right、bottom、top这些偏移属性都没有效果的。
        relative：相对定位。占用标准流（文档流），它会出现在文档应该的位置，可以设置偏移值移动，但原有位置依然被占用。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。
        absolute：绝对定位。元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素(譬如body)的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。绝对定位一般与相对定位结合使用，这时它的父级就是relative定义的元素。
        fixed：固定定位。元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。一般用于开发固定导航栏
        sticky：粘性定位。一个sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto, 或 overlay时），即便这个祖先不是最近的真实可滚动祖先。这有效地抑制了任何“sticky”行为
    z-index： 仅能在定位元素上奏效（static无效），元素可拥有负的z-index属性值，普通流的z-index默认为0.脱离了普通流，在普通流之上（定位、浮动）z-index为0-1之间，如果将z-index值设置为大于或等于1，元素将会在定位或者浮动流之上。
    网站整体布局：先整体再局部，从上至下，逐步细化
         1）双飞翼布局：两端固定、中间自适应
         ```
          <!-- 双飞翼布局 -->
          <style>
            body {
              margin: 0;
              padding: 0;
            }
            .container {
              width: 100%;
            }
            .column {
              float: left;
              height: 100vh;
            }
            .left {
              width: 300px;
              background-color: #f00;
              /* 这个是覆盖上边center的宽度，所以用100% */
              margin-left: -100%;
            }
            .center {
              width: 100%;
              background-color: #0f0;
            }
            .right {
              width: 300px;
              background-color: #00f;
              /* 这个是要覆盖上边一个 .right本身的宽度，所以用-300px */
              margin-left: -300px;
            }
          </style>
          <div class="contaner">
            <div class="column center">center</div>
            <div class="column left">left</div>

            <div class="column right">right</div>
          </div>
         ```
         2)圣杯布局:也是三列布局，两边定宽，中间自适应布局。布局时 与双飞翼相比，增加了定位和偏移值。
          ```
          <!-- 圣杯布局 -->
            <!-- 一个网页通常由上中下三部分组成 -->
            <!-- header头部 -->
            <!-- 主体内容区 -->
            <!-- 尾部 -->
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }

              .header,
              .footer {
                width: 100%;
                height: 100px;
                background-color: #2fff99;
                text-align: center;
                font-size: 30px;
                line-height: 100px;
              }
              .container {
                min-width: 600px;
                padding: 0 200px;
              }
              .container::after {
                display: block;
                content: '';
                clear: both;
              }
              .column {
                float: left;
                height: 200px;
                position: relative;
              }
              .left {
                width: 200px;
                background-color: #f00;
                margin-left: -100%;
                left: -200px;
              }
              .right {
                width: 200px;
                background-color: #00f;
                margin-left: -200px;
                left: 200px;
              }
              .center {
                width: 100%;
                background-color: #0f0;
              }
            </style>

            <div class="header">header</div>

            <div class="container">
              <div class="column center">center</div>
              <div class="column left">left</div>
              <div class="column right">right</div>
            </div>

            <div class="footer">foot</div>
          ```


          3)侧边栏固定布局
               两栏布局
                  a) 左侧固定,右侧自适应
                  b）右侧固定，左侧自适应
                  c）左右都固定
                三栏布局
                   a)左侧固定，右侧固定，中间自适应
                   b）左侧自适应，中间、右侧固定
                   c）左侧和中间都固定，右侧自适应
    BFC&IFC：BFC(block Formatting Context) ， IFC（Inline Formatting Context） 块级格式化上下文。是css2.1的规范，决定子元素如何定位和与其他元素的关系和相互作用。
        BFC形成的条件：float除了none以外的值；定位元素position（absolute/fixed）;display(inline-block\table-cell\table-caption);overflow(值为hidden、auto、scroll时)

        BFC特性：内部的盒子会在垂直方向上一个接一个的放置；垂直方向上的距离由最大的margin值决定（因为会有塌陷，如果两个盒子不要叠加，就需要把盒子变成一个独立的容器），BFC的区域不会与float元素区域重叠；计算BFC的高度时，浮动元素也参与计算；

        BFC就是页面上的一个独立的容器，容器里面的子元素不会影响到外面的元素。

        BFC的作用，解决margin重叠的问题（添加独立bfc）；解决浮动高度塌陷的问题（父级添加样式触发bfc）；解决侵占浮动元素的问题（即清除浮动的方法）


        IFC：行内格式上下文
        IFC形成条件 font-size line-height height vertacal-align
        IFC特性规则：
            a）IFC的元素会在一行中从左到右排列；
            b）在一行上的所有元素会在该区域形成一个行框；
            c）行宽的高度为包含框的高度，高度为行框中最高元素的高度；
            d）浮动的元素不会在行框中，并且浮动元素会压缩行框的宽度；
            e）行框的宽度容纳不下子元素时，子元素会自动换到下一行显示，并且会产生新行框；
            f）行框的元素内遵循text-align和vertical-align。
            		行内标签不识别宽高，如果要让行内标签识别宽高，必须用display把它设置成块级标签

### 第六章 HTML5 新特性

    Html5介绍：2014年正式发布；新特性增加了audio、video音视频播放，抛弃了flash；新增了canvas画布；地理定位；离线缓存；硬件加速；web socket通信；增加了本地存储；增加了语义化标签；

    Html5网页标准结构：
    布局标签：header\nav\aside\section\article\footer\main
    在一个文档中不能出现一个以上的main元素，main元素不能是aside、footer、header、nav的后代
    语义化标签：
        1、mark高亮显示，行级标签；
        2、details描述、summary摘要：一般用名词解释，或封装一个区块
        ```
          <details>
            <summary>大前端开发</summary>
            <p>包括1。。。。。</p>
            <p>包括2。。。。。</p>
          </details>
        ```
        3、meter定义度量衡,属性：value、min、max
        ```
          <meter value="110" max="120" min="80"></meter>公里/小时
        ```
        4、progress：定义进度条
        ```
          <progress max="100" value="40"></progress>
        ```
        5、dialog：定义对话框或窗口
        ```
          <dialog open>这是一个打开的对话框</dialog>
        ```
        6、figure:用于对元素进行组合，一般用于组合一张图的标题、图片和图片描述等，便于布局
        ```
          <style>
            figure {
              width: 200px;
              text-align: center;
            }
            figure img {
              width: 100%;
            }
            figure p {
              margin-top: -4px;
            }
          </style>
          <figure>
            <h4>冰天雪地</h4>
            <img src="./images/logo.png" alt="" srcset="" />
            <p>这个很冷的</p>
          </figure>
        ```
    html5多媒体标签
         1、audio：播放音乐或音频。ie9以下版本不支持；支持的格式MP3、wav、ogg。属性：src文件路径、autoplay自动播放、loop循环、controls控制条、muted静音、preload预加载（当使用autoplay时，preload自动失效）
         2、video：播放视频。支持的格式：mp4、ogg、webm，ie9以下不支持。属性：src、autoplay、controls、loop、muted、preload、width视频宽度、height视频高度、poster海报
         3、embed：加载插件或嵌入内容。属性：src、width、height、type类型、autostart、loop、hidden、starttime="00:05"、controls="smallcontrols"
          4、canvas：画布，是一个容器元素。注意：单独使用canvas没有什么意义，它必须结合JavaScript使用。canvas的宽高最好不要通过css实现，而是直接通过width和height实现。


    html5新增常用属性
    1) contentEditable:将变迁转换为可编辑状态，可用于所有标签，值为ture 、false。
    2）hidden：对元素进行隐藏。一般用于传值或当某个条件成立时，执行内容显示。默认值为hidden。
    3）data-*:自定义属性,用于存储页面或应用程序的私有自定义数据，一般用于传值。
    4) multiple: 输入域中可选择多个内容。用于表单组件中。
    5）required:约束表单元素提前前必须输入，需要提交按钮。
    6)pattern:属性规定用于验证输入字段的格式
    ```
    	<input type="text" name="" id="" pattern="[A-Za-z]{4,6}" />
    ```
    html5新表单
       表单组件
          1)color：颜色
          2)email：邮箱
          3)tel：电话号码
          4)url：网址
          5)number：数字
          6)range：范围
          7)search：搜索
          8)date
          9)datetime
          10)datetime-local
          11)year
          12)month
          13)week
          14)time
        表单属性
           1)formaction:修改action数据提交的地址
           2)formenctype：修改表单请求的类型("application/x-www-form-urlencoded"普通表单类型、multipart/form-data)
           3)formmethod：修改数据提交的方法
           4)form:设置表单元素属于哪个表单
           5)novalidate:规定提交表单时不验证，适用于form、以及input标签的text、search、url、telephone、email、password、date pickers、range、color等
        input属性
           1)autocomplete:自动完成。默认值on、off，默认为on
           2)autofocus:自动获取焦点
           3)step：步长
           4)multiple:多选
           5)pattern:正则匹配
           6)placeholder:输入提示
           7)required:必须输入

    html5代码规范
        推荐小写
        关闭所有html元素
        属性值尽量用双引号

#### 第七章 css 新特性

0.  css3 兼容处理
    通常做法：加厂商前缀（ie：trident webkit：chorme 和 safari gecko：firefox blink：chrome 和 opear）
    tips:国内的浏览器大多都是双核的。
    IE：-ms-
    Chrome、safari：-webkit-
    Gecko：-moz-
    Opera：-o-
1.  选择器
    1. 属性选择器
    2. 结构性伪类
    3. 目标伪类
    4. ui 元素状态伪类(表单元素)
    5. 否定伪类
    6. 童工兄弟元素选择器
2.  css3 文本

    1.  text-shadow:设置文本阴影
        text-shadow: 水平偏移 垂直偏移 模糊距离 阴影的尺寸 颜色 inset|outset;
        ```
          h1 {
            text-shadow: 2px 3px 5px red;
          }
        ```
    2.  word-wrap:文本自动换行 normal（默认，只允许在断字点换行）|break-word（在长单词或 url 地址内部进行换行）
        ```
            p {
              width: 200px;
              border:1px solid #000;
              word-wrap:break-word;
            }
        ```
    3.  word-break:单词拆分 nomal(默认浏览器换行规则) | break-all（允许在单词内换行） | keep-all（只能在半角或空格处换行）
    4.  text-wrap:文本拆分（浏览器不支持）normal | none | unrestricted | supperess
    5.  文本溢出 ie9 以下版本不支持，但谷歌支持
        a)单行文本溢出 text-overflow: clip(修剪文本) | ellipsis（显示省略号来代表被修剪的文字） | string（用给定字符串来代表修剪的文本,大多数浏览器不支持）
        ```
          div {
            overflow:hidden;
            white-space: nowrap;  /*  必须要有宽度，但不允许折行 */
            -ms-text-overflow:ellipsis;
            text-overflow:ellipsis;
          }
        ```
        b)多行文本溢出
        ```
          div {
            display:-webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp:3;
            overflow: hidden;
          }
        ```
    6.  css3 边框：新增了圆角边框、多层边框、边框色彩与图片等

        - border-radius:圆角边框(top-left/top/right/bottom-left/bottom-right)
          2 个参数对应的左上和右下、右上和左下
          3 个参数对应的左上、右上和左下、右下

        ```
         boder-radius: 1-4 length|% / 1-4 length|%

        ```

        - 边框阴影(ie9 以上支持)：box-shadow：水平偏移 垂直偏移 模糊距离 阴影的尺寸 颜色 inset|outset；
        - 边框图片
          border-image (ie11 以上支持)属性是 ige 简写属性，用于设置一下属性：路径 图片边框向内偏移 图片的宽度 图片区域超出边框的距离 重复效果（round | stretch |repeat）铺满、拉伸、平铺
          border-image:border-image-source border-iamge-slice border-image-width border-image-outset border-image-repeat

    7.  css3 背景

    - 多重背景
      background: 背景色 背景图片 平铺方式 位置,背景色 背景图片 平铺方式 位置...;
      - background-size: length(宽高，如果只一个值，那么默认第二个值为 auto，其他类似) | percentage | cover（把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。） | contain（把图像扩展至最大尺寸，以使宽度和高度 完全适应内容区域。 ）
      - background-origin：指定背景图像的位置区域,padding-box(背景图像相对于内边距框来定位。) | border-box(背景图像相对于边框盒外侧线来定位。) | content-box(背景图像相对于内容框来定位。)
      - background-clip: 背景的裁剪区域绘制。border-box 从边框开始显示（默认值） | padding-box 从内边距开始显示 | content-box 从内容区域开始显示。（指定了背景在哪些区域可以显示，但与背景开始绘制的位置无关，背景的绘制的位置可以出现在不显示背景的区域，这时就相当于背景图片被不显示背景的区域裁剪了一部分一样。）

    8. css3 颜色
       - rgba(red,green,blue,apacity),取值范围：0-255/0-100% | 0-1 之间
       - hsl(h,s,l) h 色调（0-360） s 饱和度（0-100%） l 亮度（0-100%）
       - hsla(h,s,l,a) a 不透明度（0-1）
    9. opacity 调整元素的不透明度，大多数情况用于做元素的遮罩效果 取值范围 0-1
       ```
        opacity:0.5;
       ```
       - ie8 及以下版本不支持，处理兼容的方式，再添加一行代码来处理不透明度
         filter:alpha(opacity=value) opacity 数值范围（0-100%）
         ```
          filter:alpha(opacity=20);
          filter: opacity(25%);
         ```
    10. css3 渐变：主要用来设置背景或者 3 维图

        - 线性渐变
          语法 background:linear-gradient(dircection,color-stop1 percent1（Optional）,color-stop2 percent2（Optional）,...);
          - dircection 方向或角度 to left | to right | to top | to bottom | to top left | to top right | to bottom left | to bottom right | to deg |
        - 径向渐变:沿半径方向进行渐变
          语法：background:raidal-gradient(shape size at center,start-color,...,last-color);
          - shape size：形状 渐变大小。 ellipse 椭圆（默认值） | circle 正圆；渐变大小 farthest-corner(默认值)渐变的半径长度为从圆心到圆心最远的角 | closest-side 从圆心到离圆心最近的边 | closest-corner 从圆心到离圆心最近的角 | farthest-side 从圆心到离圆心最远的角
          - center 渐变的位置， center（默认值）圆心在中心位置 | top 设置圆心在顶部位置 | bottom 设置圆心在底部位置 | at 25% 35% | at 20px 50px 设置圆心的位置在指定的横纵坐标、百分比处
          - 颜色 1 percent2（Optional），。。。，颜色 n percentn（Optional）；
        - 文字渐变

        ```
           div {
             background-image:-webkit-linear-gradient(45deg,#f35626,#feab3a);
             -webkit-background-clip: text;
             -webkit-text-fill-color: transparent;
           }
        ```

    11. css3 box-sizing 盒模型，允许以某种方式定义某些元素，以适应指定的区域
        - box-sizing: content-box | border-box （火狐低版本需要写厂商兼容）

3.  形状转换(2d <-> 3d)
4.  变形
5.  动画(过渡动画、帧动画)
6.  边框
7.  多重背景
8.  反射
9.  文字效果
10. 颜色（不透明度 rgba、hsl、hsla）
11. 滤镜（filter）
12. 弹性布局
13. 多列布局
14. 盒子模型
15. web 字体
16. 媒体查询

### 第八章 css3 动画

1. 变形（transform）
   - translate(x,y) 一个参数的话，表示 x 轴移动距离
   - translateX(n) 沿 x 轴移动元素 n 距离
   - translateY(n) 沿 y 轴移动元素 n 距离
   - scale(x,y) ，一个参数的话，表示 xy 轴都缩放 n 大小
   - scaleX(n) x 轴按 n 比例缩放
   - scaleY(n) y 轴按 n 比例缩放
   - rotate(angle) 2d 顺时针选择（-360deg---+360deg）
   - skew(x-angle,y-angle) 扭曲,如果一个参数，只有 x 轴扭曲
   - skewX(angle)
   - skewY(angle)
   - matrix(a,b,c,d,e,f) 用一个 3 行 3 列的矩阵表示,ab 表示 x 轴，cd 表示 y 轴，ef 表示 z 轴
     a c e
     b d f
2. transform-origin:调整元素的继电
   - transform-orgin: x-axis y-axios z-axios;
     属性值：x-axis: 定义 x 的位置，left,center,right,length,%
     属性值：y-axis: 定义 y 的位置，left,center,right,length,%
     属性值：z-axis: 定义 z 的位置，length
3. perspective:透视效果
   - perspective:number+px | none;
4. transform-style: 在 3d 空间呈现被嵌套的元素，该属性必须与 transform 属性一同使用。
   - transform-style: flat | preserve-3d
5. rotateZ:沿着 Z 轴的方向顺时针旋转
6. transition：过渡动画 （transition-property transition-duration transition-timing-function transition-delay）,可分可合。{transition: all 2s ease 500ms;}
   {transition: left 4s ease 500ms, width 4s cubic-bezier(0.075, 0.82, 0.165, 1) 500ms;}
   - a) 可以应用的属性：all 代表所有
     i) color background-color border-color outline-color
     ii) background-position left right top bottom
     iii) max-height min-height max-width min-width height width border-width margin padding outline-width outline-offset font-size lin-height text-indent vertical-align border-spacing letter-spacing word-spacing
     iv) opacity visibility font-weight zoom
     v) text-shadow transform box-shadow clip
     vi) grandient
   - b)transition-duration 动画持续时间，一般以 s、ms 为单位
   - c) transition-timing-function 动画函数
     i)linear:匀速
     ii)ease：变速（先慢后快，最后再慢）
     iii) ease-in：变速（由慢到快）
     iv) ease-out: 变速（由快到慢）
     v) ease-in-out: 变速（慢速开始，慢速结束）
     vi)cubic-bezier(n,n,n,n)：贝萨尔曲线，自定设定变速，n 的值在 0-1 之间
   - d)delay 动画延时时间，以秒或毫秒为单位
7. @keyframes 关键帧动画

   - 设置关键帧

   ```
      @keyframes animation-name {
        0% {}
        ...
        100%{}
        } 或：
      @keyframes animation-name {
        from {}
        to{}
      }
   ```

   - 实施动画，在元素上添加 animation: animation-name 动画名 animation-duration 动画持续时间 animation-timing-function 动画函数 animation-delay 动画延迟时间 animation-iteration-count 动画迭代次数 animation-direction 动画方向(共 6 个动画属性) 单独使用的属性： animation-play-state
   - animation-iteration-count： number | infinite
   - animation-direction: 动画播放完后，是否反向播放 normal | alternate
   - animation-play-state: 动画播放或者停止播放 paused | running(默认值)

# 第九章 布局

1. 多列 （Internet Explorer 9 及更早 IE 版本浏览器不支持）将文本内容设计成像报纸一样的多列布局
   - column-count:元素应该被分割的列数
     column-count:number | auto;
   - column-gap 列之间的间隔
     column-gap: length | normal;
   - column-rule 设置栏间分割线。所有 column-rule-\*属性的简写属性
     column-rule-style 属性指定了列与列间的边框样式
     none：没有规则
     hidden：隐藏规则
     dotted 点状规则
     dashed 虚线规则
     solid 实现规则
     double 双线规则
     groove ridge inset ouset ： 3d 规则，取决于宽度和颜色值
     ```
      div {
          -webkit-column-rule-style: solid; /* Chrome, Safari, Opera */
          -moz-column-rule-style: solid; /* Firefox */
          column-rule-style: solid;
      }
     ```
     column-rule-width 属性指定了两列的边框厚度
     ```
      div {
          -webkit-column-rule-width: 1px; /* Chrome, Safari, Opera */
          -moz-column-rule-width: 1px; /* Firefox */
          column-rule-width: 1px;
      }
     ```
     column-rule-color 属性指定了两列的边框颜色
     ```
      div {
          -webkit-column-rule-color: lightblue; /* Chrome, Safari, Opera */
          -moz-column-rule-color: lightblue; /* Firefox */
          column-rule-color: lightblue;
      }
     ```
     column-rule 属性是 column-rule-\* 所有属性的简写。
     ```
      div {
          -webkit-column-rule: 1px solid lightblue; /* Chrome, Safari, Opera */
          -moz-column-rule: 1px solid lightblue; /* Firefox */
          column-rule: 1px solid lightblue;
      }
     ```
   - column-span 指定元素跨越多少列
   ```
      h2 {
          -webkit-column-span: all; /* Chrome, Safari, Opera */
          column-span: all;
      }
   ```
   - column-width 规定列的宽度
   ```
     div {
         -webkit-column-width: 100px; /* Chrome, Safari, Opera */
         column-width: 100px;
     }
   ```
   - columns 规定设置 column-width 和 column-count 的简写属性
   ```
    div
    {
        columns:100px 3;
        -webkit-columns:100px 3; /* Safari and Chrome */
        -moz-columns:100px 3; /* Firefox */
    }
   ```
2. flex 布局

   - 弹性布局，是一种当页面需要适应不同的屏幕大小以及设备，元素拥有的恰当的行为的布局方式。
   - 通过设置 display 属性为 flex 或 inline-flex 将其定义为弹性容器，弹性盒子只定义了弹性子元素如何在弹性容器中布局。弹性子元素通常在弹性盒子内一行显示，默认情况每个容器只有一行。
   - 常用容器属性：

     - flex-direction:指定弹性子元素在父容器中的主轴排列方式，此属性作用在父容器
       语法：flex-direction:row | row-reverse | column | column-reverse
       参数：
       - row:默认方式，横向从左到右排列，左对齐
       - row-reverse:反转横向排列，右对齐，从后往前排，最后一项排在最前面
       - column：纵向排列
       - column-reverse：反转纵向排列，从后往前排，最后一项排在最上面
     - flex-wrap:定义如果一条主轴线排不下，是否换行。
       flex-wrap: nowrap 不换行 | wrap 换行，第一行在上方 | wrap-reverse 第一行在下方
     - flex-flow:是 flex-direction 和 flex-wrap 的简写形式，默认为 row nowrap
       flex-flow:<flex-direction> <flex-wrap>
     - justify-content:定义了项目在主轴上的对齐方式

     ```
      .box {
        justify-content: flex-start紧凑方式起点对齐 | flex-end紧凑方式终点对齐 | center紧凑方式居中对齐 | space-between两端对齐 | space-around分散对齐，首尾有留白;
      }
     ```

     - align-item:定义项目在交叉轴上如何对齐。

     ```
       .box {
         align-items: flex-start | flex-end | center | baseline项目的第一行文字的基线对齐 | stretch（默认值）如果项目未设置高度或设为auto，将占满整个容器的高度。;
       }
     ```

     - align-content 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

     ```
      .box {
        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
      }
     ```

   - 子项目的属性

     - order 定义项目的排列顺序。数值越小，排列越靠前，默认为 0

     ```
      .item {
        order: <integer>;
      }
     ```

     - flex-grow:定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。

     ```
     .item {
       flex-grow: <number>; /* default 0 */
     }
     ```

     - flex-shrink:定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。负值对该属性无效。

     ```
      .item {
        flex-shrink: <number>; /* default 1 */
      }
     ```

     - flex-basis:定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间。

     ```
      .item {
        flex-basis: <length> | auto; /* default auto */
      }
     ```

     - flex:是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。

     ```
     .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
      }
     ```

     该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)、 initial(初始宽度(0 1 auto)）。
     建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

     - align-self:允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

     ```
      .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
      }
     ```

     该属性可能取 6 个值，除了 auto，其他都与 align-items 属性完全一致。

3. 响应式布局

   - 响应式布局概念：Responsive Design，实现在不同屏幕分辨率的终端上浏览网页
   - 实现方法：

     - a) 媒体查询：通过不同的媒体类型和条件定义样式表规则。

       - 步骤 1:设置 meta 标签

       ```
       		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
       ```

       - 步骤 2：设置 ie 渲染方式为最高版本

       ```
       		<meta http-equiv="x-ua-compatible" content="IE=Edge,chrome=1" />
       ```

       - 步骤 3：引入兼容的 js 文件,因为 IE8 及 IE8 一下版本既不支持 html5，也不支持 css3 Media,所以需要引入 js 文件来处理这个兼容。

       ```
       	<!-- [if lt IE9]>
          <s src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js></script>
          <s src="https://oss.maxcdn.com/libs/responed.js//responed.min.js></script>
        <!endif>-->
       ```

       - 步骤 4：使用 css3 提供的媒体查询 @Media

       ```
          // 方式一，外部引入
        		<link rel="stylesheet" href="css/screen480.css" media="screen and (max-width:480px)" />
            <link
              rel="stylesheet"
              href="css/screen800.css"
              media="screen and (min-width:480px) and (max-width:800px)"
            />
          // 方式二 在样式表内部使用
          @media screen and (min-width:480px) {
            body {
              background-color: green;
            }
          }
        <!endif>-->
       ```

       - Media Type 媒体类型的值：screen 屏幕\print 打印设备\all 所有设备\handheld 便携设备、笔记本电脑\tv 电视\speech 音频合成器\braille 盲人点触设备\embossed 盲人打印机、\projection 投影设备\tty 虚拟设备、固定密度字母栅格设备
       - Media Query 媒体特性的值：
         设备的宽和高 device-width，device-height
         渲染窗口的宽和高 width，height
         设备的手持方向，横向还是竖向 orientation（portrait|lanscape）和打印机等
         画面比例 aspect-ratio 点阵打印机等
         设备比例 device-aspect-radio 等
         对象颜色或颜色列表 color，color-index 显示屏幕等
         设备的分辨率 resolution 等
       - 媒体选择条件:not and only
         语法：@media 设备名 only(选取条件) not(选取条件) and（设备选取条件），设备二{sRules}

     - b) 百分百布局
     - c) rem 布局（相对于根节点 html 的字号布局）
     - d) 视口单位布局（vw/vh）

   - 响应式设计步骤
     - a) 设置 meta 标签
     - b) 通过媒体查询来设置样式
     - c) 设置多种视图的宽度
       - i) 宽度需要是哦那个百分比、rem、vw/vh 等
       - ii) 处理图片缩放
       - iii) 其他属性处理，如 pre、iframe、video 等，都要缩放其窗口大小；table 建议不要增加 padding 属性，低分辨率下要使用内容居中操作。

4. web 字体
   - 引入字体,可以同时引入多个字体文件，便于浏览器兼容，如 eot、svg、base64 等等
   ```
   	<style>
   		@font-face {
   			font-family: xun;
   			src: url('./css/font/aaa.ttf') format('truetype');
   		}
   		p {
   			font-family: xun;
   			font-size: 30px;
   		}
   	</style>
   	<div>
   		<p>字体演示</p>
   	</div>
   ```
5. iconfont 图标字体
   - 步骤：

# Javascript

#### Javascript 引入的方式

1. script 标签
   defer：dom 加完后，再执行 js 代码
   charset： 字符编码（utf-8）
2. a 标签中调用 js

```
  1. a href="javascript:js_method();"
  <a href="javascript:var a=10,b=20;alert('结果为：'+(a+b))">测试</>
  这是我们平台上常用的方法，但是这种方法在传递this等参数的时候很容易出问题，而且javascript:协议作为a的href属性的时候不仅会导致不必要的触发window.onbeforeunload事件，在IE里面更会使gif动画图片停止播放。W3C标准不推荐在href里面执行javascript语句
  2. a href="javascript:void(0);" οnclick="js_method()"
  这种方法是很多网站最常用的方法，也是最周全的方法，onclick方法负责执行js函数，而void是一个操作符，void(0)返回undefined，地址不发生跳转。而且这种方法不会像第一种方法一样直接将js方法暴露在浏览器的状态栏。
  3.a href="javascript:;" οnclick="js_method()"
  这种方法跟跟2种类似，区别只是执行了一条空的js代码。
  4.a href="#" οnclick="js_method()"
  这种方法也是网上很常见的代码，#是标签内置的一个方法，代表top的作用。所以用这种方法点击后网页后返回到页面的最顶端。
  5.a href="#" οnclick="js_method();return false;"
  这种方法点击执行了js函数后return false，页面不发生跳转，执行后还是在页面的当前位置。
  们的区别是每个href里的javascript方法都用try、catch包围。
  综合上述，在a中调用js函数最适当的方法推荐使用：
  a href="javascript:void(0);" οnclick="js_method()"
  a href="javascript:;" οnclick="js_method()"
  a href="#" οnclick="js_method();return false;"

  <a href="javascript:void(document.body.style.backgroundColor='green');">测试</a>
```

3. 外部引入 js 文件

```
<s’cript src="demo.js" type="text/javascript"></script>
// async 可选 ，异步执行脚本
```

4. 注意事项

```
alert('</script>')会错误，需要用+拆开
alert('</s' + 'cript>')
```

#### Javascript 标识符

1. 第一个字符必须是字母、下划线(\_)或($)
2. 其他字符可以是字母、下划线、美元符号或数字
3. 不能把关键字、保留字、true\false\null 作为标识符

```
关键字：
break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof ...
保留字：
abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public
```

#### Javascript 注释

```
单行注释
  // 注释内容  vscode快捷键ctrl+/

多行注释
/*
  注释内容
  注释内容  vscode快捷键alt+ shift + a
 */
```

#### Javascript 变量和常量

- 常量：在程序中直接给出具体的数据，常量不可以改变
- 变量：在内存中开辟一段空间用于存放某个某个数据

1. 只定义变量
   var x；
   var a,b,c
2. 定义变量且赋值
   var x1 = true;
   var y1 - 100
   说明： 因为是弱语言，① 定义变量时可以不指定变量类型；② 可以重复定义；③ 可以不定义变量直接赋值，默认是为 window 对象添加了属性；④ 定义的变量如果没有赋值，系统将自动赋值为 undefined;⑤ 一条语句可以已分号结束，也可以不加分号；如果是多条语句写在同一行上，必须用分号隔开。

#### Javascript 数据类型

数据类型：在内存存储的方式

1. 基本数据类型:7 种原始类型

   ```
   undefined：typeof instance === "undefined"
   Boolean：typeof instance === "boolean"
   Number：typeof instance === "number"
   String：typeof instance === "string
   BigInt：typeof instance === "bigint"
   Symbol ：typeof instance === "symbol"
   null：typeof instance === "object"。
   ```

   number：数值型，区分整型和浮点型

   ```
     // 二进制 Binary system
     // 以0b或0B开头
     var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
     var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
     var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607
     // 二进制展示（方便展示，理解上却更难了）
     // 正数：就是正数的原码
     // 负数：负号+正数的原码
     // 不是数值的二进制补码
     parseInt(-10).toString(2) // -1010

     // 十进制 Decimal system
     // 以0开头，但是后面跟8以下会当作八进制处理
     var d = 1234567890;
     var l = 0888; // 888 十进制
     var o = 0777; // 511 八进制

     // 八进制 Octal number system
     // 以0开头，ECMAScript 6支持0o
     0123 八进制
     var n = 0755; // 493
     var m = 0644; // 420
     var e = 0o755; // 493 ECMAScript 6规范


     // 十六进制 Hexadecimal
     // 以0x或0X开头
     0xFFFFFFFFFFFFFFFFF // 295147905179352830000
     0x123456789ABCDEF   // 81985529216486900
     0XA                 // 10

     isNaN() 用来判断是不是不是一个数，返回Boolean值
     NaN： 非数值（not a number）的一个特殊值
     注意 true '25' 这样能转成数值的 isNaN()为true。
   ```

   string：字符型

   ```
     // 在字符数据中输出引号，需要加\转义符
     var a = "a\"bc"
     var b = "a\'bc"
     console.log(a,b)
     // js里面怎么转二进制？ 字符通过 charCodeAt 转成 Unicode 码十进制，然后通过 Number 对象 toString 方法转成不同进制。
     console.log('0'.charCodeAt()) // "48" 十进制
     console.log('0'.charCodeAt().toString(16)) // "30" 十六进制
     console.log(0x0030.toString(10)) // "48" 十进制
     console.log(String.fromCharCode(48)) // "0"

     console.log('万'.charCodeAt().toString(16)) // "4e07" 十六进制
     console.log(String.fromCharCode(0x4e07)) // "万"

     console.log('万'.charCodeAt().toString(2)) // "100111000000111" 二进制
     console.log(String.fromCharCode(0b100111000000111)) // "万"

     利用 toString() 方法可以把数值转换为字符串。如果转换的内容为空会报错:可以用 + "" 进行强制转换。
     使用 parseInt() 和 parseFloat() 方法可以把字符串转换为数值
     要把任何值转换为布尔型数据，在值的前面增加两个 !! 感叹号即可，!!0 为 False，其余的均为 True。

     在 JavaScript 中, null 用于对象, undefined 用于变量，属性和方法。
     对象只有被定义才有可能为 null，否则为 undefined。
   ```

   boolean：布尔型
   null：空,用于对象
   undefined：未定义,用于变量，属性和方法。
   Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

2. 引用数据类型
   object：用来声明或存储一个对象（对象、函数、正则、字符、数值等）
   typeof instance === "object"。任何 constructed 对象实例的特殊非数据结构类型，也用做数据结构：new Object，new Array，new Map，new Set，new WeakMap，new WeakSet，new Date，和几乎所有通过 new keyword 创建的东西

   ```
   var a = new Number(10)  // object
   var b = 10 // number
   console.log(typeof a, typeof b)  // typeof获取数据类型
   console.log(a == b) // true ;==只比较值，不比较数据类型
   console.log( a === b ) // false

   ```

基本类型的变量是存放在栈内存（Stack）里的
引用类型的值是保存在堆内存（Heap）中的对象（Object）

#### Javascript 运算符

1. 算术运算符

```
// 加减乘除取余 自增 自减
  + - / % ++ --

  var y=5;
	var x=y++; // x=5,y=6，相当于 x=y;y+1
  var x=++y;  // x=6 ,y=6 ; 相当于 y+1; x=y;

  -13 % 5 // -3
  -13 % -5 // -3
  13 % -5 //3 除法取决于被除数的符号

  console.log(123+'bbb')  // 123bbb
  console.log('aaa'+'bbb')  // aaabbb
  console.log(('aaa'+'bbb').length)  // 6  获取最总字符串的长度
```

2. 关系运算符

```
  // 返回的一般是true或false
  > < >= <= == === != !==
  比较方法：
  a. 数值比较，比较其大小  console.log(20>30)  // false
  b. 字符比较，比较ascii码值得大小，按位比较,位置上没有的视为0；  console.log('a'<'AJ') // true
  c. 汉字比较，比较其Unicode编码值的大小，可以通过charCodeAt() 获取汉字编码值
```

3. 逻辑运算符

```
逻辑非（取反）  逻辑与 逻辑或
!               &&     ||
! !true => false !false =>true
&&  只要有个操作数为false，结果为false
    注意：如果两个中任意一个操作数非逻辑值，第一个操作数的结果为true，返回第二个操作数的值；第一个操作数的结果为false时，返回第一个操作数的值。
    console.log('123' && 10+20) // 30
    console.log(false && [])  // false
    console.log(0 && 'aaa')  // aaa
|| 只要有一个操作数为true，结果为true
    注意：如果两个中任意一个操作数非逻辑值，第一个操作数的结果为true，返回第一个操作数的值；第一个操作数的结果为false时，返回第二个操作数的值。与&&相反
```

短路运算：&& 运算时，如果第一个操作数为 false 时，不需要计算第二个操作数
短路运算：|| 运算时，如果第一个操作数为 true 时，不需要计算第二个操作数

```
var x=100
var y = true && ++x
console.log(x,y)  // 101 101

var x=100
var y = false && ++x
console.log(x,y)  //100 false



```

4. 三目运算符

5. 位运算符
