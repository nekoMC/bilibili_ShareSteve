const dmParse = (data)=>{
  //通过uid查粉丝牌等级 uname用处不大用于输出日志 text作为指令解析
    let {uid,uname,text} = data;
    if(text !=""){
        let reg_move = /^[WASDwasd]{1}$/;
        let reg_mouse = /^(mine|place|drop|jump|lookup|lookdown|lookleft|lookright)$/;
          if (!reg_mouse.test(text)&&!reg_move.test(text)){
           console.log("指令格式有误");
                   return false;
           }
           else{
               return text;
           }
       }
       //测试用
    // return uname+text
}
const giftParse = (data)=>{

}


module.exports.dmParse= dmParse;
module.exports.giftParse= giftParse;