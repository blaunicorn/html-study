```
图片
代码步骤拆解

图片


[1-8] 行设置了 HTML5 Canvas 和包含 spritesheet的 2d 上下文

[9-10] 不可见图像（运行序列的 20 帧，1 次跌倒，1 次庆祝）

[11-13] 声明游戏变量和常量:

[11] 最大石头数（=要覆盖的距离），精灵的大小（40x40 像素）

[12] 棒的初始角度 - 它直线上升

[13] x - x 冠军的坐标

y - y摇杆

框架顶部坐标- 当前动画帧

currentStone - 已经达到了多少石头

mode - 游戏模式（wait/pointerdown/stickFall/gameOver）

run - 当前运行

偏移的长度- 屏幕水平滚动偏移

stickLength - 棍子的当前扩展

- 石头对象数组



[15-32] 将所有变量重置为初始值

[24-29] 随机化石头位置和宽度



[34-96] 主游戏循环：

[35] 清除框架

[36] 在屏幕上显示剩余距离

[37-40] 绘制石头（即使它们不适合屏幕 - 为简单起见）

[42] 绘制精灵的当前动画帧，如果您需要详细信息关于drawImage 的工作原理，点击这里

[44-46] 如果指针（鼠标/触摸）被按下，增加棍子长度

[47-51] 如果棍子正在下降，增加角度。

[49-50]如果一直往下掉，把游戏模式改成“跑”

[52-80] 如果我们处于“运行”模式：

[53-54] 增加偏移量和运行长度

[55] 精灵帧每 2 个动画帧改变一次

[56-57] 如果我们到达终点在 spritesheet 中的动画序列中，如果运行的长度等于摇杆的末端，则返回开始[58-62]，重置摇杆长度、角度、运行并切换到“等待”模式

[63-74] ] 检查我们是否落在石头上：

[63] 假设我们落在一个空的空间

[64-65] 比较每个石头的英雄坐标

[66] 如果英雄落在石头上，更正 [63] 中的悲观假设

[67] 计算当前的石头

[68-71] 如果到达最后一块石头，你就赢了！

[75-78] 如果冠军降落在空地上，切换模式到 gameOver 并

在“gameOver”模式中显示下落姿势[81-87]：

[82-84] 如果你输了，你就下落

[85-86] ] 如果你赢了，你就赢了。

[88-89] 计算摇杆末端的坐标

[90-93] 绘制摇杆

[94] 如果点击/触摸屏幕，则触发下一个动画帧[97-107]：

[98-101] 如果我们正在等待，如果我们处于“gameOver”模式，我们切换到“pointerdown”模式[102-105]，如果释放指针并且我们处于“pointerdown”模式，游戏将重新启动[108-111]，我们切换到“stickFall”模式

[112] 启动游戏

[113] 开始动画
```
