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
   语法：表达式 1?表达式 2:表达式 3

   ```
    var a=3>2?'abc':'123'  // abc
   ```

5. 位运算符
   位运算符用来对二进制位进行操作

```
运算符	描述	示例
&	按位与：如果对应的二进制位都为 1，则该二进制位为 1	5 & 1 等同于 0101 & 0001 结果为 0001，十进制结果为 1
|	按位或：如果对应的二进制位有一个为 1，则该二进制位为 1	5 | 1 等同于 0101 | 0001 结果为 0101，十进制结果为 5
^	按位异或：如果对应的二进制位只有一个为 1，则该二进制位为 1	5 ^ 1 等同于 0101 ^ 0001 结果为 0100，十进制结果为 4
~	按位非：反转所有二进制位，即 1 转换为 0，0 转换为 1	~5 等同于 ~0101 结果为 1010，十进制结果为 -6
<<	按位左移：将所有二进制位统一向左移动指定的位数，并在最右侧补 0	5 << 1 等同于 0101 << 1 结果为 1010，十进制结果为 10
>>	按位右移（有符号右移）：将所有二进制位统一向右移动指定的位数，并拷贝最左侧的位来填充左侧	5 >> 1 等同于 0101 >> 1 结果为 0010，十进制结果为 2
>>>	按位右移零（无符号右移）：将所有二进制位统一向右移动指定的位数，并在最左侧补 0	5 >>> 1 等同于 0101 >>> 1 结果为 0010，十进制结果为 2
```

#### JS 输出语句

使用 alert() 函数来弹出提示框；
使用 confirm() 函数来弹出一个对话框；
使用 prompt() 函数来弹出一个输入框框；
使用 document.write() 方法将内容写入到 HTML 文档中；
使用 innerHTML 将内容写入到 HTML 标签中；
使用 console.log() 在浏览器的控制台输出内容。

```
    <script type="text/javascript">
        var res = window.confirm("这里是要显示的内容");
        if(res == true){
            alert("你点击了“确定”按钮");
        }else{
            alert("你点击了“取消”按钮");
        }
    </script>
```

#### JS 流程控制

##### 顺序结构

if 语句；
if else 语句；
if else if else 语句；
switc case 语句。
提示：if else if else 语句在执行过程中，当遇到成立的条件表达式时，会立即执行其后{ }中的代码，然后退出整个 if else if else 语句，若后续代码中还有成立的条件表达式，则不会执行。

```
if (条件表达式 1) {
    // 条件表达式 1 为真时执行的代码
} else if (条件表达式 2) {
    // 条件表达式 2 为真时执行的代码
}
...
  else if (条件表达式N) {
    // 条件表达式 N 为真时执行的代码
} else {
    // 所有条件表达式都为假时要执行的代码
}
```

##### 条件结构(分支、选择)

不同形式的条件判断语句：
if 语句；
if else 语句；
if else if else 语句；
switc case 语句。

```
   <script type="text/javascript">
        var now = new Date();           // 获取当前的完整日期
        var dayOfWeek = now.getDay();   // 获取一个 0-6 之间的数字，用来表示当前是星期几，0 表示星期日、1 表示星期一、以此类推
        if(dayOfWeek == 0) {            // 判断当前是星期几
            alert("星期日")
        } else if(dayOfWeek == 1) {
            alert("星期一")
        } else if(dayOfWeek == 2) {
            alert("星期二")
        } else if(dayOfWeek == 3) {
            alert("星期三")
        } else if(dayOfWeek == 4) {
            alert("星期四")
        } else if(dayOfWeek == 5) {
            alert("星期五")
        } else {
            alert("星期六")
        }
    </script>
```

switch 语句根据表达式的值，依次与 case 子句中的值进行比较：

switch case 语句的语法格式如下：

```
switch (表达式){
    case value1:
        statements1  // 当表达式的结果等于 value1 时，则执行该代码
        break;
    case value2:
        statements2  // 当表达式的结果等于 value2 时，则执行该代码
        break;
    ......
    case valueN:
        statementsN  // 当表达式的结果等于 valueN 时，则执行该代码
        break;
    default :
        statements  // 如果没有与表达式相同的值，则执行该代码
}
```

- 如果两者相等，则执行其后的语句段，当遇到 break 关键字时则跳出整个 switch 语句。
  如果不相等，则继续匹配下一个 case。
- switch 语句包含一个可选的 default 关键字，如果在前面的 case 中没有找到相等的条件，则执行 default 后面的语句段。
- 注意：switch 语句中，表达式是使用全等（===）来与各个 cese 子句中的值进行匹配的。由于使用的是全等运算符，因此不会自动转换每个值的类型。

```
var id = 1;
switch (id) {
    case 1 :
        console.log("普通会员");
        break;  //停止执行，跳出switch
    case 2 :
        console.log("VIP会员");
        break;  //停止执行，跳出switch
    case 3 :
        console.log("管理员");
        break;  //停止执行，跳出switch
    default :  //上述条件都不满足时，默认执行的代码
        console.log("游客");
}
```

##### 循环结构(while / for /for ... in / forEach / do... while)

##### for 循环适合在已知循环次数时使用，

- for 语法格式如下：

```
for(initialization; condition; increment) {
    // 要执行的代码
}
```

for 循环中包含三个可选的表达式 initialization、condition 和 increment，其中：
initialization：为一个表达式或者变量声明，我们通常将该步骤称为“初始化计数器变量”，在循环过程中只会执行一次；
condition：为一个条件表达式，与 while 循环中的条件表达式功能相同，通常用来与计数器的值进行比较，以确定是否进行循环，通过该表达式可以设置循环的次数；
increment：为一个表达式，用来在每次循环结束后更新（递增或递减）计数器的值。
for 循环中括号中的三个表达式是可以省略的，但是用于分隔三个表达式的分号不能省略
示例代码如下：

```
for (var i = 1; i <= 10; i++) {
    document.write(i + " ");
}
运行结果：
1 2 3 4 5 6 7 8 9 10

// 省略第一个表达式
var i = 0;
for (; i < 5; i++) {
    // 要执行的代码
}
// 省略第二个表达式
for (var y = 0; ; y++) {
    if(y > 5){
        break;
    }
    // 要执行的代码
}
// 省略第一个和第三个表达式
var j = 0;
for (; j < 5;) {
    // 要执行的代码
    j++;
}
// 省略所有表达式
var z = 0;
for (;;) {
    if(z > 5){
        break;
    }
    // 要执行的代码
    z++;
}
```

- JS for in 循环是一种特殊类型的循环，也是普通 for 循环的变体，主要用来遍历对象，使用它可以将对象中的属性依次循环出来，其语法格式如下：
  for (variable in object) {
  // 要执行的代码
  }

其中，variable 为一个变量，每次循环时这个变量都会被赋予不同的值，我们可以在{ }中使用这个变量来进行一系列操作；object 为要遍历的对象，在每次循环中，会将 object 对象中的一个属性的键赋值给变量 variable，直到对象中的所有属性都遍历完。

JS for in 循环示例代码：

```
// 定义一个对象
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
// 遍历对象中的所有属性
for(var prop in person) {
document.write("<p>" + prop + " = " + person[prop] + "</p>");
}
```

运行结果：
name = Clark
surname = Kent
age = 36
for in 循环是为遍历对象而创建的，虽然也可以遍历数组，但是并不推荐，若要遍历数组，可以使用 for 循环或者 for of 循环

- JS for of 循环是 ECMAScript6 中新添加的一个循环方式，与 for in 循环类似，也是普通 for 循环的一种变体。使用 for of 循环可以轻松的遍历数组或者其它可遍历的对象，例如字符串、对象等。

JS for of 循环的语法格式如下：
for (variable of iterable) {
// 要执行的代码
}

其中，variable 为一个变量，每次循环时这个变量都会被赋予不同的值，我们可以在后面的{ }中使用这个变量来进行一系列操作；iterable 为要遍历的内容，在每次循环中，会将 iterable 中的一个值赋值给变量 variable，直到 iterable 中的所有值都遍历完。

##### while

JS while 循环的语法格式如下：
while (条件表达式) {
// 要执行的代码
}

while 循环在每次循环之前，会先对条件表达式进行求值，如果条件表达式的结果为 true，则执行{ }中的代码，如果条件表达式的结果为 false，则退出 while 循环，执行 while 循环之后的代码。
示例代码如下：

```
var i = 1;
while( i <= 5) {
    document.write(i+", ");
    i++;
}
```

运行结果：
1, 2, 3, 4, 5,

##### do while

JS do while 循环的语法格式如下：
do {
// 需要执行的代码
} while (条件表达式);

提示：do while 循环与 while 循环还有一点不同，那就是 do while 循环的末尾需要使用分号;进行结尾，而 while 循环则不需要。
使用 do while 循环计算 1~100 之间所有整数的和：

```
var i=1;
var sum=0;
do {
    sum += i;
    i++;
} while (i <= 100);
document.write("1 + 2 + 3 + ... + 98 + 99 + 100 = " + sum)
```

运行结果：
1 + 2 + 3 + ... + 98 + 99 + 100 = 5050

##### 跳出循环

break 语句用来跳出整个循环，执行循环后面的代码；continue 语句用来跳过当次循环，继续执行下次循环。
使用 continue 语句跳出 for 循环：

```
for (var i = 0; i < 10; i++) {
    if(i % 2 == 0) {
        continue;
    }
    document.write(i + "&nbsp;");
}
```

运行结果：
1 3 5 7 9

##### 数组和对象遍历

```

data: {
 arr:[11,22,234],
 obj:{aa:1,bb:2,cc:3,dd:4}
 },
// 数组便利
arrFuc() {
      //1、 for
      for (let i = 0; i < this.arr.length; i++) {
        console.log(this.arr[i]); //11、22、234
      }

      //2、 for优化，长度缓存数组较大时对优化效果较明显
      for (let j = 0, len = this.arr.length; j < len; j++) {
        console.log(this.arr[j]); //11、22、234
      }

      //3、 for in
      for (let k in this.arr) {
        console.log(this.arr[k]); //11、22、234
      }

      //4、 for of ES6引进的新方法，对象需要通过和Object.keys()搭配使用，
      // 可以正确响应break、continue和return语句
      for (let l of this.arr) {
        console.log(l); //11、22、234
      }

      //5、 forEach便利，参数：value数组中的当前项, index当前项的索引, array原始数组；
      this.arr.forEach(item => {
        console.log(item); //11、22、234
      });

      //6、 map的回调函数中支持return返回值可以return出来
      // return的是啥，相当于把数组中的这一项变为啥（并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了）；
      var newArr = this.arr.map((item, ind, arr) => {
        if (item == 22) {
          return 33;
        } else {
          return item;
        }
      });
      console.log("map", newArr); //map [11, 33, 234]

      //7、 filter遍历,不会改变原始数组,返回新数组，关键在于正确实现一个“筛选”函数。
      var newArr2 = this.arr.filter(item => {
        return item != 22;
      }); //返回数组项不等于22的
      console.log(newArr2); //[11, 234]

      //8、 every是对数组中的每一项运行给定函数，如果该函数对每一项返回true,则返回true，否则返回false[返回布尔值]
      var everyResult = this.arr.every((item, index, array) => {
        return item > 11;
      });
      console.log("every方法", everyResult); //every方法 false

      //9、 some()是对数组中每一项运行指定函数，如果该函数对任一项返回true，则返回true【返回布尔值】
      var someResult = this.arr.some((item, index, array) => {
        return item == 11;
      });
      console.log("some方法", someResult); //some方法 true

      //10、reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。
      // reduce接受一个函数，函数有四个参数，分别是：上一次的值，当前值，当前值的索引，数组
      console.log("reduce方法", this.arr.reduce((a, b) => a + b)); //reduce方法 267

      //10.1、reduceRight()方法的功能和reduce()功能是一样的，不同的是reduceRight()从数组的末尾向前将数组中的数组项做累加

      //11、find()方法返回数组中符合测试函数条件的第一个元素。正确返回该数值，否则返回undefined
      console.log(
        "find方法",
        this.arr.find(ele => {
          return ele == 11;
        })
      ); //find方法 11
      console.log(
        "find方法",
        this.arr.find(ele => {
          return ele == 111;
        })
      ); //find方法 undefined

      // 11.1\findIndex()只返回符合要求的第一个数索引
      console.log(
        "findIndex",
        this.arr.findIndex((item, index, arr) => {
          console.log(item);
          return item > 20;
        }),
        this.arr
      ); //findIndex 1 (3) [11, 22, 234, __ob__: Observer]

      //12、splice(start,length,item)删，增，替换数组元素，返回被删除数组，无删除则不返回【会改变原数组】
      this.arr.splice(0, 1, 555);
      console.log("splice方法", this.arr); //splice方法 (3) [555, 22, 234, __ob__: Observer]

      // 13、ES6 提供三个新的方法 —— entries()，keys()和values() —— 用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
      for (let index of this.arr.keys()) {
        console.log("keys()键名的遍历", index); //keys()键名的遍历 0 keys()键名的遍历 1 keys()键名的遍历 2
      }
      for (let elem of this.arr.values()) {
        console.log("values()键值的遍", elem); //values()键值的遍 555 values()键值的遍 22 values()键值的遍 234
      }
      for (let [index, elem] of this.arr.entries()) {
        console.log("entries()键值对的遍历", index, elem); //entries()键值对的遍历 0 555 entries()键值对的遍历 1 22 entries()键值对的遍历 2 234
      }

      //14、copyWithin，3个参数第一个参数表示替换到指定索引的位置，第二个参数表示开始复制的的位置，第三个参数是结束位置，23参数没有默认从头开始复制, 替换到结束
      console.log("原数组", this.arr); //原数组 (3) [555, 22, 234, __ob__: Observer]
      this.arr.copyWithin(1, 0);
      console.log("copyWithin", this.arr); //copyWithin (3) [555, 555, 22, __ob__: Observer]

      //15、fill
      console.log("fill", this.arr.fill(11111, 0, 2)); //fill (3) [11111, 11111, 22, __ob__: Observer]
      this.arr.push("undefined");
      //16、indexOf、includes
      console.log(
        "indexOf",
        this.arr.indexOf(22),
        this.arr.indexOf("undefined")
      ); //indexOf 2 3
      console.log(
        "includes",
        this.arr.includes(22),
        this.arr.includes("undefined")
      ); //includes true true
    },


    // 对象便利
    objFuc() {

      // 1、let in
      for (let item in this.obj) {
        console.log("键名", item); // 键名name,键名age
        console.log("键值", this.obj[item]); //键值yan,键值22
      }

      //2、Object.keys 键名的便利
      console.log(Object.keys(this.obj)); //  ["name", "age"]

      //3、Object.values 键值的便利
      console.log(Object.values(this.obj)); // ["yan", 22]

      //4、Object.entries 键值的便利
      console.log(Object.entries(this.obj)); // 0: (2) ["name", "yan"] 1: (2) ["age", 22]
      console.log(Object.getOwnPropertyNames(this.obj)); //["name", "age", "__ob__"]
      for (let item of Object.keys(this.obj)) {
        console.log(item); //name,age
      }
    }
```

### 函数

定义：函数是定义一次但却可以调用或执行任意多次的一段 js 代码，可以带参数、可以有返回值。
如果形参没有与实参匹配，那么形参的值默认为 undefined。
格式一：

```
function 函数名 (形参列表) {
  函数体：
  [return<表达式>;]
}
```

格式二：

```
var 变量名= function (形参列表) {
  函数体：
  [return<表达式>;]
}
```

格式三：自运行函数( IIFE)

```
 (function (形参列表) {
  函数体：
  [return<表达式>;]
})()
```

示例：

```
// 无参
function show() {
  console.log('这个是函数')
}
// 调用
show()

// 有参
function show(a,b,c) {
  console.log(arguments)
  var sum = a+b
  console.log('sum:',sum)
}
// 调用
show(10,20)
```

函数可以通过 return 返回结果，如果 return 没有返回结果，表示结束函数的调用，且返回调用处。
arguments 对象：返回实参列表的一个伪数组。一般用在不确定参数的传值。

```
// 实参参数
function sum() {
  console.log(arguments)
}
```

可利用 arguments.length 属性，判断有多少个参数，并把参数进行合理的应用。
比如要实现一个加法运算，将所有传过来的数字进行累加，而数字的个数又不确定。

```
function box() {
  var sum = 0;
  if (arguments.length===0) return sum;
  for (var i=0;i<arguments.length;i++) {
    sum +=arguments[i]
  }
  return sum
  console.log(box(3,7.8))
}
```

### 对象和数组

#### 对象：其实就是一种类型，即引用类型，而对象的值就是引用类型的示例。对象由属性和方法组成，通常用键值对定义。

object 类型的创建：一是使用 new 运算符，一是字面量表示

```
// new运算符方式
var box = new Object()
bax.name = "zhangsan"
var box1 = new Object({
  name: "zhangsan",
  age:22
})

// 字面量
var box = {
  name:"zhangsan",  // 属性
  fn:function() {   // 方法
  }
}
```

对象引用：

```
a) 对象名.属性名
   对象名.方法名([实参列表])
b) 对象名[属性名]
   对象名['方法名([实参列表])']

   var str ="a"
   var obj = {str:"cc",a:'aa'}
   console.log(obj['str'])   // 属性名为实参的 要用引号，也可以用. 即obj.str
   console.log(obj[str])    // 属性名为变量的，不用引号
```

#### 数组(Array):将一组数组组合到一起，并存入到一个变量中，数组是有序排列的，占有一段连续的内存空间

- 定义数组：

```
new Array([值列表])
var arr = [值列表]
const array = new Array(1,2,3,4)
const array = [1,2,3,4]
const array = new Array(9).fill('') //fill:使用固定值填充数组
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]
```

- 访问数组的方式：

```
数组名[下标]  // 下标可以是一个数值型常量，也可以是一个表达式或函数或变量
var arr=[1,2,3,'aaa',true]
var a=2
console.log(arr)  // [1,2,3,'aaa',true]
console.log(arr[3])   // true
console.log(arr[a])   // aaa
console.log(arr[true+1])   // 2
console.log(arr[(function num(i){return i++})(0)])   // 1
```

- 遍历数组
  一维数组用一个循环实现；多维数组必须用多重循环实现

```
var arr=[1,2,3,4,5,6]
for(var i=0;i<arr.length;i++) {
  console.log(i+':',arr[i])
}
// for ... of (for ... in) // 遍历的是值
for (var i of arr) {
  console.log(i)
}
for (var i in arr) {  // 遍历的是序号
  console.log(i+':',arr[i])
}
// forEach
function f(value,index,array) {
    console.log("a[" + index + "] = " + value);
}
var a = ['a', 'b', 'c'];
a.forEach(f);
// forEach es6
a.forEach((value,index,array)=> {
   console.log("a[" + index + "] = " + value);
})
// 二维数组遍历
var arr1=[[1,2,3],[4,5,6],[7,8,9]]
for(var i=0;i<arr1.length;i++) {
  for (var j=0;j<arr1[i].length;j++) {
    console.log(arr1[i][j])
  }
}
```

- 数组的方法
  | 方法名        | 对应版本 | 功能                                                                                  | 原数组是否改变     |
  | ------------- | -------- | ------------------------------------------------------------------------------------- | ------------------ |
  | pop()         | ES5-     | 删除最后一位，并返回删除的数据                                                        | y                  |
  | shift()       | ES5-     | 删除第一位，并返回删除的数据                                                          | y                  |
  | unshift()     | ES5-     | 在第一位新增一或多个数据，返回长度                                                    | y                  |
  | push()        | ES5-     | 在最后一位新增一或多个数据，返回长度                                                  | y                  |
  | reverse()     | ES5-     | 反转数组，返回结果                                                                    | y                  |
  | sort()        | ES5-     | 排序（字符规则），返回结果                                                            | y                  |
  | splice()      | ES5-     | 删除指定位置，并替换，返回删除的数据                                                  | y                  |
  | slice()       | ES5-     | 截取指定位置的数组，并返回                                                            | n                  |
  | concat()      | ES5-     | 合并数组，并返回合并之后的数据                                                        | n                  |
  | join()        | ES5-     | 使用分隔符，将数组转为字符串并返回                                                    | n                  |
  | toString()    | ES5-     | 直接转为字符串，并返回                                                                | n                  |
  | valueOf()     | ES5-     | 返回数组对象的原始值                                                                  | n                  |
  | indexOf()     | ES5      | 查询并返回数据的索引                                                                  | n                  |
  | lastIndexOf() | ES5      | 反向查询并返回数据的索引                                                              | n                  |
  | forEach()     | ES5      | 参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，分别为 value，index，self； | forEach 没有返回值 | n |
  | map()         | ES5      | 同 forEach，同时回调函数返回数据，组成新数组由 map 返回                               | n                  |
  | filter()      | ES5      | 同 forEach，同时回调函数返回布尔值，为 true 的数据组成新数组由 filter 返回            | n                  |
  | every()       | ES5      | 同 forEach，同时回调函数返回布尔值，全部为 true，由 every 返回 true                   | n                  |
  | some()        | ES5      | 同 forEach，同时回调函数返回布尔值，只要由一个为 true，由 some 返回 true              | n                  |
  | reduce()      | ES5      | 归并，同 forEach，迭代数组的所有项，并构建一个最终值，由 reduce 返回                  | n                  |
  | reduceRight() | ES5      | 反向归并，同 forEach，迭代数组的所有项，并构建一个最终值，由 reduceRight 返回         | n                  |

  1.concat()
  功能：用于连接两个或多个数组，该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
  参数：concat(data1,data2,...);所有参数可选，要合并的数据；data 为数组时，将 data 合并到原数组；data 为具体数据时直接添加到原数组尾部；省略时创建原数组的副本。

```
    var arr1 = [1,2,3]
    var arr2 = arr1.concat();
    console.log(arr1);           //[1,2,3]---原数组
    console.log(arr1 === arr2);  //false
    console.log(arr2);           //[1,2,3]---原数组的副本

    console.log(arr1.concat("hello","world"));           //[1,2,3,"hello","world"]
    console.log(arr1.concat(["a","b"],[[3,4],{"name":"admin"}]));   //[1,2,3,"a","b",[3,4],{"name":"admin"}]
    console.log(arr1);           //[1,2,3]---原数组未改变
```

2.join()
功能：根据指定分隔符将数组中的所有元素放入一个字符串，并返回这个字符串。
参数：join(str);参数可选，默认为","号，以传入的字符作为分隔符。

```
    var arr = [1,2,3];
    console.log(arr.join());         //1,2,3
    console.log(arr.join("-"));      //1-2-3
    console.log(arr);                //[1,2,3]---原数组未改变
```

3.pop()
功能：方法用于删除并返回数组的最后一个元素。
参数：无

```
    var arr = [1,2,3];
    console.log(arr.pop());     //3
    console.log(arr);           //[1,2]---原数组改变
```

4.shift()
功能：方法用于删除并返回数组的第一个元素。
参数：无

```
    var arr = [1,2,3]
    console.log(arr.shift());       //1
    console.log(arr);               //[2,3]---原数组改变
```

5.push()
功能：向数组的末尾添加一个或更多元素，并返回新的长度。
参数：push(newData1, newData2, ......)

```
    var arr = [1,2,3];
    console.log(arr.push("hello"));  //4
    console.log(arr);                //[1,2,3,"hello"]---原数组改变
    console.log(arr.push("a","b"));  //6
    console.log(arr);                //[1,2,3,"hello","a","b"]---原数组改变
```

6.unshift()
功能：向数组的开头添加一个或更多元素，并返回新的长度。
参数：unshift(newData1, newData2, ......)

```
    var arr = [1,2,3];
    console.log(arr.unshift("hello"));  //4
    console.log(arr);                   //["hello",1,2,3]---原数组改变
    console.log(arr.unshift("a","b"));  //6
    console.log(arr);                   //["a","b","hello",1,2,3]---原数组改变
```

7.reverse()
功能：颠倒数组中元素的顺序。
参数：无

```
    var arr = [1,2,3];
    console.log(arr.reverse());     //[3,2,1]
    console.log(arr);               //[3,2,1]---原数组改变
```

8.sort()
功能：对数组中的元素进行排序，默认是升序。

```
    var arr = [6,1,5,2,3];
    console.log(arr.sort());    //[1, 2, 3, 5, 6]
    console.log(arr);           //[1, 2, 3, 5, 6]---原数组改变
```

但是在排序前，会默认先调用数组的 toString 方法，将每个元素都转成字符之后，再进行排序，此时会按照字符串的排序，逐位比较，进行排序。

```
    var arr = [6,1024,52,256,369];
    console.log(arr.sort());    //[1024, 256, 369, 52, 6]
    console.log(arr);           //[1024, 256, 369, 52, 6]---原数组改变
```

参数：sort(callback)
如果需要按照数值排序，需要传参。sort(callback)，callback 为回调函数，该函数应该具有两个参数，比较这两个参数，然后返回一个用于说明这两个值的相对顺序的数字（a-b）。其返回值如下：
若 a 小于 b，返回一个小于 0 的值。
若 a 等于 b，则返回 0。
若 a 大于 b，则返回一个大于 0 的值。

```
    var arr = [6,1024,52,256,369];
    console.log(arr.sort(fn));  //[6, 52, 256, 369, 1024]
    console.log(arr);           //[6, 52, 256, 369, 1024]---原数组改变
    function fn(a,b){
        return a-b;
    }
```

9.splice()
功能：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。
参数：splice(start,num,data1,data2,...); 所有参数全部可选。
1>不传参时：无操作

```
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    console.log(arr.splice());      //[]
    console.log(arr);               //["Tom","Jack","Lucy","Lily","May"]---无操作
```

2>只传入 start：表示从索引为 start 的数据开始删除，直到数组结束

```
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    console.log(arr.splice(2));     //["Lucy", "Lily", "May"]
    console.log(arr);               //["Tom", "Jack"]---原数组改变
```

3>传入 start 和 num：表示从索引为 start 的数据开始删除，删除 num 个

```
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    console.log(arr.splice(2,2));   //["Lucy", "Lily"]
    console.log(arr);               //["Tom", "Jack", "May"]---原数组改变
```

4>传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置

```
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    console.log(arr.splice(2,2,"a","b"));  //["Lucy", "Lily"]
    console.log(arr);                      //["Tom", "Jack", "a", "b", "May"]---原数组改变
```

5>传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置

```
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    console.log(arr.splice(2,0,"a","b"));  //[]
    console.log(arr);    //["Tom", "Jack", "a", "b", "Lucy", "Lily", "May"]---原数组改变
```

10.slice()
功能：可从已有的数组中返回选定的元素。该方法接收两个参数 slice(start,end)，strat 为必选，表示从索引第几位开始；end 为可选，表示到第几位结束(不包含 end 位)，省略表示到最后一位；start 和 end 都可以为负数，负数时表示从最后一位开始算起，如-1 表示最后一位。
参数：slice(startIndex, endIndex)

```
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    console.log(arr.slice(1,3));        //["Jack","Lucy"]
    console.log(arr.slice(1));          //["Jack","Lucy","Lily","May"]
    console.log(arr.slice(-4,-1));      //["Jack","Lucy","Lily"]
    console.log(arr.slice(-2));         //["Lily","May"]
    console.log(arr.slice(1,-2));       //["Jack","Lucy"]
    console.log(arr);                   //["Tom","Jack","Lucy","Lily","May"]---原数组未改变
```

11.toString()
功能：转换成字符串，类似于没有参数的 join()。该方法会在数据发生隐式类型转换时被自动调用，如果手动调用，就是直接转为字符串。
参数：无

```
    var arr = [1,2,3];
    console.log(arr.toString());     //1,2,3
    console.log(arr);                //[1,2,3]---原数组未改变
```

12.valueOf()
功能：返回数组的原始值（一般情况下其实就是数组自身），一般由 js 在后台调用，并不显式的出现在代码中
参数：无

```
    var arr = [1,2,3];
    console.log(arr.valueOf());         //[1,2,3]
    console.log(arr);                   //[1,2,3]
    //为了证明返回的是数组自身
    console.log(arr.valueOf() == arr);  //true
```

13.indexOf()
功能：根据指定的数据，从左向右，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变。
参数：indexOf(value, start);value 为要查询的数据；start 为可选，表示开始查询的位置，当 start 为负数时，从数组的尾部向前数；如果查询不到 value 的存在，则方法返回-1

```
    var arr = ["h","e","l","l","o"];
    console.log(arr.indexOf("l"));        //2
    console.log(arr.indexOf("l",3));      //3
    console.log(arr.indexOf("l",4));      //-1
    console.log(arr.indexOf("l",-1));     //-1
    console.log(arr.indexOf("l",-3));     //2
```

14.lastIndexOf()
功能：根据指定的数据，从右向左，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变。
参数：lastIndexOf(value, start);value 为要查询的数据；start 为可选，表示开始查询的位置，当 start 为负数时，从数组的尾部向前数；如果查询不到 value 的存在，则方法返回-1

```
    var arr = ["h","e","l","l","o"];
    console.log(arr.lastIndexOf("l"));        //3
    console.log(arr.lastIndexOf("l",3));      //3
    console.log(arr.lastIndexOf("l",1));      //-1
    console.log(arr.lastIndexOf("l",-3));     //2
    console.log(arr.lastIndexOf("l",-4));     //-1
```

15.forEach()
功能：ES5 新增方法，用来遍历数组，该方法没有返回值。forEach 接收的回调函数会根据数组的每一项执行，该回调函数默认有三个参数，分别为：遍历到的数组的数据，对应的索引，数组自身。
参数：forEach(callback);callback 默认有三个参数，分别为 value，index，self。

```

    var arr = ["Tom","Jack","Lucy","Lily","May"];
    var a = arr.forEach(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr === self));
    })
    // 打印结果为：
    // Tom--0--true
    // Jack--1--true
    // Lucy--2--true
    // Lily--3--true
    // May--4--true
    console.log(a);     //undefined---forEach没有返回值
    //该方法为遍历方法，不会修改原数组
```

16.map()
功能：1.同 forEach 功能；2.map 的回调函数会将执行结果返回，最后 map 将所有回调函数的返回值组成新数组返回。
参数：map(callback);callback 默认有三个参数，分别为 value，index，self。

```
    //功能1：同forEach
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    var a = arr.map(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr === self))
    })
    // 打印结果为：
    // Tom--0--true
    // Jack--1--true
    // Lucy--2--true
    // Lily--3--true
    // May--4--true

    //功能2：每次回调函数的返回值被map组成新数组返回
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    var a = arr.map(function(value,index,self){
        return "hi:"+value;
    })
    console.log(a);     //["hi:Tom", "hi:Jack", "hi:Lucy", "hi:Lily", "hi:May"]
    console.log(arr);   //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变
```

17.filter()
功能：1.同 forEach 功能；2.filter 的回调函数需要返回布尔值，当为 true 时，将本次数组的数据返回给 filter，最后 filter 将所有回调函数的返回值组成新数组返回（此功能可理解为“过滤”）。
参数：filter(callback);callback 默认有三个参数，分别为 value，index，self。

```
    //功能1：同forEach
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    var a = arr.filter(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr === self))
    })
    // 打印结果为：
    // Tom--0--true
    // Jack--1--true
    // Lucy--2--true
    // Lily--3--true
    // May--4--true

    //功能2：当回调函数的返回值为true时，本次的数组值返回给filter，被filter组成新数组返回
    var arr = ["Tom","Jack","Lucy","Lily","May"];
    var a = arr.filter(function(value,index,self){
        return value.length > 3;
    })
    console.log(a);         //["Jack", "Lucy", "Lily"]
    console.log(arr);       //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变
```

18.every()
功能：判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回 true。
参数：every()接收一个回调函数作为参数，这个回调函数需要有返回值，every(callback);callback 默认有三个参数，分别为 value，index，self。

```
// 功能1：当回调函数的返回值为true时，类似于forEach的功能，遍历所有；如果为false，那么停止执行，后面的数据不再遍历，停在第一个返回false的位置。

    //demo1:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.every(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr == self))
    })
    // 打印结果为：
    // Tom--0--true
    //因为回调函数中没有return true，默认返回undefined，等同于返回false

    //demo2:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.every(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr == self))
        return value.length < 4;
    })
    // 打印结果为：
    // Tom--0--true
    // abc--1--true
    // Jack--2--true
    //因为当遍历到Jack时，回调函数到return返回false，此时Jack已经遍历，但是后面数据就不再被遍历了

    //demo3:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.every(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr == self))
        return true;
    })
    // 打印结果为：
    // Tom--0--true
    // abc--1--true
    // Jack--2--true
    // Lucy--3--true
    // Lily--4--true
    // May--5--true
    //因为每个回调函数的返回值都是true，那么会遍历数组所有数据，等同于forEach功能
// 功能2：当每个回调函数的返回值都为true时，every的返回值为true，只要有一个回调函数的返回值为false，every的返回值都为false


    //demo1:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.every(function(value,index,self){
        return value.length > 3;
    })
    console.log(a);           //false

    //demo2:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.every(function(value,index,self){
        return value.length > 2;
    })
    console.log(a);           //true
```

19.some()
功能：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。
参数：some()接收一个回调函数作为参数，这个回调函数需要有返回值，some(callback);callback 默认有三个参数，分别为 value，index，self。

```
// 功能1：因为要判断数组中的每一项，只要有一个回调函数返回true，some都会返回true，所以与every正好相反，当遇到一个回调函数的返回值为true时，可以确定结果，那么停止执行，后面都数据不再遍历，停在第一个返回true的位置；当回调函数的返回值为false时，需要继续向后执行，到最后才能确定结果，所以会遍历所有数据，实现类似于forEach的功能，遍历所有。

    //demo1:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.some(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr == self))
        return value.length > 3;
    })
    // 打印结果为：
    // Tom--0--true
    // abc--1--true
    // Jack--2--true

    //demo2:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.some(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr == self))
        return true;
    })
    // 打印结果为：
    // Tom--0--true

    //demo3:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.some(function(value,index,self){
        console.log(value + "--" + index + "--" + (arr == self))
        return false;
    })
    // 打印结果为：
    // Tom--0--true
    // abc--1--true
    // Jack--2--true
    // Lucy--3--true
    // Lily--4--true
    // May--5--true
// 功能2：与every相反，只要有一个回调函数的返回值都为true，some的返回值为true，所有回调函数的返回值为false，some的返回值才为false


    //demo1:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.some(function(value,index,self){
        return value.length > 3;
    })
    console.log(a);             //true

    //demo2:
    var arr = ["Tom","abc","Jack","Lucy","Lily","May"];
    var a = arr.some(function(value,index,self){
        return value.length > 4;
    })
    console.log(a);             //false
```

19.reduce()
功能：从数组的第一项开始，逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值。

参数：reduce()接收一个或两个参数：第一个是回调函数，表示在数组的每一项上调用的函数；第二个参数（可选的）作为归并的初始值，被回调函数第一次执行时的第一个参数接收。
reduce(callback,initial);callback 默认有四个参数，分别为 prev，now，index，self。
callback 返回的任何值都会作为下一次执行的第一个参数。
如果 initial 参数被省略，那么第一次迭代发生在数组的第二项上，因此 callback 的第一个参数是数组的第一项，第二个参数就是数组的第二项。

```
    //demo1:不省略initial参数，回调函数没有返回值
    var arr = [10,20,30,40,50];
    arr.reduce(function(prev,now,index,self){
        console.log(prev + "--" + now + "--" + index + "--" + (arr == self))
    }, 2019)
    // 打印结果为：
    // 2019--10--0--true
    // undefined--20--1--true
    // undefined--30--2--true
    // undefined--40--3--true
    // undefined--50--4--true
    // 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

    //demo2:省略initial参数，回调函数没有返回值
    var arr = [10,20,30,40,50];
    arr.reduce(function(prev,now,index,self){
        console.log(prev + "--" + now + "--" + index + "--" + (arr == self))
    })
    // 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
    // 10--20--1--true
    // undefined--30--2--true
    // undefined--40--3--true
    // undefined--50--4--true
    // 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

    //demo3:不省略initial参数，回调函数有返回值
    var arr = [10,20,30,40,50];
    arr.reduce(function(prev,now,index,self){
        console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
        return "hello";
    }, 2019)
    // 打印结果为：
    // 2019--10--0--true
    // hello--20--1--true
    // hello--30--2--true
    // hello--40--3--true
    // hello--50--4--true
    // 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值

    //demo4:省略initial参数，回调函数有返回值
    var arr = [10,20,30,40,50];
    arr.reduce(function(prev,now,index,self){
        console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
        return "hello";
    })
    // 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
    // 10--20--1--true
    // hello--30--2--true
    // hello--40--3--true
    // hello--50--4--true
    // 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值

    //demo5：使用reduce计算数组中所有数据的和
    var arr = [10,20,30,40,50];
    var sum = arr.reduce(function(prev,now,index,self){
        return prev + now;
    })
    console.log(sum);      //150
    // 回调函数的最后一次return的结果被返回到reduce方法的身上

    //demo6：使用reduce计算数组中所有数据的和
    var arr = [10,20,30,40,50];
    var sum = arr.reduce(function(prev,now,index,self){
        return prev + now;
    }, 8)
    console.log(sum);      //158
    // 回调函数的最后一次return的结果被返回到reduce方法的身上
    // 因为reduce有第二个参数initial，在第一次执行时被计算，所以最终结果被加上8
```

20.reduceRight()
功能：（与 reduce 类似）从数组的最后一项开始，向前逐个遍历到第一位，迭代数组的所有项，然后构建一个最终返回的值。
参数：同 reduce。
demo：同 reduce

#### ES6 中 新增的数组 API

一、静态方法

1.Array.from(); 将类数组对象转换为数组

一般具有指向对象元素的数字索引下标和 length 属性的对象为类数组对象；
常见的类数组对象有
document.getElementsByClassName() 的返回结果（实际上许多 DOM 方法的返回值都是类数组）；
特殊变量 arguments 对象

```
let arr1 = Array.from('hello')
console.log(arr1);                // [ 'h', 'e', 'l', 'l', 'o' ]
```

而在 ES5 中，我们需要通过 Array.prototype.slice.call('类数组对象') 来转化。

2.Array.of(); 将传入的参数转换为数组
Array.of 总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

```
Array.of(3, 11, 8) // [3,11,8]

Array.of(3) // [3]

Array.of(3).length // 1

Array.of() // []
```

二、实例方法

1.Array.prototype.find() 查找第一个符合条件的元素
参数是一个回调函数.
该方法返回第一个满足条件的元素 或者 undefined

```
  let arr=[1,2,3,2,3];
    let result=arr.find((value)=>{undefined
        return item>2
    })
    console.log(result)        //3
```

2.Array.prototype.findIndex(); 查找第一个符合条件的元素的下标
参数为回调函数
返回第一个满足条件的元素的索引或者-1

```
let arr=[1,2,3,2,3];
let result=arr.findIndex((value)=>{undefined
    return value>2
})
console.log(result)        //2   索引
```

3.Array.prototype.includes(); 检查数组是否包含某个元素
返回 true/false

```
let arr = [1,2,3,4,5];
console.log(arr.includes(8))        //false
```

4.Array.prototype.fill(); 用来填充数组

```
console.log(new Array(5).fill(8))        //[ 8, 8, 8, 8, 8 ]
```

5.Array.prototype.keys(); Array.prototype.values(); Array.prototype.entries()

```
let arr = [2, 3, 4, 5, 6, 2];

let keys=arr.keys();

let values = arr.values();

let entries = arr.entries();

console.log(keys, values, entries);

//keys,values,entries 变量当前是迭代器对象,

// 迭代器对象实现了 Iterator 接口，只要有实现了 Iterator 接口就可以 for-of 遍历

//通过 for-of 循环，循环出数组的索引
for(let i of keys){
        console.log(i)
} //0 1 2 3 4 5
//通过 for-of 循环，循环出数组的索引

for(let v of values){
        console.log(v)
} //2 3 4 5 6 2

//同时输出数组的索引和内容

for(let e of entries){
console.log(e)
}
//结果：
//[ 0, 2 ]
[ 1, 3 ]
[ 2, 4 ]
[ 3, 5 ]
[ 4, 6 ]
[ 5, 2 ]
```

6.Array.prototype.copyWithin(target, start?, end?): 在数组内部完成复制,不改变数组长度

```
const arr = [1, 2, 3, 4, 5, 6];
//从下标2开始，改变数组的数据，数据来自于下标0位置开始
arr.copyWithin(2); // [1, 2, 1, 2, 3, 4]
// arr.copyWithin(2, 1); // [1, 2, 2, 3, 4, 5]
// arr.copyWithin(2, 1, 3); // [1, 2, 2, 3, 5, 6]
console.log(arr);

```

- length 属性
  获取数组的长度
- toString() 把数组转换为数组值（逗号分隔）的字符串。

```

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();

```

制作黑白图片

```
// html
 <div style="display: flex;">
        <img src="./img/liao.jpg" alt="">
        <button onclick="change()">转换</button>
        <canvas width="100" height="117"></canvas>
    </div>
// js
/*
* 画布中的1个图像是由多个像素点组成，每个像素点拥有4个数据：红、绿、蓝、alpha
* 把一个图像变成黑白，只需要将图像的每个像素点设置成为红绿蓝的平均数即可
*/

function change() {
  const img = document.querySelector("img");
  const cvs = document.querySelector("canvas");
  const ctx = cvs.getContext("2d");

  ctx.drawImage(img, 0, 0);
  //得到画布某一个区域的图像信息
  const imageData = ctx.getImageData(0, 0, img.width, img.height);
  console.log(imageData);
  for (let i = 0; i < imageData.data.length; i += 4) {
      //循环一个像素点
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const avg = (r + g + b) / 3;

      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = avg;
  }
  //将图像数据设置到画布
  ctx.putImageData(imageData, 0, 0);
}
```

### Function 类型

#### 创建函数

```
// 普通方式
function fn1() {
  console.log('function1');
}
// 使用变量初始化函数
var fn2 = function () {
  console.log('function2');
};
// new 创建
var fn3 = new Function();
fn3 = function () {
  console.log('function3');
};
fn1();
fn2();
fn3();
// 结果
function1
function2
function3

```

#### 函数传参

参数可以匿名，可以是变量、对象、数组、表达式、函数等
在定义函数时，您可以为函数的参数设置一个默认值，这样当我们在调用这个函数时，如果没有提供参数，就会使用这个默认值作为参数值，如下例所示：

```
function sayHello(name = "World"){
    document.write("Hello " + name);
}
sayHello();                 // 输出：Hello World
sayHello('c.biancheng.net');     // 输出：Hello c.biancheng.net
```

#### 函数返回值

在函数中可以使用 return 语句将一个值（函数的运行结果）返回给调用函数的程序，这个值可以是任何类型，例如数组、对象、字符串等。对于有返回值的函数，我们可以会使用一个变量来接收这个函数的返回值，示例代码如下：

```
function getSum(num1, num2){
    return num1 + num2;
}
var sum1 = getSum(7, 12);      // 函数返回值为：19
var sum2 = getSum(-5, 33);     // 函数返回值为：28
```

提示：return 语句通常在函数的末尾定义，当函数运行到 return 语句时会立即停止运行，并返回到调用函数的地方继续执行。

#### 函数内部属性

arguments 和 this
callee 是 arguments 对象的一个属性。它可以用于引用该函数的函数体内当前正在执行的函数。这在函数的名称是未知时很有用，例如在没有名称的函数表达式 (也称为“匿名函数”)内。
警告：在严格模式下，第 5 版 ECMAScript (ES5) 禁止使用 arguments.callee()。当一个函数必须调用自身的时候, 避免使用 arguments.callee(),

```
// 需求：求3!
function fact(n) {
  if (n===1) {
    return 1
  } else {
    return n*fact(n-1)
  }
}
console.log(fact(3))
// 需求：求1!+2!+3!....
function fact1(n) {
  if (n===1) {
    return 1
  } else {
    return n*(fact1(n-1)+1)
  }
}
 var sum = 0;
 for (var i=1;i<=6;i++) {
   sum+=fact(i)
 }

```

```js
//  正则表达式验证密码，只能输入6-20个字母、数字、下划线
var password = "sdfsdfe";
var reg = /^[A-Za-z0-9_]{6,20}$/;
if (reg.test(password)) {
  console.log(true);
} else {
  console.log(false);
}

// 把稀疏数组变成不稀疏数组
var arr = [];
arr[2] = 2343;
arr[10] = "hello";
arr[23] = true;
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i]) newArr.push(arr[i]);
}
console.log(newArr);

// 需求：将[1,2,2,3,4,5,5,6,,7,7,7]数组去重复
newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (newArr.indexOf(arr[i]) < 0) {
    newArr.push(arr[i]);
  }
}
```

### 对象类型

- 内置对象、面向对象、基本包装类型、变量、作用域及内存

#### 内置对象

- Global 对象
  在 js 中没有 global 对象，web 中 将 global 作为 window 对象的一部分加以使用。

  ```js
  // 最外层的this 默认指向的window
  name = "aa"; //相当于window.name
  var obj = {
    name: "bb",
    age: 10,
    fn: function () {
      console.log(this.name + this.age);
    },
  };
  console.log(this.name); // aa
  obj.fn(); //  bb10
  ```

````

- Global内置方法：
  a. encodeURIComponent() 对 unicode 进行编码处理
  b. decodeURIComponent() 对 unicode 编码进行解密处理
  encode(str) // 只编码中文
  decodeURI()
  escape() 已废弃

  ```js
   var str ="我是一个人,oh,yeah!"
   console.log(str);
   console.log(encodeURIComponent(str));
   console.log(decodeURIComponent(encodeURIComponent(str)));
````

c. eval()方法 - 主要是字符串解析器，可以直接执行 js 代码(先解析后执行，性能比较差，且比较危险)

```js
eval("var box = 2");
console.log(box);
eval(console.log(box));
eval("function box(){return 123}");
alert(box());
```

- Math 对象
  主要提供了大量的计算方法
  Math.E 自然对数的底数，即常量 e 的值
  Math.PI π 的值·
  Math.min() 最小值
  Math.Max() 最大值
  Math.round() 四舍五入
  Math.ceil() 向上取整
  Math.floor() 向下取整 toFiexd()保留小数 ，但结果为字符型数据
  Math.random() 产生[0-1]之间的随机小数，包含 0 ，不包含 1
  Math.random(2) random 的随机种子

  ```js
  // 函数返回 min（包含）～ max（不包含）之间的数字：
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // 函数返回 min（包含）～ max（包含）之间的数字：
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  ```

  Math.abs(num) 返回 num 的绝对值
  Math.exp(num) 返回 Math.E 的 num 次幂
  Math.log(num) 返回 num 的自然对数
  Math.pow(num,power) 返回 num 的 power 次幂
  Math.sqrt(num) 返回 num 的平方根
  Math.acos(x) 返回 x 的反余弦值
  Math.asin(x) 返回 x 的反正弦值
  Math.atan(x) 返回 x 的反正切值
  Math.atan2(x) 返回 y/x 的反正确值
  Math.cos(x) 返回 x 的余弦值
  Math.sin(x) 返回 x 的正弦值 x 为弧度，如果 x 为角度，需要 (x\*Math.PI/180)
  Math.tan(x) 返回 x 的正切值
  Math.LN10 10 的自然对数
  Math.LN2 2 的自然对数
  Math.LOG2E 以 2 为底 e 的对数
  Math.LOG10E 以 10 为底 e 的对数
  Math.SQRT1_2 1/2 的平方根
  Math.SQRT2 2 的平方根

  ```js
    // 浮点运算精度存在不准确的问题
    解决方案：

    //方法一： 通过 toFixed(num) 方法来保留小数。因为这个方法是根据四舍五入来保留小数的，所以最后的计算结果不精确。

    (1.0-0.9).toFixed(digits)  // toFixed() 精度参数须在 0 与20 之间(digits是精确的小数点后的位数)
    parseFloat((1.0-0.9).toFixed(10)) === 0.1 // 结果为True
    parseFloat((1.0-0.8).toFixed(10)) === 0.2 // 结果为True
    parseFloat((1.0-0.7).toFixed(10)) === 0.3 // 结果为True
    parseFloat((11.0-11.8).toFixed(10)) === -0.8 // 结果为True
    parseFloat((2.22 + 0.1).toFixed(10)) ===2.23 //结果为True
    //方法二：把要计算的数字升级（乘以10的n次幂）成计算机能够精确识别的整数，计算完以后再降级。具体的我没有实现过。

    //方法三： Math.floor( xxx * 10 ) / 10 // 精确到小数点后一位
    1.11*10
    11.100000000000001 //精度不准确
    Math.floor(1.11*10)/10 // 精确到小数点后一位
    1.1

  ```

#### 时间和日期

    javascript提供了Date对象来进行时间和日期的计算。

    Date对象有多种构造函数：

    1、dateObj=new Date() //当前时间

    2、dateObj=new Date(milliseconds) //距离起始时间1970年1月1日的毫秒数

    3、dateObj=new Date(datestring) //字符串代表的日期与时间。比如"2012-12-21"、"Jannuary 1, 1998 20:13:15"

    4、dateObj=new Date(year, month-1, day, hours, minutes, seconds, microseconds) //时间数值，可以不用全部写，不写则默认为0。月份值是从0开始，所以减一。如果输入值超出合理范围，函数会自动折算。

    下面是Date对象的函数列表：

    获取类函数：
    getDate() 函数 -- 返回日值(1-31)
    getDay()函数 -- 返回星期值(0-6)
    getFullYear() 函数 -- 返回四位数年份值
    getHours()函数 -- 返回小时值(0-23)
    getMilliseconds() 函数 -- 返回时间date对象的当前毫秒值(0-999)
    getMinutes() 函数 -- 返回分钟值(0-59)
    getMonth() 函数 -- 返回月份值(0-11)
    getSeconds() 函数 -- 返回秒值(0-59)
    getTime() 函数 -- 返回1970年1月1日零点以来的毫秒数，即毫秒时间戳
    getYear() 函数 -- 返回年份值(真实年份减去1900)

    计算两个日期的差：
    d1=new Date(y1,m1-1,d1);
    d2=new Date(y2,m2-1,d2);
    相差天数：(d2.getTime()-d1.getTime())/86400000;
    相差天数：(d2.getTime()-d1.getTime())/(24*60*60*1000) ;

    设置类函数： 多个参数时可以不写全，不写默认为0。

    setDate(thedate) 函数 -- 设置月份的日值(1~31)
    setFullYear(year,month,thedate) 函数 -- 设置的年份、月份(0~11)和日值
    setHours(hours,minutes,seconds,milliseconds) 函数 -- 设置小时，分钟，秒和毫秒
    setMilliseconds() 函数 -- 设置毫秒数
    setMinutes(minutes,seconds,milliseconds) 函数 -- 设置分钟，秒，毫秒
    setMonth(month,thedate) 函数 -- 设置月份，天
    setSeconds() 函数 -- 设置秒
    setTime() 函数 -- 使用1970年以来的毫秒数设置date对象
    setYear() 函数 -- 设置年份(真实年份减去1900)

    转化类函数：
    toLocaleString() 函数 -- 返回本地时间字符串表示
    toLocaleDateString函数 -- 返回日期部分的本地时间字符串
    toLocaleTimeString函数 -- 返回时间部分的本地时间字符串
    示例：toLocaleTimeString("zh",{hour12: false})，显示12进制时间

    以下几个函数返回utc时间：
    toString()
    toDateString()
    toTimeString()

    日期解析函数parse() 比如：

    var ms=Date.parse("Jul 8, 2005")

    解析一个日期的字符串，并返回该日期距1970年1月1日午夜以来的毫秒数

    时区相关的部份请看javascript时区函数

    计时
    console.time和console.timeEnd

    console.time和console.timeEnd是用来测试一段js代码执行时间的。比如：

    console.time('tag');

    //js代码

    console.timeEnd('tag');
    此二函数只能输出到控制台，无法被调用。

    performance.now()

    测试执行时间

    t0 = performance.now();

    //执行代码

    console.log(performance.now()- t0);
    此函数取时精度较高。但老的浏览器可能不支持。

````js

#### 面向对象模式
- new 操作符 + Object 创建对象
- 用字面量法创建对象
- 工厂模式
- 构造函数模式
- 原型模式
- 构造函数和原型组合模式
- 动态原型模式
- 寄生构造模式
- 稳妥构造模式
- ES6中的class方法

1、new 操作符 + Object 创建对象
```js
var person = new Object();
    person.name = "lisi";
    person.age = 21;
    person.family = ["lida","lier","wangwu"];
    person.say = function(){
        alert(this.name);
    }
// Object()是JavaScript内部的对象
````

2、用字面量法创建对象

```js
var 对象={name:“小明”,age:20,sex:“男”…} 这是字面量表示法的语法 ，缺点:一次性对象，不方便修改，不利于提高效率，一般不建议使用
// 传统模式创建类似对象： 缺陷：代码重复率比较高
var obj1 = new Object({
name:'tom',
age:15,
fn:function() {
return this.name + this.age;
}
})
var obj2 = new Object({
name:'zhangsna',
age:15,
fn:function() {
return this.name + this.age;
}
})
console.log(obj1,obj2)
```

3、通过工厂模式创建对象

```js
   
      // 工厂模式创建对象：工厂模式抽象了创建具体对象的过程函数， 用函数来封装以特定接口创建对象的细节，工厂模式解决了复用性和重复的缺点，但是无法识别对象的类型，是数组还是日期还是正则还是函数？为了解决这个问题就出现了构造函数。
      function createObj(name, age) {
        var obj = new Object();
        obj.name = name;
        obj.age = age;
        obj.fn = function () {
          return this.name + this.age;
        };

        return obj;
      }
      obj1 = createObj("name", 23);
      obj2 = createObj("zhangsna", 30);
```

4、构造函数
 Object和Array,Date都是原生构造函数，我们也可以自己创建一个构造函数，然后用new 构造函数创造一个实例，每个实例就是一个创建的对象，这个过程就是实例化，new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。new 关键字会进行如下的操作：1、创建一个新的对象 2、将构造函数的作用域给新的对象。因此，this指向新对象. 3、执行构造函数中的代码 4、返回一个新对象。
优点： 通过 constructor 或者 instanceof 可以识别对象实例的类别 可以通过 new 关键字来创建对象实例，更像 OO 语言中创建对象实例 缺点： 多个实例的 say 方法都是实现一样的效果，但是却存储了很多次（两个对象实例的 say 方法是不同的，因为存放的地址不同） 注意： 构造函数模式隐试的在最后返回 return this 所以在缺少 new 的情况下，会将属性和方法添加给全局对象，浏览器端就会添加给 window 对象。 也可以根据 return this 的特性调用 call 或者 apply 指定 this。这一点在后面的继承有很大帮助。

```js
  function Person() {
  this.name = 'hanmeimei';
  this.say = function() {
  alert(this.name)
  }
  }
  var person1 = new Person();
```

5、原型模式

```js
function Person() {}
Person.prototype.name = 'hanmeimei';
Person.prototype.say = function() {
  alert(this.name);
}
Person.prototype.friends = ['lilei'];
var person1 = new Person();
```

 优点：  say方法是共享的了，所有的实例的say方法都指向同一个。  可以动态的添加原型对象的方法和属性，并直接反映在对象实例上。
```js
var person1 = new Person()
Person.prototype.showFriends = function() {
  console.log(this.friends)
}
person1.showFriends()  //['lilei']
```
   缺点：  出现引用的情况下会出现问题具体见下面代码：
```js
var person1 = new Person();
var person2 = new Person();
person1.friends.push('xiaoming');
console.log(person2.friends)  //['lilei', 'xiaoming']
```

 因为js对引用类型的赋值都是将地址存储在变量中，所以person1和person2的friends属性指向的是同一块存储区域。  第一次调用say方法或者name属性的时候会搜索两次，第一次是在实例上寻找say方法，没有找到就去原型对象(Person.prototype)上找say方法，找到后就会在实力上添加这些方法or属性。  所有的方法都是共享的，没有办法创建实例自己的属性和方法，也没有办法像构造函数那样传递参数。   注意：  优点②中存在一个问题就是直接通过对象字面量给Person.prototype进行赋值的时候会导致constructor改变，所以需要手动设置，其次就是通过对象字面量给Person.prototype进行赋值，会无法作用在之前创建的对象实例上

```js
var person1 = new Person()
Person.prototype = {
 name: 'hanmeimei2',
   setName: function(name){
      this.name = name
   }
}
person1.setName()   //Uncaught TypeError: person1.set is not a function(…)
```

 这是因为对象实例和对象原型直接是通过一个指针链接的，这个指针是一个内部属性[[Prototype]]，可以通过__proto__访问。我们通过对象字面量修改了Person.prototype指向的地址，然而对象实例的__proto__，并没有跟着一起更新，所以这就导致，实例还访问着原来的Person.prototype，所以建议不要通过这种方式去改变Person.prototype属性   
 
 6、构造函数和原型组合模式

```js
function Person(name) {
  this.name = name
  this.friends = ['lilei']
}
Person.prototype.say = function() {
  console.log(this.name)
}
var person1 = new Person('hanmeimei')
person1.say() //hanmeimei复制代码
```

 优点：  解决了原型模式对于引用对象的缺点 解决了原型模式没有办法传递参数的缺点 解决了构造函数模式不能共享方法的缺点 
 缺点： 
 
 7、动态原型模式

```js
function Person(name) {
  this.name = name
  if(typeof this.say != 'function') {
    Person.prototype.say = function(
    alert(this.name)
  }
}
```

 优点：  可以在初次调用构造函数的时候就完成原型对象的修改 修改能体现在所有的实例中
 缺点：红宝书都说这个方案完美了。。。。 
 注意：  只用检查一个在执行后应该存在的方法或者属性就行了 不能用对象字面量修改原型对象  
 
8、寄生构造函数模式

```js
function Person(name) {
  var o = new Object()
  o.name = name
  o.say = function() {
    alert(this.name)
  }
  return o
}
var peron1 = new Person('hanmeimei')
```

9、稳妥构造模式

```js
function Person(name) {
  var o = new Object()
  o.say = function() {
    alert(name)
  }
  return o
}
var person1 = new Person('hanmeimei');
person1.name  // undefined
person1.say() //hanmeimei复制代码
```

优点：  安全，那么好像成为了私有变量，只能通过say方法去访问  缺点：
不能区分实例的类别


10、ES6中的class方法。
es6为了更接近传统语法，引入了Class这个概念，作为对象的模板，可以看作是一个语法糖，本质上是和原型模式创建对象是一样的。

```js
// 原型模式创建对象
function student(name, age) {
  this.name = name;
  this.age = age;
}
student.prototype.sayHi = function() {
  console.log("i am " + this.name + ",i am " + this.age + " years old");
};
student1 = new student('小明', 18);
student1.sayHi() //i am 小明,i am 18 years old

// class创建对象
class Student {
// 构造函数写属性
  constructor(name, age) {
    this.name = name
    this.age = age
  }
// 公用方法直接写
  sayHi () {
    console.log("i am " + this.name + ",i am " + this.age + " years old");
  }
student1 = new Student ('小明', 18);
student1.sayHi() //i am 小明,i am 18 years old
}
```

注： 构造函数尽可能使用首字母大写

#### 基本包装类型
为了便于操作基本类型值，ECMAScript 还提供了 3 个特殊的引用类型：Boolean、Number 和String。这些类型与本章介绍的其他引用类型相似，但同时也具有与各自的基本类型相应的特殊行为。实际上，每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。来看下面的例子
```js
var s1 = "some text";
var s2 = s1.substring(2);
```
这个例子中的变量 s1 包含一个字符串，字符串当然是基本类型值。而下一行调用了 s1 的substring()方法，并将返回的结果保存在了 s2 中。我们知道，基本类型值不是对象，因而从逻辑上讲它们不应该有方法（尽管如我们所愿，它们确实有方法）。其实，为了让我们实现这种直观的操作，后台已经自动完成了一系列的处理。当第二行代码访问 s1 时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值。而在读取模式中访问字符串时，后台都会自动完成下列处理:

创建 String 类型的一个实例；
在实例上调用指定的方法；
销毁这个实例；
##### 1.Boolean类型
Boolean 类型的实例重写了valueOf()方法，返回基本类型值true 或false；重写了toString()方法，返回字符串"true"和"false"。可是，Boolean 对象在 ECMAScript 中的用处不大，因为它经常会造成人们的误解。
2.Number类型
静态属性：
MAX_VALUE   表示最大值
MIN_VALUE  表示最小值
NaN  非数值
NEGATIVE_INFINITY  负无穷大，溢出返回该值
POSITIVE_INFINITY  无穷大，溢出返回该值
prototype   原型，用于增加新属性和方法

```js
 console.log(Number.MAX_VALUE)
 console.log(Number.MIN_VALUE)
 console.log(Number("abc"))   // NaN
 console.log(Number("234"))   // 234，将字符串转换为数值型数据
 console.log(isNaN(123))  // true  用来判断是不是不是一个数值型
 console.log(Number.NEGATIVE_INFINITY)   // -Infinity
 console.log(789/0)    // -Infinity  除数为0会返回无穷大
 console.log(Number.POSITIVE_INFINITY)
 console.log(Number.prototype)

```

方法：
Number 类型也重写了 valueOf()、toLocaleString()和 toString()等方法
重写后的 valueOf()方法返回对象表示的基本类型的数值，另外两个方法则返回字符串形式的数值。
toString()  将数值转化为字符串，并且可以转换进制。

```js
var num = 10
console.log(num.toString())  //  "10"
console.log(num.toString(4))  //  "1010"
console.log(num.toString(8))  //  "12"
console.log(num.toString(10))  //  "10"
console.log(num.toString(16))  //  "a"
```

toFixed()  按照指定的小数位返回数值的字符串

```js
var num = 10
console.log(num.toFixed(2))  // "10.00"

var num1 = 10.005
console.log(num.toFixed(2))  // "10.01"  具有能够自动四舍五入的特性
```

toExponential()    指数形式（也称 e 表示法），传参会保留小数点

```js
var num = 300
console.log(num.toExponential(6))    // "3.000000e+2"
```

toPrecision() 把数字格式化为指定的长度:

```js
var num = new Number(13.3714);
var n=num.toPrecision(2);
n 输出结果:13


使用不同进制把数字格式化为指定的长度:
var num = new Number(13.3714);
var a = num.toPrecision();
var b = num.toPrecision(2);
var c = num.toPrecision(3);
var d = num.toPrecision(10);
a、b、c 和 d 输出结果:
13.3714
13
13.4
13.37140000
参数超出 100 会报错.
```

valueOf()   可以字符串返回数字。字符串的输出通常等于该数字。

```js
var num = 300
num.valueOf() //  300
```

toLocaleString()    指数或点形式，传参会保留小数点

```js
字符串：

var a = 6666;
a.toLocaleString();
//"6,666"
a.toString();
//"6666"
可以看到，当数字是三位以上时，会每三位出现一个分隔号；

数组：

var c = [1,2,3];
console.log(c.toLocaleString());
//1,2,3
console.log(c.toString());
//1,2,3
没有区别

日期：

var dt = new Date();
console.log(dt.toLocaleString());
//2018/1/4 下午10:32:18
console.log(dt.toString());
//Thu Jan 04 2018 22:32:18 GMT+0800 (中国标准时间)
结论：

1、LocaleString()会根据你机器的本地环境来返回字符串，它和toString()返回的值在不同的本地环境下使用的符号可能变化；

2、使用toString()是保险的方法，它不会因为本地环境（例如国家）改变而改变；

3、为了返回时间类型的值的话，使用toLocaleString()；
```

### 3. String类型

String 类型是字符串的对象包装类型，可以像下面这样使用 String 构造函数来创建
```js
var stringObject = new String("hello world");
```
String 对象的方法也可以在所有基本的字符串值中访问到。其中，继承valueOf()、toLocaleString()和 toString()方法，都返回对象所表示的基本字符串值

String 类型的每个实例都有一个 length 属性，表示字符串中包含多个字符
```js
var stringValue = "hello world"; 
alert(stringValue.length); //"11"
```

字符方法
charAt(n)      返回指定索引位置的字符
chartCodeAt(n)  以Unicode编码形式返回指定索引位置的字符
```js
var box = "Mr. Lee";
alert(box.charAt(1)); //r
alert(box.charCodeAt(1));  // 114
alert(box[1])  //r  Ie浏览器会有兼容器问题显示undefined
```

字符串操作方法
concat()方法
用于将一或多个字符串拼接起来，返回拼接得到的新字符串
```js
var stringValue = "hello "; 
var result = stringValue.concat("world"); 
alert(result); //"hello world" 
alert(stringValue); //"hello"
```
concat()方法可以接受任意多个参数，也就是说可以通过它拼接任意多个字符串
```js
var stringValue = "hello "; 
var result = stringValue.concat("world", "!"); 
alert(result); //"hello world!" 
alert(stringValue); //"hello"
```
虽然 concat()是专门用来拼接字符串的方法，但实践中使用更多的还是加号操作符（+）。而且，使用加号操作符在大多数情况下都比使用concat()方法要简便易行（特别是在拼接多个字符串的情况下）

slice()、substr()和 substring()
基于子字符串创建新字符串的方法

这三个方法都会返回被操作字符串的一个子字符串，而且也都接受一或两个参数。第一个参数指定子字符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪里结束。具体来说，slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。而 substr()的第二个参数指定的则是返回的字符个数。如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置。与concat()方法一样，slice()、substr()和 substring()也不会修改字符串本身的值——它们只是返回一个基本类型的字符串值，对原始字符串没有任何影响
```js
var stringValue = "hello world"; 
alert(stringValue.slice(3)); //"lo world" 
alert(stringValue.substring(3)); //"lo world" 
alert(stringValue.substr(3)); //"lo world" 
alert(stringValue.slice(3, 7)); //"lo w" 
alert(stringValue.substring(3,7)); //"lo w" 
alert(stringValue.substr(3, 7)); //"lo worl"
alert(stringValue.substr(-2)); //"ld"  如果为负数，从后面开始截取
```
字符串位置方法
从字符串中查找子字符串的方法：indexOf()和 lastIndexOf()
这两个方法都是从一个字符串中搜索给定的子字符串，然后返子字符串的位置（如果没有找到该子字符串，则返回-1）。这两个方法的区别在于：indexOf()方法从字符串的开头向后搜索子字符串，而 lastIndexOf()方法是从字符串的末尾向前搜索子字符串
```
var stringValue = "hello world"; 
alert(stringValue.indexOf("o")); //4 
alert(stringValue.lastIndexOf("o")); //7
```
这两个方法都可以接收可选的第二个参数，表示从字符串中的哪个位置开始搜索。换句话说，indexOf()会从该参数指定的位置向后搜索，忽略该位置之前的所有字符；而 lastIndexOf()则会从指定的位置向前搜索，忽略该位置之后的所有字符
```
var stringValue = "hello world"; 
alert(stringValue.indexOf("o", 6)); //7 
alert(stringValue.lastIndexOf("o", 6)); //4
```
trim()方法
法会创建一个字符串的副本，删除前置及后缀的所有空格，然后返回结果
```
var stringValue = " hello world "; 
var trimmedStringValue = stringValue.trim(); 
alert(stringValue); //" hello world " 
alert(trimmedStringValue); //"hello world"
```

字符串大小写转换方法
toLowerCase(str)  将字符串全部转换为小写
toUpperCase(str)   将字符串全部转换为大写
toLocaleLowerCase(str)   将字符串全部转换为小写，并本地化
toLocaleUpperCase(str)   将字符串全部转换为大写，并本地化
```
var stringValue = "hello world"; 
alert(stringValue.toUpperCase()); //"HELLO WORLD" 
alert(stringValue.toLowerCase()); //"hello world"
```
localeCompare()方法
与操作字符串有关的最后一个方法是 localeCompare()，这个方法比较两个字符串，并返回下列值中的一个：

如果字符串在字母表中应该排在字符串参数之前，则返回一个负数（大多数情况下是-1，具体的值要视实现而定）；
如果字符串等于字符串参数，则返回 0；
如果字符串在字母表中应该排在字符串参数之后，则返回一个正数（大多数情况下是 1，具体的值同样要视实现而定）；
```
var stringValue = "yellow"; 
alert(stringValue.localeCompare("brick")); //1 
alert(stringValue.localeCompare("yellow")); //0 
alert(stringValue.localeCompare("zoo")); //-1
```
fromCharCode()方法
这个方法的任务是接收一或多个字符编码，然后将它们转换成一个字符串。从本质上来看，这个方法与实例方法 charCodeAt()
执行的是相反的操作
```
alert(String.fromCharCode(104, 101, 108, 108, 111)); //"hello"
```

字符串匹配方法 
| 方法                         | 描述                              |
| ---------------------------- | --------------------------------- |
| match(pattern)               | 返回pattern中的字串或null         |
| replace(pattern,replacement) | 用replacement 替代pattern         |
| search(pattern)              | 返回字符串中pattern开始位置       |
| split(pattern)               | 返回字符串按指定pattern拆分的数组 |

```js
var box = "how old are you??"
console.log(box.match("are"))  // ["are",index:8,input:"how old are you??",groups:undefined] 返回的是数组对象
console.log(box.match("are")[0])  // "are" 返回匹配内容
console.log(box.match("are").index)  // 8 返回匹配内容的开始下标
console.log(box.match("ared"))  // null 如果没有匹配内容
console.log(box.match(/y/))  // 可以匹配正则表达式

console.log(box.replace("?","..."))  // how old are you...??  只替换第一个
console.log(box.replace(/\?/g,"..."))  //  how old are you...... 正则可以全部替换 i为忽略字母大小写 g为全局
console.log(box.replace("","..."))  //  ...how old are you??  实现前面添加
console.log(box.replace("??","..."))  //  ...how old are you...  实现替换添加


console.log(box.search("are"))  // 8  表示从字符串下标为8的位置开始匹配到
console.log(box.search(/\?/))  // 16  特殊符号需要正则匹配
console.log(box.split(""))    // 把字符串中每个字符切割成一个数组元素，组成数组。
console.log(box.split(" "))  // ["how","old","are","you??"] 转换成数组 
```

4. 变量、作用域及内存
   1) 变量
      a. 基本类型的变量
        基本类型的变量的值存储在栈中
      b. 引用类型的变量
        引用类型的变量的值存储在堆中，在栈中存储的是引用类型的变量的地址（指针）
      ```js
      // 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址，当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后，从堆中获得实体。
      var obj = {x : 0};
          obj.x = 100;    
          var o = obj;    //实际拷贝的是obj的内存地址
          o.x = 1;
          console.log(obj.x)       // 1,   obj被修改
          o = {x:100};  //等同于重新开辟内存，不是修改
          console.log(obj,o)         //{x:1} {x:100}
      ```
    2) 作用域
        js作用域（es6）之前分为：全局变量和局部变量：(1)全局变量只有浏览器关闭的时候1才会销毁，比较占内存资源；(2)局部变量，当程序执行完毕就会销毁，比较节约内存资源
        在代码中任何地方都能访问到的对象拥有全局作用域，一般来说以下几种情形拥有全局作用域：
最外层函数和在最外层函数外面定义的变量拥有全局作用域

```js
var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
    var inVariable = "内层变量";
    function innerFun() { //内层函数
        console.log(inVariable);
    }
    innerFun();
}
console.log(outVariable); //我是最外层变量
outFun(); 
//内层变量
console.log(inVariable); //inVariable is not defined
innerFun(); //innerFun is not defined
```

所有未定义直接赋值的变量，自动声明为拥有全局作用域
```js
function outFun2() {
    variable = "未定义直接赋值的变量";
    var inVariable2 = "内层变量2";
}
outFun2();//要先执行这个函数，否则根本不知道里面是啥
console.log(variable); //未定义直接赋值的变量
console.log(inVariable2); //inVariable2 is not defined
```
所有 window 对象的属性拥有全局作用域
一般情况下，window 对象的内置属性都拥有全局作用域，例如 window.name、window.location、window.top 等等。
全局作用域有个弊端：如果我们写了很多行 JS 代码，变量定义都没有用函数包括，那么它们就全部都在全局作用域中。这样就会污染全局命名空间, 容易引起命名冲突。

  js中没有块级作用域，es6才新增了块级作用域let const 声明，块级作用域 {} if{} for{}
 let/const 声明并不会被提升到当前代码块的顶部，因此你需要手动将 let/const 声明放置到顶部，以便让变量在整个代码块内部可用。
```js
function getValue(condition) {
    if (condition) {
        let value = "blue";
        return value;
    } else {
        // value 在此处不可用
        return null;
    }
        // value 在此处不可用
```

如果一个标识符已经在代码块内部被定义，那么在此代码块内使用同一个标识符进行 let 声明就会导致抛出错误。例如：
```js
var count = 30;
let count = 40; // Identifier 'count' has already been declared
```
    3)  垃圾回收机制
       js有自动回收垃圾的功能，在项目开发过程中，也可以手动将变量设为null
       JavaScript执行环境中的垃圾回收器怎样才能检测到哪块内存可以被回收呢？

通常有两种方式：标记清除（mark and sweep）、引用计数（reference counting）
标记清除
这是JavaScript中最常用的垃圾回收方式。
（1）当变量进入执行环境时（函数中声明变量），就标记这个变量为“进入环境”，当变量离开环境时（函数执行结束），则将其标记为“离开环境”，离开环境之后还有的变量则是需要被删除的变量。
（2）垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记。
（3）去掉环境中的变量以及被环境中变量引用的变量的标记。
（4）之后再被加上标记的变量即是需要回收的变量（因为环境中的变量已经无法访问到这些变量）
（5）最后，垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。
引用计数
这种方式常常会引起内存泄漏，低版本的IE使用这种方式。机制就是跟踪一个值的引用次数，当声明一个变量并将一个引用类型赋值给该变量时该值引用次数加1，当这个变量指向其他一个时该值的引用次数便减一。当该值引用次数为0时，则说明没有办法再访问这个值了，被视为准备回收的对象，每当过一段时间开始垃圾回收的时候，就把被引用数为0的变量回收。引用计数方法可能导致循环引用，类似死锁，导致内存泄露。
例如：
```js
function problem() {
    var objA = new Object();
    var objB = new Object();

    objA.someOtherObject = objB;
    objB.anotherObject = objA;
```
objA和objB相互引用，两个对象的引用次数都是2。函数执行完成之后，objA和objB还将会继续存在，因为他们的引用次数永远不会是0。这样的相互引用如果说很大量的存在就会导致大量的内存泄露。
补充：
常见内存泄漏的原因：
（1）全局变量引起的内存泄露
（2）闭包引起的内存泄露：慎用闭包
（3）dom清空或删除时，事件未清除导致的内存泄漏
（4）循环引用带来的内存泄露

## json和dom操作

* json
* dom介绍
* 节点操作
* 节点文本操作
* dom节点样式操作
  
1. json(javascription object notation)js对象表达法，是一种轻量级的数据交换格式
    与xml比较，json书写或解析时是一个对象，更容易解析，而xml是用标签存储数据。
    JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串。
    ps: json不支持undefine
```js
var obj = {a: 'Hello', b: 'World'}; //这是一个对象，注意键名也是可以使用引号包裹的

var json = '{"a": "Hello", "b": "World"}'; //这是一个 JSON 字符串，本质是一个字符串
```
JSON 和 JS 对象互转
要实现从JSON字符串转换为JS对象，使用 JSON.parse() 方法：
```js
var obj = JSON.parse('{"a": "Hello", "b": "World"}'); //结果是 {a: 'Hello', b: 'World'}
// 要实现从JS对象转换为JSON字符串，使用 JSON.stringify() 方法：
var json = JSON.stringify({a: 'Hello', b: 'World'}); //结果是 '{"a": "Hello", "b": "World"}'
```
在独立的json文件中写json时， 文件扩展名必须是.json，数据不能用=赋值给某个变量必须要用双引号引用键名
```js
//前后端分离，推荐后端返回给前端数据格式
// data.json
{
"status" : 0 ,          //执行状态码
"msg"    : "SUCCESS",   //说明文字信息，没有为NULL
"data"   :[{            //对象中嵌套数组，数组是返回的数据，
"id"    : 1 ,
"name"  : "xiaohong"
},{
"id"    : 2,
"name"  : "xiaoming"
}]
}
```
读取json文件
```js
      // 需要服务器支持
      let xhr = null;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhr.open("get", "./data.json", true);
      // xhr.onload = function () {
      //   console.log(xhr.response);
      // };
      xhr.onreadystatechange = function (e) {
        if ((xhr.readyState === 4 && xhr.status == 200) || xhr.status === 304) {
          console.log(JSON.parse(xhr.responseText));
        } else {
          console.log("Error json - XMLHttpRequest status: " + xhr.status);
          console.log("Error json - File config not found");
        }
      };

      xhr.send();
      console.log(xhr);
```

(三) dom操作
   Document Object Model 文档对象模型，是html和xml文档的编程接口，定义了访问和操作html文档的方法
   dom以树形目录结构表达html和xml文档，每个节点就是一个dom元素
   document->html->head/body->element->element/attribute/text
   DOM全称为Document Object Model，即文档对象模型
  Document节点就是文档本身
  DOM规定页面中所有的元素都是节点
  Document节点在页面加载时自动创建
  1. 节点是对象的另外一种叫法，在DOM规则中规定对象都称为节点
   1) 节点层次
     节点层次分为父子节点和同胞节点两种。
     每个节点都有父节点、除了根（它没有父节点）
     一个节点可以拥有任意数量的子节点
     同胞是拥有相同父节点的节点。
   2) 节点分类(nodeType)：
     > 元素节点：html中的标签
     > 属性节点：标签带的属性
     > 文本节点：标签中间的内容  
     > 文档节点：document
    1) 节点的名称(nodeName)： nodeName是只读的，不能被重新赋值修改
      元素节点 大写的标签名
      属性节点 小写的属性名
      文本节点 #text
      文档节点 #document
     4)节点的值（nodeValue)
       元素节点 是undefined 或null
       文本节点是  文本本身
       属性节点是 属性值
    2) 节点的类型
      | 元素类型 | nodeType |
      | ------ | -------|
      | 元素  | 1 |
      | 属性 | 2 |
      | 文本 | 3|
      | 注释 | 8|
      | 文档| 9|
       （1,2,3用于判断节点类型，比如if(i.nodeType ==3){}等）。 
          appendChild()  增添元素节点
          ```js
        let node1 = document.createElement("p") // 创建元素节点
        let text = document.createTextNode("这是一段文字")  // 创建文本节点
        node1.appendChild(text)  // 把文本节点添加到node1元素节点上
        let element = document.getElementById("div")  // 获取页面上已有的元素节点
        element.appendChild(node1)  // 把创建的node1元素节点增加到页面上。
        ```
2 document节点属性
2.1 返回文档内部的某个节点
2.1.1 document.doctype
对于HTML文档来说document对象一般有两个子节点，第一个子节点就是doctype。doctype节点是一个对象，包含了当前文档类型信息。如果当前网页没有声明DTD，该属性返回null。
对于HTML5文档，doctype节点就代表
```js
 <script>
 		var doctype = document.doctype;
        console.log(doctype);// <!DOCTYPE html>
        console.log(doctype.name);// html
</script>
```
2.1.2 document.documentElement
document.documentElement属性，表示当前文档的根节点。通常是document节点的第二个子节点，紧跟在document.doctype节点后面。
对于HTML网页，该属性返回HTML节点。但是对我们来说一般都是通过documentElement节点来访问页面当中的其他子节点。
documentElement代表的是html标签(html元素)
语法：document.documentElement
```js
 <script>
        console.log(document.documentElement);
</script>
```
html并不代表整个文档，docoment代表的是文档本身也就是整个文档
```js
 <script>
        console.log(document);
</script>
```
2.1.3 document.body
body属性返回当前文档的body或frameset节点，如果不存在这样的节点，就返回null。
该属性是可写的，如果对其写入一个新的节点会导致原有的所有子节点被移除。
语法：document.body
```js
 <script>
        console.log(document.body);  // body节点
</script>
```
2.1.4 document.head
head属性返回当前文档的head节点。如果当前文档有多个head，则返回第一个。
```js
 <script>
        console.log(document.head);
</script>
```
2.2 返回文档的固有属性
documentURI：返回当前文档的网址。
document.documentURI属性所有文档都具备
语法：document.documentURI
IE浏览器不支持documentURI属性
document.documentURI === document.URI
2.2.1 document.documentURI
```js
<script>
        console.log(document.documentURI);
 </script>
```

2.2.2 document.URL
URL
注意：本属性是只读
返回当前文档的网址
document.URL只有HTML文档才具备
```hs
<script>
        document.URL = 'http://www.baidu.com'; //无效
        console.log(document.URL);
</script>
```
2.2.3 document.domain
返回当前文档的域名
如果无法获取域名，则返回null
```js
<script>
        console.log(document.domain);
		
		//如果当前域名是百度，就关闭当前页面
        var baidu = "www.baidu.com";
        if (document.domain === baidu) {
            window.close();
        }
</script>
```

2.2.4 document.lastModified
lastModified：返回当前文档（网页）最后修改的时间戳，格式为字符串。
lastModified属性的值是字符串，所以不能直接用来比较。若想比较两个文档谁的日期更新，则需要转换成时间戳格式才能进行比较(if(Date.parse(doc1.lastModified) > Date.parse(doc2.lastModified)) {//…}) Date.parse()能够将时间格式字符串转换成时间戳格式
```js
<script>
        console.log(document.lastModified); //04/10/2021 13:52:32
</script>
```

2.2.5 document.location
location：返回一个只读对象，提供了当前文档的URL信息
```js
 <script>
        console.log(document.location);
        //实现页面跳转
        document.location.href = 'http://www.baidu.com';
        console.log(document.location.href);
 </script>
```
document.location.href 返回完整的url
document.location.protocol 返回当前遵守的协议
document.location.host 返回当前页面域名和端口号
document.location.hostname  返回当前页面域名
document.location.port 返回当前页面的端口号，如果不存在则返回空
document.location.pathname 返回当前页面在服务器中路径
document.location.search 返回当前页面url中的查询字符串
document.location.assign("http://www.baidu.com")
注意：search是获取url中保存的信息
```js
 	<form action="">
        <input type="text" name="userName" />
        <input type="submit" />
    </form>
    <button id="but">获取发送信息</button>
```
```js
<script>
        document.getElementById("but").onclick = function() {
            console.log(document.location.search);
        }
</script>
```

2.2.6 document.title
返回当前文档的标题，该属性是可写的
```js
 <title>我是标题头</title>

 <script>
        var title = document.title;
        title = "我是新的标题头";
        console.log(title);
</script>
```
2.2.7 document.characterSet
返回渲染当前文章的字符集
```js
 <script>
        var character = document.characterSet;
        console.log(character); //UTF-8
</script>
```
2.2.8 document.readyState
返回当前文档的状态
共有三种可能： 加载HTML代码阶段(尚未解析完成)是“loading”；加载外部资源的阶段是"interactive"；全部加载完成是"complete"。
```js
<script>
        if (document.readyState === "complete") {
            console.log("当前页面已经加载完毕");
        }      
  //这种判断方式只能判断一次，如果页面在判断时没有加载完成，那么就无法确定页面究竟是何时加载完毕
	  console.log(document.readyState);
        var timer = setInterval(function() {
            console.log(document.readyState);//loading  interactive  complete
            if (document.readyState == 'complete') {
                clearInterval(timer); //清楚定时器
            }
        }, 20);
</script>
```
2.3返回页面中指定元素的集合
2.3.1 document.anchors
返回页面中带有name属性的a标签的集合
```js
  	<a href="#">链接1</a>
    <a href="#" name="anchors2">链接2</a>
    <a href="#" name="anchors3">链接3</a>
    <a href="#">链接4</a>
    <a href="#">链接5</a>

<script>
        var collection = document.anchors;
        console.log(collection);//
        console.log(collection.length);//
        console.log(collection[0]);//
</script>
```

2.3.2 document.forms
返回网页中所有表单
```js
<script>
        var forms = document.forms;
        if (forms !== 0) {
            console.log("网页中有表单"); //网页中有脚本
        } else {
            console.log("网页中没有表单");
        }
</script>
```

2.3.3 document.images
返回网页中所有图片
```js
<script>
        var imgs = document.images;
        if (imgs !== 0) {
            console.log("网页中有图片"); //网页中有脚本
        } else {
            console.log("网页中没有图片");
        }
</script>
```
2.3.4 document.links
返回网页中所有链接元素(即带有href属性的a标签)
```js
<script>
        var links = document.links;
        if (links !== 0) {
            console.log("网页中有链接"); //网页中有脚本
        } else {
            console.log("网页中没有链接");
        }
</script>
```
2.3.5 document.scripts
返回网页中所有的脚本
```js
<script>
        var scripts = document.scripts;
        if (scripts !== 0) {
            console.log("网页中有脚本"); //网页中有脚本
        } else {
            console.log("网页中没有脚本");
        }
</script>

```
3. document节点选中页面元素
3.1 querySelector()
描述：本方法用来选中页面元素，根据指定的选择器进行筛选
如果有多个节点满足匹配条件则返回第一个匹配的节点
如果没有发现匹配的节点则返回null
querySelector是匹配的选择器，如果是id选择器那么则应为 document.querySelector(‘#名’);
标签:document.querySelector("p"), class选择器: document.querySelector(".class")
语法：document.querySelector(‘选择器名’);
```js
 	<p id="p1">这是p1</p>
    <p id="p2" name="p2_name" class="pp">这是p2<span>这是内部span</span></p>
    <h2>这是h2</h2>
    <p class="pp" name="p2_name">这是p3</p>
    <span>这是span标签</span>

<script>
        var p = document.querySelector('.pp');
        var p2_span = p.querySelector('span');
        console.log(p2_span);
</script>
```
3.2 querySelectorAll()
描述：本方法用来选中页面元素，根据指定的选择器进行筛选。
如果有多个元素满足条件，则返回这些元素构成的集合
语法：document.querySelectorAll(‘选择器名’);
注意：

返回的结果是一个节点列表，不是数组，但能够像数组一样使用列表
如果查找失败不是返回null，而是返回一个空的节点列表
```js
	<p id="p1">这是p1</p>
   <p id="p2" name="p2_name" class="pp">这是p2<span>这是内部span</span></p>
   <h2>这是h2</h2>
   <p class="pp" name="p2_name">这是p3</p>
   <span>这是span标签</span>

  <script>
        var pList = document.querySelectorAll('.pp');
        console.log(pList[1]);
 </script>
```
3.3 getElementById()
返回匹配指定ID属性的元素节点（返回的是一个对象）
参数 id 是一个大小写敏感的字符串
```js
 	<p id="p1">这是p1</p>
    <p id="p2" name="p2_name" class="pp">这是p2<span>这是内部span</span></p>
    <h2>这是h2</h2>
    <p class="pp" name="p2_name">这是p3</p>
    <span>这是span标签</span>

 <script>
        var p2 = document.getElementById('p2');
        console.log(p2);
        p2.style.color="red"
        // 打印我们返回的元素对象，这样可以更好的查看里面的属性和方法
        console.dir(p2);
</script>
```
3.4 getElementsByTagName()
返回所有指定标签的元素(对象)集合
```js
 	<p id="p1">这是p1</p>
    <p id="p2" name="p2_name" class="pp">这是p2<span>这是内部span</span></p>
    <h2>这是h2</h2>
    <p class="pp" name="p2_name">这是p3</p>
    <span>这是span标签</span>

<script>
        var p = document.getElementsByTagName('p');
        console.log(p[1]);
        p[1].style.fontSize="30px"
        console.log(p.length);
</script>
```
3.5 getElementsByClassName()
返回符合指定类名的所有元素（集合）
```js
 	<p id="p1">这是p1</p>
    <p id="p2" name="p2_name" class="pp">这是p2<span>这是内部span</span></p>
    <h2>这是h2</h2>
    <p class="pp" name="p2_name">这是p3</p>
    <span>这是span标签</span>
<script>
        var pp = document.getElementsByClassName('pp');
        console.log(pp[1]);
</script>
```

3.6 getElementsByName()
用于选择拥有name属性的HTML元素
```js
 	<p id="p1">这是p1</p>
    <p id="p2" name="p2_name" class="pp">这是p2<span>这是内部span</span></p>
    <h2>这是h2</h2>
    <p class="pp" name="p2_name">这是p3</p>
    <span>这是span标签</span>

<script>
        var p2_name = document.getElementsByName('p2_name');
        console.log(p2_name[0]);
        p2_name[0].value ="lili"
</script>
```
3.7 querySelector系列与getElementsBy系列方法的区别
querySelector系列属于W3C中的Selectors API(JS)规范
getElementsBy系列属于W3C的DOM规范
querySelector系列基本能被所有浏览器支持
getElementsBy系列通常只有在考虑兼容性的时候才被提起(尽管两者功能相似)
querySelector系列接收的参数是一个css选择器名
getElementsBy系列接收的参数只能是单一的className、tagName和name
querySelectorAll()返回的是一个静态节点列表
```js
 	<ul>
        <li>li</li>
        <li>li</li>
        <li>li</li>
        <li>li</li>
    </ul>

<script>
		var ul = document.querySelectorAll('ul')[0];
        var list = ul.querySelectorAll("li");
        for (var i = 0; i < list.length; i++) {
            ul.appendChild(document.createElement("li"));
        }
</script>
```

getElementsBy系列返回的是一个动态节点列表
```js
	<ul>
        <li>li</li>
        <li>li</li>
        <li>li</li>
        <li>li</li>
    </ul>

 <script>
 		var ul = document.querySelectorAll('ul')[0];
        var list = ul.getElementsByTagName("li");
        for (var i = 0; i < list.length; i++) {
            ul.appendChild(document.createElement("li"));
        }
</script>
// 此时会进入死循环状态：
```

4. document节点创建页面元素和属性
  - JavaScript获取父级元素,子级元素,兄弟元素的实现方法
```js
<div id = "dom">
          <div></div>
          <div></div>
     <div></div>
 </div>

<script>
   function dom(){
      var a = document.getElementByIdx_x_x("dom");
      del_space(a);调用清理空格的函数
      var b = a.childNodes;获取a的全部子节点；
      var c = a.parentNode;获取a的父节点；
      var d = a.nextSbiling;获取a的下一个兄弟节点
      var e = a.previousSbiling;获取a的上一个兄弟节点
      var f = a.firstChild;获取a的第一个子节点
      var g = a.lastChild;获取a的最后一个子节点
}
</script>
```
- jQuery获取父级元素,子级元素,兄弟元素的实现方法
jQuery.parent(expr) 找父亲节点，可以传入expr进行过滤，比如("span").parent()或者("span").parent()或者(“span”).parent(“.class”)
jQuery.parents(expr),类似于jQuery.parents(expr),但是是查找所有祖先元素，不限于父元素
jQuery.children(expr).返回所有子节点，这个方法只会返回直接的孩子节点，不会返回所有的子孙节点
jQuery.contents(),返回下面的所有内容，包括节点和文本。这个方法和children()的区别就在于，包括空白文本，也会被作为一个
jQuery对象返回，children()则只会返回节点
jQuery.prev()，返回上一个兄弟节点，不是所有的兄弟节点
jQuery.prevAll()，返回所有之前的兄弟节点
jQuery.next(),返回下一个兄弟节点，不是所有的兄弟节点
jQuery.nextAll()，返回所有之后的兄弟节点
jQuery.siblings(),返回兄弟姐妹节点，不分前后
jQuery.find(expr),跟jQuery.filter(expr)完全不一样。jQuery.filter()是从初始的jQuery对象集合中筛选出一部分，而jQuery.find()的返回结果，不会有初始集合中的内容，比如("p"),find("span"),是从p元素开始找,等同于("p"),find("span"),是从p元素开始找,等同于(“p span”)

- js获取节点 dom操作
接口	nodeType常量	nodeType值	备注
Element	Node.ELEMENT_NODE	1	元素节点
Text	Node.TEXT_NODE	3	文本节点
Document	Node.DOCUMENT_NODE	9	document
Comment	Node.COMMENT_NODE	8	注释的文本
DocumentFragment	Node.DOCUMENT_FRAGMENT_NODE	11	document片断
Attr	Node.ATTRIBUTE_NODE	2	节点属性
—我—是—分—割—线—
属性	描述
attributes	如果该节点是一个Element，则以NamedNodeMap形式返回该元素的属性。
childNodes	以Node[]的形式存放当前节点的子节点。如果没有子节点，则返回空数组。
firstChild	以Node的形式返回当前节点的第一个子节点。如果没有子节点，则为null。
lastChild	以Node的形式返回当前节点的最后一个子节点。如果没有子节点，则为null。
nextSibling	以Node的形式返回当前节点的兄弟下一个节点。如果没有这样的节点，则返回null。下一个兄弟节点
nodeName	节点的名字，Element节点则代表Element的标记名称。
nodeType	代表节点的类型。
parentNode	以Node的形式返回当前节点的父节点。如果没有父节点，则为null。
previousSibling	以Node的形式返回紧挨当前节点、位于它之前的兄弟节点。如果没有这样的节点，则返回null。上一个兄弟节点
方法	描述
createAttribute()	用指定的名字创建新的Attr节点。
createComment()	用指定的字符串创建新的Comment节点。
createElement()	用指定的标记名创建新的Element节点。
createTextNode()	用指定的文本创建新的TextNode节点。
getElementById()	返回文档中具有指定id属性的Element节点。
getElementsByTagName()	返回文档中具有指定标记名的所有Element节点。

4.1 document.createElement()
描述：创建一个页面元素
语法：document.createElement(“标签名”)
注意：本方法创建的页面元素不会直接显示在页面中，而是默认存在于内存中
```js
 <script>
        var p = document.createElement('p');
        console.log(p);
 </script>
```
4.2 fatherNode.appendChild()
描述：给某个节点添加子节点
语法：fatherNode.appendChild(子节点)
fatherNode：父标签对象
```js
 <script>
        // 创建元素
        var p = document.createElement('p');
        // 添加元素
        document.body.appendChild(p);
</script>
```
4.3 fatherNode.removeChild()
描述：通过父标签对象将自己的一个子标签删除
语法：fatherNode.removeChild(子节点)
fatherNode：父标签对象
```js
    // 创建元素
    var p = document.createElement("p");
    // 添加元素
    document.body.appendChild(p);
   // 删除元素
   document.body.removeChild(p);
   // 通过自身调用父元素删除自己
   p.parentNode.removeChild(p)
```
生成div标签并设置class和style
```js
	<script>
		var div = document.createElement("div"); //创建一个标签
		div.className = "box"; //给创建的div设置class；
		var con = document.getElementById('content'); //获取标签
		con.appendChild(div); //向刚获取的标签中添加创建的标签
		var child = document.createElement("div"); //创建一个标签
		child.className = "name"; //给创建的div设置class；
		div.appendChild(child);
		var color = document.getElementsByClassName('name')[0];
		color.innerHTML = '元素';
		div.style.backgroundColor = "#00FF7F";
	</script>
```
// 方式二：字符串拼接
```
<div id="container">
</div>
<script>
 window.onload = function () {
  var str='';
  for(var i=0; i<30 ;i++){
   var r = parseInt(Math.random()*100); //随机生成一个数字
   str += '<div>'+r+'</div>'; //拼接str
  }
  document.getElementById('container').innerHTML=str;
 }
</script>
```
总体思路：创建元素：Document.createElement()，找到父级元素 ：可以通过Id、name、标签名、class、匹配指定的css选择器，在指定位置插入、替换、克隆、删除元素：element.appendChild()、element.insertBefore(创建的节点、已知节点) 、element.replaceChild(新节点、老节点)、 需要被复制的节点element.cloneNode(true/false) true 深度克隆，false仅复制当前节点、删除当前节点element.remove()、删除子节点element.removeChild() 

```js
<div id="div-input">
 <input type="text" id="txt_input" value="4"/>
 <input type="button" id="leftInsert" value="左侧入" />
 <input type="button" id="rightInsert" value="右侧入" />
</div>
<div id="container">
 <span>1</span>
 <span>2</span>
 <span>3</span>
</div>
    <script>
      var inputValue = document.getElementById("txt_input").value;
      document.getElementById("leftInsert").onclick = function () {
        inputValue = document.getElementById("txt_input").value;
        //左侧入
        var span = document.createElement("span"); //1、创建元素
        span.innerHTML = inputValue;
        var container = document.getElementById("container"); //2、找到父级元素
        container.insertBefore(span, container.childNodes[0]); //插入到最左边
      };
      document.getElementById("rightInsert").onclick = function () {
        //右侧入
        inputValue = document.getElementById("txt_input").value;
        var span = document.createElement("span"); //1、创建元素
        span.innerHTML = inputValue;
        span.innerHTML += "<button class='del'>删除</button>";
        var container = document.getElementById("container"); //2、找到父级元素
        container.appendChild(span); //3、在末尾中添加元素
        addDelBtn();
      };

      let addDelBtn = function () {
        let btns = document.querySelectorAll(".del");
        btns.forEach((item) => {
          // item.removeEventListener("click");
          item.onclick = function (e) {
            console.log(e);
            item.parentNode.remove();
            // item.parentNode.parentNode.removeChild(item.parentNode);
            addDelBtn();
          }; // 用addEventListener 会出现多次增加点击。每次删除后需要重新赋予click函数，避免节点索引值变化
        });
      };

      // for(var i = childs.length - 1; i >= 0; i--) {
      //   alert(childs[i].nodeName);
      //   f.removeChild(childs[i]);
      // }
      //  this.parentNode.removeChild(this)  删除自身
    </script>
 ```

4.4 createTextNode()
描述：创建文本节点
```js
 <script>
        var p = document.createElement('p');   
        //p.innerHTML='这是一个p标签';
        var p_text = document.createTextNode('这是p段落');        // 或
        //p.innerHTML = '这是p段落';
        //document.body.appendChild(p);  
        p.appendChild(p_text);
        document.body.appendChild(p);
</script>
```

4.5 createAttribute()
描述：创建一个新的属性对象节点
语法：document.createAttribute(‘属性名’);
注意：

本方法创建的是属性节点，不是css属性节点
创建的属性节点使用value=‘’;进行赋值
创建的属性节点使用setAttributeNode（）方法绑定到元素上。
```js
<style>
  .wrapper {
    color: red;
  }
  .background {
    background-color: aqua;
  }
</style>
<script>
      // 在内存空间创建元素节点
      var p4 = document.createElement("p");
      // 创建文本节点
      var p_Text = document.createTextNode("我是新创建的p标签4.5");

      //将文本节点加入到p标签里
      p4.appendChild(p_Text);

      //创建节点属性
      attr_class = document.createAttribute("class");
      p_alg = document.createAttribute("align");

      // 给节点属性赋值
      attr_class.value = "wrapper";
      p_alg.value = "center";

      // 将节点属性加入到对应的文本节点中
      p4.setAttributeNode(attr_class);  // 增加class的方式一
      p4.setAttributeNode(p_alg);
      p4.className = "background";  //  增加class的方式二
      p4.className = "background wrapper"; //  增加class的方式三
      p4.classList.add("pink");

      //将创建的元素加入到body中
      document.body.appendChild(p4);
</script>
```

5. 操作元素–页面元素属性操作
  获取属性值：
   dom节点.属性名  // 不能获取用户自定义的属性,可以动态获取用户修改的属性值
   dom节点.getAttribute('属性名')  //  获取所有属性,不能动态获取用户修改的属性值
  设置属性值：
    dom节点.属性名  =  属性值  // 不能设置用户自定义的属性 ,
    dom节点.setAttribute('属性名',属性值) ,
  删除属性值：
  dom节点.属性名  =  属性值 // 不能删除用户自定义的属性
  dom节点.removeAttribute('属性名') 
修改 HTML 文本中的标签属性，浏览器图形界面也会发生对应的改变
修改 HTML 文本中的标签属性，DOM 中的对象属性也会发生对应的改变
当 DOM 中的对象属性发生了变化，浏览器图形界面也会发生对应的改变
当浏览器图形界面发生了改变，DOM 中的对象属性也会发生对应的改变

1 用户修改了图形界面中标签的内容，DOM中的标签对象的属性会同步发生改变，HTML文本不会发生改变
```js
    <input type="text" id="username" value="张三">
    <input type="button" value="测试" id="btn">
    <script>
        let btn = document.querySelector("#btn");
        let username = document.querySelector("#username")
        btn.onclick = function(){
            console.log(username.value);   // 张三
            console.log(username.getAttribute("value"));  //   张三
        }
    </script>
```
2 修改了HTML文本中标签的内容，图形界面和DOM中的对象属性都会发生改变
```js
    <input type="text" id="username" value="张三">
    <input type="button" value="测试" id="btn">
    <script>
        let btn = document.querySelector("#btn");
        let username = document.querySelector("#username");

        btn.onclick = function(){
            username.setAttribute("value","李四");
            console.log(username.value);    // 李四
        };
    </script>
```
3 修改了 DOM 中的对象属性，图形界面会发生改变，HTML文本不会发生改变
```js
    <input type="text" id="username" value="张三">
    <input type="button" value="测试" id="btn">
    <script>
        let btn = document.querySelector("#btn");
        let username = document.querySelector("#username");

        btn.onclick = function(){
            username.value = "李四";
            console.log(username.getAttribute("value"));  // 张三
        };
    </script>
```
5.1 getAttribute()
getAttribute(‘属性名’); 获取元素属性值
```js
<div class="div">我的div</div>
var div = document.querySelector(".div");
div.setAttribute("style", "width:200px; height:200px;border:2px #ccc solid;");
console.log("getAttribute的值为：" + div.getAttribute('style'));
```

5.2 setAttribute()
setAttribute(‘属性名’,‘属性值’); 设置/修改/新增元素属性
```js
	<h2 style="color: aquamarine;">雨季</h2>
    <button>点我</button>

<script>
    var h2 = document.querySelector('h2');
    document.querySelector('button').onclick = function() {
        h2.setAttribute('style', 'color:red;');
    }
</script>
```

5.3 removeAttribute()
removeAttribute(‘属性名’); 删除元素属性
```
<div class="div">我的div</div>

var div = document.querySelector(".div");
div.setAttribute("style", "width:200px; height:200px;border:2px #ccc solid;");
console.log("getAttribute的值为：" + div.getAttribute('style'));

//当在实例2的基础之上加上下面这句后
div.removeAttribute('style');
```

6. 操作元素–操作元素内容
innerHTML/innerText/textCoontent都能获取元素的内容
节点.innerHTML 获取节点下所有内容包含标签，单标签（譬如img、input）不能用这种方法获取，因为单标签内部没有文本内容
节点.innerText  //获取节点下的文本内容，会过滤到标签
节点.value // 可以获取input输入框等表单控件的内容 
  - console.log(docment.getElementsByName('txt')[0].value);
  - console.log(docment.forms[0].txt.value) 这种必须有form元素
  - console.log(document.querySelector('input').value)
  ```js
   docment.form[0].txt.onblur = function() {
   // 失去焦点时触发
   console.log(this.value)  // 这里的this代表当前操作的dom对象
   if (this.value === 'aaa') {
     // 输入特定值，跳转到。。。
     location.href = "www.baidu.com"
   }
   }
  ```
节点.getAttribute("value")  // value是表单输入框的属性
6.1 innerText
从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉
```js
    <style>
      div,
      p {
        width: 400px;
        height: 30px;
        line-height: 30px;
        color: #fff;
        background-color: pink;
      }
    </style>
    <button>显示当前系统时间</button>
    <div>某个时间</div>
    <p>1123</p>

    <script>
      // 当我们点击了按钮，  div里面的文字会发生变化
      // 1. 获取元素
      var btn1 = document.querySelector("button");
      var div = document.querySelector("div");
      // 2.注册事件
      btn1.onclick = function () {
        // div.innerText = '2022-5-10';
        div.innerHTML = getDate();
      };

      function getDate() {
        var date = new Date();
        // 我们写一个 2022年 5月 10日 星期二
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dates = date.getDate();
        var arr = [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ];
        var day = date.getDay();
        return (
          "今天是：" + year + "年" + month + "月" + dates + "日 " + arr[day]
        );
      }
      // 元素也可以不用添加事件，直接赋值
      var p = document.querySelector("p");
      p.innerHTML = getDate();
    </script>
```

6.2 innerHTML
从起始位置到终止位置的全部内容，包括 html 标签，同时保留空格和换行
```js
    <div></div>
    <p>
        我是文字
        <span>123</span>
    </p>
<script>
        // innerText 和 innerHTML的区别 
        // 1. innerText 不识别html标签 非标准  去除空格和换行
        var div = document.querySelector('div');
        div.innerText = '<strong>今天是：</strong> 2019';
        //div.innerText += '<strong>今天是：</strong> 2019';
        // 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
        // div.innerHTML = '<strong>今天是：</strong> 2019';
        // 这两个属性是可读写的  可以获取元素里面的内容
        var p = document.querySelector('p');
        console.log(p.innerText);
        // console.log(p.innerHTML);
</script>
```
6.3 innerText 、 innerHTML以及textCoontent的区别
innerHTML获取的内容包含标签，innerText/textCoontent获取的内容不包含标签
innerHTML/textCoontent获取的内容不会去除两端的空格，innerText获取的内容会去除两端的空格
无论通过innerHTML/innerText/textCoontent设置内容，新的内容都会覆盖原来的内容
如果通过 innerHTML 设置数据，数据中包含标签，会自动解析标签、转换成标签后再添加
如果是通过innerText/textCoontent设置数据，数据中包含的标签不会转换成标签，会当做字符串直接设置
```js
        setText(oDiv, "www.baidu.com");

        function setText(obj, text) { //obj--对象 text--文本
            //判断对象中是否有 textContent 属性
            if ("textContent" in obj) {
                obj.textContent = text;
            } else {
                obj.innerText = text;
            }
        }
```

对input的值的获取
```js

    <button id="btn"><span>这是</span>切换图片</button>
    <form name="test2" action="" method="post">
      <input type="text" name="txt" id="" value="这是表单文本框的内容" />
      <input type="radio" name="sex" id="" value="1" />男
      <input type="radio" name="sex" id="" value="0" />女<br />
      <input type="checkbox" name="hobby" id="" value="0" />编程
      <input type="checkbox" name="hobby" id="" value="1" />音乐
      <input type="checkbox" name="hobby" id="" value="2" />游戏
      <input type="checkbox" name="hobby" id="" value="4" />其他
      <br />
      <input type="button" value="提交" id="ok" />
    </form>
    <script>
      document.querySelector("form[name='test2']").sex.value = "1";
      document.querySelector("form[name='test2']").hobby.value = "1"; // 不能通过value设置复选框的某项被选中
      document.querySelector("form[name='test2']").hobby[1].checked = true;
      document.querySelector("form[name='test2']").hobby[2].checked = false;
      // 单击提交按钮 获取所有复选框被选中的值
      document.querySelector("#ok").onclick = function () {
        var chks = document.querySelectorAll(
          "form[name='test2'] input[type='checkbox']"
        );
        console.log(chks);
        var arr = [];
        var txt = [];
        for (var i in chks) {
          if (chks[i].checked) {
            arr.push(chks[i].value);  // 值
            txt.push(chks[i].nextSibling.nodeValue);  //  文本内容
          }
        }
        console.log(arr, txt);
      };
    </script>
```

7. 操作元素–操作元素样式
   方案一： 操作class。 ①获取class 节点.className 获取节点的所有class；节点.getAttribute("class")获取节点的所有class。②设置class。 节点.className = 值； 节点setAttribute("class", 值)；通过 节点.classList.add(value)添加、节点.classList.contains(value)判断是否包含、节点.classList.remove(value)删除class、节点.classList.toggle(value) 切换class
7.1 style
描述：用来读写和设置元素的 行内 样式
语法：元素节点.style.xxx
** 注意：**

a.将横杠从CSS属性名中去除，然后将横杠后的第一个字母大写（比如：backgroundColor…）
b.CSS属性名是JavaScript保留字的，在属性名之前需要加上字符串“css”
c.style对象的属性值都是字符串，而且包括单位。
d.通过js添加的样式都是行内样式，会覆盖掉同名的css样式
```js
<script>
    	var h2 = document.createElement('h2');
        h2.innerHTML = '百度';


        // 方式1
        // var h2_style = document.createAttribute('style');
        // h2_style.value = 'text-align:center;color:red';
        // h2.setAttributeNode(h2_style);


        //方式2
        // h2.setAttribute("style", "text-align:center;color:red");


        // 方式3
        h2.style.textAlign = 'center';
        h2.style.color = 'red';
        // h2.style.cssFloat = 'left';


		//方式4，见紧接着下面的 cssText 属性

        document.body.appendChild(h2);
</script>
```

7.2 style.cssText属性
描述：可以用来读写或删除整个style属性
语法：元素节点.style.cssText=‘css样式’
```js
<script>
    // 创建元素
    var h2 = document.createElement('h2');

    // 在元素内添加内容
    h2.innerHTML = '百度';

    // 给元素设置相关样式  h2.style.cssText等价于 h2.style.value
    h2.style.cssText = 'color: #f40; text-align: center; font-size: 16px;';

    // 将创建的元素加入到页面中
    document.body.appendChild(h2);
</script>
```
注意：
删除整个 style 属性可以用 xxx.style.cssText=" ";
cssText 对应的是HTML元素的style属性，因此不用改写css属性名

7.3 元素节点的style属性方法

针对的是 style 属性里面的某一个属性名和值
setProperty(propertyName,value) 设置某个css属性
getPropertyValue(propertyName) 读取某个css属性
removeProperty(propertyName) 删除某个css属性
这三个方法的第一个参数，都是css属性名，且不用改写连线词
```js
<script>
    var divStyle = document.querySelector('div').style;

    //divStyle.setProperty('background-color', 'blue');

    //console.log(divStyle.getPropertyValue('background-color'));//red

    divStyle.removeProperty('background-color')
</script>
```
7.4 className属性
通过 元素.className 来设置元素的样式
适合于样式较多或者功能复杂的情况
如果想要保留原先的类名，我们可以按照如下示例的方式做 多类名选择器
```js
<style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }
        
        .change {
            background-color: purple;
            color: #fff;
            font-size: 25px;
            margin-top: 100px;
        }
</style>
    <div class="first">文本</div>
    <script>
        // 1. 使用 element.style 获得修改元素样式  如果样式比较少 或者 功能简单的情况下使用
        var test = document.querySelector('div');
        console.log(test.className) // first
        console.log(test.getAttributer("class")) // first
        test.onclick = function() {
            // 2. 我们可以通过 修改元素的className更改元素的样式 适合于样式较多或者功能复杂的情况
            // 3. 如果想要保留原先的类名，我们可以这么做 多类名选择器
            // this.className = 'change';
            this.className = 'first change';  // 或下面这种写法
            this.className += ' change';
        }
  </script>
```

7.5 获取元素样式–getComputedStyle(对象)
通过style属性只能获取到行内样式的属性值，获取不到CSS设置的属性值(例如：oDiv.styyle.width)
如果想获取到CSS设置的属性值，必须通过getComputedStyle方法获取(例如：window.getComputedStyle(oDiv).width)
该方法返回一个CSS对象，该对象中存储的是一个标签经过计算之后的最终样式，最终样式中包含了写在内部样式和外部样式中的内容，但是该CSS对象的样式是只读的，也就是我们无法通过该对象来修改样式

7.6 classList
标签对象.classList
获取一个标签对象的所有class值，保存在一个对象中，提供了一个函数add，可以向class属性中添加一个值
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box1 {
            width: 200px;
            height: 200px;
            border: 1px solid orangered;
        }

        .pink {
            background-color: pink;
        }

        .red {
            background-color: red;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div id="box1"></div>
    <script>
        let box1 = document.getElementById("box1");
        box1.classList.add("pink");
        box1.classList.add("red");
        box1.classList.remove("pink");
        // 判断
        console.log(box1.classList.contains("pink"));// false
    </script>
</body>
</html>
```

1. 操作元素–修改元素属性以及表单属性
8.1 修改元素属性–src
```js
    <button id="ldh">刘德华</button>
    <button id="zxy">张学友</button> <br>
    <img src="images/ldh.jpg" alt="" title="刘德华">
<script>
        // 修改元素属性  src
        // 1. 获取元素
        var ldh = document.getElementById('ldh');
        var zxy = document.getElementById('zxy');
        var img = document.querySelector('img');
        // 2. 注册事件  处理程序
        zxy.onclick = function() {
            img.src = 'images/zxy.jpg';
            img.title = '张学友思密达';
        }
        ldh.onclick = function() {
            img.src = 'images/ldh.jpg';
            img.title = '刘德华';
        }
        </script>
```


修改其他元素属性依次类推，比如：

输入框的对象.value
1.文本框、密码框 value 代表的是它们的值，通过value能够读取或设置文本框或密码框的值
```js
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2. 注册事件 处理程序
        btn.onclick = function() {
            // input.innerHTML = '点击了';  这个是 普通盒子 比如 div 标签里面的内容
            // 表单里面的值 文字内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者 btn
        }
    </script>
```
2.单选框和多选框的value属性，代表的是提交到服务器的数据，这个value值通常是不去做修改的
3.下拉框的value属性，可以用于设置某一个下拉选项为选中状态 下拉框的值=选中的值
4.下拉框中option属性，代表的是提交到服务器的数据，如果没有value提交的是文本，因此通常不做修改

input标签对象.type
单选框和多选框.checked
```js
    <input type="checkbox" class="single">1
    <input type="checkbox" class="single">2
    <input type="checkbox" class="single">3
    <input type="checkbox" id="all">全选
   
    <script>
        /**
         * 点击全选，所有单选全部选中
         * 再次点击全选，所有单选按钮全部不选中
         * 当所有单选全部选中时，全选按钮选中
         * 当全选状态时，某一个单选按钮未选中，则全选按钮未选中
        */
       //1.实现全选
       let allChecked = document.querySelector("#all");
       let sings = document.querySelectorAll(".single");

       // 全选
       allChecked.onclick = function(){
           for(let i = 0; i < sings.length; i++){
                sings[i].checked = allChecked.checked;
           }
       };

       // 单选
       sings.forEach(element => {
            element.onclick = function(){
               let flag = true;
               for(let i = 0; i < sings.length; i++){
                   if(!sings[i].checked) {
                        flag = false;
                        break;
                   }
               }
            allChecked.checked = flag;
        };
       })
    </script>
```

a标签的 href
```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        img {
            width: 300px;
        }
    </style>
</head>

<body>
    <img src="images/s.gif" alt="">
    <div>上午好</div>
    <script>
        // 根据系统不同时间来判断，所以需要用到日期内置对象
        // 利用多分支语句来设置不同的图片
        // 需要一个图片，并且根据时间修改图片，就需要用到操作元素src属性
        // 需要一个div元素，显示不同问候语，修改元素内容即可
        // 1.获取元素
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        
        // 2. 得到当前的小时数
        var date = new Date();
        var h = date.getHours();
        
        // 3. 判断小时数改变图片和文字信息
        if (h < 12) {
            img.src = 'images/s.gif';
            div.innerHTML = '亲，上午好，好好写代码';
        } else if (h < 18) {
            img.src = 'images/x.gif';
            div.innerHTML = '亲，下午好，好好写代码';
        } else {
            img.src = 'images/w.gif';
            div.innerHTML = '亲，晚上好，好好写代码';

        }
    </script>
</body>
</html>
```

获取所有的子节点:
childNodes():得到所有子节点的数组，可以通过下标去访问,会连文本节点一同获取。
children():获取某标签下的所有元素节点,得到的也是一个数组，使用方式和childNodes是一样的。
attributes:获取某元素节点下的所有的属性节点，返回的也是一个数组，可以通过下标进行访问。

firstChild:获取某节点下的第一个子节点，包含文本节点。
firstElementChild:获取某节点下的第一个元素节点。
lastChild获取最后一个子节点。
使用lastElementChild获取最后一个子元素。

parentNodes:获取父节点。
previousSibling:获取上一个兄弟节点(包含文本节点)。
priviousElementSibling:获取上一个兄弟元素(不包含文本节点)。
nextSibling:获取下一个兄弟节点(包含文本节点)。
nextElementSibling:下一个兄弟元素(不包含文本节点)。 
       