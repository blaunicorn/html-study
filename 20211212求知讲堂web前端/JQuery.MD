jq的是js库
## 引入
```js
  <body>
    <div class="box"></div>
  </body>
  <!-- 本地引入 -->
  <!-- <script src="js/jquery-3.6.0.js"></script> -->
  <!-- cdn引入 -->
  <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
  <script>
    $(".box")
      .html("wellcome jq!")
      .css("color", "red")
      .css("text-align", "center")
      .mouseover(function () {
        console.log(this);
        $(this).fadeOut(2000);
      })
      .mouseout(function () {
        $(this).fadeIn(1000);
      });
  </script>
```
如果jq代码写在body前，必须将代码写在ready事件中，ready事件表示所有dom加载完成后才执行;如果jq放在body之后，就没有这个问题。相当于onload事件，与onload的区别是可以出现多个，onload只能执行一个。
```js

$(document).ready(function() {
  console.log($('.box'))  // 
})
// 简化写法
$(function() {
  console.log($('.box'))
})
```
## 选择器
  1. 基本选择器
   id: #id
   class: .class
   element: element
   *: 所有标签
   ,: 选择多个
  2. 层次选择器
   选择器1 选择器2：选择器1的所有后代元素（选择器2）
   选择器1 > 选择器2：只选择选择器1的直系子元素（选择器2）
   选择器1 + 选择器2： 只选择选择器1的紧邻的相邻元素（兄弟元素）
   选择器1 ~ 选择器2： 选择选择器1的所有兄弟元素，即使不相邻
   ```js
  <div class="wrapper">
    <span>span1</span>
    <div class="box">
      <span>span2</span>
    </div>
    <span>span3</span>
  </div>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
  <div class="test">test1</div>
  <script>
    // 01
    // $(".wrapper span").html("这是span新的内容"); // 三个span都改变了

    // 02
    // $(".wrapper > span").html("这是span新的内容"); // 只有直系子元素发生变化

    //03
    // $(".wrapper + p").html("这是p新的内容"); // 只选择紧挨着的相邻元素，如果没有相邻元素会选择不到的，如下
    // $(".wrapper + .test").html("这是test1新的内容"); // 这个就选择不到

    // 04
    $(".wrapper ~ p").html("这是span新的内容"); //  选择所有兄弟元素
    $(".wrapper ~ .test").html("这是test1新的内容"); // 这个即使不相邻，也能选择到
  </script>
   ```
  3. 过滤选择器（： 冒号开头的）
   a. 简单过滤器
      ：first或first()选择某元素的第一个元素（非子元素）
      ```js
      <ul><li>1</li><li>2</li><li class="li3">3</li></ul>
       $("ul li:first").css("color","red")
       $('ul li').last().css('background-color', 'red');  //  first()是jquery方法， :first是jquery的选择器
       ```
      ：last或last()选择某元素的最后一个元素（非子元素）
      ```js
      $("ul li:last").css("color","red")
      ```
      ：not(selector)选择除了某个选择器之外的所有元素
      ```js
      $("ul li:not(.li3)").css("color","red")
      ```
      ：odd选择某元素的索引值为奇数的元素
      ```js
       $("ul li:even").css("color","red")
       $("ul li:even").mouseover(function() {
         this.css("color","red")
       })      
      ```
      ：even选择某元素的索引值为偶数的元素
      ：eq(index)选择给定索引值的元素，索引值index是一个整数，从0开始
      ```js
        $("ul li:eq(2)").css("color","blue")
        $("ul li).eq(3).css("color","black")
      ```
      : gt(index)选择所有大于索引值的元素，索引值index是一个整数，从0开始
      ```js
        $("ul li:gt(2)").css("color","blue")
        $("ul li).gt(3).css("color","black")
      ```
      ：lt(index)选择所有小于索引值的元素，索引值index是一个整数，从0开始
      ：header选择h1~h6的标题元素
      ```js
        $(":header").css("color","blue")
      ```
      ：focus选取当前具有焦点的元素
      ：root选择页面的根元素
      ：animated选择所有正在执行动画效果的元素
      子元素伪类选择器
      ：first-child选择父元素的第1个子元素
      ：last-child选择父元素的最后1个子元素
      ：nth-child(n)选择父元素下的第n个元素或奇偶元素，n的值为"整数|odd|even
      ：only-child选择父元素中唯一的子元素（该父元素只有一个子元素）
      ：first-of-type选择同元素类型的第1个同级兄弟元素
      ：last-of-type选择同元素类型的最后1个同级兄弟元素
      ：nth-of-type选择同元素类型的第n个同级兄弟元素，n的值可以是"整数|odd|even"
      ：onlt-of-type匹配父元素中特定类型的唯一子元素（但是父元素可以有多个子元素）
     - 对比原生js
     ```js
      // 获取指定元素所有的子元素
      // 元素和节点的区别：DOM将文档中的所有都看作节点node>element
      // 一个元素是由开始标签、结束标签以及标签之间的数据构成的
      // 总结：元素是元素节点，是节点中的一种，但元素节点中可以包含很多的节点。
      // children属性获取到的是指定元素中所有的子元素
      let oDiv = document.querySelector("div");
      console.log(oDiv.children);

      // childNodes属性获取到的是指定元素中所有的节点
      for(let node of oDiv.childNodes){
          // console.log(node.nodeType);
          // if(node.nodeType === 1){
          if(node.nodeType !== Node.ELEMENT_NODE){
              console.log(node);
          }
      }

      //获取指定节点中的第一个子元素 / 节点
      //firstChild 获取指定节点中的第一个子节点
      oDiv.firstChild;

      // firstElementChild 获取指定元素中的第一个子元素
      oDiv.firstElementChild;

      // 获取指定节点中的最后子元素 / 节点
      // lastChild  获取指定节点中的第一个子节点
      oDiv.lastChild;

      // lastElementChild  获取指定元素中的第一个子元素
      oDiv.lastElementChild;

      //通过子元素获取父元素/父节点
      //parentNode  通过子元素获取父节点
      oDiv.parentNode;

      //parentElement   通过子元素获取父元素
      oDiv.parentElement;

      //获取相邻上一个节点 / 元素
      //previousSibling  获取相邻上一个节点
      oDiv.previousSibling;

      // previousElementSibling 获取相邻上一个元素
      oDiv.previousElementSibling;

      // nextSibling  获取相邻下一个节点
      oDiv.nextSibling;

      //nextElementSibling   获取相邻下一个元素
      oDiv.nextElementSibling;
      ```

   b. 内容过滤器
    ：contains(text)选择包含给定文本内容的元素
    
      ```js
      <p>adfsfd</p>
      <p>aadfsfd</p>
      <p>aaadfsfd</p>
      <p></p>
      <p><span></span></p>
      <script>
      $("p:contains(aaa)").css("color","red")
      </script>
      ```

    ：has（selector)选择含有选择器所匹配元素的元素

      ```js
      $('p:has(span)').html("又有了")
      ```

    ：empty选择所有不包含子元素或者不包含文本的元素

    ```js
       $("p:empty").html("原先是空的p标签，现在有了文本")
    ```

    ：parent选择含有子元素或者文本的元素（跟：empty相反）

    ```js
       $("p:parent").html("原先是有文本的，现在变成新文本了")
    ```

   c. 可见性过滤选择器
   ：hidden选取所有不可见元素
    “：hidden”选择器选择的不仅包括样式为display:none所有元素，而且还包括属性type=”hidden”和样式为visibility:hidden的所有元素。
    ```js
    <style>
      div {
        display: none;
      }
    </style>
    <div class="box1">box1</div>
    <div class="box2">box2</div>
    <p>pppp</p>
    <input type="hidden" value="拟隐藏传的值" /><br />
    <input type="text" value="传的值" />
    <script>
      $("div:hidden").css("display", "block");
      $("input:hidden").attr("type", "text"); // input的type不是css是属性
    </script>
    ```

    ：visible选取所有可见元素
    ```js
    $("div:visible).css("color","blue")
    ```

   d. 属性过滤选择器
   [attr] 选择含有指定属性的元素
   ```js
    <p title="pp" id="ee">pp</p>
    <p title="ppp">ppp</p>
    <p title="value">ppp</p>
    <p title="valce">ppp</p>
    <p>2</p>
    <script>
      $("p[title]").css("color", "red");
      $("p[title=pp]").css("color", "blue");
      $("p[title!=pp]").css("color", "green");
      $("p[title^=pp]").css("color", "green");
      $("p[title$=lue]").css("color", "orange");
      $("p[title*=e]").css("color", "orange");
      $("p[title][id]").css("color", "orange");
    </script>
   ```

   [attr=value]选择指定属性值为value的元素
    ```js
        $("p[title=pp]").css("color", "blue");
    ```

   [attr!=value]选择指定属性值不为value的元素
   [attr^=value]选择指定属性值以value开头的元素
   [attr$=value]选择指定属性值以value结尾的元素
   [attr*=value]选择指定属性值含有value的元素
   [attr][attr][attr]  选择含有指定多个属性的元素，并集

  4. 表单选择器
   ```js
    <form action=""> 
      <input type="text" value=""><br>
      <input type="password" value=""><br>
      <input type="button" value=""><br>
      <input type="submit" value=""><br>
        <button>提交<button>
    </form>
    <script>
    $(":input").val("aaa")
    </script>
   ```
   表单伪类选择器
    : input选择所有input元素
    ：button选择所有type="button"的input元素
    ：submit选择所有type="submit"的input元素
    ：reset选择所有type="reset"的input元素
    ：text选择所有单选文本框
    ：textarea选择所有多行文本框
    ：password选择所有密码文本框
    ：radio选择所有单选按钮
    ：checkbox选择所有复选框
    ：image选择所有图像域
    ：hidden选择所有隐藏域
    ：file选择所有文件域
    表单属性伪类选择器
    ：enabled选择所有可用input元素
    ：disabled所有禁用的input元素
    ：selected选择所有被选中的option元素
    ：checked选择所被选中的表单元素，一般用于radio和checkbox 

## dom操作
1. 属性操作
   a. 获取属性值： attr(属性名)
   b. 设置属性 attr(属性名，属性值)
   c. 删除属性 removeAttr(属性名)
   ```js
   consloe.log($("img").eq(0).attr('src'))
   $("img").eq(0).attr('src',"https://www.baidu.com/1243.png")
   $("img").eq(0).removeAttr('src')
   ```
2. 内容操作
    a. 获取文本及表单组件内容
    .html() 获取标签
    .text()  过滤到标签
    .val()  // 专门操作表单
    b. 设置、修改、添加文本及表单组件内容
    .html("value")
    .text("value")
    .val("value")  // 专门操作表单
    c. 删除文本及表单内容,即设置为""空值
    .html("")
    .text("")
    .val("")  // 专门操作表单
3. 元素样式操作
   a. 设置样式
    .css("属性名","属性值")  设置一个样式，也可以链式
    ```js
    $("p").css("color","red")
    ```
    .css({"属性名":"属性值","属性名":"属性值",...}) 设置多个样式用对象
    ```js
    $("p").css({"color":"red","background-color":"gray"})
    ```
   b. 操作类
    添加类
    .addClass("类名")或.addClass("类名1 类名2 ...")，也可以链式
    ```js
    $("p").addClass("class1")  // 不需要加点
    ```
    删除类
    .removeClass("类名")或.removeClass("类名1 类名2 ...")
    ```js
    $("p").removeClass()  // 清空类名
    $("p").removeClass("class1")  // 清除特定类名
    ```
4. 页面元素操作
   a. 创建dom节点 
      $("dom节点内容")
      ```js
      let dom = $('<p>这是个添加的内容</p>')  // 创建
      $('body').append(dom)  // 添加
      ```
   b. 在内部添加节点
     append()（追加到子节点的最后)
     ```js
      let dom = $('<p>这是个添加的内容</p>')  // 创建
      $('body').append(dom)  // 添加
     ```
     appendTo()
     ```js
      let dom = $('<p>这是个添加的内容</p>')  // 创建
      $(dom).appendTo('body')  // 添加
     ```
     prepend()  追加到子节点的最前
     prependTo()

   c. 在外部添加节点
      before() 在外部之前添加
      ```js
        $(".box").before($("<p>新的内容</p>"))
      ```
      insertBefore()
      ```js
        $("<p>新的内容</p>").insertBefore($(".box"))
      ```
      after()  在外部之后添加
      insertAfter()
   d. 复制dom节点
      clone()
      ```js
        $(".box").append($(".aa").clone())  // 把.aa的标签内容复制到.box内，只克隆标签，不克隆绑定的事件
      ```
      clon(true)  // 既克隆标签，也克隆绑定事件

   e. 删除dom节点
    .remove()
    .remove("dom节点")
    ```js
      $(".box").remove('[title]')  //  删除同类型元素中符合选择器的元素
    ```
    .empty()
    ```js
      $(".box").remove() // 清空.box的子节点和.box本身
      $(".box").empty()  // 只清空子节点，保留.box本身
    ```
    .html()
    .text()

5. jQuery元素相关尺寸的获取
  - 获取和设置元素的尺寸,空为获取，设置时传对应值就可以了。
    $(dom).width()  获取元素的宽度
    $(dom).innerWidth()    获取元素的宽度，包含padding的宽度
    $(dom).outerWidth()     获取元素的宽度，包含padding、border的宽度
    $(dom).outerWidth(true) 获取元素的宽度，包含padding、border、margin的宽度
    
    $(dom).height() 获取元素的高度
    $(dom).innerHeight()   获取元素的高度，包含padding的高度
    $(dom).outerHeight()   获取元素的高度，包含padding、border的高度
    $(dom).outerHeight(true)  获取元素的高度，包含padding、border、margin的高度
    ```js
    <div class="box">box4</div>
    <script>
      console.log($(".box").width(), $(".box").height());
      $(".box").css("border", "1px solid red");
      $(".box").width(200);
      $(".box").height(200);
      console.log($(".box").width(), $(".box").height());
      console.log($(".box").innerWidth(), $(".box").innerHeight());
      console.log($(".box").outerWidth(), $(".box").outerHeight());
      console.log($(".box").outerWidth(true), $(".box").outerHeight(true));
    ```
  - 获取相对页面的绝对位置
    offset()
    ```js
      console.log($(".box").offset()); // {top: 8, left: 8}
      console.log($(".box").offset().top); // 8
    ```
  - 获取浏览器可视区域的宽高
    $(window).width() window不要加引号
    $(window).height()
    ```js
      console.log($(window).width()); // 548
      console.log($(window).height()); // 920
    ```
  - 获取页面文档的宽高
    $(document).width()
    $(document).height()   
    ```js
      console.log($(document).width()); // 548
      console.log($(document).height()); // 1555
    ```
  - 获取页面滚动距离
    $(document).scrollTop()  // 页面滚动后 滚动条距上沿的距离
    $(document).scrollLeft()  // 页面滚动后 滚动条距左沿的距离
    ```js
      console.log($(document).scrollTop()); // 276 
      console.log($(document).scrollLeft()); // 0
      // 动态获取
    ```

6. jQuery循环
  - 遍历dom
  $(dom).each(function(index,item) {
    ...
  })
  ```js
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <script>
      $("ul li").each(function (i, item) {
        console.log(i, item);
        item.innerHTML = i;
      });
    </script>  
    <!-- day18-01.html:225 0 <li>​…​</li>​
    day18-01.html:225 1 <li>​…​</li>​
    day18-01.html:225 2 <li>​…​</li>​
    day18-01.html:225 3 <li>​…​</li>​
    day18-01.html:225 4 <li>​…​</li>​
    day18-01.html:225 5 <li>​…​</li>​
    day18-01.html:225 6 <li>​…​</li>​
    day18-01.html:225 7 <li>​…​</li>​ -->
  ```
7. jQuery事件
   - click() 鼠标单击 （进入子元素也触发）
  ```js
    <div class="dom">dom</div>
    <script>
      $(".dom").click(function () {
        console.log(this);  // <div class="dom">dom</div>
        $(this).html("click后数据变了").css("color","red")
      });
    </script>
  ```
   - mouseover() 鼠标进入 （进入子元素也触发）
  ```js
    <script>
      $(".dom").mouseover(function () {
        console.log(this); // <div class="dom">dom</div>
        $(this).html("click后数据变了").css("color", "red");
      });
    </script>
  ```
   - mouseout()  鼠标离开 （离开子元素也触发）
  ```js
    <script>
      $(".dom").mouseout(function () {
        console.log(this); // <div class="dom">dom</div>
        $(this).html("click后数据变了").css("color", "black");
      });
    </script>
  ```

  ```js
  // 也可以同时操作多个事件
  //  $("dom").mouseout().mouseover()
  方式一：链式
  方式二：on ,bind已经弃用
  $(".box").on("mouseover mouseout",function() {
    console.log(this)
  })
  ```

   - mouseenter() 鼠标进入（进入子元素不触发）， 即默认阻止了冒泡

  ```js
  <div class="father>father
    <div class="son">son</div>
  </div>

  <script>
  $("father").mouseenter(function() {
    console.log("father")
  })
  $("son").mouseenter(function() {
    console.log("son")
  })
  </script>
  ```
   - mouseleave() 鼠标离开 (离开子元素不触发)
   - keydown() 按下键盘键
  ```js
   
    $("input[name=user]").keydown(function(e) {
      console.log(e)
      // e.keyCode 键值
      if (e.keyCode===13)  // 当按下回车键时，执行操作
      console.log('准备上传',$(this).val())
    })
  ```
   - keyup() 松开键盘键
   - keypress() 从键盘输入字符
   - blue() 元素失去焦点
    ```js
    <form action="">
      <input type="text" name="user" id="" />
    </form>
    <script>
      $("input[name=user]").blur(function () {
        var value = $(this).val()
        if (val.length < 2 || val.length>8) {
          console.log("输入的长度不符合要求")
        }
      });
    </script>
    ```
   - focus() 元素获取焦点
    ```js
    <form action="">
      <input type="text" name="user" id="" />
    </form>
    <script>
      $("input[name=user]").focus(function () {
        var value = $(this).val()
        if (val.length < 2 || val.length>8) {
          console.log("输入的长度不符合要求")
        }
      });
    </script>
    ```
   - submit() 用户递交表单
    ```js
    <form action="">
      <input type="text" name="user" id="" />
      <input type="submit"value="新的提交">
    </form>
    <script>
    // 注意submit事件是默认由form触发的，不是按钮触发的。随意需要监听form上的事件
    //  当然也可以用按钮的click事件去间接触发。
      $("form]").submit(function () {
       console.log("submit)
      });
      // 下面的写法就不会触发submit事件
      $("input[type=submit]").submit(function () {
       console.log("submit)
      });
      // click触发按钮事件
      $("input[type=submit]").click(function () {
       console.log("submit)
      });
    </script>
    ```
   - hover() 同时为mouseenter和mouseleave事件指定处理函数
      ```js
    <div class="box">box</div>
    <script>
      $(".box").hover(function () {
       console.log("对应mouseenter")
       $(this).css("color","red")
      },function() {
        console.log("对应mouseleave")
         $(this).css("color","blue")
      });
    </script>
    ```
   - ready() dom加载完成
   - resize() 浏览器窗口的大小发生改变,触发的对象一定是window
    ```js
      $(window).resize(function() {

      })
    ```
   - scroll()  滚动条的位置发生变化
8. jQuery动画
   - 显示/隐藏/切换/show()   - hide() toggle()
   ```js
    <!-- 显示隐藏 -->
    <style>
      .box {
        width: 400;
        height: 300px;
        background-color: #9f56ff;
      }
    </style>
    <button>显示</button><button>隐藏</button><button>切换</button>
    <div class="box">box</div>
    <script>
      $("button")
        .eq(0)
        .click(function () {
          $(".box").show(3000); // 可以加数值，以ms为单位 fast（200ms） normal（400ms） slow（600ms）
        });
      $("button")
        .eq(1)
        .click(function () {
          $(".box").hide();
        });
      $("button")
        .eq(2)
        .click(function () {
          $(".box").toggle();
        });
    </script>
   ```
   - 上下滑动
    slideDown() 向下滑动显示出来
    sildeUp() 向上滑动隐藏
    slideToggle()
    ```js
<style>
      .box {
        width: 400;
        height: 300px;
        background-color: #9f56ff;
      }
    </style>
    <button>显示</button><button>隐藏</button><button>切换</button>
    <div class="box">box</div>
    <script>
      $("button")
        .eq(0)
        .click(function () {
          $(".box").slideDown(3000); // 可以加数值，以ms为单位 fast（200ms） normal（400ms） slow（600ms）
        });
      $("button")
        .eq(1)
        .click(function () {
          $(".box").slideUp();
        });
      $("button")
        .eq(2)
        .click(function () {
          $(".box").slideToggle();
        });
    </script>
    ```
   - 淡入/淡出
    fadeIn()
    fadeOut()
    fadeTo()
    ```js
    <style>
      .box {
        width: 400;
        height: 300px;
        background-color: #9f56ff;
      }
    </style>
    <button>淡入</button><button>淡出</button><button>淡入到指定透明度</button>
    <div class="box">box</div>
    <script>
      $("button")
        .eq(0)
        .click(function () {
          $(".box").fadeIn(3000); // 可以加数值，以ms为单位 fast（200ms） normal（400ms） slow（600ms）
        });
      $("button")
        .eq(1)
        .click(function () {
          $(".box").fadeOut();
        });
      $("button")
        .eq(2)
        .click(function () {
          $(".box").fadeTo(2000, 0.5); // 两个参数，1动画事件，淡入到指定的透明度
        });
    </script>

    ```
  - 动画
   animate()
   ```js
    <style>
      .box {
        width: 400;
        height: 300px;
        background-color: #9f56ff;
      }
    </style>
    <button>动画1</button>
    <div class="box">box</div>
    <script>
      $("button")
        .eq(0)
        .click(function () {
          $(".box").animate({ width: "100px" }, 2000); //  1改变的对象；2动画时间；对颜色无效；有效属性：backgroundPosition\borderWidth\borderBottomWidth/borderRightWidth/borderTopWidth\borderSpacing\margin\marginBottom\marginLeft\marginRight\marginTop\outlineWidth\padding\paddingBottom\width\height\minHeight\minWidth\font\maxWidth\font\fontSize\bottm\left\right\top\letterSpacing\wordSpacing\lineHeight\textIndent
        });
      $("button")
        .eq(1)
        .click(function () {
          $(".box").fadeOut();
        });
      $("button")
        .eq(2)
        .click(function () {
          $(".box").fadeTo(2000, 0.5);
        });
    </script>
   ```

### 用Ajax发送请求
  $.ajax({
    type: 'get' | 'post' , // 请求方式，默认为get
    url: '',  // 请求的地址 http://baidu
    async: 'true' | 'false', //  异步或同步
    data: {},  // 发送到服务器端的数据，通常是个对象
    dataType: ' ', // 返回的数据类型 json/jsonp/xml/text/javascript
    success:function(res) {},  // 成功回调的处理
    error:function(err) {},  // 失败后的回调处理
    timeout:'',  //   超时时间，毫秒为单位
    ...
  })
  ```js
  // 方式一
    $.ajax({
      type:'get',
      url:'./data/data.json',
      success:function(res) {
        console.log(res)
      },
      error:function(err) {
        console.log(err)
        if (err.status === 404) {
          location.href='/404.html'
        }
      }
    })
    //  方式二
    $.ajax({
      type:'get',
      url:'./data/data.json',
      
    }).done(function(res) {
      console.log(res)
    }).fail(function(err) {
        console.log(err)
    })

    //  方式三, then 后 两个函数，或者链式catch捕获错误
        $.ajax({
      type:'get',
      url:'./data/data.json',
      
    }).then(function(res) {
      console.log(res)
    },function(err) {
        console.log(err)
    }).catch(function() {

    })
  ```

  ```js
    // jsonp解决跨域
    $.ajax({
      type:'get',
      url:'http://baidu.com/data/data.json',
      dataType:'jsonp'
      
    }).then(function(res) {
      console.log(res)
    },function(err) {
        console.log(err)
    }).catch(function() {

    })
  ```