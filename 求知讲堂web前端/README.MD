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

#### css 第五天 定位布局

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

第七章 css 新特性
