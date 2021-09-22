
const util = require('util');
const Live = require('./Live');
const Parse = require('../parse/index');
const Exec = require('../exec/index')
const {dmParse,giftParse} = Parse;
const {moveForward,moveBack,moveLeft,moveRight,lookUp,lookDown,lookLeft,lookRight,jump,drop,mine,place,change} = Exec
//维护一个执行任务的队列，暂时没找到好办法监听队列变化，只能简单循环进行判断出队，试了一下还可以（未考虑执行时间）
//屏幕中心位置，当前需手动设置，后续可拓展为自动获取窗口中心位置。
const [x,y]=[960,540]
let lock = 0;
let queue = [];
setInterval(() => {
    if(typeof queue==="number"){
        return;
    }
    while(queue.length>0){
        console.log(queue);
        console.log("出队一次");
        let task =queue.shift()
        switch(task){
            case "w":
            case "W":
                if(!lock){
                    moveForward();
                }             
                break;
            case "a":
            case "A":
                if(!lock){
                moveLeft();
                }
                break;
            case "s":
            case "S":
                if(!lock){
                moveBack();
                }
                break;
            case "d":
            case "D":
                if(!lock){
                moveRight();
                }
                break;
            case "lookup":
                if(!lock){
                lookUp(x,y);
                }
                break;
            case "lookdown":
                if(!lock){
                lookDown(x,y);
                }
                break;
            case "lookleft":
                if(!lock){
                lookLeft(x,y);
                }
                break;
            case "lookright":
                if(!lock){
                lookRight(x,y);
                }
                break;
            case "jump":
                jump();
                break;
            case "drop":
                drop();
                break;
            case "mine":
                mine(lock,3000);
                break;
            case "place":
                place();
                break;
            case "change1":
            case "change2":
            case "change3":
            case "change4":
            case "change5":
            case "change6":
            case "change7":
            case "change8":
                let n = task.slice(6)
                change(n)
            case "stoppp":
                queue = 0;
                break;
            
            // case "change":
            //     change(n);
        }   
    }
    console.log(queue);
}, 500);

(async () => {
    /** @description 直播间ID 一般出现在URL中 如 https://live.bilibili.com/22845214 */
    const live_id = 23599371;
    const live = new Live(live_id);

    live.WS_AUTH_TOKEN_ERROR_CALLBACK = function (data) {
        console.log('连接弹幕服务器成功', data);


    }
    live.WS_AUTH_TOKEN_ERROR_CALLBACK = function (data) {
        console.log('弹幕服务器连接失败', data);
    }
    live.WS_ON_CLOSE_CALLBACK = function (data) {
        console.log('WEBSOCKET连接关闭');
    }
    live.WS_OP_HEARTBEAT_REPLY_CALLBACK = function (data) {
        console.log('在线人数', data.count);
    }
    live.WS_MESSAGE_DANMAKU_CALLBACK = function (data) {
        // console.log('接收弹幕消息', data);
        queue.push(dmParse(data))
    }
    live.WS_MESSAGE_SEND_GIFT_CALLBACK = function (data) {
        // console.log('接收礼物消息', data);
    }
    // live.WS_LIVE_EVENT_CALLBACK = function (data) {
    //     console.log('直播间事件', data);
    // }
    // live.WS_PK_EVENT_CALLBACK = function (data) {
    //     console.log('直播PK事件', data);
    // }
    // live.WS_HOT_ROOM_NOTIFY_CALLBACK = function (data) {
    //     console.log('热点房间推荐', data);
    // }
    
    await live.loadedRoomInitAPI();

    const stream = live.getStream();
    console.log('获取直播流', util.inspect(stream, { depth: null }));
    
})();  