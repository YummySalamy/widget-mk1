const _0x5593c7=_0x2652;(function(_0x3a17f3,_0x2d355c){const _0x54c9e6=_0x2652,_0x4087e5=_0x3a17f3();while(!![]){try{const _0x393257=parseInt(_0x54c9e6(0x158))/0x1+parseInt(_0x54c9e6(0x168))/0x2+parseInt(_0x54c9e6(0x183))/0x3+-parseInt(_0x54c9e6(0x16a))/0x4+parseInt(_0x54c9e6(0x185))/0x5*(-parseInt(_0x54c9e6(0x174))/0x6)+-parseInt(_0x54c9e6(0x194))/0x7*(-parseInt(_0x54c9e6(0x17f))/0x8)+parseInt(_0x54c9e6(0x15e))/0x9;if(_0x393257===_0x2d355c)break;else _0x4087e5['push'](_0x4087e5['shift']());}catch(_0x36a258){_0x4087e5['push'](_0x4087e5['shift']());}}}(_0x1831,0x96e9c));function _0x2652(_0x23897a,_0x236b71){const _0x183190=_0x1831();return _0x2652=function(_0x2652d3,_0x8b7fcd){_0x2652d3=_0x2652d3-0x155;let _0x2df93a=_0x183190[_0x2652d3];return _0x2df93a;},_0x2652(_0x23897a,_0x236b71);}import{CLOSE_ICON,MESSAGE_ICON,styles,aditionalStyles,chatbotWindowName,welcomeMessage,placeHolder,iconUrl}from'./assets.js';function unescapeStr(_0x494a95){return _0x494a95['replace'](/\\u[\dA-F]{4}/gi,function(_0x31da17){const _0x5d046b=_0x2652;return String[_0x5d046b(0x1a0)](parseInt(_0x31da17[_0x5d046b(0x17d)](/\\u/g,''),0x10));});}class MessageWidget{constructor(_0x2de779=_0x5593c7(0x177)){const _0x175ac5=_0x5593c7;this['position']=this[_0x175ac5(0x18f)](_0x2de779),this[_0x175ac5(0x1b4)]=![],this['initialize'](),this[_0x175ac5(0x165)](),this[_0x175ac5(0x1aa)]=[];}['position']='';[_0x5593c7(0x1b4)]=![];[_0x5593c7(0x156)]=null;['getPosition'](_0x1e4dd0){const _0x486576=_0x5593c7,[_0x1ef494,_0x44c80b]=_0x1e4dd0['split']('-');return{[_0x1ef494]:'30px',[_0x44c80b]:_0x486576(0x167)};}async[_0x5593c7(0x191)](){const _0x51ae95=_0x5593c7,_0x390789=document['createElement'](_0x51ae95(0x1b0));_0x390789[_0x51ae95(0x19b)][_0x51ae95(0x1bb)]='fixed',Object['keys'](this['position'])[_0x51ae95(0x193)](_0x39618d=>_0x390789['style'][_0x39618d]=this[_0x51ae95(0x1bb)][_0x39618d]),document[_0x51ae95(0x188)][_0x51ae95(0x184)](_0x390789);const _0x375d83=document[_0x51ae95(0x1b7)](_0x51ae95(0x175));_0x375d83[_0x51ae95(0x1a6)]['add'](_0x51ae95(0x157));const _0x514212=document['createElement'](_0x51ae95(0x1b3));_0x514212[_0x51ae95(0x180)]=MESSAGE_ICON,_0x514212[_0x51ae95(0x1a6)]['add'](_0x51ae95(0x16b)),this[_0x51ae95(0x1b9)]=_0x514212;const _0x2138a7=document['createElement']('span');_0x2138a7[_0x51ae95(0x180)]=CLOSE_ICON,_0x2138a7[_0x51ae95(0x1a6)][_0x51ae95(0x170)]('widget__icon',_0x51ae95(0x1ad)),this['closeIcon']=_0x2138a7,_0x375d83[_0x51ae95(0x184)](this[_0x51ae95(0x1b9)]),_0x375d83[_0x51ae95(0x184)](this[_0x51ae95(0x1af)]),_0x375d83[_0x51ae95(0x1b1)](_0x51ae95(0x171),this[_0x51ae95(0x196)]['bind'](this)),this['widgetContainer']=document['createElement'](_0x51ae95(0x1b0)),this['widgetContainer'][_0x51ae95(0x1a6)]['add']('widget__hidden','widget__container'),this[_0x51ae95(0x173)](),_0x390789[_0x51ae95(0x184)](this['widgetContainer']),_0x390789[_0x51ae95(0x184)](_0x375d83);const _0x4d568b=_0x390789[_0x51ae95(0x1a5)](_0x51ae95(0x1a8));_0x4d568b[_0x51ae95(0x1b1)](_0x51ae95(0x171),async _0x220993=>{const _0x6874e1=_0x51ae95;_0x220993['preventDefault']();const _0x341849=_0x390789[_0x6874e1(0x1a5)]('#messageInput'),_0x1c3f24=_0x341849[_0x6874e1(0x15f)][_0x6874e1(0x1b8)]();if(_0x1c3f24==='')return;this[_0x6874e1(0x19e)](_0x1c3f24,'user');try{const _0x2125cb=await this[_0x6874e1(0x199)](_0x1c3f24);this[_0x6874e1(0x19e)](_0x2125cb,_0x6874e1(0x15a));}catch(_0xb2947c){console[_0x6874e1(0x172)](_0x6874e1(0x15c),_0xb2947c);}_0x341849[_0x6874e1(0x15f)]='';});}async[_0x5593c7(0x166)](){const _0x3c6d7b=_0x5593c7,_0x38fd49='https://dev-aichain-chatbot-upload-qd5u6w2c6q-uc.a.run.app/chatbot/sessions',_0x406144=document[_0x3c6d7b(0x162)](_0x3c6d7b(0x17e)),_0x4c42ff=_0x406144['getAttribute'](_0x3c6d7b(0x164)),_0x353975='WEB',_0xaa495c=_0x406144[_0x3c6d7b(0x198)]('userId'),_0x25db3d=localStorage[_0x3c6d7b(0x18e)](_0x3c6d7b(0x18d)),_0x25d7e4=null;this[_0x3c6d7b(0x1aa)]['length']=0x0;const _0x1752ee={'chatbot_id':_0x4c42ff,'channel_type':_0x353975,'user_id':_0xaa495c,'session_id':_0x25db3d};try{const _0xba3f2c=await fetch(_0x38fd49,{'method':_0x3c6d7b(0x1a1),'headers':{'Content-Type':'application/json'},'body':JSON[_0x3c6d7b(0x189)](_0x1752ee)});if(!_0xba3f2c['ok'])throw new Error(_0x3c6d7b(0x1a7));const _0xcd8f2=await _0xba3f2c[_0x3c6d7b(0x18a)](),_0x4d2743=_0xcd8f2['messages'];for(const _0x297cf1 in _0x4d2743){const _0x1df0c7=_0x4d2743[_0x297cf1];this[_0x3c6d7b(0x1aa)][_0x3c6d7b(0x1ab)](_0x1df0c7);}this[_0x3c6d7b(0x1aa)][_0x3c6d7b(0x1a3)]((_0x360cba,_0x47c725)=>{return new Date(_0x360cba['createdAt'])-new Date(_0x47c725['createdAt']);});for(const _0x5c1542 of this[_0x3c6d7b(0x1aa)]){const _0x2aeaa6=_0x5c1542[_0x3c6d7b(0x1b5)]==='NORMAL'?_0x3c6d7b(0x15a):_0x3c6d7b(0x1b2);this[_0x3c6d7b(0x16c)](_0x5c1542[_0x3c6d7b(0x15d)],'user'),this[_0x3c6d7b(0x16c)](_0x5c1542[_0x3c6d7b(0x169)],_0x3c6d7b(0x15a));}this[_0x3c6d7b(0x18d)]=_0xcd8f2['session_id'],localStorage[_0x3c6d7b(0x18b)]('chatbotSessionId',this[_0x3c6d7b(0x18d)]);}catch(_0x55cfce){console['error'](_0x3c6d7b(0x18c),_0x55cfce);}}async[_0x5593c7(0x199)](_0x14e32e){const _0x30301a=_0x5593c7,_0x121c6e=document[_0x30301a(0x162)](_0x30301a(0x17e)),_0x5b6d41=_0x121c6e[_0x30301a(0x198)](_0x30301a(0x164)),_0x33e922=_0x121c6e[_0x30301a(0x198)](_0x30301a(0x16d)),_0x337f40='https://dev-aichain-chatbot-users-qd5u6w2c6q-uc.a.run.app',_0x28c476='https://aichain-chat-api-v2-qd5u6w2c6q-uc.a.run.app/conversation_stream',_0x1e9cc6=_0x30301a(0x1bd),_0x78d7e5={'token':_0x1e9cc6},_0x49ea0f=localStorage[_0x30301a(0x18e)](_0x30301a(0x18d)),_0x5a86cc={'question':_0x14e32e,'metadata':{'userId':_0x33e922,'sessionId':_0x49ea0f,'chatbotId':_0x5b6d41,'channelType':_0x30301a(0x192)}};try{const _0x2c0278=await fetch(_0x28c476,{'method':'POST','headers':{'Content-Type':'application/json',..._0x78d7e5},'body':JSON[_0x30301a(0x189)](_0x5a86cc)});if(!_0x2c0278['ok'])throw new Error(_0x30301a(0x1a4));const _0x435d73=_0x2c0278[_0x30301a(0x188)][_0x30301a(0x19c)](),_0x2460e0=new TextDecoder(_0x30301a(0x19a));let _0x306044='',_0x2a64fa=[],_0x1b8767='',_0x441492='';while(!![]){const {done:_0x157d31,value:_0x352ed4}=await _0x435d73['read']();if(_0x157d31)break;_0x306044+=new TextDecoder('utf-8')['decode'](_0x352ed4);if(_0x306044[_0x30301a(0x197)](_0x30301a(0x1a9))){const _0xd3596=_0x306044[_0x30301a(0x17b)](0x6);if(_0xd3596[_0x30301a(0x178)](_0x30301a(0x1ba))){const _0x197f8d=_0xd3596[_0x30301a(0x1ac)]('\x22content\x22:\x20\x22')+0xc,_0x2dc824=_0xd3596[_0x30301a(0x1ac)]('\x22,',_0x197f8d);if(_0x197f8d!==-0x1&&_0x2dc824!==-0x1){const _0x2c2355=_0xd3596[_0x30301a(0x17b)](_0x197f8d,_0x2dc824);console[_0x30301a(0x161)]('Chatbot\x20Message:',_0x2c2355),_0x441492+=_0x2c2355,this[_0x30301a(0x19e)](_0x2c2355,'bot');}}_0x306044=_0x306044['substring'](_0xd3596[_0x30301a(0x159)]+0x7);}}return this[_0x30301a(0x19f)](_0x14e32e,_0x441492),console[_0x30301a(0x161)]*(_0x30301a(0x179),_0x441492),_0x1b8767;}catch(_0x12bd24){throw _0x12bd24;}}async[_0x5593c7(0x19f)](_0xbc2c5d,_0x217927){const _0x47887c=_0x5593c7,_0x214537=unescapeStr(_0x217927),_0x5a05a0=_0x47887c(0x17a),_0x34ba53=document[_0x47887c(0x162)](_0x47887c(0x17e)),_0x3f2134=_0x34ba53[_0x47887c(0x198)](_0x47887c(0x164)),_0x1219e8=_0x47887c(0x192),_0x258b01=_0x34ba53[_0x47887c(0x198)](_0x47887c(0x16d)),_0x897c8c=localStorage[_0x47887c(0x18e)](_0x47887c(0x18d)),_0x3791f8=_0x47887c(0x1bd),_0x17b959={'token':_0x3791f8},_0x22a0a7=null,_0x10360a={'question':_0xbc2c5d,'answer':_0x214537,'metadata':{'chatbotId':_0x3f2134,'channelType':_0x1219e8,'userId':_0x258b01,'sessionId':_0x897c8c}};try{const _0x1e16ed=await fetch(_0x5a05a0,{'method':'POST','headers':{'Content-Type':_0x47887c(0x1ae),..._0x17b959},'body':JSON['stringify'](_0x10360a)});if(!_0x1e16ed['ok'])throw new Error(_0x47887c(0x1a7));const _0x35434d=await _0x1e16ed['json']();}catch(_0x3e6f61){console['error']('Error\x20:',_0x3e6f61);}}[_0x5593c7(0x19e)](_0x78cd9,_0xdbb2){const _0x498cc0=_0x5593c7,_0x39f549=document[_0x498cc0(0x1a5)](_0x498cc0(0x163)),_0x115d33=document[_0x498cc0(0x1a5)](_0x498cc0(0x187)),_0x3a0649=_0x39f549[_0x498cc0(0x1a5)](_0x498cc0(0x190));if(_0x3a0649&&_0x3a0649[_0x498cc0(0x1a6)][_0x498cc0(0x176)](_0x498cc0(0x155)+_0xdbb2)){const _0x5b8db0=_0x3a0649['querySelector'](_0x498cc0(0x15b));_0x5b8db0[_0x498cc0(0x182)]+=unescapeStr(_0x78cd9);}else{const _0x5d3bcf=document[_0x498cc0(0x1b7)](_0x498cc0(0x1b0));_0x5d3bcf['classList'][_0x498cc0(0x170)]('chat-message',_0x498cc0(0x155)+_0xdbb2),_0x5d3bcf['innerHTML']=_0x498cc0(0x1b6)+unescapeStr(_0x78cd9)+_0x498cc0(0x181),_0x39f549['appendChild'](_0x5d3bcf),_0x39f549[_0x498cc0(0x16f)]=_0x39f549[_0x498cc0(0x186)];}_0x115d33['scrollTop']=_0x115d33[_0x498cc0(0x186)],_0x39f549[_0x498cc0(0x16f)]=_0x39f549['scrollHeight'];}[_0x5593c7(0x16c)](_0x2c9a99,_0x33bd00){const _0x49f082=_0x5593c7,_0x4e838c=document['querySelector'](_0x49f082(0x163)),_0x275f2f=document[_0x49f082(0x1a5)]('.chat-container'),_0x92821b=document[_0x49f082(0x1b7)](_0x49f082(0x1b0));_0x92821b[_0x49f082(0x1a6)][_0x49f082(0x170)](_0x49f082(0x195),_0x49f082(0x155)+_0x33bd00),_0x92821b[_0x49f082(0x180)]=_0x49f082(0x1b6)+unescapeStr(_0x2c9a99)+'</div>',_0x4e838c[_0x49f082(0x184)](_0x92821b),_0x4e838c[_0x49f082(0x16f)]=_0x4e838c['scrollHeight'],_0x275f2f[_0x49f082(0x16f)]=_0x275f2f['scrollHeight'],_0x4e838c[_0x49f082(0x16f)]=_0x4e838c[_0x49f082(0x186)];}[_0x5593c7(0x173)](){const _0x39941a=_0x5593c7;this[_0x39941a(0x156)][_0x39941a(0x180)]=_0x39941a(0x1a2)+chatbotWindowName+_0x39941a(0x160)+iconUrl+_0x39941a(0x1bc)+welcomeMessage+_0x39941a(0x17c)+placeHolder+_0x39941a(0x16e);}[_0x5593c7(0x165)](){const _0x2ae117=_0x5593c7,_0x2b468e=document[_0x2ae117(0x1b7)](_0x2ae117(0x19b)),_0x2765d8=document[_0x2ae117(0x1b7)](_0x2ae117(0x19b));_0x2b468e[_0x2ae117(0x180)]=styles[_0x2ae117(0x17d)](/^\s+|\n/gm,''),_0x2765d8[_0x2ae117(0x180)]=aditionalStyles['replace'](/^\s+|\n/gm,''),document['head'][_0x2ae117(0x184)](_0x2b468e),document[_0x2ae117(0x188)][_0x2ae117(0x184)](_0x2765d8);}[_0x5593c7(0x196)](){const _0x923808=_0x5593c7;this['open']=!this[_0x923808(0x1b4)],this['open']?(this[_0x923808(0x1b9)][_0x923808(0x1a6)]['add'](_0x923808(0x1ad)),this[_0x923808(0x1af)][_0x923808(0x1a6)][_0x923808(0x19d)](_0x923808(0x1ad)),this[_0x923808(0x156)][_0x923808(0x1a6)][_0x923808(0x19d)](_0x923808(0x1ad)),this[_0x923808(0x166)]()):(this[_0x923808(0x173)](),this[_0x923808(0x1b9)][_0x923808(0x1a6)]['remove'](_0x923808(0x1ad)),this[_0x923808(0x1af)]['classList'][_0x923808(0x170)](_0x923808(0x1ad)),this['widgetContainer'][_0x923808(0x1a6)][_0x923808(0x170)](_0x923808(0x1ad)));}}function initializeWidget(){return new MessageWidget();}initializeWidget();function _0x1831(){const _0x3e7ff8=['utf-8','style','getReader','remove','displayMessage','addMessageSession','fromCharCode','POST','\x0a\x20\x20\x20\x20<header\x20class=\x22widget__header\x22>\x0a\x20\x20\x20\x20\x20\x20<h2>','sort','Network\x20response\x20was\x20not\x20ok','querySelector','classList','Failed\x20to\x20create\x20chatbot\x20session','.button-45','data:\x20','messages','push','indexOf','widget__hidden','application/json','closeIcon','div','addEventListener','user','span','open','reaction','<div\x20class=\x22message-content\x22>','createElement','trim','widgetIcon','content','position','></img>\x0a\x20\x20\x20\x20</header>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22chat-container\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-box\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22chat-message\x20message-bot\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','chatpgt-token-xkaos2z','message-','widgetContainer','button__container','119258KwNbhg','length','bot','.message-content','Error\x20fetching\x20chatbot\x20response:','question','6539904nztaYm','value','</h2>\x0a\x20\x20\x20\x20\x20\x20<img\x20class=\x27icon-style\x27\x20src=','log','getElementById','.chat-box','chatbotId','injectStyles','createChatbotSession','30px','1382568IdQCyc','answer','2430256awYcxk','widget__icon','displayPreviousMessages','userId','</label>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22button-45\x22\x20role=\x22button\x22\x20type=\x22submit\x22>Enviar</button>\x0a\x20\x20\x20\x20</form>\x0a\x20\x20\x20\x20<footer\x20class=\x22poweredByContainer\x22>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22footer__text\x22>Powered\x20by\x20Aichain</p>\x0a\x20\x20\x20\x20</footer>\x0a\x20\x20\x20\x20','scrollTop','add','click','error','createWidgetContent','6iNmxKS','button','contains','bottom-right','includes','Final\x20Message:','https://aichain-chat-api-v2-qd5u6w2c6q-uc.a.run.app/add_message','substring','\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<form\x20class=\x22input-container\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22inputGroup\x22>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20required=\x22\x22\x20autocomplete=\x22off\x22\x20id=\x22messageInput\x22>\x0a\x20\x20\x20\x20\x20\x20<label\x20for=\x22name\x22>','replace','chatbotParameters','36184eCDRDz','innerHTML','</div>','textContent','545112rwSuPu','appendChild','2488605bysstc','scrollHeight','.chat-container','body','stringify','json','setItem','Error\x20creating\x20chatbot\x20session:','chatbotSessionId','getItem','getPosition','.chat-message:last-child','initialize','WEB','forEach','7XgZDfF','chat-message','toggleOpen','startsWith','getAttribute','sendChatbotRequest'];_0x1831=function(){return _0x3e7ff8;};return _0x1831();}