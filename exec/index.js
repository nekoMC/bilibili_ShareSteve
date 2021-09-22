const robot = require('robotjs');
//屏幕中心位置，当前需手动设置，后续可拓展为自动获取窗口中心位置。
// const x = 960;
// const y = 540;
//     robot.keyToggle(String.fromCharCode(65),"down");
//     setTimeout(function(){
//     robot.keyToggle(String.fromCharCode(65),'up',);
// }, 2000);
const moveForward = ()=>{
  robot.keyToggle("w","down");
  setTimeout(() => {
    robot.keyToggle("w","up")
  }, 1000);
}
const moveBack = ()=>{
  robot.keyToggle("s","down");
  setTimeout(() => {
    robot.keyToggle("s","up")
  }, 1000);
}
const moveLeft = ()=>{
  robot.keyToggle("a","down");
  setTimeout(() => {
    robot.keyToggle("a","up")
  }, 1000);
}
const moveRight = ()=>{
  robot.keyToggle("d","down");
  setTimeout(() => {
    robot.keyToggle("d","up")
  }, 1000);
}
const jump = ()=>{
  robot.keyTap("space");
}
const lookUp = (x,y)=>{
  
    robot.moveMouseSmooth(x,y-100);
  
}
const lookDown = (x,y)=>{
  
    robot.moveMouseSmooth(x,y+100);

}
const lookLeft = (x,y)=>{
  
    robot.moveMouseSmooth(x-150,y);

}
const lookRight = (x,y)=>{
  
    robot.moveMouseSmooth(x+150,y);

}
const mine = (lock,time)=>{ //默认左键挖掘  时间3s 上锁
  lock = 1;
  robot.mouseToggle('down');
  setTimeout(() => {
    robot.mouseToggle('up');
    lock = 0;
  }, time);
}
const place = ()=>{
  robot.mouseClick('right')
}
const drop = ()=>{
  robot.keyTap('q');
}
const change = (n)=>{ //切换物品
  let str;
  if(typeof n === "number"){
    str = n.toString();
  }else if(typeof n==="string"){
    str = n;
  }
  robot.keyTap(str);
}     
module.exports.moveForward= moveForward;
module.exports.moveBack= moveBack;
module.exports.moveLeft= moveLeft;
module.exports.moveRight= moveRight;
module.exports.lookDown= lookDown;
module.exports.lookLeft= lookLeft;
module.exports.lookRight= lookRight;
module.exports.lookUp= lookUp;
module.exports.jump= jump;
module.exports.mine= mine;
module.exports.place= place;
module.exports.drop= drop;
module.exports.change=change;
//setTimeout(() => {
    // robot.keyToggle("w","down");  
    // setTimeout(() => {
    //   robot.keyToggle("w","up")
    // }, 1000);
    // setTimeout(() => {
    //   robot.keyToggle("a","down")
    // }, 1000);
    // setTimeout(() => {
    //   robot.keyToggle("a","up")
    // },1000);
    // setTimeout(() => {
    //   robot.keyTap("space")
    // }, 1000);
    // setTimeout(() => {
    //   robot.keyToggle("w","down")
    //   robot.mouseClick()
    // }, 1000);
    // setTimeout(() => {
    //   robot.keyToggle("w","up")
    // }, 1000);
    // setTimeout(() => {
    //   var mouse = robot.getMousePos();
    //   robot.moveMouseSmooth(mouse.x-10,mouse.y)
    // }, 1000); 
    // setInterval(()=>{
    //   let x = 960;
    //   let y = 540;
      
    //   robot.moveMouseSmooth(x-100,y)
    // },1000)
    // setInterval(()=>{
    //   let mouse = robot.getMousePos();
    //   console.log("Mouse is at x:" + mouse.x + " y:" + mouse.y)
    // },1000)
//}, 3000);


// robot.typeStringDelayed("asdasdasd",100)
