# bilibili_ShareSteve
####基于node实现b站直播弹幕控制steve
- 实时获取弹幕            #        
- 解析弹幕指令            #
- 设计游戏操作            #
- 模拟键鼠控制            #
 

 ##### 1、实时获取弹幕 【已完成】
 通过node+websocket实现 
 使用目前的轮子可以拿到完整的弹幕json以及投喂礼物json（可以设计氪金玩法）
 通过弹幕json可以拿到用户名等信息
 弹幕json有效字段 
 
    text  : 弹幕内容
    uname : 用户名
##### 2、解析弹幕指令  【已初步实现】（暂未考虑洪水情况，未设置阈值）
 通过正则过滤弹幕中有效指令
 设计数据结构储存指令集     

##### 3、设计游戏操作  【已初步实现】（加入mine锁）
 W/w       :   前进
 A/a       :   左移
 S/s       :   后退
 D/d       :   右移
jump     :   跳跃
lookup   :   向上看（镜头向上偏转，用鼠标上移实现，上移距离待定）
lookdown :   向下看
lookleft :   向左看
lookright:   向右看
mine     :   点按鼠标左键（按下时间待定，需要考虑优先级，如click时不允许其他指令）
place    :   点击鼠标右键
drop     :   丢出物品（可设计为氪金操作，如粉丝牌等级>n才可以，否则无效）
change[1-8]    : 如change2  切换物品栏（可设计为氪金操作）

##### 4、模拟键鼠控制  【已实现】
//目前找到了robot.js第三方库 不知道好不好用 
robot.js + java版原始输入
##### 5、关于游戏场景设计
在超平坦领地条件下，开放部分权限。
可以与玩家同屏出现，记得ban了PVP（避免被围殴）
先实现出来再想也不急 =。=
##### 6、更多设想
- 两个共享steve进行决斗，决斗胜利的一方直播间送出奖励
- 玩家操控共享steve进行建造目标 完成建造目标直播间送出奖励（今日目标：建一个地狱门/建一个铁傀儡）
- 关于物品制作，可以不用动用工作台等复杂方式，配合命令方块或op指令，进行生成（弹幕输入制作钻石剑命令->解析->使用指令give a sword放到手上）
----
可能会用到的东西
https://github.com/Tsuk1ko/bilibili-live-chat  弹幕姬
https://github.com/octalmage/robotjs           robot.js
https://github.com/SocialSisterYi/bilibili-API-collect/blob/master/user/info.md
根据uid 反查用户粉丝牌信息
api：http://api.bilibili.com/x/space/acc/info?mid=xxx
data.fans_medal.medal.medal_name  粉丝牌名称
data.fans_medal.medal.medal_level 粉丝牌等级
（方便后期氪金操作）