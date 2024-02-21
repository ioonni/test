/*
@肥皂  东鹏扫码 （小程序搜索东鹏（或者鹏讯云商）抓就好了）
抓包域名 scan.xdp8.cn
抓取    wxopenid&openid
变量 dpsmapp  wxopenid&openid 多账号换行
变量 dj 默认按 1.42算，可以不填
新建文件 dpmz.txt  放入红包码 多个换行
新建文件 dpjhm.txt  放入激活码 多个换行
一天一次
每天首次必中1-4元，多次就是0.3了，一天一次就行了
大东鹏号少可能亏，小东鹏稳赚，就是利润没那么高
两个可以一起玩，每天玩首次就行
号多稳赚，号少可能亏。。。
码子可以到我的网站买：低价呢~~
http://feizao.98qm.cn/
*/
const $ = new Env('东鹏扫码');
const _0x1d0386=_0x4ea3,_0x18e760=_0x377c;(function(_0x1af4ab,_0x44ae49){const _0x1ab4e0=_0x377c,_0x33b8bf=_0x4ea3,_0x1ec054=_0x1af4ab();while(!![]){try{const _0x5381f6=parseInt(_0x33b8bf('0x207','uYpn'))/0x1+-parseInt(_0x33b8bf('0x217','H7EG'))/0x2+-parseInt(_0x33b8bf('0x28a','YIq&'))/0x3+parseInt(_0x33b8bf('0x270','vmKc'))/0x4*(parseInt(_0x1ab4e0('0x232'))/0x5)+parseInt(_0x33b8bf('0x294','BbT0'))/0x6+-parseInt(_0x33b8bf('0x292','u&gi'))/0x7*(-parseInt(_0x33b8bf('0x22b','na41'))/0x8)+-parseInt(_0x1ab4e0('0x229'))/0x9;if(_0x5381f6===_0x44ae49)break;else _0x1ec054['push'](_0x1ec054['shift']());}catch(_0x11f5ac){_0x1ec054['push'](_0x1ec054['shift']());}}}(_0x1421,0x52006));const path=require(_0x18e760('0x231')),fs=require('fs');let status;status=(status=$[_0x18e760('0x1da')](_0x18e760('0x267'))||'1')>0x1?''+status:'',JSNAMED=$[_0x18e760('0x208')]()?require(_0x1d0386('0x204','OX[N'))['basename'](__filename):_0x1d0386('0x21d','FX4Y');let dpsmappArr=[],dpmzArr=[],dpjhmArr=[],wxopenid='',openid='',tine='',zs=0x0,ytx=0x0,sy=0x0,js,zz=0x0,dpmz=fs[_0x18e760('0x24f')](_0x1d0386('0x1d6','ohI5'),_0x1d0386('0x1db','Jkkb')),dpjhm=fs[_0x18e760('0x24f')](_0x18e760('0x243'),_0x18e760('0x1d3')),dpsmapp=($[_0x1d0386('0x1dc','w(8R')]()?process[_0x18e760('0x276')][_0x18e760('0x288')]:$[_0x1d0386('0x1f8',']0*[')]('dpsmapp'))||'',dj=($[_0x1d0386('0x1e6','YIq&')]()?process[_0x1d0386('0x220','uYpn')][_0x18e760('0x288')]:$[_0x1d0386('0x22e','D%fn')](_0x1d0386('0x27b','w(8R')))||_0x18e760('0x1e9');var myDate=new Date(),myYear=myDate[_0x1d0386('0x27e','ecPp')](),myMonth=myDate[_0x18e760('0x268')]()+0x1,myToday=myDate[_0x1d0386('0x2a3','Fbc%')]();myMonth>=0xa?myMonth=myMonth:myMonth='0'+myMonth;myToday>=0xa?myToday=myToday:myToday='0'+myToday;function dealLineBreaker(_0x4c2927){const _0x5047e0=_0x18e760,_0x1a16a6=_0x1d0386;return _0x4c2927[_0x1a16a6('0x260','U6AU')](/\r(?!\n)/g,'\x0a')[_0x5047e0('0x1d2')](/\r\n/g,'\x0a');}dpmz=dealLineBreaker(dpmz),dpjhm=dealLineBreaker(dpjhm),!(async()=>{const _0x32622c=_0x18e760,_0x751355=_0x1d0386;if(typeof $request!==_0x751355('0x240','FX4Y')){}else{dpsmappArr=dpsmapp[_0x751355('0x286','6vKt')]('\x0a')[_0x751355('0x1f1','*vB[')](_0x350a11=>_0x350a11[_0x751355('0x1e5','8rb*')]()),dpmzArr=dpmz[_0x751355('0x24a','u&gi')]('\x0a')[_0x751355('0x281','Q7Fq')](_0x39e073=>_0x39e073['trim']()),dpjhmArr=dpjhm[_0x32622c('0x201')]('\x0a')[_0x32622c('0x245')](_0x38100a=>_0x38100a[_0x32622c('0x29b')]()),console[_0x751355('0x1d9','ohI5')](_0x32622c('0x26f')+dpsmappArr[_0x751355('0x221','o!PN')]+_0x32622c('0x228')+dpmzArr[_0x32622c('0x29e')]+_0x751355('0x212','FX4Y')+dpjhmArr[_0x32622c('0x29e')]+_0x751355('0x1ef','^uNO'));for(let _0xa0d1c7=0x0;_0xa0d1c7<dpsmappArr[_0x32622c('0x29e')];_0xa0d1c7++){dpmz=dpmzArr[_0x751355('0x265','A7^8')](),dpjhm=dpjhmArr[_0x32622c('0x1d5')]();if(!dpmz){console[_0x751355('0x236','Q7Fq')]('该买红包码子了叼毛\x20购买网站\x20：http://feizao.98qm.cn/');return;}if(!dpjhm){console[_0x32622c('0x27a')](_0x751355('0x1e2','FX4Y'));return;}dpsmapp=dpsmappArr[_0xa0d1c7],$[_0x751355('0x259','nvo@')]=_0xa0d1c7+0x1,wxopenid=dpsmapp[_0x751355('0x1ff','vmKc')]('&')[0x0],openid=dpsmapp[_0x32622c('0x201')]('&')[0x1],console[_0x32622c('0x27a')](_0x32622c('0x287')+$[_0x751355('0x210','e6Zm')]+'】'),tine=Math[_0x751355('0x2a0','na41')](new Date()[_0x751355('0x203','SNvA')]()/0x3e8),sy=0x0,await dpgg();if(zz===0x1)return;await dpyz(),await dpsmsm1(),await dpsmsm2(),await dpsmyz(),await dpsmtx();for(let _0x250a31=0x1;_0x250a31<0x1e;_0x250a31++){js=_0x250a31,await dpxx();}ytx+=sy,console[_0x751355('0x21a','XUGu')](_0x32622c('0x1e0')+sy+'元');}fs[_0x751355('0x282','Fbc%')](_0x751355('0x218','KQl^'),dpjhmArr[_0x751355('0x24e','Fdhh')]('\x0d\x0a')),fs[_0x751355('0x219','u&gi')](_0x32622c('0x28e'),dpmzArr[_0x751355('0x1ec','FX4Y')]('\x0d\x0a')),console[_0x32622c('0x27a')]('\x0a------------------------分割线---------------------');let _0x3f9861=dpsmappArr[_0x32622c('0x29e')]*dj;console[_0x751355('0x22f','OX[N')]('\x0a本次运行共花费：'+_0x3f9861[_0x751355('0x20e','*vB[')](0x2)+_0x32622c('0x238')+dj+_0x751355('0x225','vLdk')+(zs[_0x751355('0x272','ecPp')](0x2)-_0x3f9861[_0x32622c('0x29f')](0x2))),console['log'](_0x32622c('0x205')+zs[_0x751355('0x296','ohI5')](0x2)),console[_0x751355('0x247','c$P$')]('\x0a东鹏扫码账号总和收益：'+ytx[_0x32622c('0x29f')](0x2));}})()[_0x1d0386('0x1f6','c$P$')](_0xbd6801=>$[_0x1d0386('0x253','8rb*')](_0xbd6801))[_0x18e760('0x29d')](()=>$['done']());function dpgg(_0x99f915=0x0){return new Promise(_0x2eb2d0=>{const _0x760d7d=_0x377c;let _0x4f93cb={'url':_0x760d7d('0x1ce')};$[_0x760d7d('0x284')](_0x4f93cb,async(_0x2a97ed,_0x2e1d5f,_0xcdc158)=>{const _0x5dd869=_0x4ea3,_0x3ff415=_0x760d7d,_0x20b235=JSON[_0x3ff415('0x1d1')](_0xcdc158);try{_0xcdc158=JSON[_0x3ff415('0x1d1')](_0x20b235[_0x3ff415('0x27f')][_0x3ff415('0x29a')][_0x3ff415('0x27f')]);if(_0xcdc158[_0x3ff415('0x254')]===0x0){console[_0x3ff415('0x27a')](_0xcdc158[_0x5dd869('0x25d','k586')]),zz=0x1;return;}logAndNotify(_0xcdc158[_0x3ff415('0x1fc')]+'\x0a');}catch(_0xa1fa65){}finally{_0x2eb2d0();}},_0x99f915);});}function _0x377c(_0x4b0193,_0x4fa5f7){const _0x14210e=_0x1421();return _0x377c=function(_0x377c1e,_0x412994){_0x377c1e=_0x377c1e-0x1ce;let _0x21ce65=_0x14210e[_0x377c1e];if(_0x377c['MAImSR']===undefined){var _0x14ec64=function(_0x4ea30b){const _0x14dcdd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x51bc5d='',_0x40d7dc='';for(let _0x4e2062=0x0,_0x7eb2ec,_0xb682fc,_0x4c2927=0x0;_0xb682fc=_0x4ea30b['charAt'](_0x4c2927++);~_0xb682fc&&(_0x7eb2ec=_0x4e2062%0x4?_0x7eb2ec*0x40+_0xb682fc:_0xb682fc,_0x4e2062++%0x4)?_0x51bc5d+=String['fromCharCode'](0xff&_0x7eb2ec>>(-0x2*_0x4e2062&0x6)):0x0){_0xb682fc=_0x14dcdd['indexOf'](_0xb682fc);}for(let _0x3f9861=0x0,_0x350a11=_0x51bc5d['length'];_0x3f9861<_0x350a11;_0x3f9861++){_0x40d7dc+='%'+('00'+_0x51bc5d['charCodeAt'](_0x3f9861)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x40d7dc);};_0x377c['IsGqOB']=_0x14ec64,_0x4b0193=arguments,_0x377c['MAImSR']=!![];}const _0x34ea11=_0x14210e[0x0],_0x262faf=_0x377c1e+_0x34ea11,_0x3f8343=_0x4b0193[_0x262faf];return!_0x3f8343?(_0x21ce65=_0x377c['IsGqOB'](_0x21ce65),_0x4b0193[_0x262faf]=_0x21ce65):_0x21ce65=_0x3f8343,_0x21ce65;},_0x377c(_0x4b0193,_0x4fa5f7);}function _0x4ea3(_0x4b0193,_0x4fa5f7){const _0x14210e=_0x1421();return _0x4ea3=function(_0x377c1e,_0x412994){_0x377c1e=_0x377c1e-0x1ce;let _0x21ce65=_0x14210e[_0x377c1e];if(_0x4ea3['KbOsVj']===undefined){var _0x14ec64=function(_0x14dcdd){const _0x51bc5d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x40d7dc='',_0x4e2062='';for(let _0x7eb2ec=0x0,_0xb682fc,_0x4c2927,_0x3f9861=0x0;_0x4c2927=_0x14dcdd['charAt'](_0x3f9861++);~_0x4c2927&&(_0xb682fc=_0x7eb2ec%0x4?_0xb682fc*0x40+_0x4c2927:_0x4c2927,_0x7eb2ec++%0x4)?_0x40d7dc+=String['fromCharCode'](0xff&_0xb682fc>>(-0x2*_0x7eb2ec&0x6)):0x0){_0x4c2927=_0x51bc5d['indexOf'](_0x4c2927);}for(let _0x350a11=0x0,_0x39e073=_0x40d7dc['length'];_0x350a11<_0x39e073;_0x350a11++){_0x4e2062+='%'+('00'+_0x40d7dc['charCodeAt'](_0x350a11)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4e2062);};const _0x4ea30b=function(_0x38100a,_0xa0d1c7){let _0x250a31=[],_0xbd6801=0x0,_0x99f915,_0x2eb2d0='';_0x38100a=_0x14ec64(_0x38100a);let _0x4f93cb;for(_0x4f93cb=0x0;_0x4f93cb<0x100;_0x4f93cb++){_0x250a31[_0x4f93cb]=_0x4f93cb;}for(_0x4f93cb=0x0;_0x4f93cb<0x100;_0x4f93cb++){_0xbd6801=(_0xbd6801+_0x250a31[_0x4f93cb]+_0xa0d1c7['charCodeAt'](_0x4f93cb%_0xa0d1c7['length']))%0x100,_0x99f915=_0x250a31[_0x4f93cb],_0x250a31[_0x4f93cb]=_0x250a31[_0xbd6801],_0x250a31[_0xbd6801]=_0x99f915;}_0x4f93cb=0x0,_0xbd6801=0x0;for(let _0x2a97ed=0x0;_0x2a97ed<_0x38100a['length'];_0x2a97ed++){_0x4f93cb=(_0x4f93cb+0x1)%0x100,_0xbd6801=(_0xbd6801+_0x250a31[_0x4f93cb])%0x100,_0x99f915=_0x250a31[_0x4f93cb],_0x250a31[_0x4f93cb]=_0x250a31[_0xbd6801],_0x250a31[_0xbd6801]=_0x99f915,_0x2eb2d0+=String['fromCharCode'](_0x38100a['charCodeAt'](_0x2a97ed)^_0x250a31[(_0x250a31[_0x4f93cb]+_0x250a31[_0xbd6801])%0x100]);}return _0x2eb2d0;};_0x4ea3['tDhmAM']=_0x4ea30b,_0x4b0193=arguments,_0x4ea3['KbOsVj']=!![];}const _0x34ea11=_0x14210e[0x0],_0x262faf=_0x377c1e+_0x34ea11,_0x3f8343=_0x4b0193[_0x262faf];return!_0x3f8343?(_0x4ea3['xMOKOs']===undefined&&(_0x4ea3['xMOKOs']=!![]),_0x21ce65=_0x4ea3['tDhmAM'](_0x21ce65,_0x412994),_0x4b0193[_0x262faf]=_0x21ce65):_0x21ce65=_0x3f8343,_0x21ce65;},_0x4ea3(_0x4b0193,_0x4fa5f7);}function logAndNotify(_0x5dd0f3){const _0x25ba33=_0x1d0386;console[_0x25ba33('0x1f4','YIq&')](_0x5dd0f3),notifyStr+=_0x5dd0f3,notifyStr+='\x0a';}function dpsmsm1(_0x15efa2=0x0){return new Promise(_0x426c3b=>{const _0x5c7fb3=_0x377c,_0x12784a=_0x4ea3;let _0x4850c5=Math[_0x12784a('0x1ee','Q7Fq')](new Date()[_0x12784a('0x273','Q7Fq')]()/0x3e8),_0x30edf7=md5(md5(''+wxopenid+dpmz+_0x12784a('0x25e','KQl^')+wxopenid[_0x5c7fb3('0x241')](0x7,0xf)+_0x5c7fb3('0x200')+tine)),_0xd68d90={'url':_0x12784a('0x214','H7EG')+encodeURIComponent(dpmz)+_0x12784a('0x249','U6AU')+tine+_0x12784a('0x1d8','e6Zm')+_0x4850c5+'&openid='+openid+_0x12784a('0x22c','ecPp')+wxopenid+_0x12784a('0x23b','na41')+_0x30edf7,'headers':{'Host':_0x12784a('0x234','VXfr'),'Connection':'keep-alive','content-type':_0x12784a('0x20b','ADUm'),'Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x12784a('0x26e','8IgM'),'Referer':_0x12784a('0x1e1','vLdk')}};$[_0x12784a('0x279','Zf(s')](_0xd68d90,async(_0x27b5b7,_0xf0285,_0x18dc5b)=>{const _0x431ebc=_0x12784a,_0x5a233e=_0x5c7fb3;try{const _0xe50b29=JSON[_0x5a233e('0x1d1')](_0x18dc5b);_0xe50b29[_0x5a233e('0x27f')][_0x431ebc('0x23f','44ia')]=='正常红包'?console[_0x5a233e('0x27a')](_0x5a233e('0x222')+dpmz+'：'+_0xe50b29[_0x431ebc('0x26b','ADUm')][_0x431ebc('0x23c','lFNx')]):(_0xe50b29[_0x5a233e('0x27f')][_0x5a233e('0x274')]!=_0x5a233e('0x1d4')&&(dpjhmArr[_0x431ebc('0x202','vLdk')](dpjhm),dpmzArr[_0x5a233e('0x28c')](dpmz)),console[_0x431ebc('0x290','na41')](_0x5a233e('0x222')+dpmz+'：'+_0xe50b29[_0x431ebc('0x262','(e85')][_0x5a233e('0x274')]));}catch(_0x1a8e5c){}finally{_0x426c3b();}},_0x15efa2);});}function dpsmsm2(_0x158466=0x0){return new Promise(_0x4d0a23=>{const _0x438004=_0x4ea3,_0x2e3b70=_0x377c;let _0x14977d=Math[_0x2e3b70('0x27c')](new Date()[_0x2e3b70('0x22d')]()/0x3e8),_0x1b8881=md5(md5(''+wxopenid+dpjhm+_0x438004('0x21f','ADUm')+wxopenid[_0x438004('0x20a','uYpn')](0x7,0xf)+_0x2e3b70('0x200')+tine)),_0x37f450={'url':_0x2e3b70('0x242')+encodeURIComponent(dpjhm)+_0x2e3b70('0x20d')+tine+_0x438004('0x1fe','Jkkb')+_0x14977d+_0x2e3b70('0x266')+openid+_0x2e3b70('0x252')+wxopenid+_0x438004('0x23d','8IgM')+_0x1b8881,'headers':{'Host':_0x2e3b70('0x23e'),'Connection':_0x438004('0x24b','Fbc%'),'content-type':_0x438004('0x1cf','H7EG'),'Accept-Encoding':_0x2e3b70('0x1f7'),'User-Agent':_0x2e3b70('0x26c'),'Referer':_0x438004('0x239','8rb*')}};$['get'](_0x37f450,async(_0x1310af,_0x323e09,_0x27e9cc)=>{const _0xff66ed=_0x2e3b70,_0x1231a9=_0x438004;try{const _0x5a3026=JSON[_0x1231a9('0x1fb','H7EG')](_0x27e9cc);_0x5a3026[_0xff66ed('0x27f')][_0x1231a9('0x269','8rb*')]==_0x1231a9('0x24c','8rb*')?console[_0x1231a9('0x236','Q7Fq')](_0x1231a9('0x256','^uNO')+dpjhm+'：'+_0x5a3026[_0xff66ed('0x27f')][_0xff66ed('0x274')]+_0xff66ed('0x21e')+_0x5a3026[_0xff66ed('0x27f')][_0xff66ed('0x1e3')]+'元'):(_0x5a3026[_0x1231a9('0x277','*vB[')][_0x1231a9('0x223','VXfr')]!=_0x1231a9('0x1f5','Q7Fq')&&(dpjhmArr['push'](dpjhm),dpmzArr[_0xff66ed('0x28c')](dpmz)),console[_0xff66ed('0x27a')](_0xff66ed('0x244')+dpjhm+'：'+_0x5a3026[_0x1231a9('0x1fd','w(8R')][_0xff66ed('0x274')]));}catch(_0x15d534){}finally{_0x4d0a23();}},_0x158466);});}function dpsmyz(_0x48fc32=0x0){return new Promise(_0x575e35=>{const _0x251fb7=_0x4ea3,_0x13658f=_0x377c;let _0x57c37b=Math[_0x13658f('0x27c')](new Date()[_0x13658f('0x22d')]()/0x3e8),_0xc61825=md5(md5(''+wxopenid+dpjhm+_0x251fb7('0x275','ecPp')+wxopenid[_0x13658f('0x241')](0x7,0xf)+_0x13658f('0x230'))),_0x32cfe3={'url':'https://scan.xdp8.cn/tsf-red/red/transfer/getRed?code='+dpjhm+_0x13658f('0x261')+openid+_0x251fb7('0x250','$12D')+wxopenid,'headers':{'Host':'scan.xdp8.cn','Connection':_0x251fb7('0x293','*K]K'),'content-type':_0x13658f('0x1d7'),'Accept-Encoding':'gzip,compress,br,deflate','User-Agent':_0x251fb7('0x28d','e6Zm'),'Referer':_0x13658f('0x291')}};$[_0x13658f('0x284')](_0x32cfe3,async(_0x267274,_0x29100e,_0x441042)=>{const _0x37acc3=_0x13658f,_0x2ba3fd=_0x251fb7;try{const _0x311ef8=JSON[_0x2ba3fd('0x1ed','Kawy')](_0x441042);_0x311ef8[_0x2ba3fd('0x1f3','r))!')]==0x1?(console[_0x37acc3('0x27a')](_0x2ba3fd('0x2a2','r))!')+_0x311ef8[_0x37acc3('0x27f')][_0x2ba3fd('0x1f2',']0*[')]),zs+=_0x311ef8[_0x2ba3fd('0x283','FX4Y')][_0x2ba3fd('0x211','(e85')]):console[_0x37acc3('0x27a')](_0x2ba3fd('0x1d0','Fdhh')+_0x311ef8[_0x37acc3('0x2a1')]);}catch(_0xb3ba66){}finally{_0x575e35();}},_0x48fc32);});}function _0x1421(){const _0x5d5f30=['W5hcRvNdGr1ZC8odb3T3WQS2FeCrWQ4','BWiSdraRW6hcHq','6yEr6AkD77YA','W7W5lmkE','DmkWW5q','AhycghS6','cUs4NoM5J+AjQ+EGGE+8MG','fmkPsa','W7/dLmoIW53cSK8','WPZLIjpMTzlVVBS','qMJdRcO','D3HpCgvUAwq9','5lIQ6lsM5y+3ls0Tls0Tls0Tls0TlqRLHBe','mZKZmty1meriwNzSEq','W6NcLCkhW5RdLhBcVGJcPCoFWRb4W7jkWPlcSbhdQHSkW61ojCkAW6ZcPSkLcYywfCoyW7RdMM8PWRH2WOO+Af7cOLNcOYtcKHyxsZ/dNmo6bmo3nSoojCoyW6Oyd8oGFSkOWOu','swTXixPTeSkTWRHP','imkaW4tdNw3cPejHore','z2v0vgLTzq','WPHCWRldGIpcGZC','uNldOG','mte2lJq1mZi4mJa2mZGWmJa4','Cgf0Aa','mty5otbVv3DRtuS','BvaynuZdTCkVW5DhWQ0','cSk5tJ9elGpcGSk6W6qYpG','gSk1sZq','q3WN','WPCyfmk6t8oeW5pdVmo6W6tcOKZdHLJdONG','5ywd77Ym5y2v5lU377YA','A0iPWP1KW4JcOSkgDsK3W4JdMmkWFIlcVCo3BmkHta7dRKSVW5bkW4JcUvGiWR/dM8oQlmkLW5f7WPmdtmk2hKhdNSoiWOVdUhpcTIVdKSoComk/WPqoW6JcRKDdW5XFza','WRRdSmoMjq','xdy3tLDxk8oaWPnLsSkrB8oPWPNdUSoObcLQomkTWRZdVxfxW5ijWRixWR9jxIfmbmkqW6OzW4/dLdBdO8k9ts8','WQldGtW','yK3cPmoEW7qbgKlcRmobW6DBWOWjhYddUmo+W6HGW6P9FvrpWPGDW7rExSkpi13cSw9rlKbdWQKrWQ7cUqVdT8kR','C2nHBI54zha4lMnU','yhrn','CrqMaG9SW6xcK8oF','C3vIC3rYAw5N','Ahr0Chm6lY9Zy2fUlNHKCdGUy24VDhnMlxvZzxjJzw50zxiVBNvZzxiVBg9NAw4/yMvUy2HTyxjRtgv2zwW9mZqMBgfUz3vHz2u9EMHFq04MD2LMAuvUywjSzwq9Dhj1zszZywzLqxjLyt0Ln0iLmJjIB3r0B20LmJiLm0e4nJiLmKmLmJjOzwLNAhqLmJiLm0e4mtqLmKmLmJj0B3aLmJiLm0e0ocuYqYuYmNDPzhrOjtiYjtnbnde0jtjdjtiYBgvMDcuYmIuZqtaLmKmLmJjYAwDODcuYmIuZqtqXncu3rczIBhvLDg9VDgHbDxrOB3jPEMvKpxrYDwuMyMX1zxrVB3rOrw5HyMXLzd10CNvLjMzVBNrtAxPLu2nHBgvgywn0B3i9mszKzxzPy2vpCMLLBNrHDgLVBJ1WB3j0CMfPDczWAg9UzunHBgvUzgfYqxv0Ag9YAxPLzd1MywXZzszUB3rPzMLJyxrPB25tB3vUzef1DgHVCML6zwq9Dhj1zszSB2nHDgLVBKf1DgHVCML6zwq9Dhj1zszZy3jLzw5izwLNAhq9odK2jNn5C3rLBt1Pt1mLmJaXnc4YjNzLCNnPB249oc4WlJi5jNDPBMrVD0HLAwDODd04mdqMzM9UDfnPEMvtzxr0Aw5Npte3jNn0yxr1C0jHCKHLAwDODd00oczSB2nHDgLVBLjLzhvJzwrby2n1CMfJEt1MywXZzszWAxHLBfjHDgLVptiMD2LUzg93v2LKDgG9nde0jM5VDgLMAwnHDgLVBKjHzgDLqxv0Ag9YAxPLzd10CNvLjM5VDgLMAwnHDgLVBKf1DgHVCML6zwq9Dhj1zszLCNjnC2C9z2v0u3LZDgvTsw5MBYuZqw9RjM1VzgvSpwLqAg9UzsuYmdeXjtndAvbOB25LmtiLmKmXjtnfjMjHDhrLCNLmzxzLBd04nczSB2nHDgLVBKvUywjSzwq9Dhj1zszZy3jLzw5xAwr0Ad00mtqMC2nYzwvUvg9WptKYjM1Py3jVCgHVBMvbDxrOB3jPEMvKpxrYDwuMywXIDw1bDxrOB3jPEMvKpxrYDwuMy2fTzxjHqxv0Ag9YAxPLzd10CNvLjM5VDgLMAwnHDgLVBKfSzxj0qxv0Ag9YAxPLzd10CNvLjMjYyw5KpwLqAg9UzszWBgf0zM9YBt1PB3mMu0rlvMvYC2LVBJ0YlJi3lJmMzw5HyMXLrgvIDwC9zMfSC2uMzgv2AwnLugL4zwXsyxrPBZ0YjMHVC3q9jtDcjtiYzw52jtiYjtnbjtiYv2vdAgf0jtiYjtjdjtiYyxbWswqLmJiLm0eLmJiLmJiLmKmLmJj2zxjZAw9UjtiYjtnbndaYnJyWnJy0jtDejM1Vzgu9zgvMyxvSDczZy29Kzt0','lI9KCgPOBs50Ehq','cUs4NoM5J+A/GoA0U+EGGE+8MG','zMLSDgvY','jNbHz2u9','WRxdSmoL','ywjeuZ97','WPVcKSo0WPxcQmkkENRdMenyj8oEWO8SEKJdP8k6W5ukvSkhpmocb8ozr2jS','W5pdRSk6W4tdQG','W5zuW4ldHmooWObzW4ZdR8ob','5Q2G5BIo57U/5y+O','W4NdUCknWQK6WP7dVrKvusFdGx7dSCocWRmNW6dcMmoxmJScWQjPrSkBW43dImoMmXtdV8kytSokeSkrCcrEWR50W71/hCkGxYVcU8kkW5ySWOXIW65tlSo0vwGzwNRcIa','FCkUW5hdJW','CMvHzezPBgvtEw5J','eSofW6pdIwpcId1NW47cUW','W4KeW60jfSk3AGlcI8o5WQddRW','jND4t3bLBMLKpq','B1K6WQHLWOa','zwXTy29Kzti','bSkaWQNcSIBdLbLRW4NdI8owxW','yUs4OEM7QUA/REA2MUEJPG','j1xcQ8ooWOJcHSoVbCo5ycGaWOxdHxRdMmkoCY7dKNm5W4dcK8ocW4JdJCoPmNavW7nqW6iDWQldICokCYCaWRVcIf8HFGRdNhuVW7BdLvzsdvS6DZztWQddJ8kwnGWTW4hcTeSLW67dOCoAW6jODx5NWOb1WQm3WOqxW6zXWOZcPbWZqCk3WRjbDCkpWP5lWRznESoeW4OEW6NcLmkxW7itBt4nwetdU8okE8oiAZ0+yCkcCsPltSoPWQNcQ0RdMSoZWOddQSkadsaMAd4EnqiTW58AW4tdKHdcTxC8WOddUG/cR8ovp0nTW5bVveddGSoVW6/dHW','FNjirZ9HW75CWOy','W4yyW6yblq','tcBcHCkDeCki','Ahr0Chm6lY9Zy2fUlNHKCdGUy24VDhnMlxjLzc9YzwqVDhjHBNnMzxiVDhjHBNnMzxjszwq/y29Kzt0','ab7cISkngCkbuSkkWOOUAeC','W7BdG8o+W5xcTgRcPmkl','mCkHW63cOW','cUs4NoM5J+AjQ+EGGEApKoEoSo+8MG','W4/cHmoNWPZcP8kmiG','jMnPDhK9juu2juiXjtK1juu1jue0jui0juu1jui4jtGYjM9Wzw5Pzd0','WQuodmkv','W6NcSuBdMJH7l8okrs0iW7T7E34DW7XargnbWR4zWOddQCkUWQqln8k9W4XcscddSCkeW7q6sbnidsiIWRxcS8kBjSkADHLEg8k2WPldUNTtWRVcLctcPYBdVNySW7vZgwqmWQ5pnIn1rxhcV8ooDM1IxmoAW4GSimknpCkChCkcFmooWOFcHCoozZrawCoNpgNcK8kFW5TxD8kgWP/dIqTuW7nHiWBdVvSFWP7dVCoiWOFcJ1/dM8oGW4HXWRBcQmoQW6TvWQpcSdNdGhOku8orWPRcQrPTW50NWPNcHd8AFa3dHmkzoCoUl8kcfCoJiJNdL0W','WQzSEmoFWRBdLMRcPaWL','r8okCXRdOG','jM9Wzw5Pzd0','Cw13A3n0yxr1CW','z2v0tw9UDgG','BKu6','WQT7CSocW5JdN2FcVZKVW5xdGa','WQLOACoo','tw96AwXSys81lJaGkgLqAg9UztSGq1bvigLqAg9UzsbpuYaXnf8YigXPA2uGtwfJie9tifGPiefWCgXLv2vIs2L0lZyWns4XlJe1icHlsfrntcWGBgLRzsbhzwnRBYKGtw9IAwXLlZe1rte0ocbnAwnYB01LC3nLBMDLCI84lJaUmJKOmhGXodaWmwqZocKGtMv0vhLWzs80rYbmyw5NDwfNzs96Af9dtG','wcNcJSkEsCkzeWyNDxCYWQJdO8oUgKZdGJpcLfBcLerH','cuVcRCoUW6eba1ddV8koWRSiW4fgjJVdLmo4W6G4WQfBsveoWOi+WQebfSkjBhBcHXSjExquW71aW6hcOqFcSmoBcmojW5juW41nW43cULZdHmo6WR9tW73cMCopW7O0n8owW5/dT2rqW40msCkBW4KvWRFcVHqyWRtdJqhcKmoLbSktWQtdQ8oQoSkKWRCpW7lcSmoXW41Mm8kOW4fYW7WGk8kzhhbMWO4EpCklimowAmo8oCo8pvLvC0FdISovW4xcOCk1yKFdMJrQWOK5yrKPBefvAcGqWQnaW4qxe2/dPSkpWOnqWPvJWR5wWOZdOWhcPa1oW6C5uG','ls0Tls0Tls0Tls0TlsdLHBe','WPpcVmolWOa4W4JcOgmC','Dmo+WPddVCouWP00neukwq','CSkyW7RdU2xcPeG','shy0WPpdNxFcPG','BxnN','n8ohWO3cOW','zw52','WQVcVJJdMa','WOVKU73PURZMI4hNOQBMJPZNJkeD','W5hdTmoq','Bg9N','WPikbmkZs8osWPm','CM91BMq','oJ8CdcnEW65vWRCO','yCksW4JdLgJcRubroe3dIq','zgf0yq','g17dHepcJ8kFW7WydXJcIG4','sxOSWRpdKwG','W4PdW47dGmkgWQDCW4NdVmo3qruH','ybS2bG','z2v0','zxjYq29Kzq','C15GqmkV','cUw8GowNI+oaKos4NoM5J+AjQ+EGGq','zhbZBwfWCa','A2vLCc1HBgL2zq','FfJdVgTBje9puvZcP1S','zNjVBunOyxjdB2rL','ChvZAa','q1CdlMpdTSkQWP0ZW7DsW73cIYz4W4dcTSkdWRFcVxNdJCo3W4ZdOf5aW6ldVCk0ov7dUSkyW7KoBCotWOqAWPVdGtpdSbX2emo8WOj5WPldNmkTvXmSCe7cG3bWaxTWmmoch8ovsYm/gSkpp8kXdgxdJaLPBmk1F8ohsSoXWPCyeSoAhL1tWOlcQ10Jz8kvqSo+EgRcKJdcRLbmf3rTW4BdHMFdKwhcP8kxWQ3cPHvfWOLiW6TFpNlcJ8oWvgv9W74LW5C+drXtDs9LW64kWQldRqZcMhHbECkKWRn7WRpdMs8DoZdcRSoVjCoXW6xdL19m','lI9KCg16lNr4Da','ddlcLeSzW7tcNwhcJ8k+WPWHrqeUWRyRybyLlWSSua','fJaJ','Ahr0Chm6lY9Zzxj2AwnLD2vJAgf0lMnVBs93EgrLn2u1y2qZzJaXm2zMn2qVmJe5l3bHz2uTzNjHBwuUAhrTBa','WPFcPSoGWPxdTSo7W7nMW6dcOW','A3L6WPvSWQ0Fa8oqW4i','v27cOqddMmkqWQNcVmkGWOOXDq','bCksk00','vwJdJIBdVrpdRG','W4BdOgBcTmkW','W4ZcJSkjW4pdIYddSaJdO8ksW6e2W7rBWQBcQeBcQH1FW6j5bSkPW6hcUSkgbJSBfCkwW4hdRd03W79kW5LWu17cP27dPGRcNaDtkWVcMCowFSk0fSoqaSoDW6eDd8oHwSkZWPvKlmoOfsKHW7BdTCocEgLwW5ZcOSo/W5VcOJlcQHRdMSoJECoGW5W1W5RdK8kzWRxcUmohjbFcKCkCz0xdIxddLSkeW4RcJgWUWRFdQcRcG2eYW7afrYldHeDcuCk3W5HKWQVdUSoymtFcNSoiaIzwi8ktCmkdxhqWWQdcHmo7WOxcJ8oQvmk4sJKvl8owq8o9W7/cPSolWQi8nmkexW','mtaXmq','zMLSzq','DhjPBq','WP7cGSobcL0Twa','zMLUywXSEq','BgvUz3rO','Dg9gAxHLza','cdaXEuO','BwvZC2fNzq','W7hKUR3PUylMIAlNOjBMJQ/NJzFVVQS','W5PuW5pdSmkcWPvq','Ahr0Chm6lY9SDw9IB29RlMnVzgLUzY5UzxqVyxbPl3vZzxiVBhvVyM9VAY9WCM9Qzwn0l2nVzguUANnVBI9ZAgfYzwqTzgvWB3qVBhvVyM9VAY9NAxqVyMXVyI9Tyxn0zxiVy29Kzs5QC29U','cJJcJvDCW7tcK3JcLSkJWPD9xf4JWQO','hEs7NEM7T+AlIUEGUoAnNUEpQE+9Ua','CgfYC2u','CMvWBgfJzq','DxrMoa','5lQm57U056cb5BEY5l2/55sO','C2HPzNq','dYJdRd/dQaZcPmknaCkT','yxbWBgLJyxrPB24VANnVBG','kfqym2BdRSk+W5zJW6rqW67cJx4rWP3dOmov','twJdRW','z2v0DMfS','vu/cJvO','WP8joCkXtSoh','W4BdPmoxeq','W4WEW6mwfSkWBXxcICoI','bCkeWQlcVYpcGGr5W4hdI8oF','cUs4NoM5J+AjQ+EGGEw9K+wjJEI0PUwpT+AaU+AuTUEBIU+8MG','W5roWOarW7NcUqTPm1TOubZdSCkRW4/dKh4BWRJcHmoEl1FcUCkrW4pcLhdcRSkmW7/dRmkplYKEW6zkf8oXWQNdT8k5h8ogd8keWOJcHmkYW5ldN8oPhIFdKthcOmoWcCorW7JdGG','6k+H5lIk5R6c5RwC56gO5A2v5lIn5yYk5Q2GqoI1Sos7NUE9M+EPPmkb776uW7pcJmkjWPqpmWdcHLzBWP7dH8o1W4qWWPRcLmouWQRcKSooWO8','yw1VDw50','y2HHCKnVzgvbDa','D0q0WOa','irZcGdqpDa','dwldLCk3fmkwdJ4T','CMfUzg9T','ms40mG','C01Tr8o1c8oOCCoMWQxdIci','Cg9ZDa','BHuRcq','gLVcO8ouWOe','xxW1WQNdKa','5lMc5R+95RAE56cSWOhdH+I2TEs4MoE9PUERR8oj7726WR5/W7hdTmk+W5jobSkAvJaRD8oTACkFW4NdJZDVCCoaWQO','Dg9tDhjPBMC','WQNcTIddJCkGWPe','WQdcTKrpWOm','WPJdJMLS','jadcQq','5lQJ57UN56gb5Bs15l+l55sY','WRRdVSo2i8kY','z3PPCcXJB21WCMvZCYXICIXKzwzSyxrL','WQRcVf5oWPS1bW','Bmo0WRldTCoxWPa','c1FcVSosWORcNG','gYNcJ0Hq','y29TBw9Ttg9N','WPiBa8k/','bLFcIHBdMgxcPCo1WPlcNc9vnYlcGZZdLCkZ','W5ldVCkvWRa9','mte2lJq1mZi','C3bSAxq','W4XpWOCj','wdBcK8k6dmkxgq','tNZdSsu','cUACRoASOEI/KoIHJowfSEApKoEoSoE6OUwmHE+8MG','tMJdTIu','i8oSWPbVWOSKEG3cJH7dPfO','AxnoB2rL','zmkIW5NdJXFdTJ0symksdSoe','ySkRW4aOW4PVwqBcIG','WQX5BCodW7ldLgFcUrmVW5/cIGSQEeu','WOxcPmkst8kvWQBcLc4bns3cIa','jNnJzw5LpteWmteMBg9Uz2L0DwrLpteXnI40ntmY','WRVcSaRdKmk9WOBdHq','Eua2n2RdTmkIW5y7','z1yDiNC','WQWafSkrWOa','5lIU56g75AYsBEweMa','W4JcLtqWiY3cI8ocrKhdKa','aZZcIuTgWQ3dNspcJmkVWPG8gfuOWRq/kHaTBb4Ru8k3W5tdV8k5W6LxamoKW4FdLcueWPDwW71aW45teSkCiSoqFSoWWRpdIsBcMeJdKCkKWRFdMsNdNYLDWPpdTLncdSoMCSkWCWDsWO/dOtdcI0/dKmoIqmovdvJdOxpcNsxcLuXHWQOeWOugWR5gWOdcSCowW6NdJ8kRvSkGWOhcTmogbchcUSk9WP4mWQddSGpcT1pcGHvpWQtcQ8odlLVdVddcHmoPqeKdzmokWPJcQ39jW63cSmkSW77dVSk+WQyUpW9zwSk7W7rjoejMW4KdrqxcK3bfWPeKWOJdRSoeW6lcKapcLCoEjmohECkvWQaUWP/dM3SpvWCxl1q7amoXW6hcQSkdymkRBYD5W6enWPvWW7hdRSoTW79evqnGuhlcN8k8WRfiWR5GWQ7cK0PzWOWaW7lcPmo6cL91W4HhW6HlosRdV8k5WQfrr8kfWO7cMvFcTSkwWQ1gk8o7j091FCk1W6VdKgFdVGhdOmk1p8kYWOzQW7BcI8k2WRj1W6WGvmorWPCZkHZdUdVcUCoOamk+DColWOBdLSkGimoGWRVdIrRdKmkltSkdWQe8W50DfvhcH8kTsrX7WQhdOsFcJSkCWP8UaZhcOH5AWPldHepdNSoNWOdcUL3cT8kFWQddHvOzjmkFotpdQfJdM8kSW4i6bmoZW7GeutfepmkvlSooWRT9i8odFh5yW7FdGxlcVSoqW6mgW59sWPlcQgpdV2xdId1wWOznvwnsD8kPmKXDztSMDSoSi8oFjSksnmogdSkuWRSKWOfCWQybW63dVCoBmJClvXWMqI9cxvSnn8oWW5FcLSoaWPZdUSk7bsOPv8kIEmkTjxWaWQD/vSoQj8oCW5XLkCk8omovtvrdW7fFjSo/fmk/a8oGWRJdIvrRW7dcOWP/WPVdTtlcL1NcLx3cMd41nJWfWOjAW5lcJGhcOSkQimkWWPJdVshdKXjGW5OyegZcI0zHWQimW4RdVhtcQCoNoebqAM1LDmkKlINcLX8eWPFdUSoiuCoNWRVdLSoviIxcHZxcPaeCjsZdOSksWOD1md/cPwxdKaK4ltmydSojg8kpW49rW6xdUKZcGYDgWPO5WRtdN8omWPtdKtmvWQNdU8kUWQ/cMCoiWPxdRSkccCoqWP/cJqCMfr3cSSk/wZlcPLRdNSoNv8o0W6jTWOFcJSkOetLiW73cRCk/wYRcOwlcV1FdLLBcHCk7WOzvW5JcLsRdJa7dUX/dMCk6ms3cTColW4HvWPFcM8krpfSSt8kwyHu1vmkwy1VcMwKZyCozaSoTWRFdT2CAW4m9W5v0W4BcGSkilmoDmahcK8kgDmoFW5WYWQJdMKBdHuXwEN3cVeqHW7ztW6NcUXSQW4WCg8oMWQNdTYNcHSk/W6pdIsBdTCoPWPj0WRNdISkPDgBdMmomWR9aWRxcV8kqhfmuWPbdW50uESkWW59FqCo8cCkGWPJdKYxcSs4JhIu/ygdcO8okWPWMWQ1hvt7cUt7dVuHRW7FcOc1SW6O6WRBcQ3ZdI8kxqmoXWPCcmXmwW4qGWOFdNr7cVvDtWOJdKSoSWQ7dKMbdWQLQhHtdGKJcICotW7RcNu7cKMiUpMNcPdhdOr/cNZtdOqX5sSkhp8k9ASoqW5XVzXCrBJe7W4BdOLSuva85omkedahcM8kwWPpdKZmjW4DAW4ddMYGUchDYvNOyb8kEWO05mY8MoKzaerhcPSozWQPPW5ldUmoeW4r0us4AW6/dJrLuemoiWQLvW7acWR9bW4rnWPldPWfhu8kAb8kpv1DDqSoFW53dQG5SqGldT8kJtmk+udlcGqpdRtpcMSk/W71ZWQCqWPxcJq4uFgldL8k5cu7cTSoJWO1kW53cMMPYW7dcUSozb8kkWPFdUSkpgSk7WOXCW4/cJ8kQkLJdQ8oGr8oRW65CW5tcLWdcNSkCW7P8WPXQgCoVlJJdUmoAD8kCtmoPW7uGhf/dJu7cGa9oyCkGWPnTiuStASoittddNmkcW6pcQbmDWR7cLtFdS8kDWPP1WQqOscJcPufQW5G','oNBdN8oE','zMXVB3i','whZdHaibW4xcNN/cRSkPWQm','lSk+WRJdOSojWPaRwvabsa','W5FdRmk/W5NdU8oWW6nTW5pcOSkUWPvj','WOucW44','mZq1nLrwqvbnBq'];_0x1421=function(){return _0x5d5f30;};return _0x1421();}function dpyz(_0x164748=0x0){return new Promise(_0x5247fb=>{const _0x2ede4e=_0x4ea3,_0x4a5641=_0x377c;let _0x7cddcd=Math[_0x4a5641('0x27c')](new Date()[_0x4a5641('0x22d')]()/0x3e8),_0x2a9bd7=md5(md5(wxopenid+_0x4a5641('0x299')+wxopenid[_0x2ede4e('0x258','44ia')](0x7,0xf)+'116.45328206380208')),_0x145982={'url':_0x2ede4e('0x24d','vmKc')+openid+_0x4a5641('0x252')+wxopenid,'headers':{'Host':_0x2ede4e('0x280','^uNO'),'Connection':_0x4a5641('0x289'),'content-type':_0x4a5641('0x1d7'),'Accept-Encoding':_0x2ede4e('0x28f','H7EG'),'User-Agent':_0x2ede4e('0x257','Kawy'),'Referer':_0x4a5641('0x291')},'body':_0x2ede4e('0x21c','@^^)')+wxopenid};$[_0x4a5641('0x1eb')](_0x145982,async(_0x3eb51a,_0x2a825a,_0x259789)=>{const _0x57da8c=_0x2ede4e,_0x5650d4=_0x4a5641;try{const _0x16a025=JSON[_0x5650d4('0x1d1')](_0x259789);if(_0x16a025[_0x57da8c('0x235','VXfr')]==0x1){}else{}}catch(_0x145a48){}finally{_0x5247fb();}},_0x164748);});}function dpxx(_0x24483f=0x0){return new Promise(_0x3a1c06=>{const _0x13d5ff=_0x377c,_0x2671b6=_0x4ea3;let _0xb4c08=Math[_0x2671b6('0x297','GgtF')](new Date()[_0x13d5ff('0x22d')]()/0x3e8),_0x2b170d=md5(md5(wxopenid+_0x2671b6('0x295','A7^8')+wxopenid[_0x13d5ff('0x241')](0x7,0xf)+'116.45328206380208')),_0x40e1f0={'url':_0x2671b6('0x22a','fcvz'),'headers':{'Host':_0x2671b6('0x209','Fdhh'),'Connection':_0x13d5ff('0x289'),'content-type':_0x13d5ff('0x1d7'),'Accept-Encoding':_0x13d5ff('0x1f7'),'User-Agent':_0x2671b6('0x263','@^^)'),'Referer':'https://servicewechat.com/wxde7e5cd3f013ff7d/219/page-frame.html'},'body':_0x13d5ff('0x227')+wxopenid+_0x13d5ff('0x246')+js};$[_0x13d5ff('0x1eb')](_0x40e1f0,async(_0x5dc666,_0x52d9db,_0x46d3c9)=>{const _0x2cb376=_0x2671b6,_0x23cc9f=_0x13d5ff;try{const _0x16d39d=JSON[_0x23cc9f('0x1d1')](_0x46d3c9);if(_0x16d39d[_0x2cb376('0x226','ohI5')]==0x1)for(let _0x4d4ae2=0x0;_0x4d4ae2<_0x16d39d[_0x23cc9f('0x27f')][_0x2cb376('0x248','44ia')];_0x4d4ae2++){sy+=_0x16d39d[_0x23cc9f('0x27f')][_0x4d4ae2][_0x2cb376('0x1fa','Kawy')];}else{}}catch(_0x1ad8d4){}finally{_0x3a1c06();}},_0x24483f);});}function dpsmtx(_0x3d4269=0x0){return new Promise(_0x2b363c=>{const _0x449ce3=_0x4ea3,_0x51cb0f=_0x377c;let _0x56896a=Math[_0x51cb0f('0x27c')](new Date()[_0x51cb0f('0x22d')]()/0x3e8),_0x2bc90e=dpsmapp,_0x5393e2=randomString(0x6),_0x1e0e80=md5(_0x5393e2+_0x56896a),_0x29179a={'url':_0x51cb0f('0x25b')+dpjhm,'headers':{'Host':_0x449ce3('0x1ea','6vKt'),'Connection':_0x449ce3('0x264','ADUm'),'Content-type':'application/json','Accept-Encoding':_0x449ce3('0x26d','SNvA'),'User-Agent':_0x449ce3('0x298','fcvz'),'Referer':_0x51cb0f('0x291')},'body':_0x449ce3('0x20f','e6Zm')+wxopenid};$['post'](_0x29179a,async(_0xdf1c37,_0x131b2c,_0x48648f)=>{const _0x51fb78=_0x449ce3,_0x56d4c5=_0x51cb0f;try{const _0x9b0360=JSON[_0x56d4c5('0x1d1')](_0x48648f);_0x9b0360[_0x51fb78('0x23a','c$P$')]==0x1?console[_0x56d4c5('0x27a')](_0x51fb78('0x278','fcvz')+_0x9b0360[_0x51fb78('0x215','w9uZ')][_0x56d4c5('0x285')]):console[_0x51fb78('0x290','na41')](_0x56d4c5('0x25f')+_0x9b0360[_0x51fb78('0x29c','UnBT')]);}catch(_0x10c32b){}finally{_0x2b363c();}},_0x3d4269);});}function randomString(_0x2fdbb8=0xc){const _0x16d9eb=_0x18e760,_0x13dcad=_0x1d0386;let _0x501dac=_0x13dcad('0x237','w(8R'),_0x27537f=_0x501dac[_0x16d9eb('0x29e')],_0x25f7a8='';for(i=0x0;i<_0x2fdbb8;i++){_0x25f7a8+=_0x501dac['charAt'](Math[_0x16d9eb('0x216')](Math[_0x16d9eb('0x1e8')]()*_0x27537f));}return _0x25f7a8;}function encodeUTF8(_0x5345bb){const _0x5ccb6c=_0x18e760,_0x46a3c1=_0x1d0386;var _0x41678a,_0x421437=[],_0x120798,_0x124c28;for(_0x41678a=0x0;_0x41678a<_0x5345bb[_0x46a3c1('0x224','k586')];_0x41678a++)if((_0x120798=_0x5345bb[_0x5ccb6c('0x1e4')](_0x41678a))<0x80)_0x421437[_0x5ccb6c('0x28c')](_0x120798);else{if(_0x120798<0x800)_0x421437[_0x46a3c1('0x1dd','Zf(s')](0xc0+(_0x120798>>0x6&0x1f),0x80+(_0x120798&0x3f));else{if((_0x124c28=_0x120798^0xd800)>>0xa==0x0)_0x120798=(_0x124c28<<0xa)+(_0x5345bb[_0x46a3c1('0x1de','nvo@')](++_0x41678a)^0xdc00)+0x10000,_0x421437[_0x5ccb6c('0x28c')](0xf0+(_0x120798>>0x12&0x7),0x80+(_0x120798>>0xc&0x3f));else _0x421437[_0x46a3c1('0x206','OX[N')](0xe0+(_0x120798>>0xc&0xf));_0x421437[_0x5ccb6c('0x28c')](0x80+(_0x120798>>0x6&0x3f),0x80+(_0x120798&0x3f));}};return _0x421437;}function md5(_0x575e4e){const _0x26e5ee=_0x1d0386;function _0x2263f3(_0x38da85,_0x8aac68){return _0x38da85<<_0x8aac68|_0x38da85>>>0x20-_0x8aac68;}function _0x212f3b(_0x5b9f71,_0x82f46a){var _0x589714,_0xd213d,_0x2db2a4,_0x53b5eb,_0x38cb3b;return _0x2db2a4=0x80000000&_0x5b9f71,_0x53b5eb=0x80000000&_0x82f46a,_0x589714=0x40000000&_0x5b9f71,_0xd213d=0x40000000&_0x82f46a,_0x38cb3b=(0x3fffffff&_0x5b9f71)+(0x3fffffff&_0x82f46a),_0x589714&_0xd213d?0x80000000^_0x38cb3b^_0x2db2a4^_0x53b5eb:_0x589714|_0xd213d?0x40000000&_0x38cb3b?0xc0000000^_0x38cb3b^_0x2db2a4^_0x53b5eb:0x40000000^_0x38cb3b^_0x2db2a4^_0x53b5eb:_0x38cb3b^_0x2db2a4^_0x53b5eb;}function _0x5aa88f(_0x51dbe6,_0x3397fe,_0xdd0042){return _0x51dbe6&_0x3397fe|~_0x51dbe6&_0xdd0042;}function _0x1c835a(_0x347e0d,_0x2152da,_0x5b9a40){return _0x347e0d&_0x5b9a40|_0x2152da&~_0x5b9a40;}function _0x46f2cb(_0x4a532e,_0x369777,_0x3efddf){return _0x4a532e^_0x369777^_0x3efddf;}function _0x4b914c(_0x3e808c,_0x191f25,_0x2ba136){return _0x191f25^(_0x3e808c|~_0x2ba136);}function _0x436f88(_0x56902c,_0x5d86df,_0x2cbf6c,_0x3c2cec,_0x59ff7b,_0x5edf65,_0x2f325e){return _0x56902c=_0x212f3b(_0x56902c,_0x212f3b(_0x212f3b(_0x5aa88f(_0x5d86df,_0x2cbf6c,_0x3c2cec),_0x59ff7b),_0x2f325e)),_0x212f3b(_0x2263f3(_0x56902c,_0x5edf65),_0x5d86df);}function _0x55474f(_0x4953ae,_0x25352d,_0x228850,_0x24c589,_0x210767,_0x2fb444,_0x153e80){return _0x4953ae=_0x212f3b(_0x4953ae,_0x212f3b(_0x212f3b(_0x1c835a(_0x25352d,_0x228850,_0x24c589),_0x210767),_0x153e80)),_0x212f3b(_0x2263f3(_0x4953ae,_0x2fb444),_0x25352d);}function _0xa93ddd(_0x312f0c,_0x1f18ea,_0x5b0127,_0x2e0edf,_0x38e3ca,_0x47ca41,_0x4f10dd){return _0x312f0c=_0x212f3b(_0x312f0c,_0x212f3b(_0x212f3b(_0x46f2cb(_0x1f18ea,_0x5b0127,_0x2e0edf),_0x38e3ca),_0x4f10dd)),_0x212f3b(_0x2263f3(_0x312f0c,_0x47ca41),_0x1f18ea);}function _0x731898(_0x1bdbce,_0x241e12,_0x39b931,_0xd735b,_0x55880d,_0x1aeb99,_0x1b3a75){return _0x1bdbce=_0x212f3b(_0x1bdbce,_0x212f3b(_0x212f3b(_0x4b914c(_0x241e12,_0x39b931,_0xd735b),_0x55880d),_0x1b3a75)),_0x212f3b(_0x2263f3(_0x1bdbce,_0x1aeb99),_0x241e12);}function _0x18b2c7(_0x20f220){const _0x949628=_0x377c;for(var _0x4a1dfb,_0xd4a78f=_0x20f220[_0x949628('0x29e')],_0x54d67a=_0xd4a78f+0x8,_0x247873=(_0x54d67a-_0x54d67a%0x40)/0x40,_0x57d72a=0x10*(_0x247873+0x1),_0x3d3e29=new Array(_0x57d72a-0x1),_0x5183f1=0x0,_0x2b49bc=0x0;_0xd4a78f>_0x2b49bc;)_0x4a1dfb=(_0x2b49bc-_0x2b49bc%0x4)/0x4,_0x5183f1=_0x2b49bc%0x4*0x8,_0x3d3e29[_0x4a1dfb]=_0x3d3e29[_0x4a1dfb]|_0x20f220[_0x949628('0x1e4')](_0x2b49bc)<<_0x5183f1,_0x2b49bc++;return _0x4a1dfb=(_0x2b49bc-_0x2b49bc%0x4)/0x4,_0x5183f1=_0x2b49bc%0x4*0x8,_0x3d3e29[_0x4a1dfb]=_0x3d3e29[_0x4a1dfb]|0x80<<_0x5183f1,_0x3d3e29[_0x57d72a-0x2]=_0xd4a78f<<0x3,_0x3d3e29[_0x57d72a-0x1]=_0xd4a78f>>>0x1d,_0x3d3e29;}function _0x5de9e2(_0x3c3034){const _0x7fd229=_0x4ea3,_0x1f3fc9=_0x377c;var _0x4bad1d,_0x431347,_0x57c933='',_0x1337ec='';for(_0x431347=0x0;0x3>=_0x431347;_0x431347++)_0x4bad1d=_0x3c3034>>>0x8*_0x431347&0xff,_0x1337ec='0'+_0x4bad1d[_0x1f3fc9('0x1f0')](0x10),_0x57c933+=_0x1337ec[_0x7fd229('0x25a','SNvA')](_0x1337ec[_0x1f3fc9('0x29e')]-0x2,0x2);return _0x57c933;}function _0x2b5f17(_0x52bb6a){const _0x19ea83=_0x4ea3,_0x2b212c=_0x377c;_0x52bb6a=_0x52bb6a[_0x2b212c('0x1d2')](/\r\n/g,'\x0a');for(var _0x4bf78b='',_0x307159=0x0;_0x307159<_0x52bb6a[_0x19ea83('0x1f9','KQl^')];_0x307159++){var _0x3e44c6=_0x52bb6a[_0x19ea83('0x233','e6Zm')](_0x307159);0x80>_0x3e44c6?_0x4bf78b+=String[_0x19ea83('0x26a','ADUm')](_0x3e44c6):_0x3e44c6>0x7f&&0x800>_0x3e44c6?(_0x4bf78b+=String[_0x19ea83('0x25c','Ei5T')](_0x3e44c6>>0x6|0xc0),_0x4bf78b+=String[_0x2b212c('0x28b')](0x3f&_0x3e44c6|0x80)):(_0x4bf78b+=String[_0x19ea83('0x251','nvo@')](_0x3e44c6>>0xc|0xe0),_0x4bf78b+=String[_0x2b212c('0x28b')](_0x3e44c6>>0x6&0x3f|0x80),_0x4bf78b+=String[_0x2b212c('0x28b')](0x3f&_0x3e44c6|0x80));}return _0x4bf78b;}var _0x2e4aad,_0x3c618c,_0x3273eb,_0x31eee3,_0x3bf127,_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e=[],_0x539a84=0x7,_0x3dc5f0=0xc,_0x5d3390=0x11,_0x283e19=0x16,_0x5531c1=0x5,_0x5da2b3=0x9,_0x4e6d31=0xe,_0x4a8d2e=0x14,_0x44dca8=0x4,_0x23a019=0xb,_0x312763=0x10,_0x20b491=0x17,_0x318e04=0x6,_0x263bbd=0xa,_0x2be029=0xf,_0x44d3fa=0x15;for(_0x575e4e=_0x2b5f17(_0x575e4e),_0x10224e=_0x18b2c7(_0x575e4e),_0x290ffb=0x67452301,_0x11faa3=0xefcdab89,_0x40468c=0x98badcfe,_0x129299=0x10325476,_0x2e4aad=0x0;_0x2e4aad<_0x10224e['length'];_0x2e4aad+=0x10)_0x3c618c=_0x290ffb,_0x3273eb=_0x11faa3,_0x31eee3=_0x40468c,_0x3bf127=_0x129299,_0x290ffb=_0x436f88(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x0],_0x539a84,0xd76aa478),_0x129299=_0x436f88(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x1],_0x3dc5f0,0xe8c7b756),_0x40468c=_0x436f88(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x2],_0x5d3390,0x242070db),_0x11faa3=_0x436f88(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x3],_0x283e19,0xc1bdceee),_0x290ffb=_0x436f88(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x4],_0x539a84,0xf57c0faf),_0x129299=_0x436f88(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x5],_0x3dc5f0,0x4787c62a),_0x40468c=_0x436f88(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x6],_0x5d3390,0xa8304613),_0x11faa3=_0x436f88(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x7],_0x283e19,0xfd469501),_0x290ffb=_0x436f88(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x8],_0x539a84,0x698098d8),_0x129299=_0x436f88(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x9],_0x3dc5f0,0x8b44f7af),_0x40468c=_0x436f88(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xa],_0x5d3390,0xffff5bb1),_0x11faa3=_0x436f88(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0xb],_0x283e19,0x895cd7be),_0x290ffb=_0x436f88(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0xc],_0x539a84,0x6b901122),_0x129299=_0x436f88(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0xd],_0x3dc5f0,0xfd987193),_0x40468c=_0x436f88(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xe],_0x5d3390,0xa679438e),_0x11faa3=_0x436f88(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0xf],_0x283e19,0x49b40821),_0x290ffb=_0x55474f(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x1],_0x5531c1,0xf61e2562),_0x129299=_0x55474f(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x6],_0x5da2b3,0xc040b340),_0x40468c=_0x55474f(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xb],_0x4e6d31,0x265e5a51),_0x11faa3=_0x55474f(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x0],_0x4a8d2e,0xe9b6c7aa),_0x290ffb=_0x55474f(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x5],_0x5531c1,0xd62f105d),_0x129299=_0x55474f(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0xa],_0x5da2b3,0x2441453),_0x40468c=_0x55474f(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xf],_0x4e6d31,0xd8a1e681),_0x11faa3=_0x55474f(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x4],_0x4a8d2e,0xe7d3fbc8),_0x290ffb=_0x55474f(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x9],_0x5531c1,0x21e1cde6),_0x129299=_0x55474f(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0xe],_0x5da2b3,0xc33707d6),_0x40468c=_0x55474f(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x3],_0x4e6d31,0xf4d50d87),_0x11faa3=_0x55474f(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x8],_0x4a8d2e,0x455a14ed),_0x290ffb=_0x55474f(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0xd],_0x5531c1,0xa9e3e905),_0x129299=_0x55474f(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x2],_0x5da2b3,0xfcefa3f8),_0x40468c=_0x55474f(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x7],_0x4e6d31,0x676f02d9),_0x11faa3=_0x55474f(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0xc],_0x4a8d2e,0x8d2a4c8a),_0x290ffb=_0xa93ddd(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x5],_0x44dca8,0xfffa3942),_0x129299=_0xa93ddd(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x8],_0x23a019,0x8771f681),_0x40468c=_0xa93ddd(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xb],_0x312763,0x6d9d6122),_0x11faa3=_0xa93ddd(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0xe],_0x20b491,0xfde5380c),_0x290ffb=_0xa93ddd(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x1],_0x44dca8,0xa4beea44),_0x129299=_0xa93ddd(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x4],_0x23a019,0x4bdecfa9),_0x40468c=_0xa93ddd(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x7],_0x312763,0xf6bb4b60),_0x11faa3=_0xa93ddd(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0xa],_0x20b491,0xbebfbc70),_0x290ffb=_0xa93ddd(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0xd],_0x44dca8,0x289b7ec6),_0x129299=_0xa93ddd(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x0],_0x23a019,0xeaa127fa),_0x40468c=_0xa93ddd(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x3],_0x312763,0xd4ef3085),_0x11faa3=_0xa93ddd(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x6],_0x20b491,0x4881d05),_0x290ffb=_0xa93ddd(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x9],_0x44dca8,0xd9d4d039),_0x129299=_0xa93ddd(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0xc],_0x23a019,0xe6db99e5),_0x40468c=_0xa93ddd(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xf],_0x312763,0x1fa27cf8),_0x11faa3=_0xa93ddd(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x2],_0x20b491,0xc4ac5665),_0x290ffb=_0x731898(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x0],_0x318e04,0xf4292244),_0x129299=_0x731898(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x7],_0x263bbd,0x432aff97),_0x40468c=_0x731898(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xe],_0x2be029,0xab9423a7),_0x11faa3=_0x731898(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x5],_0x44d3fa,0xfc93a039),_0x290ffb=_0x731898(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0xc],_0x318e04,0x655b59c3),_0x129299=_0x731898(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0x3],_0x263bbd,0x8f0ccc92),_0x40468c=_0x731898(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0xa],_0x2be029,0xffeff47d),_0x11faa3=_0x731898(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x1],_0x44d3fa,0x85845dd1),_0x290ffb=_0x731898(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x8],_0x318e04,0x6fa87e4f),_0x129299=_0x731898(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0xf],_0x263bbd,0xfe2ce6e0),_0x40468c=_0x731898(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x6],_0x2be029,0xa3014314),_0x11faa3=_0x731898(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0xd],_0x44d3fa,0x4e0811a1),_0x290ffb=_0x731898(_0x290ffb,_0x11faa3,_0x40468c,_0x129299,_0x10224e[_0x2e4aad+0x4],_0x318e04,0xf7537e82),_0x129299=_0x731898(_0x129299,_0x290ffb,_0x11faa3,_0x40468c,_0x10224e[_0x2e4aad+0xb],_0x263bbd,0xbd3af235),_0x40468c=_0x731898(_0x40468c,_0x129299,_0x290ffb,_0x11faa3,_0x10224e[_0x2e4aad+0x2],_0x2be029,0x2ad7d2bb),_0x11faa3=_0x731898(_0x11faa3,_0x40468c,_0x129299,_0x290ffb,_0x10224e[_0x2e4aad+0x9],_0x44d3fa,0xeb86d391),_0x290ffb=_0x212f3b(_0x290ffb,_0x3c618c),_0x11faa3=_0x212f3b(_0x11faa3,_0x3273eb),_0x40468c=_0x212f3b(_0x40468c,_0x31eee3),_0x129299=_0x212f3b(_0x129299,_0x3bf127);var _0x35aac9=_0x5de9e2(_0x290ffb)+_0x5de9e2(_0x11faa3)+_0x5de9e2(_0x40468c)+_0x5de9e2(_0x129299);return _0x35aac9[_0x26e5ee('0x271','KQl^')]();}
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        isShadowrocket() {
            return "undefined" != typeof $rocket
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => { })) {
            if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let s = require("iconv-lite");
                this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: i,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, s.decode(h, this.encoding))
                }, t => {
                    const {
                        message: i,
                        response: r
                    } = t;
                    e(i, r, r && s.decode(r.rawBody, this.encoding))
                })
            }
        }
        post(t, e = (() => { })) {
            const s = t.method ? t.method.toLocaleLowerCase() : "post";
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient[s](t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                let i = require("iconv-lite");
                this.initGotEnv(t);
                const {
                    url: r,
                    ...o
                } = t;
                this.got[s](r, o).then(t => {
                    const {
                        statusCode: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: r,
                        headers: o,
                        rawBody: h
                    }, i.decode(h, this.encoding))
                }, t => {
                    const {
                        message: s,
                        response: r
                    } = t;
                    e(s, r, r && i.decode(r.rawBody, this.encoding))
                })
            }
        }
        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }
        fwcaas() {
            return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }
        fwur() {
            var bbas = new FxPCnMKLw7()
            return bbas.decode(this.fwcaas());
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}
