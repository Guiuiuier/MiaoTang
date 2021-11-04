// 本脚本仅仅用于交流和学习 切勿用于非法用途，否则后果自负。



//长等待时间常量，用于应用启动、广告等较长时间等待，如果网络不好或手机卡请增加此数值，默认8秒
var LONG_TIME = 8000;

//短等待时间常量，用于例如返回等每步操作后的等待，如果手机卡请增加此数值
var SHORT_TIME = 3000;

//浏览15秒任务默认等待时间，默认20s，如果觉得等的时间太长可以减小此常量，单位为毫秒
var WAITING_TIME = 30000;
//var WAITING_TIME = 18000;

/*--------根据个人情况修改以上内容----------*/

auto.waitFor();
var height = device.height;
var width = device.width;
setScreenMetrics(width, height);

//停掉除了本脚本以外的正在运行的脚本
killOthersAlive();

//启用悬浮窗，用于提示，为没有音量下键的手机提供了关闭悬浮窗可以直接停止脚本的方式
var w = floaty.window( <frame gravity="left">
        <text id="text" textColor="black" bg='#ffffff'>按下[音量-]键或者长按[悬浮窗内文字]可立马把我关了</text>
    </frame>);
   

//设置悬浮窗变量
floatW();

//启用按键监听，按下音量下键脚本结束
keyDetector();

//保持屏幕常亮，最多三十分钟
device.keepScreenDim(30 * 60 * 1000);
//开始刷喵糖
var top=confirm("(2200*1080及以上的手机分辨率建议用 以下的有bug 完美适配2340*1080 手机2018年(不包含)以下的也别用了太卡跑不动)\n 宝！不得用于非法用途，造成的后果由自己承担，本脚本仅供学习和交流，体验后请24小时内删除。当你使用这个软件的时候我默认你不用于非法用途并已经承担好相应的责任，如果你不同意请点击取消，脚本不会自动再运行!");
if(top==true){
	Maotang1();}else{
    alert("我已经没在运行了 请你关闭我谢谢!")}
// Maotang();
//启用按键监听，按下音量下键脚本结束
function keyDetector() {
    threads.start(function() { //在子进程中运行监听事件
        events.observeKey();
        events.on("key", function(code, event) {
            var keyCodeStr = event.keyCodeToString(code);
            console.log(code);
            console.log(keyCodeStr);
            if (keyCodeStr == "KEYCODE_VOLUME_DOWN") {
                toast("检测到音量下键，程序已结束。");
                //取消屏幕常亮
                device.cancelKeepingAwake();
                exit();
            }
        });
    });
}


function Maotang1(){
	launchApp("淘宝");
	ui.run(function() {
	     w.text.setText("自己动动小手打开淘宝喵糖活动[做任务赚喵糖]界面");
	 });
	t = text("赚糖领红包").findOne(SHORT_TIME);
	if (t != null) {
	    t.click();
	    sleep(SHORT_TIME);
    t=null;
	}
	text("做任务赢奖励").waitFor();
	sleep(1000);
	ui.run(function() {
	    w.text.setText("接下来双手不要动了  按下[音量-]键或长按[悬浮窗内文字]我就消失了");
	});
	toast("我要给兄弟姐妹们开始搞糖了");
var con=confirm("打开淘宝和支付宝就能领取一个喵糖的任务如果做过了请点击取消 否则确认");
if(con==true){
	sleep(3000);
	click(device.width/2,device.height/1.05);//弹出转红包
	sleep(6000);
	click(device.width/1.2,device.height/1.4);//最下面点击
	sleep(6000);
	click(device.width/2,device.height/1.05);//弹出
	// sleep(5000);
	// Maotang2();
	sleep(6000);
	click(device.width/1.2,device.height/1.4);//最下面点击
	sleep(3000);}
//sleep(2000);
Maotang2();
	
}
function Maotang2(){
	//launchApp("淘宝");
	t = text("赚糖领红包").findOne(SHORT_TIME);
	if (t != null) {
	    t.click();
	    sleep(SHORT_TIME);
    t=null;
	}	
	text("做任务赢奖励").waitFor();
	toast("我要给兄弟姐妹们开始搞糖了1");
	if(text("前往蚂蚁森林赚").exists()){
t = text("前往蚂蚁森林赚").findOne().parent().parent().parent().child(1);
	if (t.text() == "去完成") {
	   toast("冲啊宝 我们疯狂浇水");
			t.click();
		   sleep(6000);
		   click(device.width/2,device.height/1.05)
		  sleep(4000);
		  click(753,1564);
		  sleep(4000)
		  click(device.width/2,device.height/1.05)
		  sleep(4000);
		  back();
		  sleep(4000);
		  back();
		  sleep(4000);
		  back();
		  sleep(4000);		
	}
}

//var JI=confirm("小鸡任务需要自己做，如果你需要我帮你打开小鸡页面请点击确认 否则取消");
if(text("喂小鸡一次立得").exists()) {
	t = text("喂小鸡一次立得").findOne().parent().parent().parent().child(1);
if(t.text() == "已完成") {
    var JI=confirm("小鸡任务要自己做，做完之后返回喵糖我就可以继续了，或者说你不想做小鸡，那我会继续运行下面的");
    if(JI==true){
				  toast("靠你了宝");
				  t.click();
				  sleep(4000);
				  ui.run(function() {
					w.text.setText("自己做完任务就可以返回喵糖继续了，");
				});
				
//sleep(20000);
}
			}
	Maotang();	}



  		

}
function Maotang(){
	//launchApp("淘宝");
	//sleep(4000);
//click(device.width/3.5,device.height/1.9);
//sleep(6000);
//	click(device.width/1.2,device.height/1.4);
	ui.run(function() {
	     w.text.setText("接下来做完小鸡就回到喵糖任务界面，现在开始你就可以解放你的双手啦");
	 });
	t = text("赚糖领红包").findOne(SHORT_TIME);
	if (t != null) {
	    t.click();
	    sleep(SHORT_TIME);
	}
//className("android.widget.Button").text("赚糖领红包").findOne().click();
	text("做任务赢奖励").waitFor();

	sleep(1000);
	ui.run(function() {
	    w.text.setText("小手按下[音量-]键或长按[悬浮窗内文字]我就消失了");
	});
	toast("我要给兄弟姐妹们开始搞糖了");

	// sleep(8000);
	// click(device.width/2,device.height/1.05);
	// sleep(6000);
	// click(device.width/1.2,device.height/1.4);
	// sleep(6000);
	// click(device.width/1.2,device.height/1.4);
	// sleep(6000);
	// click(device.width/2,device.height/1.05);
	// sleep(3000);

	// Maotang();
while(text("完成签到").exists()) {
		t = text("完成签到").findOne().parent().parent().parent().child(1);
		if (t.text() == "去完成") {
			toast("签到中");
			t.click();
		}
	}


  
         


while (text("全场每满200减30").exists()) {
	      t = text("全场每满200减30").findOne().parent().parent().parent().child(1);
	        if (t.text() == "去完成") {
	            toast("我去逛逛");
	            if (t.parent().child(0).child(0).text() == "浏览天天领现金(0/1)") {
	                t.click();
	                sleep(SHORT_TIME);
	                if (text("打开链接").exists()) {
	                    text("打开链接").findOne().click();
	                    sleep(SHORT_TIME);
	                }
	            } else {
	                t.click();
	                sleep(SHORT_TIME);
	            }
	            sleep(WAITING_TIME);
	            back();
	            sleep(SHORT_TIME + 1000);
	            if (!text("做任务赢奖励").exists()) {
	                back();
	                sleep(SHORT_TIME);
	            }
	        } else {
	            break;
	        }
	               }
          
	  
     
	    
	  while (text("浏览精选商品得奖励").exists()) {
	      t = text("浏览精选商品得奖励").findOne().parent().parent().parent().child(1);
	        if (t.text() == "去完成") {
	            toast("我去逛逛");
			   t.click();
			   sleep(30000);
	        } else {
	            break;
	        }
	               }
          
	  
				   while(text("完成小互动得奖励").exists()) {
					t = text("完成小互动得奖励").findOne().parent().parent().parent().child(1);
					  if (t.text() == "去完成") {
			  var hudong=confirm("互动需要自己完成，需要我打开请点击确认并自己打开小互动 完成后返回任务界面 我会继续 否则取消 我会继续运行下面的");
					  if(hudong==true){
						   ui.run(function() {
							  w.text.setText("玩完返回任务界面我会继续运行!");
						  });
						 t = text("赚糖领红包").findOne(SHORT_TIME);
			  if (t != null) {
				  t.click();
				  sleep(SHORT_TIME);
			  }
		  //className("android.widget.Button").text("赚糖领红包").findOne().click();
			  text("做任务赢奖励").waitFor();
		  
			  sleep(1000);
		  
		  }
		  
		  }
		}
			
	 	    
	    while (text("去浏览").exists()) {
	        toast("我去逛逛");
	        text("去浏览").findOne().click();
	        sleep(SHORT_TIME);
	        sleep(WAITING_TIME);
	        back();
	        sleep(SHORT_TIME + 1000);
	        if (!text("做任务赢奖励").exists()) {
	            back();
	            sleep(SHORT_TIME);
	        }
	    }
	    while (text("浏览15s立得").exists()) {
	        t = text("浏览15s立得").findOne().parent().parent().parent().child(1);
	        if (t.text() == "去完成") {
	            toast("我去逛逛");
	            t.click();
	            sleep(SHORT_TIME);
	            sleep(WAITING_TIME);
	            back();
	            sleep(SHORT_TIME + 1000);
	            if (!text("做任务赢奖励").exists()) {
	                back();
	                sleep(SHORT_TIME);
	            }
	        } else {
	            break;
	        }
	    }
	    while (text("浏览15秒立得").exists()) {
	        t = text("浏览15秒立得").findOne().parent().parent().parent().child(1);
	        if (t.text() == "去完成") {
	            toast("存在浏览任务");
	            if (t.parent().child(0).child(0).text() == "浏览天天领现金(0/1)") {
	                t.click();
	                sleep(SHORT_TIME);
	                if (text("打开链接").exists()) {
	                    text("打开链接").findOne().click();
	                    sleep(SHORT_TIME);
	                }
	            } else {
	                t.click();
	                sleep(SHORT_TIME);
	            }
	            sleep(WAITING_TIME);
	            back();
	            sleep(SHORT_TIME + 1000);
	            if (!text("做任务赢奖励").exists()) {
	                back();
	                sleep(SHORT_TIME);
	            }
	        } else {
	            break;
			}
			while(text("完成小互动得奖励").exists()) {
				t = text("完成小互动得奖励").findOne().parent().parent().parent().child(1);
				  if (t.text() == "去完成") {
		  var hudong=confirm("互动需要自己完成，需要我打开请点击确认并自己打开小互动 完成后返回任务界面 我会继续 否则取消 我会继续运行下面的");
				  if(hudong==true){
					   ui.run(function() {
						  w.text.setText("玩完返回任务界面我会继续运行!");
					  });
					 t = text("赚糖领红包").findOne(SHORT_TIME);
		  if (t != null) {
			  t.click();
			  sleep(SHORT_TIME);
		  }
	  //className("android.widget.Button").text("赚糖领红包").findOne().click();
		  text("做任务赢奖励").waitFor();
	  
		  sleep(1000);
	  
	  }
	  
	  }}
		}
	    while (text("浏览15秒立得").exists()) {
	        t = text("浏览15秒立得").findOne().parent().parent().parent().child(1);
	        if (t.text() == "去完成") {
	            toast("存在浏览任务");
	            if (t.parent().child(0).child(0).text() == "浏览天天领现金(0/1)") {
	                t.click();
	                sleep(SHORT_TIME);
	                if (text("打开链接").exists()) {
	                    text("打开链接").findOne().click();
	                    sleep(SHORT_TIME);
	                }
	            } else {
	                t.click();
	                sleep(SHORT_TIME);
	            }
	            sleep(WAITING_TIME);
	            back();
	            sleep(SHORT_TIME + 1000);
	            if (!text("做任务赢奖励").exists()) {
	                back();
	                sleep(SHORT_TIME);
	            }
	        } else {
	            break;
			}
			
		}	    while (text("浏览15s立得").exists()) {
	        t = text("浏览15s立得").findOne().parent().parent().parent().child(1);
	        if (t.text() == "去完成") {
	            toast("我去逛逛");
	            t.click();
	            sleep(SHORT_TIME);
	            sleep(WAITING_TIME);
	            back();
	            sleep(SHORT_TIME + 1000);
	            if (!text("做任务赢奖励").exists()) {
	                back();
	                sleep(SHORT_TIME);
	            }
	        } else {
	            break;
	        }
	    }

		toast("臭宝接下来的任务就靠你了");
		while(text("喂小鸡一次立得").exists()) {
			t = text("喂小鸡一次立得").findOne().parent().parent().parent().child(1);
			  if (t.text() == "去完成") {
				  toast("靠你了宝");
				  t.click();
				  sleep(4000);
				  ui.run(function() {
					w.text.setText("臭宝,这是我要求你自己做的最后一个喂小鸡任务，不要让我失望！弄完长按关闭");
				});
				//Maotang();
				}
			}
//alert("由于阿里巴巴的安全机制，没有办法做小互动。请你在点击确认后结束这个脚本并打开另一个脚本继续完成任务。");
	   toast("臭宝任务做完啦。");
	    text("再见啦").findOne().click();
//alert("由于阿里巴巴的安全机制，没有办法做小互动。请你在点击确认后结束这个脚本并打开另一个脚本继续完成任务。");
	    sleep(SHORT_TIME);
	   // while (textContains("点击赢红包").exists()) {
	    //    toast("自动投骰子");
	   //     textContains("点击赢红包").findOne().click();
	   //     sleep(5000);
	  //  }
	    home();
	    //刷支付宝喵糖
	    toast("脚本结束^_^");
	    //取消屏幕常亮
	    device.cancelKeepingAwake();
	    sleep(SHORT_TIME);
	    //exit();
}





function floatW() {
    //悬浮窗不会自动关闭
    setInterval(() => {}, 1000);
    w.setPosition(0, height - 800);
    w.setSize(400, 300);
    //悬浮窗可调整大小
    w.setAdjustEnabled(true);
    //退出悬浮窗即结束脚本
    //w.exitOnClose();
    //长按悬浮窗内文字结束脚本
    w.text.longClick(() => {
        //取消屏幕常亮
        device.cancelKeepingAwake();
        toast("检测到长按悬浮窗文字，脚本终止");
        //try...catch把exit()函数的异常捕捉，则脚本不会立即停止，仍会运行几行后再停止
        try {
            exit();
        } catch (err) {}
        //直接exit()的话坚持不到return的时候
        return true;
    });
}

function killOthersAlive() {
    //获取全部正在运行的脚本引擎
    var allEngines = engines.all();
    //log(allEngines);
    for (var i = 0; i < allEngines.length; i++) {
        //停掉除了本脚本以外的正在运行的脚本
        if (allEngines[i] != engines.myEngine()) {
            allEngines[i].forceStop();
        }
    }
}

