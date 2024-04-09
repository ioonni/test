import json
import requests
import urllib.parse
import time
import os
import sys




def daishua(uid,hongbaoid,token):
    huodong_id = hongbaoid
    uid = uid
    Authorization = token
    print(huodong_id,token)
    url = 'http://hb2.hbdtxt.com/api/index/index'
    headers = {
        'Authorization': Authorization,
        'User-Agent': '/5.0 (Linux; Android 9; NX629J_V1S Build/PQ3A.190705.09211555; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.114 Mobile Safari/537.36 MMWEBID/2157 MicroMessenger/8.0.41.2460(0x28002A54) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Referer': 'http://hb2.hbdtxt.com/',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': 'sa897b757=7et53ajhi5f4n6i51epf7bv4ug'
    }

    data = {
        'huodong_id': huodong_id,
        'ids': '',
        'api_type': 'h5',
        'uid': uid
    }
    response = requests.post(url, headers=headers, data=data)
    response_content = response.content.decode('utf-8')
    print("返回1=="+response.text)
    response_data = json.loads(response_content)
    code = response_data['code']
    msg = response_data['msg']
    if code==1:
        canyu_status = response_data['canyu_status']
        is_can = response_data['is_can']
        huodong = response_data['huodong']
        wentilist = response_data['wentilist']
        modified_wentilist = []
        for question in wentilist:
            daan = json.loads(question["daan"])[0]
            for option in question["xuanxiang"]:
                if option["xuhao"] == daan:
                    option["xuanzhong"] = 1
                else:
                    option["xuanzhong"] = 0
            modified_wentilist.append(question)
        print(f"wentilist={json.dumps(modified_wentilist, ensure_ascii=False)}")
        data = json.dumps(modified_wentilist, ensure_ascii=False)
        encoded_data = urllib.parse.quote(data)
        a = f"wentilist={encoded_data}&huodong_id={huodong_id}&ids=&api_type=h5&uid={uid}"
        url1 = 'http://hb2.hbdtxt.com/api/index/dati'
        response = requests.post(url1, headers=headers, data=a)
        response_content = response.content.decode('utf-8')
        response_data = json.loads(response_content)
        print("返回2=="+response.text)
        code1 = response_data["code"]
        msg1 = response_data["msg"]
        if code1 == 1:
            money = response_data["money"]
            print(f"您本次中奖{money}")
        else:
            print(msg1)

if __name__ == '__main__':
    print("欢迎进入本软件")
    print("笨笨 项目群1：565995316")
    print("笨笨 项目群2：648769386 (不禁言)")
    print("V群1088永久收人中")
    print("项目群3：648769386")

        # "1650852406",
    hongbaolist = [1652135427, 1650244102, 1651621900, 1648601104, 1648690708, 1649466389, 1649900570, 1649208346, 1649036333, 1651793454, 1650156593, 1651279411, 1652135477, 1651621946, 1651621948, 1651030589, 1650244165, 1648690760, 1648948298, 1650070603, 1651793506, 1651279460, 1683794533, 1650156645, 1651621995, 1650419820, 1648253549, 1649466479, 1652135538, 1683795077, 1652135053, 1651793554, 1651279506, 1651030679, 1650419872, 1652135586, 1650329764, 1650506926, 1683787955, 1649381557, 1652135102, 1650070720, 1648345794, 1651279557, 1651793606, 1650768071, 1651030731, 1652135639, 1650506977, 1649381603, 1650329833, 1648773869, 1648345844, 1650768127, 1651030785, 1651366150, 1652135175, 1650507028, 1651279644, 1648773920, 1652135717, 1651621672, 1648345898, 1651030838, 1649554232, 1651366201, 1652135226, 1651572539, 1649813326, 1649643342, 1649293148, 1648345948, 1651621726, 1649122153, 1652135281, 1648948085, 1649900408, 1649813374, 1649554303, 1651621775, 1649293200, 1649644432, 1683787666, 1649122201, 1650852250, 1648782240, 1683788198, 1648864166, 1649900458, 1650631610, 1649726396, 1651366333, 1652135364, 1652135366, 1650852303, 1651621841, 1648601047, 1648864224, 1649900513, 1649208292, 1649726457, 1650852348, 1649036286]  # line:13:hongbaolist=['1683795077','1683794533','1683788198','1683787955','1683787666','1652135717','1652135639','1652135586','1652135538','1652135477','1652135427','1652135364','1652135281','1652135226','1652135175','1652135102','1652135053','1651793606','1651793554','1651793506','1651793454','1651621995','1651621946','1651621900','1651621841','1651621775','1651621726','1651621672','1651572539','1651366333','1651366201','1651366150','1651279644','1651279557','1651279506','1651279460','1651279411','1651030838','1651030785','1651030731','1651030679','1651030589','1650852348','1650852303','1650852250','1650768127','1650768071','1650631610','1650507028','1650506977','1650506926','1650419872','1650419820','1650329833','1650329764','1650244165','1650244102','1650156645','1650156593','1650070720','1650070603','1649900570','1649900513','1649900458','161557','1
    current_directory = os.getcwd()
    filename = "zhanghao.txt"
    file_path = os.path.join(current_directory,filename)
    with open(file_path, "r") as f:  # line:82:with open(file_path,"r") as f:
        text = f.read()  # line:83:text = f.read()
    text = text.split("\n")  # line:84:text = text.split("\n")
    for text1 in text:  # line:85:for text1 in text:
        if text1:  # line:86:if text1:
            shuju = text1.split("----")  # line:87:shuju = text1.split("----")
            smoney = 0
            a = input(f"uid=={shuju[0]}请您输入第几天代刷：")  # line:88:a = input(f"uid=={shuju[0]}请您输入第几天代刷：")
            if int(a) == 1:  # line:89:if int(a) == 1:
                b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # line:90:b = [0,1,2,3,4,5,6,7,8,9,10]
                for x in range(99, 89, -1):  # line:91:for x in range(99,89,-1):
                    daishua(shuju[0],str(hongbaolist[x]) , shuju[1])  # line:92:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:93:time.sleep(10)
                print("今日运行完毕")  # line:94:print("今日运行完毕")
            elif int(a) == 2:  # line:95:elif int(a) == 2:
                for x in range(89, 79, -1):  # line:96:for x in range(89,79,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:97:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:98:time.sleep(10)
                print("今日运行完毕")  # line:99:print("今日运行完毕")
            elif int(a) == 3:  # line:100:elif int(a) == 3:
                for x in range(79, 69, -1):  # line:101:for x in range(79,69,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:102:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:103:time.sleep(10)
                print("今日运行完毕")  # line:104:print("今日运行完毕")
            elif int(a) == 4:  # line:105:elif int(a) == 4:
                for x in range(69, 59, -1):  # line:106:for x in range(69,59,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:107:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:108:time.sleep(10)
                print("今日运行完毕")  # line:109:print("今日运行完毕")
            elif int(a) == 5:  # line:110:elif int(a) == 5:
                for x in range(59, 49, -1):  # line:111:for x in range(59,49,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:112:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:113:time.sleep(10)
                print("今日运行完毕")  # line:114:print("今日运行完毕")
            elif int(a) == 6:  # line:115:elif int(a) == 6:
                for x in range(49, 39, -1):  # line:116:for x in range(49,39,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:117:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:118:time.sleep(10)
                print("今日运行完毕")  # line:119:print("今日运行完毕")
            elif int(a) == 7:  # line:120:elif int(a) == 7:
                for x in range(39, 29, -1):  # line:121:for x in range(39,29,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:122:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:123:time.sleep(10)
                print("今日运行完毕")  # line:124:print("今日运行完毕")
            elif int(a) == 8:  # line:125:elif int(a) == 8:
                for x in range(29, 19, -1):  # line:126:for x in range(29,19,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:127:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:128:time.sleep(10)
                print("今日运行完毕")  # line:129:print("今日运行完毕")
            elif int(a) == 9:  # line:130:elif int(a) == 9:
                for x in range(19, 9, -1):  # line:131:for x in range(19,9,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:132:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:133:time.sleep(10)
                print("今日运行完毕")  # line:134:print("今日运行完毕")
            elif int(a) == 59:
                daishua(shuju[0], '1650852406', shuju[1])
                time.sleep(10)
                daishua(shuju[0], '1651030589', shuju[1])
                time.sleep(10)
                daishua(shuju[0], '1651030679', shuju[1])
            else:  # line:135:else:
                for x in range(9, -1, -1):  # line:136:for x in range(9,-1,-1):
                    daishua(shuju[0], str(hongbaolist[x]), shuju[1])  # line:137:daishua(shuju[0], hongbaolist[x], shuju[1])
                    time.sleep(10)  # line:138:time.sleep(10)
                print("今日运行完毕")  # line:139:print("今日运行完毕")

    input("按下回车键以退出程序")  # line:142:input("按下回车键以退出程序")



