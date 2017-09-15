/**
 * 用于获取本机MAC地址
 * Author：于仁飞
 * @param devMAC
 * @return {本机MAC地址}
 */

function getLocalMAC(){
var os=require("os");
var iface=os.networkInterfaces();
var devMAC;
for(var dev in iface){
    if(dev.toLowerCase().match('本地连接')){
        iface[dev].forEach(function(detatils){         
            if(detatils.family=='IPv4' && detatils.mac!='00:00:00:00:00:00'){
               devMAC=detatils.mac;
            }
        })
        break;
    }
}
//console.log(`本机MAC地址： ${devMAC}`);
return devMAC;
}
exports.getLocalMAC=getLocalMAC;
