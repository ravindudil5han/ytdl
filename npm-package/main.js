const _0x474d10=_0x53bb;(function(_0x445741,_0x2d93bf){const _0x59eeda=_0x53bb,_0x5f22c1=_0x445741();while(!![]){try{const _0x133707=parseInt(_0x59eeda(0x8b))/0x1+-parseInt(_0x59eeda(0x88))/0x2*(-parseInt(_0x59eeda(0x84))/0x3)+parseInt(_0x59eeda(0x92))/0x4*(-parseInt(_0x59eeda(0x7c))/0x5)+parseInt(_0x59eeda(0x8f))/0x6+parseInt(_0x59eeda(0x7d))/0x7*(parseInt(_0x59eeda(0x81))/0x8)+parseInt(_0x59eeda(0x9c))/0x9*(parseInt(_0x59eeda(0x7f))/0xa)+parseInt(_0x59eeda(0x7e))/0xb*(-parseInt(_0x59eeda(0x9a))/0xc);if(_0x133707===_0x2d93bf)break;else _0x5f22c1['push'](_0x5f22c1['shift']());}catch(_0x4eec69){_0x5f22c1['push'](_0x5f22c1['shift']());}}}(_0x4ade,0x1f7eb));const fs=require('fs'),{spawn}=require(_0x474d10(0x9d)),{fork}=require(_0x474d10(0x9d)),{join}=require(_0x474d10(0x98));let isRunning=![];function startProcess(_0x5b8817){const _0x38068c=_0x474d10;if(isRunning)return;isRunning=!![];const _0x2f7105=[join(__dirname,_0x5b8817),...process['argv'][_0x38068c(0x8c)](0x2)],_0x11cb9a=fork(_0x2f7105[0x0],_0x2f7105[_0x38068c(0x8c)](0x1));_0x11cb9a['on'](_0x38068c(0x96),_0x5264d5=>{const _0x8b1aa8=_0x38068c;console['log'](_0x8b1aa8(0x89),_0x5264d5);switch(_0x5264d5){case'reset':_0x11cb9a[_0x8b1aa8(0x90)](),isRunning=![],startProcess(_0x5b8817);break;case'uptime':_0x11cb9a[_0x8b1aa8(0x8a)](process[_0x8b1aa8(0x94)]());break;}});}const filePath='./lib/other/output.json';function _0x4ade(){const _0x51fa28=['5GJCNBS','28ySBJxx','99amcxbN','10pliOkQ','Error\x20parsing\x20JSON\x20from\x20Python\x20script\x20output','219272oVArZy','toString','Error\x20reading\x20file:\x20','9NXvMko','data','close','Python\x20script\x20process\x20exited\x20with\x20code\x20','105606zqODZl','[RECEIVED]','send','130498VKrpWr','slice','exports','error','57390NOtDzK','kill','parse','316348KRfDyb','python','uptime','utf8','message','./lib/jstest.py','path','stderr','373452jsxPtY','log','720639AYMTEZ','child_process','Error\x20parsing\x20JSON:\x20'];_0x4ade=function(){return _0x51fa28;};return _0x4ade();}function ytd(_0x199af7){return new Promise((_0x3bf61d,_0x24df0d)=>{const _0xc34c00=_0x53bb;fs['readFile'](filePath,_0xc34c00(0x95),(_0x26960f,_0x594f6e)=>{const _0x2b99d8=_0xc34c00;if(_0x26960f){console['error'](_0x2b99d8(0x83)+_0x26960f['message']),_0x24df0d(_0x26960f);return;}try{const _0x7c2a99=JSON[_0x2b99d8(0x91)](_0x594f6e);if(_0x7c2a99&&_0x7c2a99['start']){const _0x1d7a6b=spawn(_0x2b99d8(0x93),[_0x2b99d8(0x97),_0x199af7]);let _0x453866='';_0x1d7a6b['stdout']['on']('data',_0x5ca5e2=>{const _0x3d532c=_0x2b99d8;_0x453866+=_0x5ca5e2[_0x3d532c(0x82)]();}),_0x1d7a6b[_0x2b99d8(0x99)]['on'](_0x2b99d8(0x85),_0x3456bf=>{const _0x32d722=_0x2b99d8;console[_0x32d722(0x8e)]('Error\x20in\x20Python\x20script:\x20'+_0x3456bf),_0x24df0d(new Error('Error\x20in\x20Python\x20script:\x20'+_0x3456bf));}),_0x1d7a6b['on'](_0x2b99d8(0x86),_0x33b734=>{const _0x13314a=_0x2b99d8;console[_0x13314a(0x9b)](_0x13314a(0x87)+_0x33b734);try{const _0x158154=JSON[_0x13314a(0x91)](_0x453866);_0x3bf61d(_0x158154);}catch(_0x2e9fb6){const _0x4db6e5=_0x13314a(0x80);console[_0x13314a(0x8e)](_0x4db6e5,_0x2e9fb6),_0x24df0d(new Error(_0x4db6e5+':\x20'+_0x2e9fb6[_0x13314a(0x96)]));}});}else startProcess('./lib/other/set.js');}catch(_0x4ca1c2){console[_0x2b99d8(0x8e)](_0x2b99d8(0x9e)+_0x4ca1c2[_0x2b99d8(0x96)]),_0x24df0d(_0x4ca1c2);}});});}function _0x53bb(_0x3aefaa,_0x55d534){const _0x4adec6=_0x4ade();return _0x53bb=function(_0x53bb3e,_0x10bd5f){_0x53bb3e=_0x53bb3e-0x7c;let _0x2cf892=_0x4adec6[_0x53bb3e];return _0x2cf892;},_0x53bb(_0x3aefaa,_0x55d534);}module[_0x474d10(0x8d)]=ytd;