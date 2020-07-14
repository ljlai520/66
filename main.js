setroot("com.cc.cc"); //设置root
auto();
if (files.createWithDirs("/sdcard/ljl/1.txt")) {
    log("版本信息创建成功")
} else {
    log("版本信息已存在")

}

log("77777777777777777777777777777")
var 当前版本 = files.read("/sdcard/ljl/1.txt", encoding = "UTF-8");
setbmd("/storage/emulated/0/sdcard/ljl/")
var 下载链接
var 后台版本
while (1) {
    let get_api;
    let lianjie = "http://39.97.97.160/no/channel/getChannelLink?userCode=10173";
    // log("访问===>>" + lianjie);
    get_api = (http.get(lianjie));
    if (get_api != null && get_api.statusCode == 200) {
        let get_api_json = get_api.body.json();
        // log("返回值====>" + get_api_json.addDatas.resultlist)
        if (get_api_json.message == "操作成功") {
            //log(get_api_json)
            let aa = get_api_json.addDatas.resultlist.toString();
            let bb = get_api_json.addDatas.result.toString();
            后台版本 = bb
            下载链接 = aa
            log("后台版本==>>" + 后台版本)
            log("下载链接==>>" + 下载链接)
            if (当前版本 == 后台版本) {
                toast("没有更新")
                break;
            } else {

                vpnop(0); //断开vpn
                WIFI() //链接WiFi


                if (下载解压脚本()) {
                    exit();
                    break;
                }



                /// 下载更新()



            }
        } else {
            log("jiaoben检测失败");
        };
    } else {
        log("jiaoben检测失败检测访问超时或者失败");
        sleep(3000);
    };
    sleep(3000);
}

//console.show();
var 控制 = 0;

(function () {
    let request = http.request;
    // 覆盖http关键函数request，其他http返回最终会调用这个函数
    http.request = function () {
        try {
            // 捕捉所有异常
            return request.apply(http, arguments);
        } catch (e) {
            // 出现异常返回null
            console.error(e);
            return null;
        }
    }
})();


events.on("exit", function () {
    vpnop(0);
    app.startActivity("console");
    console.hide();
    log("脚本停止了");
});
//**************************************************************************************** 
//var weigou = "com.kexunjie.gj.forsystem"
var weigou = "com.wjmt.app"
var 渠道号 = "999060602"
var 改机包名 = "com.ss.android.ugc.aweme"
var aid, wid
//**************************************************************************************** 


截图权限();
//设置应用权限("com.cc.cc"); //设置应用权限

WIFI() //链接WiFi
xz(); //下载应用
setvpn(); //设置vpn
vpnop(0); //断开vpn

//**************************************************************************************** 

var 获取 = 获取库号()
var 库号 = 获取[0]
var vpn选择 = 获取[1]
var 接码选择 = 获取[2]
log("库号==>" + 库号 + "vpn==>" + vpn选择 + "接码选择" + 接码选择)
if (接码选择 == "1") {
    //飞猪
    账号 = "kexunjie"
    密码 = "8fc07d31-5999-4fc7-adf8-2ee0495859fa"
    项目id = "877"
} else if (接码选择 == "2") {
    //蓝狐
    账号 = "api-gV4wWNTU"
    密码 = "kexunjie"
    项目id = "266"
}
//**************************************************************************************** 


隐藏应用(改机包名); //隐藏应用
setsdk("2", "1") //参数1是是sdk,参数2是分辨率,1为开启,2为关
//**************************************************************************************** 

var 手机号, 验证码, token;
var 项目id;
var 昵称 = null


//**************************************************************************************** 

// var threadId = threads.start(function () {
//     循环();
// })


while (1) {

    try {
        新过程();
    } catch (e) {
        // 出现异常返回null
        console.error(e);

    }
}






function lz() {
    let now = new Date();
    let 当前时间 = now.getDate();
    log("当前时间=================>>>>>>>>>>>>>>" + 当前时间);
    if (当前时间 !== 1) {
        if (当前时间 > 开始时间) {
            log("第二天了");
            开始时间 = 当前时间
            留过程();
        }
    } else {
        log("月初");
    }
    留过程();
    //1,是留存完成,2,是新增完成
    if (控制 == 1) {
        log("留存已经完成");
        新过程();
    } else if (控制 == 2) {
        log("新增已经完成");
        留过程();
    }
    log("控制====>" & 控制);
    if (控制 == 2 && 控制 == 1) {
        log("新增留存任务都完成了");
        for (let i = 100 - 1; i >= 0; i--) {
            log("新增留存任务都完成了" + i + "s下一次改机");
            sleep(1000);
        };
    };
    log("控制====>" & 控制);
    //3=新增,4=留存
    if (控制 == 3) {
        log("控制====>" & 控制);
        if (控制 == 2) {
            return;
        };
        循环次数 = 0;
        log("开始新增任务====>" & 控制);
        for (let i = 5 - 1; i >= 0; i--) {
            新过程();
            sleep(1000);
        };
    } else if (控制 == 4) {

        log("控制====>" & 控制);
        if (控制 == 1) {
            return;
        }
        循环次数 = 0;
        log("开始留存任务====>" & 控制);

        for (let i = 5 - 1; i >= 0; i--) {
            新过程();
            sleep(1000);
        }

    };
};

function 新过程() {

    关闭应用(改机包名)

    昵称 = null
    获取 = 获取库号()
    库号 = 获取[0]
    vpn选择 = 获取[1]
    接码选择 = 获取[2]
    log("库号==>" + 库号 + "vpn==>" + vpn选择 + "接码选择" + 接码选择)

    if (接码选择 == "1") {
        //飞猪
        账号 = "kexunjie"
        密码 = "8fc07d31-5999-4fc7-adf8-2ee0495859fa"
        项目id = "877"
    } else if (接码选择 == "2") {
        //蓝狐
        账号 = "api-gV4wWNTU"
        密码 = "kexunjie"
        项目id = "266"
    }
    log("我是新增过程")
    //************************************************* 
    let 修改设备信息 = 改机(改机包名, 渠道号, "false")

    if (修改设备信息 = true) {
        log("改机成功")
    } else {
        log("改机失败" + 修改设备信息)
    }
    log(控制);
    if (控制 == 2) {
        log("留存任务无");
        return;
    }
    //************************************************* 
    vpnop(1); //第一参数0是断开,1是链接.

    while (1) {
        let dw = 定位("", "com.ss.android.ugc.aweme");

        if (dw == false) {
            log("多次定位失败");
            setvpn();
            vpnop(1);
        } else {
            log("定位成功");
            break;
        }
    }
    home();
    sleep(2000)
    //************************************************* 

    if (打开抖音到注册页面() == false) {
        return false;
    }
    获取手机号()
    // 手机号 = "1624589741" + 随机数(0, 9)
    if (手机号 == null) {
        log("获取手机号失败")
        return false;

    }
    let 类型 = 0
    let 输入手机号 = false
    let 号码判断 = false
    let 验证码加载次数 = 0
    let 更换号码次数 = 0
    let 打码失败次数 = 0
    let qq = 0
    while (1) {

        if (packageName("com.ss.android.ugc.aweme").text("获取短信验证码").exists()) {
            if (setText(手机号)) {
                log("手机号输入成功")
                输入手机号 = true
            } else {
                log("手机号输入失败")
            }
            sleep(1000)
        }
        if (packageName("com.ss.android.ugc.aweme").text("登录验证").exists()) {
            log("登录验证")
            back();
        }
        if (输入手机号 = true) {
            let ii = 0
            while (1) {
                sleep(1000)
                toast("等待验证码发送成功" + (60 - ii))
                ii++;
                if (ii >= 60) {
                    log("获取验证码超时重来")
                    加黑(1);
                    return false;
                }
                if (packageName("com.ss.android.ugc.aweme").text("获取短信验证码").exists()) {
                    log("点击获取短信验证码")
                    click(text("获取短信验证码").findOne().bounds().centerX(), text("获取短信验证码").findOne().bounds().centerY());
                    sleep(1000)
                }
                let laid
                if (text("captcha verify").exists()) {
                    log("图形验证码剩余打码次数" + (10 - 打码失败次数))
                    打码失败次数++;
                    if (打码失败次数 > 10) {
                        log("打码失败")
                        加黑(1);
                        return false;
                    }
                    let 图形验证 = 验证码加载()
                    if (图形验证 != false) {

                        log("验证码加载完成")
                        if (取图() == true) {
                            let username = "liu296793079"
                            let password = "Kexunjie123@"
                            let img = images.read("/sdcard/验证码.png")
                            try {
                                let kk = getCode(username, password, img, 图形验证[1])
                                log(kk)
                                if (kk != false) {

                                    var lz结果 = kk.data.res
                                } else {

                                    log("打码报错")
                                }

                                log("打码结果==>>" + lz结果)
                                if (lz结果 != undefined) {


                                    let aa = lz结果.split("|")
                                    if (图形验证[0] == 2) {
                                        let 左上
                                        w = text("captcha verify").findOne()
                                        if (w != null) {
                                            左上 = w.child(0).child(1).child(0).bounds().toString()
                                        }
                                        let 左上角坐标 = 左上.split("(")[1].split(")")[0].split("-")[0].split(",")
                                        let 右下角坐标 = 左上.split("(")[1].split(")")[0].split("-")[1].split(",")
                                        let 左上x = 左上角坐标[0].replace(/^\s+|\s+$/g, "")
                                        let 左上y = 左上角坐标[1].replace(/^\s+|\s+$/g, "")
                                        log(左上x + "======" + 左上y)
                                        for (let i = 0; i < aa.length; i++) {
                                            let bb = aa[i].split(",")
                                            click(Number(bb[0]) + Number(左上x), Number(bb[1]) + Number(左上y))
                                            sleep(随机数(500, 1000))
                                        }
                                        sleep(2000)
                                        if (text("确认").exists()) {
                                            text("确认").click()
                                            sleep(2000)
                                        }
                                    } else if (图形验证[0] == 1) {
                                        let 滑块x
                                        //判断滑块位置
                                        w = text("captcha verify").findOne()
                                        if (w != null) {
                                            滑块x = w.child(0).child(1).child(1).bounds()
                                            log("滑块位置===>>>" + 滑块x)
                                        }
                                        let ZB = []
                                        for (let i = 0; i < aa.length; i++) {
                                            let bb = aa[i].split(",")
                                            for (let m = 0; m < bb.length; m++) {
                                                ZB.push(bb[m]);
                                            }
                                        }
                                        //根据返回值坐标数滑动
                                        if (ZB.length == 2) {
                                            let 开始x = 滑块x.centerX()
                                            let 开始y = 滑块x.centerY()
                                            let x1 = Number(ZB[0])
                                            let 距离 = Math.abs(开始x - x1);
                                            log("距离==>" + 距离)
                                            仿真随机带曲线(开始x, 开始y, 开始x + 距离, 开始y, 随机数(500, 1000))
                                        } else if (ZB.length == 4) {
                                            let x1 = Number(ZB[0])
                                            let x2 = Number(ZB[2])

                                            log(x1, x2)
                                            let 距离 = Math.abs(x2 - x1)
                                            log("距离==>" + 距离)
                                            let 开始x = 滑块x.centerX()
                                            let 开始y = 滑块x.centerY()
                                            仿真随机带曲线(开始x, 开始y, 开始x + 距离, 开始y, 随机数(500, 1000))
                                        } else {
                                            log("返回答案有误" + lz结果)
                                        }



                                    }


                                } else {

                                    log("打码失败" + lz结果)
                                }
                                sleep(3000)

                            } catch (e) {
                                log("打码行为错误=======>>>" + e);

                            }

                        } else {
                            log("取图失败")
                        }


                    } else {
                        验证码加载次数++;
                        if (验证码加载次数 >= 3) {
                            return false;
                        }
                    }
                }
                if (packageName("com.ss.android.ugc.aweme").text("请输入验证码").exists()) {
                    log("验证码发送成功")
                    号码判断 = true
                    break;
                }
                if (packageName("com.ss.android.ugc.aweme").text("该帐号已被封禁").exists()) {
                    log("该帐号已被封禁")
                    号码判断 = false
                    text("取消").findOne().click()
                    sleep(1000)
                    号码判断 = false
                    break;
                }

                if (packageName("com.ss.android.ugc.aweme").textContains("频繁").exists()) {
                    log("手机号频繁")
                    号码判断 = false
                    break;
                }
                if (packageName("com.ss.android.ugc.aweme").textContains("知道").exists()) {
                    packageName("com.ss.android.ugc.aweme").textContains("知道").click()
                    sleep(1000)

                }
                if (packageName("com.ss.android.ugc.aweme").text("登录验证").exists()) {
                    log("登录验证")
                    号码判断 = false
                    sleep(1000)
                    // if (packageName("com.ss.android.ugc.aweme").id("p7").exists()) {
                    //     log("返回")
                    //     packageName("com.ss.android.ugc.aweme").id("p7").click()
                    // }
                    back();
                    break;
                }


            }
            if (号码判断 == false) {

                加黑(1);
                更换号码次数++;
                if (更换号码次数 >= 5) {
                    return false;

                }

                获取手机号();

                // 手机号 = "1624589741" + 随机数(0, 9)

            } else if (号码判断 == true) {
                break;
            }
        }
        sleep(1000)
        toast("等待手机号输入成功" + (60 - qq))
        qq++;
        if (qq >= 60) {
            log("等待手机号输入超时重来")
            加黑(1);
            return false;
        }
    }
    获取验证码()
    if (验证码 == null) {
        return false;
    }
    if (setText(验证码)) {
        log("手机号输入成功")
    } else {
        log("手机号输入失败")
    }
    let 权限 = false
    sleep(1000)
    while (1) {
        // log("权限===>>" + 权限)
        if (权限 == false) {
            w = descContains("我已阅读并同意").findOne()
            if (w != null) {
                let 同意坐标 = w.child(0).child(0)
                if (同意坐标.checked() == true) {
                    log("同意已经勾选")
                    权限 = true
                } else if (同意坐标.checked() == false) {
                    if (同意坐标.click()) {
                        log("点击同意成功")
                        权限 = true
                    }
                }

            }
        }
        if (textContains("错误").exists()) {
            return false;
        }
        if (textContains("频繁").exists()) {
            return false;
        }
        if (权限 && packageName("com.ss.android.ugc.aweme").text("登录").exists()) {
            log("点击登录")
            click(text("登录").findOne().bounds().centerX(), text("登录").findOne().bounds().centerY());
            sleep(1000)
        }

        if (text("允许").exists()) {
            log("点击登录")
            click(text("允许").findOne().bounds().centerX(), text("允许").findOne().bounds().centerY());
            sleep(1000)
        }
        if (text("跳过").exists()) {
            text("跳过").click()
            sleep(3000)
        }
        if (packageName("com.ss.android.ugc.aweme").textContains("以后").exists()) {
            log("以后")
            packageName("com.ss.android.ugc.aweme").textContains("以后").click()
            sleep(1000)
        }
        if (text("我知道了").exists()) {
            text("我知道了").click()
            sleep(1000)
        }

        if (packageName("com.ss.android.ugc.aweme").text("取消").exists()) {
            log("取消")
            packageName("com.ss.android.ugc.aweme").text("取消").click()
            sleep(1000)
        }

        let w = packageName("com.ss.android.ugc.aweme").text("同城").findOne(1)
        let nz = false
        if (w != null) {
            log("注册成功")
            for (let i = 10 - 1; i >= 0; i--) {
                let w = packageName("com.ss.android.ugc.aweme").text("我").findOne(1)
                if (w != null) {
                    log("点击我")
                    click(w.bounds().centerX(), w.bounds().centerY());
                    sleep(1000)
                }
                let ww = textContains("抖音号").findOne(1)
                try {
                    if (ww != null) {
                        sleep(2000)
                        昵称 = ww.parent().parent().parent().child(1).text()
                        log(昵称)
                        nz = true
                        break;
                    }
                } catch (e) {
                    log("错误")

                }
                if (packageName("com.ss.android.ugc.aweme").textContains("头像").exists()) {
                    log("关闭头像")
                    back();
                    sleep(1000)
                }
                if (packageName("com.ss.android.ugc.aweme").textContains("下次").exists()) {
                    log("下次")
                    packageName("com.ss.android.ugc.aweme").textContains("下次").click()
                    sleep(1000)
                }
                if (packageName("com.ss.android.ugc.aweme").text("取消").exists()) {
                    log("取消")
                    packageName("com.ss.android.ugc.aweme").text("取消").click()
                    sleep(1000)
                }
                if (packageName("com.ss.android.ugc.aweme").textContains("以后").exists()) {
                    log("以后")
                    packageName("com.ss.android.ugc.aweme").textContains("以后").click()
                    sleep(1000)
                }
                if (text("跳过").exists()) {
                    text("跳过").click()
                    sleep(3000)
                }
                if (text("我知道了").exists()) {
                    text("我知道了").click()
                    sleep(1000)
                }
                toast("等待提取昵称成功" + i)
                sleep(2000)
            }
            if (nz == false) {
                昵称 = "无"
            }
            break;
        }
        sleep(1000);
    }
    关闭应用(改机包名)
    备份("com.ss.android.ugc.aweme")
    上传到库()
    //上传(手机号)

    function 验证码加载() {

        let 类型, laid
        for (let i = 10 - 1; i >= 0; i--) {
            let w = text("captcha verify").findOne(1)
            let w1
            // log(w)

            if (textContains("拖动").findOne(1)) {
                log("滑动验证")
                类型 = 1
                laid = 1310
            } else if (textContains("点击").findOne(1)) {
                log("点击验证")
                类型 = 2
                laid = 1303
            }

            if (w != null) {
                //log(w)
                try {
                    w1 = w.child(0).child(1)
                    if (类型 == 1 && w1.childCount() == 3) {
                        if (textContains("拖动").findOne(1)) {
                            //  log("滑动验证")
                            类型 = 1
                            laid = 1310
                        } else if (textContains("点击").findOne(1)) {
                            //  log("点击验证")
                            类型 = 2
                            laid = 1303
                        }

                        return [类型, laid];
                    } else if (类型 == 2 && w1.childCount() == 2) {
                        return [类型, laid];
                    }
                } catch (e) {
                    log("出错了,等待验证加载完成")
                }
                sleep(1000)
            }
            sleep(2000)
            toast("等待验证加载完成" + i)
        }
        let w = text("captcha verify").findOne(100)
        let 关闭
        try {
            if (w != null) {
                sleep(2000)
                关闭 = w.child(0).child(0).child(0).child(0).click()
            }
        } catch (e) {
            return false;
        }

        return false;
    }

}

function 上传(信息) {
    vpnop(0)
    try {
        while (true) {
            launch(weigou);
            let lianjie = "http://127.0.0.1:1990/uploadAddInfo?deviceInfoId=" + wid + "&androidId=" + aid + "&account_password=" + 信息
            log("访问===>>" + lianjie);
            let get_api = (http.get(lianjie));
            if (get_api == null) {
                log("操作失败");
            } else if (get_api.statusCode == 200) {
                let get_api_json = get_api.body.json();
                if (get_api_json.message == "上传附加信息成功") {
                    log("上传  message===>" + get_api_json.message);
                    home();
                    return true;
                } else {
                    log("上传失败  message===>" + get_api_json.message);
                };
            } else {
                log("上传 失败未知错误");
            };
            sleep(3000);
        }

    } catch (e) {
        log("上传方法错误=======>>>" + e);
        return false;
    }

}

function 备份(包名) {
    vpnop(0);
    while (true) {
        launch(weigou);
        let lianjie = "http://127.0.0.1:1990/uploadBackup?id=" + wid + "&androidId=" + aid + "&packageName=" + 包名
        log("访问===>>" + lianjie);
        http.__okhttp__.setTimeout(300000);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
            vpnop(0)
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "上传备份信息成功") {
                log("备份  message===>" + get_api_json.message);
                home();
                return true;
            } else {
                log("备份失败  message===>" + get_api_json.message);
            };
        } else {
            log("备份失败未知错误");
        };
        sleep(3000);
    }

}

function 打开抖音到注册页面() {
    launch("com.ss.android.ugc.aweme");
    let mm = 0
    while (1) {
        if (packageName("com.ss.android.ugc.aweme").text("好的").exists()) {
            log("好的")
            text("好的").click();
            sleep(1000)
        }
        if (packageName("com.ss.android.ugc.aweme").textContains("上滑").exists()) {
            log("上滑")
            let gun = scrollable(true).desc("视频").findOne();
            if (gun != null) {
                gun.scrollForward()

            }
            sleep(1000)
        }
        if (packageName("com.ss.android.ugc.aweme").textContains("以后").exists()) {
            log("以后")
            packageName("com.ss.android.ugc.aweme").textContains("以后").click()
            sleep(1000)
        }
        let w = packageName("com.ss.android.ugc.aweme").text("我").findOne(1)
        if (w != null) {
            click(w.bounds().centerX(), w.bounds().centerY());
            sleep(1000)
        }
        if (packageName("com.ss.android.ugc.aweme").text("请输入手机号").exists()) {
            log("请输入手机号")
            text("请输入手机号").click();
            sleep(1000)
            return true;

        }
        sleep(2000)
        mm++;
        toast("等待注册页面");
        if (mm >= 15) {
            log("注册页面打开失败" + (15 - mm))
            return false;
        }

    }
}

function 留过程() {
    log("我是留存过程")
    //************************************************* 
    let 修改设备信息 = 改机(改机包名, 渠道号, "true")
    if (修改设备信息 = true) {
        log("改机成功")
    } else {
        log("改机失败" + 修改设备信息)
    }
    log(控制);
    if (控制 == 1) {
        log("留存任务无");
        return;
    }
    //************************************************* 
    vpnop(1);
    if (定位("", "com.jingdong.app.mall") == false) {
        log("多次定位失败")
        setvpn();
        vpnop(1);

    } else {
        log("定位成功")
    }
    home();
    //************************************************* 

}

function 提取所有text() {
    let bao = currentPackage();
    let i = packageName(bao).find();
    for (l = 0; l < i.length; l++) {
        if (i[l].text() != "") {
            log(i[l].text());
            log(i[l].id());
            log("===========================");
        };
    };
};


function 单点找色(x, y, color, ms) {
    sleep(100)
    let point = findColor(captureScreen(), color, {
        region: [x, y, 50, 50],
        threshold: 8
    });
    if (point) {
        log(ms + ":" + point);
        return point
    } else {
        log("没找到" + ms);
        sleep(1500)
        return false
    }
}


function 随机范围(x, y, x1, y1) {
    log(Math.round(x) + "," + Math.round(y) + "," + Math.round(x1) + "," + Math.round(y1))
    let X范围 = random(x + 3, x1 - 3)
    let Y范围 = random(y + 3, y1 - 3)
    X范围 = Math.round(X范围)
    Y范围 = Math.round(Y范围)
    log(X范围, Y范围)
    随机延迟(1000, 1500)
    press(X范围, Y范围, 200)
}


function 随机延迟(mix, max) {
    let 结果 = random(Number(mix), Number(max))
    sleep(结果)
}


function 随机数(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);

            break;
        default:
            return 0;
            break;
    }
}

function 倒计时(mix1, max2) {
    let 倒数 = random(Number(mix1), Number(max2))
    log("随机延迟：" + 倒数)
    while (true) {
        if (倒数 <= 0) {
            toastLog("倒计时完毕")
            sleep(1000)
            break
        }
        toastLog("倒计时：" + 倒数)
        sleep(2000)
        倒数 -= 2
    }
}


function 抖音跳转(抖音id) {
    let 条 = app.startActivity({
        action: "android.intent.action.VIEW",
        data: "snssdk1128://user/profile/" + 抖音id + "?refer=web&gd_label=click_wap_profile_follow&type=need_follow&needlaunchlog=1",
        packageName: "com.ss.android.ugc.aweme"
    });
    sleep(random(1500, 1800))
}



function 隐藏应用(对谁隐藏) {
    let 应用 = " ",
        分隔符
    let 必要app = ["com.cyjh.mobileanjian", "lahuo2.kexunjie.com.xingt85", weigou, "it.colucciweb.sstpvpnclient", "com.cc.cc"];
    let arr = 必要app.length;
    for (let i = 0; i < arr; i++) {
        // log(必要app[i]);
        if (getAppName(必要app[i]) != null) {
            if (应用 == null) {
                分隔符 = " "
            } else {
                分隔符 = ","
            }
            应用 = 应用 + 分隔符 + 必要app[i]
        } else {
            log("没有" + 必要app[i])
        }
    }
    //log(应用);
    while (true) {
        let 隐藏
        //http.__okhttp__.setTimeout(30000);
        let a = http.get("http://127.0.0.1:1990/hideApp?srcPackageName=" + 对谁隐藏 + "&destPackageNames=" + 应用);
        if (a.statusCode != 200) {
            log("失败");
            sleep(3000);
        } else {
            隐藏 = a.body.json();
            if (隐藏.code == 0) {
                log("隐藏应用成功");
                break;
            }
        }
    }
    home();
}

function setroot(bm) {
    if (bm == "") {
        log("设置root 权限,请传递包名参数");
        return false;
    }
    while (true) {
        launch(weigou);
        let lianjie = "http://127.0.0.1:1990/setRootApp?packageName=" + bm;
        // log("访问===>>" + lianjie);
        //http.__okhttp__.setTimeout(5000);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "设置成功") {
                log("root权限message=>" + get_api_json.message);
                home();
                return true;
            } else {
                log("设置root权限message=>" + get_api_json.message);
            };
        } else {
            log("设置root权限未知错误");
        };
        sleep(3000);
    }
}

function setbmd(path) {
    if (path == "") {
        log("设置白名单权限,请传递path参数");
        return false;
    }
    while (true) {
        launch(weigou);
        let lianjie = "http://127.0.0.1:1990/setWhiteList?path=" + path;
        // log("访问===>>" + lianjie);
        //http.__okhttp__.setTimeout(5000);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "添加成功") {
                log("置白名单权限message===>" + get_api_json.message);
                home();
                return true;
            } else {
                log("置白名单权限message===>" + get_api_json.message);
            };
        } else {
            log("置白名单权限未知错误");
        };
        sleep(3000);
    }
}

function setvpn() {
    let fuq = ["hb01.000.link", "hb02.000.link", "hb03.000.link", "hb04.000.link", "hb05.000.link", "hb06.000.link", "hb07.000.link", "hb08.000.link", "hb09.000.link", "hb10.000.link", "hb11.000.link", "hb12.000.link", "hb13.000.link", "hb14.000.link", "hb14.000.link"];
    let vpn账号 = "wsw1";
    let vpn密码 = "1";
    let vpn端口 = "4430";

    while (true) {
        launch(weigou);
        let lianjie = "http://127.0.0.1:1990/updateSSTPConfig?ip=" + fuq[随机数(0, (fuq.length - 1))] + "&port=" + vpn端口 + "&name=ljl&account=" + vpn账号 + "&password=" + vpn密码;
        // log("访问===>>" + lianjie);
        //http.__okhttp__.setTimeout(5000);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "修改配置成功1") {
                log("设置sstpvpn  message===>" + get_api_json.message);
                home();
                return true;
            } else {
                log("设置sstpvpn  message===>" + get_api_json.message);
            };
        } else {
            log("设置sstpvpn未知错误");
        };
        sleep(3000);
    }

}

function 改机(包名, channel, survival) {
    let gj, tgj
    let 系统版本 = random(22, 25);
    //log(survival + "获取设备信息==>" + channel + ",系统==>" + 系统版本);
    log("获取设备信息")
    while (true) {
        launch(weigou)
        sleep(2000);
        // let lianjie = "http://127.0.0.1:1990/getDeviceInfoFromServer?destPackageInfos=" + 包名 + "&packageName=1&chanel=" + channel + "&survival=" + survival + "&sdk=" + 系统版本
        let lianjie = "http://127.0.0.1:1990/wx?destPackageInfos=" + 改机包名 + "&survival=false&phoneNumber=CN" + 手机3() + getRanType(1, 8)
        // log("访问===>>" + lianjie);
        http.__okhttp__.setTimeout(60000)
        gj = http.get(lianjie);
        if (gj != null) {
            if (gj.statusCode == 200) {
                tgj = gj.body.json();
                if (tgj.code != 0) {
                    if (tgj.message == "end=true,没有更多新增任务需要执行") {
                        for (let i = 10 - 1; i >= 0; i--) {
                            log("message==>" + tgj.message + "===>" + i + "下一次改机");
                            sleep(1000);
                        }
                        控制 = 2
                        return false;
                    } else if (tgj.message == "end=true,未获取到任务") {
                        for (let i = 10 - 1; i >= 0; i--) {
                            log("message==>" + tgj.message + "===>" + i + "下一次改机");
                            sleep(1000);
                        }
                        控制 = 1
                        return false;
                    } else {
                        for (let i = 3 - 1; i >= 0; i--) {
                            log("111message==>" + tgj.message + "===>" + i + "下一次改机");
                            sleep(1000);
                        }
                        vpnop(0);
                    }
                } else if (tgj.message == "成功") {
                    aid = tgj.data.androidId;
                    wid = tgj.data.id;
                    附加信息 = tgj.data.accountPassword;
                    log("附加信息：" + 附加信息 + "--" + aid + "--" + wid);
                    if (survival == "true") {
                        控制 = 4
                    } else if (survival == "false") {
                        控制 = 3
                    }
                    toast("改机成功");
                    sleep(2000);
                    home();
                    return true;
                } else {
                    for (let i = 3 - 1; i >= 0; i--) {
                        log("返回信息==>" + gj + "===>" + i + "下一次改机");
                        sleep(1000);
                    }
                    vpnop(0);
                }
            } else {
                for (let i = 3 - 1; i >= 0; i--) {
                    log("访问改机接口失败==>" + tgj + "===>" + i + "下一次改机");
                    sleep(1000);
                }
                vpnop(0);
            }
        } else {
            for (let i = 3 - 1; i >= 0; i--) {
                log("访问改机接口超时==>" + gj + "===>" + i + "下一次改机");
                sleep(1000);
            }
            vpnop(0);

        }

    }
}
//设置sdk和分辨率.1是打开2关闭
function setsdk(sdk, 分辨率) {
    while (true) {
        launch(weigou);

        let lianjie = "http://127.0.0.1:1990/setSDKandWindow?isChangeSDK=" + sdk + "&isChangeWindow=" + 分辨率;
        // log("访问===>>" + lianjie);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "修改成功") {
                log("设置sdk  message===>" + get_api_json.message);
                home();
                return true;
            } else {
                log("设置sdk  message===>" + get_api_json.message);
            };
        } else {
            log("设置sdk未知错误");
        };
        sleep(3000);
    }

}


function wgvpn() {

    let fuq = ["hb01.000.link", "hb02.000.link", "hb03.000.link", "hb04.000.link", "hb05.000.link", "hb06.000.link", "hb07.000.link", "hb08.000.link", "hb09.000.link", "hb10.000.link", "hb11.000.link", "hb12.000.link", "hb13.000.link", "hb14.000.link", "hb14.000.link"];
    let vpn账号 = "wsw1";
    let vpn密码 = "1";


    while (true) {
        launch(weigou);

        let aa = http.get("http://127.0.0.1:1990/vpnCtrl?isConn=0")
        log("断开vpn成功")
        sleep(3000)
        http.__okhttp__.setTimeout(15000)

        let lianjie = "http://127.0.0.1:1990/vpnCtrl?isConn=1&ip=" + fuq[random(0, (fuq.length - 1))] + "&name=" + vpn账号 + "&password=" + vpn密码;
        // log("访问===>>" + lianjie);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "连接vpn成功") {
                log("链接vpn  message===>" + get_api_json.message);
                home();
                return true;
            } else {
                log("链接vpn  message===>" + get_api_json.message);
            };
        } else {
            log("链接vpn未知错误");
        };
        sleep(3000);
    }

}

//链接vpn,op=0是断开
function vpnop(op) {

    // log("vpn方法")
    let xz = vpn选择
    if (xz == 0) {
        if (wgvpn() == true) {
            return true;
        }
    }
    let m = 0
    let 连击次数 = 0
    let 点击链接失败 = 0
    let w
    opensstp();
    while (1) {
        if (text("(已断开连接)").exists()) {
            if (op == 0) {
                log("sswtp已断开连接,退出")
                home();
                return true;
            } else {
                log("sswtp已断开连接,点击链接")
                if (点击链接按钮() == true) {
                    log("点击链接成功");
                    if (检查是否链接成功() == true) {
                        log("vpn链接成功");
                        log("========>")
                        home();
                        return true;
                    } else {
                        log("链接失败");
                        连击次数++;
                        if (关闭应用("it.colucciweb.sstpvpnclient")) {
                            log("关闭sstp成功")
                        } else {
                            log("关闭sstp失败")
                        }
                        opensstp();
                        log("连击次数" + 连击次数)
                        if (连击次数 >= 4) {
                            连击次数 = 0
                            if (关闭应用("it.colucciweb.sstpvpnclient")) {
                                log("关闭sstp成功")
                            } else {
                                log("关闭sstp失败")
                            }
                            setvpn();
                            opensstp();
                        }
                    }
                } else {
                    log("点击链接失败");
                    点击链接失败++;
                    log("点击链接失败" + 点击链接失败)
                    if (点击链接失败 >= 2) {
                        点击链接失败 = 0
                        if (关闭应用("it.colucciweb.sstpvpnclient")) {
                            log("关闭sstp成功")
                        } else {
                            log("关闭sstp失败")
                        }
                        if (关闭应用("it.colucciweb.sstpvpnclient")) {
                            log("关闭sstp成功")
                        } else {
                            log("关闭sstp失败")
                        }
                        setvpn();
                        opensstp();
                    }
                }
            }
        }
        if (text("(正在连接)").exists()) {
            log("打开就正在连接,关闭sstp app")
            if (关闭应用("it.colucciweb.sstpvpnclient")) {
                log("关闭sstp成功")
            } else {
                log("关闭sstp失败")
            }
            opensstp();
        }
        if (text("确定").exists()) {
            text("确定").click()
            sleep(2000);
        }
        w = text("(已连接)").findOne(50)
        if (w != null) {
            if (点击链接按钮() == true) {
                log("点击断开钮成功")
            } else {
                log("点击链接失败")
                点击链接失败++;
                点击链接失败++;
                log("点击链接失败" + 点击链接失败)
                if (点击链接失败 >= 2) {
                    点击链接失败 = 0
                    if (offvpn()) {
                        log("关闭sstp成功")
                    }

                    if (关闭应用("it.colucciweb.sstpvpnclient")) {
                        log("关闭sstp成功")
                    } else {
                        log("关闭sstp失败")
                    }
                    setvpn();
                    opensstp();
                }
            }
        }
        sleep(1000);
        m++;
        log("等待sstp_app打开成功" + m)
        if (m >= 12) {
            m = 0
            log("打开失败")
            if (关闭应用("it.colucciweb.sstpvpnclient")) {
                log("关闭sstp成功")
            } else {
                log("关闭sstp失败")
            }
            opensstp();
        }
    }

    function opensstp() {
        while (1) {
            sleep(1111);
            launch("it.colucciweb.sstpvpnclient")
            sleep(2000);
            if (descContains("更多选项").exists()) {
                log("sswtp打开成功")
                break;
                return true;
            }
            if (text("确定").exists()) {
                text("确定").click()
                sleep(2000);
            }
        }
    }

    function 检查是否链接成功() {
        for (let i = 6 - 1; i >= 0; i--) {
            if (text("(已连接)").exists()) {
                return true;
                break;
            } else {
                toast("等待vpn链接成功" + i)
            }
            if (text("确定").exists()) {
                text("确定").click()
                sleep(3000);
            }
            sleep(1000);
        }
        log("sstpvpn链接失败");
        sleep(1000);
        return false;

    }

    function 点击链接按钮() {
        for (let i = 5 - 1; i >= 0; i--) {
            if (id("it.colucciweb.sstpvpnclient:id/start_stop").exists()) {

                id("it.colucciweb.sstpvpnclient:id/start_stop").click();
                sleep(1000);
                return true;
                break;
            } else {
                log("点击链接按钮" + i)
            }
            sleep(1000);
        }
        return false;
    }


    function wgvpn() {
        try {
            //let fuq = ["hb01.000.link", "hb02.000.link", "hb03.000.link", "hb04.000.link", "hb05.000.link", "hb06.000.link", "hb07.000.link", "hb08.000.link", "hb09.000.link", "hb10.000.link", "hb11.000.link", "hb12.000.link", "hb13.000.link", "hb14.000.link", "hb14.000.link"];
            let fuq = ["yhtip.com"]
            let vpn账号 = "wsw1";
            let vpn密码 = "1";
            while (true) {
                launch(weigou);
                let aa = http.get("http://127.0.0.1:1990/vpnCtrl?isConn=0")
                log("断开成功")
                sleep(3000)
                if (op == 0) {
                    return true;
                }
                http.__okhttp__.setTimeout(20000)
                let lianjie = "http://127.0.0.1:1990/vpnCtrl?isConn=1&ip=" + fuq[随机数(0, (fuq.length - 1))] + "&name=" + vpn账号 + "&password=" + vpn密码;
                log("访问===>>" + lianjie);
                let get_api = (http.get(lianjie));
                if (get_api == null) {
                    log("操作失败");
                } else if (get_api.statusCode == 200) {
                    let get_api_json = get_api.body.json();
                    if (get_api_json.message == "连接vpn成功") {
                        log("链接vpn  message===>" + get_api_json.message);
                        home();
                        return true;
                    } else {
                        log("链接vpn  message===>" + get_api_json.message);
                    };
                } else {
                    log("链接vpn未知错误");
                };
                sleep(3000);
            }
        } catch (e) {
            log("wgvpn方法错误=======>>>" + e);
            return false;
        }

    }










}
//执行shell命令
function shell(shell命令, 是否root) {
    try {
        var result = shell(shell命令, 是否root);
        if (result.code == 0) {
            log("shell命令执行成功" + result.code);
            return true;
        } else {
            log("执行失败！请到控制台查看错误信息" + result);
            return false;
        }
    } catch (e) {
        log("shell方法错误=======>>>" + e);
        return false;
    }
}
//通过链接下载文件

function 下载安装(链接, 路径) {
    while (1) {
        let url = 链接; // update_list.url
        log('url=' + url);
        log('filePath=' + 路径);
        download(url, 路径);
        var az = 安装(路径)
        if (az == true) {
            log("安装成功")
            break;
        } else {
            log("安装失败");
        }
    }
}

function uninstall(bm) {
    app.uninstall(bm);
    sleep(2000);
    var w
    for (let i = 10 - 1; i >= 0; i--) {
        w = text("要卸载此应用吗？").findOne(50)
        if (w != null) {
            w = text("确定").findOne(1000);
            if (w != null) {
                log("点击 确定 卸载")
                sleep(2000);
                w.click()
                sleep(2000);
                for (let i = 5 - 1; i >= 0; i--) {
                    w = text("取消").findOne(50);
                    if (w != null) {
                        w.click()
                        sleep(1000);
                    }
                    w = text("确定").findOne(50);
                    if (w != null) {
                        w.click()
                        sleep(1000);
                    }
                    log("稍等" + i)
                    sleep(1000);
                }
                home();
                return true;
            }
        } else {
            log("等待弹出卸载页面")
            sleep(1000);
        }
    }
    log("重新卸载");

    uninstall(bm);
}

function 安装(path) {
    app.viewFile(path);
    for (let i = 3 - 1; i >= 0; i--) {
        log("等待" + i)
        sleep(1000);
    }
    for (let i = 20 - 1; i >= 0; i--) {
        w = text("继续安装").findOne(50)
        if (w != null) {
            sleep(2000);
            w.click();
            sleep(1000);
            log("点击继续安装")
            for (let i = 30 - 1; i >= 0; i--) {
                w = text("完成").findOne(50);
                if (w != null) {
                    w.click();
                    sleep(1000);
                    log("点击完成")
                    home();
                    return true;
                } else {
                    log("等待安装完成" + i)
                }
                sleep(2000);
            }
        }

        w = text("安装").findOne(50)
        if (w != null) {
            sleep(2000);
            w.click();
            sleep(1000);
            log("点击安装")
            for (let i = 30 - 1; i >= 0; i--) {
                w = text("完成").findOne(50);
                if (w != null) {
                    w.click();
                    sleep(1000);
                    log("点击完成")
                    home();
                    return true;
                } else {
                    log("等待安装完成" + i)
                }
                sleep(2000);
            }
        }

        w = text("完成").findOne(50);
        if (w != null) {
            w.click();
            sleep(1000);
            log("点击完成")
            home();
            return true;
        }
        w = text("始终允许").findOne(1);
        if (w != null) {
            w.click();
            sleep(1000);
            log("始终允许")
            sleep(1000);
        }
        w = text("允许").findOne(1);
        if (w != null) {
            w.click();
            sleep(1000);
            log("点击允许")
            sleep(1000);
        }
        w = text("解析软件包时出现问题。").findOne(50)
        if (w != null) {
            sleep(1000);
            text("确定").findOne().click();
            sleep(1000);
            console.log("点击确定");
            log("解析软件包出现问题" + i)
            home();
            return false;
        };
        sleep(2000);
        log("等待安装完成" + i)
    }

    return false;
}

function download(url, filePath) {

    try {
        importClass('java.io.FileOutputStream');
        importClass('java.io.IOException');
        importClass('java.io.InputStream');
        importClass('java.net.MalformedURLException');
        importClass('java.net.URL');
        importClass('java.net.URLConnection');
        importClass('java.util.ArrayList');
        var url = new URL(url);
        var conn = url.openConnection(); //URLConnection
        var inStream = conn.getInputStream(); //InputStream
        var fs = new FileOutputStream(filePath); //FileOutputStream
        var connLength = conn.getContentLength(); //int
        var buffer = util.java.array('byte', 1024); //byte[]
        var byteSum = 0; //总共读取的文件大小
        var byteRead; //每次读取的byte数
        log('要下载的文件大小=' + connLength);
        log(connLength);
        var threadId = threads.start(function () {
            while (1) {
                var 当前写入的文件大小 = byteSum;
                var progress = (当前写入的文件大小 / connLength) * 100;
                if (progress > 0.1) {
                    var progress = parseInt(progress).toString() + '%';
                    log("下载进度" + progress)
                    if (当前写入的文件大小 >= connLength) {
                        break;
                    }
                }
                sleep(1000);
            }
        })
        while ((byteRead = inStream.read(buffer)) != -1) {
            byteSum += byteRead;
            //当前时间
            currentTime = java.lang.System.currentTimeMillis();
            fs.write(buffer, 0, byteRead); //读取
        }
        threadId && threadId.isAlive() && threadId.interrupt();
        toastLog('下载完成');
    } catch (e) {
        log("xz方法错误=======>>>" + e);
        return false;
    }

}

function getVerName(package_name) {
    let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
    for (let i in pkgs) {
        if (pkgs[i].packageName.toString() === package_name) return pkgs[i].versionName;
    }
}

function 下载更新() {
    var app下载地址 = {
        更新: 下载地址,
    };
    var 存放位置 = {
        更新: files.join(files.getSdcardPath(), 'auto.apk'),
    };
    下载安装(app下载地址.更新, 存放位置.更新)


}



function xz() {

    try {
        var app下载地址 = {
            sstp: "https://hw35850454-cn-east-2.obs.cn-east-2.myhuaweicloud.com/installtasks/it.colucciweb.sstpvpnclient_1010008_1715f2e1769eddec8551c057bc68157e.apk",
            我叫mt: "https://hw35850454-cn-east-2.obs.cn-east-2.myhuaweicloud.com/installtasks/com.wjmt.myapp_1005_a661eec39c43e7570a0eada0676f8fa0.apk",
            抖音: "https://hw35850454-cn-east-2.obs.cn-east-2.myhuaweicloud.com/installtasks/com.ss.android.ugc.aweme_110001_99fce21878a24c83f8c43f63c43451d1.apk"
        };

        var 存放位置 = {
            sstp: files.join(files.getSdcardPath(), 'sstp.apk'),
            我叫mt: files.join(files.getSdcardPath(), '我叫mt.apk'),
            抖音: files.join(files.getSdcardPath(), '抖音.apk'),
        };
        if ((getVerName("it.colucciweb.sstpvpnclient")) == "1.00.08" && getAppName("it.colucciweb.sstpvpnclient") != null) {
            log("sstp版本正确")
        } else {
            if (getAppName("it.colucciweb.sstpvpnclient") != null) {
                log("版本不正确,开始卸载,然后安装")
                uninstall("it.colucciweb.sstpvpnclient")
                下载安装(app下载地址.sstp, 存放位置.sstp)
            } else {
                log("没有安装直接下载")
                下载安装(app下载地址.sstp, 存放位置.sstp)
            }
        }

        if ((getVerName("com.ss.android.ugc.aweme")) == "11.0.0" && getAppName("com.ss.android.ugc.aweme") != null) {
            log("sstp版本正确")
        } else {
            if (getAppName("com.ss.android.ugc.aweme") != null) {
                log("版本不正确,开始卸载,然后安装")
                uninstall("com.ss.android.ugc.aweme")
                下载安装(app下载地址.抖音, 存放位置.抖音)
            } else {
                log("没有安装直接下载")
                下载安装(app下载地址.抖音, 存放位置.抖音)
            }
        }
    } catch (e) {
        log("xz方法错误=======>>>" + e);
        return false;
    }
}




function 定位(位置, 应用) {
    if (应用 == "") {
        // log("定位,请传递包名参数");
        return false;
    }
    while (true) {
        launch(weigou);
        let lianjie = "http://127.0.0.1:1990/setReplaceLocationApp?packageNames=" + 应用;
        // log("访问===>>" + lianjie);
        //http.__okhttp__.setTimeout(5000);
        let get_api = (http.get(lianjie));
        if (get_api == null) {
            log("操作失败");
        } else if (get_api.statusCode == 200) {
            let get_api_json = get_api.body.json();
            if (get_api_json.message == "设置成功") {
                log("设置定位应用message===>" + get_api_json.message);
                home();
                break;
            } else {
                log("设置定位应用message===>" + get_api_json.message);
            };
        } else {
            log("设置定位应用message未知错误");
        };
        sleep(3000);
    }
    let weizhi
    if (位置 != "") {
        weizhi = "?city=" + 位置
    } else {
        weizhi = ""
    }

    let get_api
    let get_api_json
    for (let i = 5 - 1; i >= 0; i--) {
        launch(weigou);
        let lianjie = "http://127.0.0.1:1990/myLocation" + weizhi;
        log("访问===>>" + lianjie);
        //http.__okhttp__.setTimeout(5000);
        let get_api = (http.get(lianjie));
        if (get_api != null) {
            if (get_api.statusCode == 200) {
                var b = get_api.body.string()
                if (except(b)) {
                    get_api_json = JSON.parse(b)
                    if (get_api_json.message == "获取位置成功") {
                        log("定位成功message===>" + get_api_json.message);
                        home();
                        return true;
                    } else {
                        log("定位失败message===>" + get_api_json.message);
                    };
                } else {
                    log("定位失败返回非json" + b);

                }
            } else {
                log("定位失败message未知错误" + b);
            };
        } else {
            log("定位失败message未知错误" + b);

            sleep(3000);
        }


    }
    return false;
}

function 设置应用权限(包名) {
    let get_api_json = ""
    let jiaobenlianj1 = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.SYSTEM_ALERT_WINDOW"
    let get_api = (http.get(jiaobenlianj1));


    if (get_api == null) {
        log("操作失败");
    } else if (get_api.statusCode == 200) {
        get_api_json = get_api.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };

    get_api_json = ""
    let jiaobenlianj2 = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.READ_EXTERNAL_STORAGE"
    let get_api1 = (http.get(jiaobenlianj2));
    if (get_api1 == null) {
        log("操作失败");
    } else if (get_api1.statusCode == 200) {
        get_api_json = get_api1.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };
    get_api_json = ""
    let jiaobenlianj3 = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.ACCESS_FINE_LOCATION"
    let get_api2 = (http.get(jiaobenlianj3));
    if (get_api2 == null) {
        log("操作失败");
    } else if (get_api2.statusCode == 200) {
        get_api_json = get_api2.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };
    get_api_json = ""
    let jiaobenlianj4 = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.WRITE_CONTACTS"
    let get_api3 = (http.get(jiaobenlianj4));
    if (get_api3 == null) {
        log("操作失败");
    } else if (get_api3.statusCode == 200) {
        get_api_json = get_api3.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };
    get_api_json = ""
    let jiaobenlianj5 = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.CALL_PHONE"
    let get_api4 = (http.get(jiaobenlianj5));
    if (get_api4 == null) {
        log("操作失败");
    } else if (get_api4.statusCode == 200) {
        get_api_json = get_api4.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };
    get_api_json = ""
    let jiaobenlianj6 = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.SEND_SMS"
    let get_api5 = (http.get(jiaobenlianj6));
    if (get_api5 == null) {
        log("操作失败");
    } else if (get_api5.statusCode == 200) {
        get_api_json = get_api5.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };
    get_api_json = ""
    let jiaobenlianj = "http://127.0.0.1:1990/requestAppPerssion?packageName=" + 包名 + "&perssion=android.permission.READ_EXTERNAL_STORAGE"
    let get_api6 = (http.get(jiaobenlianj));
    if (get_api6 == null) {
        log("操作失败");
    } else if (get_api6.statusCode == 200) {
        get_api_json = get_api6.body.json();
        log(get_api_json.message)
    } else {
        log("权限messagemessage未知错误");
    };
}

function 关闭应用(packageName) {
    try {
        app.openAppSetting(packageName);
        text(app.getAppName(packageName)).waitFor();
        let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
        if (is_sure.enabled()) {
            textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
            textMatches(/(.*确.*|.*定.*)/).findOne().click();
            log(app.getAppName(packageName) + "应用已被关闭");
            sleep(1000);
            back();
            return true;
        } else {
            log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
            back();
            return false;
        }
    } catch (e) {
        // 出现异常返回null
        console.error(e);
        return false;
    }

}

function 获取手机号() {
    log(接码选择 + "=========>>")
    if (接码选择 == 1) {
        飞猪();
    } else if (接码选择 == 2) {
        蓝狐();
    }
}


function 获取验证码() {
    if (接码选择 == 1) {
        飞猪短信();
    } else if (接码选择 == 2) {
        蓝狐短信();
    }

}


function 飞猪() {
    手机号 = null
    let i = 0
    let a
    try {
        let lj = "http://api.tsscode.com/api/yhdl?password=" + 账号 + "&apiAccount=" + 密码
        while (1) {
            // log("链接====>>" + lj)
            a = http.get(lj)
            if (a != null && a.statusCode == "200") {
                var b = a.body.string()
                if (except(b)) {
                    var c = JSON.parse(b)
                    if (c.result == "成功") {
                        toastLog("飞猪登录成功")
                        token = c.token
                        break;
                    } else {
                        toastLog("飞猪登录失败===>" + b)
                    }
                } else {
                    log("飞猪返回非json" + b)
                }
            } else {
                toastLog("飞猪返回服务器出错")
            }
            sleep(3000)
            i++;
            if (i >= 10) {
                return null;
            }
        }
        i = 0
        lj = "http://api.tsscode.com/api/yhqh_s?token=" + token + "&id=" + 项目id + "&pingtaika=1" //pingtaika=是否使用平台卡 0代表不使用平台卡 1代表使用平台卡 (选填: 不填则默认不使用)   
        while (1) {
            // log("链接====>>"+lj)
            a = http.get(lj)
            if (a != null && a.statusCode == "200") {
                var b = a.body.string()
                if (except(b)) {
                    var c = JSON.parse(b)
                    if (c.result == "成功") {


                        手机号 = c.number
                        log("飞猪号码获取成功====>" + 手机号)
                        break;
                    } else {
                        toastLog("飞猪获取手机失败===>" + b)
                        break;
                    }
                } else {
                    log("飞猪返回非json" + b)
                }
            } else {
                toastLog("飞猪服务器出错")
            }
            sleep(3000)
            i++;
            if (i >= 10) {
                return null;
            }
        }

    } catch (e) {
        log("蓝狐方法错误=======>>>" + e);
        return false;
    }
}

function 飞猪短信() {
    验证码 = null
    let i = 0
    var aa
    let lj = "http://api.tsscode.com/api/yhjm?token=" + token + "&id=" + 项目id + "&number=" + 手机号 + "&apiAccount=b7604849-9a8d-46c0-a810-bbbe40b3cbee"
    while (1) {
        aa = http.get(lj)
        if (aa != null) {
            var b = aa.body.string()
            if (except(b)) {
                var c = JSON.parse(b)
                if (c.result == "失败") {
                    toastLog("第" + (15 - i) + "次获取验证码" + c.reason)
                } else if (c.result == "成功") {
                    log("====>>" + c.smsContent)
                    log("=开始解析===>>")
                    var patt1 = /[0-9]+/
                    var 码 = patt1.exec(c.smsContent)
                    toastLog("验证码====>" + 码)
                    加黑(1)
                    return true;
                } else {
                    toastLog("飞猪获取验证码失败===>" + b)
                }
            } else {
                log("飞猪返回非json" + b)
            };
        } else {
            toastLog("飞猪返回服务器出错")
        }
        sleep(1000)
        i++;
        if (i >= 10) {
            加黑(1)
            return null;
        }
    }
}

function 加黑(jh) {

    let aa

    try {
        if (接码选择 == "1") {
            if (jh == "1") {
                http.__okhttp__.setTimeout(10000)
                aa = http.get("http://api.tsscode.com/api/yhsf?token=" + token + "&id=" + 项目id + "&number=" + 手机号);
                if (aa != null && aa.statusCode == "200") {
                    log("释放===>>" + aa.body.string())
                }
                http.__okhttp__.setTimeout(10000)
                aa = http.get("http://api.tsscode.com/api/yhlh?token=" + token + "&id=" + 项目id + "&number=" + 手机号);
                if (aa != null && aa.statusCode == "200") {
                    log("加黑===>>" + aa.body.string())
                }

            } else if (jh == 0) {
                http.__okhttp__.setTimeout(10000)
                aa = http.get("http://api.tsscode.com/api/yhsf?token=" + token + "&id=" + 项目id + "&number=" + 手机号);
                if (aa != null && aa.statusCode == "200") {
                    log("释放===>>" + aa.body.string())
                }

            }
        } else if (接码选择 == "2") {
            if (jh == 1) {
                http.__okhttp__.setTimeout(10000)
                aa = http.get("http://www.huli667.com:81/sms/api/cancelRecv?token=" + token + "&sid=" + 项目id + "&phone=" + 手机号);
                if (aa != null && aa.statusCode == "200") {
                    log("加黑===>>" + aa.body.string())
                }
                http.__okhttp__.setTimeout(10000)
                aa = http.get("http://www.huli667.com:81/sms/api/addBlacklist?token=" + token + "&sid=" + 项目id + "&phone=" + 手机号);
                if (aa != null && aa.statusCode == "200") {
                    log("释放===>>" + aa.body.string())
                }
            } else if (jh == 0) {
                log("5555555")
                http.__okhttp__.setTimeout(10000)
                aa = http.get("http://www.huli667.com:81/sms/api/cancelRecv?token=" + token + "&sid=" + 项目id + "&phone=" + 手机号);
                if (aa != null && aa.statusCode == "200") {
                    log("释放===>>" + aa.body.string())
                }

            }

        }

    } catch (e) {
        log("加黑方法错误=======>>>" + e);
        return false;
    }
}


function 蓝狐() {
    手机号 = null
    var i = 0
    let a
    try {
        http.__okhttp__.setTimeout(10000)
        let lj = "http://www.huli667.com:81/sms/api/login?username=" + 账号 + "&password=" + 密码
        log("蓝狐>>>====" + lj);
        while (1) {
            // log("链接====>>" + lj)
            a = http.get(lj)
            if (a != null && a.statusCode == "200") {
                var b = a.body.string()
                if (except(b)) {
                    var c = JSON.parse(b)
                    if (c.msg == "success") {
                        toastLog("蓝狐登录成功")
                        token = c.token
                        break;
                    } else {
                        toastLog("蓝狐登录失败===>" + b)
                    }
                } else {
                    log("蓝狐返回非json" + b)
                }
            } else {
                toastLog("蓝狐返回服务器出错")
            }
            sleep(3000)
            i++;
            if (i == 10) {
                return false;
            }
        }
        i = 0
        http.__okhttp__.setTimeout(10000)
        lj = "http://www.huli667.com:81/sms/api/getPhone?token=" + token + "&sid=" + 项目id
        while (1) {
            // log("链接====>>"+lj)
            a = http.get(lj)
            if (a != null && a.statusCode == "200") {
                if (a.body != null) {

                    var b = a.body.string()

                    if (b != null && except(b)) {
                        var c = JSON.parse(b)
                        if (c.msg == "success") {
                            手机号 = c.phone
                            log("蓝狐号码获取成功====>" + 手机号)
                            break;
                        } else if (c.msg == "暂无号码请延迟10秒后再次请求") {
                            for (let i = 6 - 1; i >= 0; i--) {
                                toast("延迟" + i + "次后获取号码");
                                sleep(2000);
                            }
                        } else {
                            toastLog("蓝狐获取手机失败===>" + b)
                        }
                    } else {
                        log("蓝狐返回非json" + b)
                    }
                } else {

                    toastLog("蓝狐返回服务器出错" + a.body)
                }
            } else {
                toastLog("蓝狐服务器出错")
            }
            sleep(1000)
            i++;
            if (i == 20) {
                return false;
            }
        }

    } catch (e) {
        log("蓝狐方法错误=======>>>" + e);
        return false;
    }
}

function 蓝狐短信() {
    验证码 = null
    var i = 0
    var aa
    try {
        http.__okhttp__.setTimeout(10000)
        let lj = "http://www.huli667.com:81/sms/api/getMessage?token=" + token + "&sid=" + 项目id + "&phone=" + 手机号 + "&tid=17175"
        while (1) {
            aa = http.get(lj)
            if (aa != null) {

                if (aa.body != null) {
                    var b = aa.body.string()
                    if (except(b)) {
                        var c = JSON.parse(b)
                        if (c.msg == "success") {
                            //log("====>>" + c.sms)
                            log("=开始解析===>>")
                            var patt1 = /[0-9]+/
                            验证码 = patt1.exec(c.sms)

                            toastLog("验证码====>" + 验证码)
                            加黑(1)
                            return true;
                        } else {
                            toast((20 - i) + "获取===>" + c.msg)
                        }
                    } else {
                        log("蓝狐返回非json" + b)
                    };
                } else {

                    toastLog("蓝狐返回服务器出错" + aa.body)
                }

            } else {
                toastLog("蓝狐返回服务器出错")
            }
            sleep(3000)
            i++;
            if (i == 15) {
                加黑(1)
                return false;
            }
        }
    } catch (e) {
        log("蓝狐短信方法错误=======>>>" + e);
        return false;
    }
}


function except(str) {
    // console.log(typeof str)   //查看传入的数据是什么类型
    try {
        JSON.parse(str)
        // console.log('json')
        return true
    } catch (err) {
        console.log('not json' + typeof str)
        return false
    }
};



function 仿真随机带曲线(qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };
    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    };
    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]
        xxy.push(xxyy);
    }
    gesture.apply(null, xxy);
};

function bezier_curves(cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x);
    bx = 3.0 * (cp[2].x - cp[1].x) - cx;
    ax = cp[3].x - cp[0].x - cx - bx;
    cy = 3.0 * (cp[1].y - cp[0].y);
    by = 3.0 * (cp[2].y - cp[1].y) - cy;
    ay = cp[3].y - cp[0].y - cy - by;
    tSquared = t * t;
    tCubed = tSquared * t;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
    return result;
};

function 取图() {
    try {
        log("开始截图")
        captureScreen("/sdcard/1.png")
        let 范围
        w = text("captcha verify").findOne()
        if (w != null) {
            范围 = w.child(0).child(1).child(0).bounds().toString()
        }
        var 左上角坐标 = 范围.split("(")[1].split(")")[0].split("-")[0].split(",")
        var 右下角坐标 = 范围.split("(")[1].split(")")[0].split("-")[1].split(",")
        var 左上x = 左上角坐标[0].replace(/^\s+|\s+$/g, "")
        var 左上y = 左上角坐标[1].replace(/^\s+|\s+$/g, "")
        var 右下x = 右下角坐标[0].replace(/^\s+|\s+$/g, "")
        var 右下y = 右下角坐标[1].replace(/^\s+|\s+$/g, "")
        // var 左上x = 126
        // var 左上y = 628
        // var 右下x = 954
        // var 右下y = 1198
        var 图片 = images.read("/sdcard/1.png")

        var 需打码图片 = images.clip(图片, 左上x, 左上y, 右下x - 左上x, 右下y - 左上y)
        images.save(需打码图片, "/sdcard/验证码.png")
        return true;
        log("截图完成")

    } catch (e) {
        // 出现异常返回null
        log(e);
        return false;
    }
}


function 截图权限() {

    try {
        // 捕捉所有异常


        log("开始申请截图权限")
        let 截图 = threads.start(function () {
            //在新线程执行的代码
            for (let i = 15 - 1; i >= 0; i--) {
                w = text("立即开始").findOne(1)
                if (w != null) {
                    w.click();
                    log("截图权限点击成功");
                    break;
                }
                toast("没找到开始")
                sleep(2000);
            }
        });


        if (!requestScreenCapture()) {
            toastLog("请求截图失败,程序即将退出");
            RNAutojsModule.setScriptStat("执行失败，已退出");
            exit();
        } else {
            log("截图权限申请成功");
            截图 && 截图.isAlive() && 截图.interrupt();
        }
    } catch (e) {
        log("截图权限方法错误=======>>>" + e);
        return false;
    }



}



function getCode(username, password, img, laid) {

    try {
        log("开始打码")
        http.__okhttp__.setTimeout(3e4);
        var r = images.toBase64(img, format = "png"),
            i = device.release,
            c = device.model,
            s = device.buildId;

        var n = http.postJson("https://v2-api.jsdama.com/upload", {
            softwareId: 10580,
            softwareSecret: "joO2shbsXf5Fr61mRT4Td3eCh2rgpJsLk75tuPFl",
            username: username,
            password: password,
            captchaData: r,
            captchaType: laid,
            captchaMinLength: 0,
            captchaMaxLength: 0,
            workerTipsId: 0
        }, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Linux; Android " + i + "; " + c + " Build/" + s + "; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 Mobile Safari/537.36",
            }
        });
    } catch (e) {
        log(e)
        log("报错了")
        return false;

    }
    try {
        if (n != null) {
            if (n.body != null) {
                var d = n.body.json(),
                    p = d.code,
                    m = d.message;
                if ("10079009" == p) return {
                    code: p,
                    msg: m,
                    data: {}
                };
                if ("10142006" == p) return {
                    code: p,
                    msg: m,
                    data: {}
                };
                if ("10142004" == p) return {
                    code: p,
                    msg: m,
                    data: {}
                };
                if ("10142005" == p) return {
                    code: p,
                    msg: m,
                    data: {}
                };
                if ("10079006" == p) return {
                    code: p,
                    msg: m,
                    data: {}
                };
                if ("0" == p) {
                    return {
                        code: p,
                        msg: m,
                        data: {
                            res: d.data.recognition
                        }
                    };
                }
                return false;
            }

        }
    } catch (e) {
        log("联众打码方法错误=======>>>" + e);
        return false;
    }

    return false;
}



function except(str) {
    // console.log(typeof str)   //查看传入的数据是什么类型
    try {
        JSON.parse(str)
        //  console.log('json')
        return true
    } catch (err) {
        console.log('not json' + typeof str)
        return false
    }
};

//创建exit事件,脚本异常或正常结束(包括音量键up直接结束脚本)前执行。


function WIFI() {

    try {
        device.setBrightnessMode(checked ? 1 : 0);
        console.info("打开WIFI界面")
        while (1) {
            let intent = new Intent();
            //辅助功能
            intent.setAction("android.settings.WIFI_SETTINGS");
            app.startActivity(intent);
            sleep(2000)
            if (text("WLAN").exists()) {

                break;
            }
            toast("等待打开WiFi界面")
            sleep(1000)
        }
        let i = 0
        while (true) {
            i++;
            if (i >= 15) {
                if (text("开启").exists()) {
                    text("开启").click()
                    log("---开启wifi")
                    i = 0
                }
            }
            if (text("关闭").exists()) {

                text("关闭").findOne().click()

                log("打开wifi")
                sleep(2000)
            }
            if (text("已连接").exists()) {
                log("wifi已连接")
                return true;
            }
            toast("等待wifi链接成功" + (15 - i))
            sleep(2000)
        }
    } catch (e) {
        log("wifi方法错误=======>>>" + e);
        return false;
    }


};

function 上传到库() {
    try {
        // //Dim 账号 = URL.Get("http://127.0.0.1:1990/uploadNumberInfo?accountNumber=0&password=0&nickName=" &昵称& "&phoneNumber=" &手机号& "&warehouseNum=" &库号& "&id=" &imei& "&type=1&city="&city&"&state=0",40)
        while (true) {
            launch(weigou);
            let lianjie = "http://127.0.0.1:1990/uploadNumberInfo?accountNumber=0&password=0&nickName=" + 昵称 + "&phoneNumber=" + 手机号 + "&warehouseNum=" + 库号 + "&id=" + wid + "&type=1&city=全国&state=0"
            log("访问===>>" + lianjie);
            let get_api = (http.get(lianjie));
            if (get_api == null) {
                log("操作失败");
            } else if (get_api.statusCode == 200) {
                let get_api_json = get_api.body.json();
                if (get_api_json.message == "操作成功") {
                    log("上传到库message===>" + get_api_json.message);
                    home();
                    return true;
                } else {
                    log("上传到库message===>" + get_api_json.message);
                };
            } else {
                log("上传到库未知错误");
            };
            sleep(3000);
        }
    } catch (e) {
        log("上传到库方法错误=======>>>" + e);
        return false;
    }
}


function getRanType(type, number) {

    /**
     * 返回随机数字字母中文
     * 参数 type 类型 1数字类型 2大写字母 3小写字母 4中文
     * 参数numder 数量 返回类型的个数
     * 返回值 String
     */


    var result = [];
    //type=1 为数字类型
    if (type == 1) {
        for (let index = 0; index < number; index++) {
            result.push(random(0, 9));
        }
        return result.join('').toString();

        //type=2 为大写字母类型
    } else if (type == 2) {
        for (let index = 0; index < number; index++) {
            result.push(String.fromCharCode(65 + random(0, 25)));
        }
        return result.join('').toString();

        //type=3 为小写字母类型
    } else if (type == 3) {
        for (let index = 0; index < number; index++) {
            result.push(String.fromCharCode(97 + random(0, 25)));
        }
        return result.join('').toString();

        //type=4 为中文
    } else if (type == 4) {
        for (let index = 0; index < number; index++) {
            result.push(String.fromCharCode((random(0, 1000) + 20000)));
        }
        return result.join('').toString();
    } else {
        toast('没有此类型');
        return "";
    }


}

function 手机3() {

    let 号段 = ["134", "135", "136", "137", "156", "158", "157", "139", "162", "177", "173", "199", "147", "185", "176", "133", "132", "131"]
    return 号段[随机数(0, (号段.length - 1))];


}

function 下载解压脚本() {
    log("下载解压脚本")
    while (1) {
        let github下载的脚本 = 下载Github文件() //这个方法返回的就是要运行的代码
        if (github下载的脚本) {
            if (files.createWithDirs(files.cwd() + "/autojs/66-master/main.js")) {
                log("下载失败")
                sleep(2000)
            } else {
                log("下载成功")
                if (files.copy(files.cwd() + "/autojs/66-master/main.js", engines.myEngine().cwd() + "/main.js")) {
                    // log("移动成功")
                    files.removeDir(files.cwd() + "/autojs")
                    files.remove(files.cwd() + "/autojs.zip")
                    engines.execScriptFile(engines.myEngine().cwd() + "/main.js");
                    log("更新版本完成");
                    sleep(2000);
                    files.write("/sdcard/ljl/1.txt", 后台版本);
                    当前版本 = files.read("/sdcard/ljl/1.txt", encoding = "UTF-8");
                    log(当前版本)
                    console.hide();
                    exit();
                    return true;

                } else {
                    log("移动失败")
                }
            }
        } else {
            console.error('下载代码失败')
        }
    }

    function 下载Github文件() {
        log("开始下载代码")
        log(下载链接)
        try {
            let r = http.get(下载链接) //开始请求
            log("下载成功===>>>>>>>>")
            if (r != null && r.statusCode == 200) {
                let zipFile = r.body.bytes() //这里下载的是二进制数据 
                if (zipFile) {
                    let 代码路径 = Github文件夹(zipFile) //将请求成功的文件写入手机路径
                    return true; //读取解压后脚本的内容
                } else {
                    console.error('下载代码失败')
                    return false;
                }
            } else {
                console.error('下载代码失败')
            }
        } catch (e) {
            log("下载解压脚本方法错误=======>>>" + e);
            return false;
        }
    }


    function Github文件夹(zipFile) {
        let path = files.join(files.cwd(), "autojs.zip") //1、定义文件路径名  2、files.cwd()会返回:  /sdcard/脚本/  3、path=/sdcard/脚本/autojs.zip
        files.createWithDirs(path) //开始创建文件
        files.writeBytes(path, zipFile) //把下载好的二进制数据写入文件中
        let r = 解压zip文件(path) //解压zip文件
        return r
    }

    function 解压zip文件(文件路径) {
        let 解压后的文件夹路径 = 文件路径.replace(".zip", "") + "/" //利用replace方法将.zip去掉  
        com.stardust.io.Zip.unzip(new java.io.File(文件路径), new java.io.File(解压后的文件夹路径)) //将zip文件进行解压
        return 解压后的文件夹路径 //返回解压后的目录   返回对象：r
    }


}

function 获取库号() {
    try {
        while (1) {
            let get_api
            let lianjie = "http://39.97.97.160/no/channel/getChannelLink?userCode=10712";
            // log("访问===>>" + lianjie);
            get_api = (http.get(lianjie));
            if (get_api != null && get_api.statusCode == 200) {
                let get_api_json = get_api.body.json();
                // log("返回值====>" + get_api_json.addDatas.resultlist)
                if (get_api_json.message == "操作成功") {
                    //log(get_api_json)
                    let bb = get_api_json.addDatas.result.toString();
                    let aa = bb.split("----");
                    return [aa[0], aa[1], aa[2]]

                } else {
                    log("检测失败");
                    vpnop(0);
                };
            } else {
                log("检测访问超时或者失败");
                sleep(3000);
                vpnop(0);
            };
            sleep(3000);
        }
    } catch (e) {
        log("获取库号方法错误=======>>>" + e);
        return false;
    }


}

// function 更新脚本() {
//     toastLog("更新版本");
//     let codePath
//     log(下载链接)
//     try {
//         var res = http.get(下载链接);
//         if (res != null && res.statusCode == 200) {
//             codePath = engines.myEngine().cwd() + "/main.js";
//             files.write(codePath, res.body.string());
//             engines.execScriptFile(codePath);
//             log("更新版本完成");
//             sleep(2000);
//             files.write("/sdcard/ljl/1.txt", 后台版本);
//             当前版本 = files.read("/sdcard/ljl/1.txt", encoding = "UTF-8");
//             log(当前版本)
//             console.hide();
//             exit();

//         } else {
//             log("更新请求失败");
//             sleep(2000);
//         }
//     } catch (er) {
//         log("更新请求出错==>>" + er);
//         sleep(2000);
//     }

// }