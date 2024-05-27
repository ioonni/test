"""

望潮 by Pearson
仅供学习使用
登录(login)接口整个url,ua
类似于 https://xmt.taizhou.com.cn/prod-api/user-read/app/login?id=abcd&sessionId=abcd&deviceId=A-B-C-D#UA
wangchao = "url?ua@"
gitthub https://github.com/Pears0nLee/SnakeMelon/tree/master
tg https://t.me/Snake_Melon
"""

import hashlib
import random
import string
import time
import requests
import os
from datetime import datetime


def get_env(keys: str) -> list:
    cookies = os.getenv(keys)
    if cookies:
        cookies = cookies.split("@")
        length = len(cookies)
        print(f"---WC获取到{length}个账号---")
        return cookies
    else:
        print("未获取到环境变量")


def generate_random_string(length):
    letters_and_digits = string.ascii_lowercase + string.digits
    return ''.join(random.choice(letters_and_digits) for i in range(length))


class WC:
    def __init__(self, cookie):
        cookie = cookie.split("?")
        self.ua = cookie[-1]
        self.id = cookie[1].split("&")[0].split("=")[1]
        self.sessionId = cookie[1].split("&")[1].split("=")[1]
        self.id_dict = {}
        self.nickname, self.JSESSIONID = self.get_nickname()

    def run(self):
        self.draw()
        task_list = self.get_task()
        self.read(task_list)
        self.draw()

    def get_nickname(self):
        try:
            time.sleep(random.randint(1, 3))
            url = "https://xmt.taizhou.com.cn/prod-api/user-read/app/login"
            headers = {'Host': 'xmt.taizhou.com.cn',
                       'Connection': 'keep-alive',
                       'Pragma': 'no-cache',
                       'Cache-Control': 'no-cache',
                       'User-Agent': self.ua,
                       'Accept': '*/*', 'X-Requested-With': 'com.shangc.tiennews.taizhou',
                       'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty',
                       'Referer': 'https://xmt.taizhou.com.cn/readingAward',
                       'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'}
            params = {'id': self.id, 'sessionId': self.sessionId}
            response = requests.get(url, params=params, headers=headers)
            JSESSIONID = response.cookies.get("JSESSIONID")
            nickname = response.json().get("data").get("nickName")
            if nickname:
                print(f"[{nickname}]---登陆成功")
                return nickname, JSESSIONID
            else:
                return "读友", JSESSIONID


        except:
            pass

    def get_task(self):
        try:
            now = datetime.today().strftime('%Y%m%d')
            url = f'https://xmt.taizhou.com.cn/prod-api/user-read/list/{now}'
            headers = {'Host': 'xmt.taizhou.com.cn', 'Connection': 'keep-alive', 'Pragma': 'no-cache',
                       'Cache-Control': 'no-cache',
                       'User-Agent': self.ua,
                       'Accept': '*/*', 'X-Requested-With': 'com.shangc.tiennews.taizhou',
                       'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors',
                       'Sec-Fetch-Dest': 'empty', 'Referer': 'https://xmt.taizhou.com.cn/readingAward/',
                       'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                       'Cookie': f"JSESSIONID={self.JSESSIONID}"}
            response = requests.get(url, headers=headers)
            if response.json().get("msg") == "操作成功":
                print(f"[{self.nickname}]---获取阅读列表成功")
                task_list = response.json()['data']['articleIsReadList']
                return task_list
        except:
            pass

    def read(self, task_list: list):
        try:
            for i in task_list:
                id = i.get("id")
                newsId = i.get("newsId")
                title = i.get("title")
                print(f"[{self.nickname}]---准备阅读[{title}]")
                time.sleep(random.randint(3, 5))
                a8 = generate_random_string(8)
                b4 = generate_random_string(4)
                c4 = generate_random_string(4)
                d4 = generate_random_string(4)
                e12 = generate_random_string(12)
                strs = f'{a8}-{b4}-{c4}-{d4}-{e12}'
                now = int(time.time() * 1000)
                sha = f'/api/article/detail&&{self.sessionId}&&{strs}&&{now}&&FR*r!isE5W&&64'
                sha256 = hashlib.sha256()
                sha256.update(sha.encode('utf-8'))
                signature = sha256.hexdigest()
                url = 'https://vapp.taizhou.com.cn/api/article/detail'
                headers = {'X-SESSION-ID': self.sessionId, 'X-REQUEST-ID': f'{strs}',
                           'X-TIMESTAMP': f'{now}', 'X-SIGNATURE': f'{signature}', 'X-TENANT-ID': '64',
                           'User-Agent': self.ua,
                           'X-ACCOUNT-ID': self.sessionId, 'Cache-Control': 'no-cache', 'Host': 'vapp.taizhou.com.cn',
                           'Connection': 'Keep-Alive', 'Accept-Encoding': 'gzip'}
                params = {'id': newsId}
                response = requests.get(url, params=params, headers=headers)
                if response.json()['message'] == 'success':
                    print(f"[{self.nickname}]---阅读成功")
                    time.sleep(3)
                    now = int(time.time() * 1000)

                    sha = f'&&{id}&&TlGFQAOlCIVxnKopQnW&&{now}'
                    md5 = hashlib.md5()
                    md5.update(sha.encode('utf-8'))
                    signature = md5.hexdigest()
                    headers = {'Host': 'xmt.taizhou.com.cn', 'Connection': 'keep-alive', 'Pragma': 'no-cache',
                               'Cache-Control': 'no-cache',
                               'User-Agent': self.ua,
                               'Accept': '*/*', 'X-Requested-With': 'com.shangc.tiennews.taizhou',
                               'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty',
                               'Referer': 'https://xmt.taizhou.com.cn/readingAward/',
                               'Accept-Encoding': 'gzip, deflate',
                               'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7',
                               'Cookie': f"JSESSIONID={self.JSESSIONID}"}
                    params = {'articid': id, 'timestamp': now, 'signature': signature}
                    response = requests.get('https://xmt.taizhou.com.cn/prod-api/already-read/article', params=params,
                                            headers=headers)
                    if response.json().get("msg") == "操作成功":
                        print(f"[{self.nickname}]---准备阅读下一个文章")
        except:
            pass

    def draw(self):
        try:
            headers = {'Host': 'srv-app.taizhou.com.cn', 'Connection': 'keep-alive', 'Pragma': 'no-cache',
                       'Cache-Control': 'no-cache',
                       'User-Agent': self.ua,
                       'Accept': '*/*', 'X-Requested-With': 'com.shangc.tiennews.taizhou',
                       'Sec-Fetch-Site': 'same-origin', 'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty',
                       'Referer': 'https://srv-app.taizhou.com.cn/luckdraw/', 'Accept-Encoding': 'gzip, deflate',
                       'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7', 'Cookie': ''}
            params = {'accountId': self.id, 'sessionId': self.sessionId}
            response = requests.get('https://srv-app.taizhou.com.cn/tzrb/user/loginWC', params=params,
                                    headers=headers)
            JSESSIONID = response.cookies.get("JSESSIONID")
            url = 'https://srv-app.taizhou.com.cn/tzrb/userAwardRecordUpgrade/save'
            headers = {'Host': 'srv-app.taizhou.com.cn', 'Connection': 'keep-alive', 'Content-Length': '13',
                       'Pragma': 'no-cache', 'Cache-Control': 'no-cache',
                       'User-Agent': self.ua,
                       'Content-type': 'application/x-www-form-urlencoded', 'Accept': '*/*',
                       'Origin': 'https://srv-app.taizhou.com.cn',
                       'X-Requested-With': 'com.shangc.tiennews.taizhou', 'Sec-Fetch-Site': 'same-origin',
                       'Sec-Fetch-Mode': 'cors', 'Sec-Fetch-Dest': 'empty',
                       'Referer': 'https://srv-app.taizhou.com.cn/luckdraw/',
                       'Accept-Encoding': 'gzip, deflate',
                       'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7', 'Cookie': f"JSESSIONID={JSESSIONID}"}
            payload = {'activityId': '67'}
            response = requests.post(url, headers=headers, data=payload)
            print(response.json())
            print(f"[{self.nickname}]---{response.json().get('message')}")

        except:
            pass


def start():
    cookies = get_env("wangchao")
    print("by Pearson,仓库地址https://github.com/Pears0nLee/SnakeMelon/tree/master\n"
          "欢迎点赞")
    print("https://t.me/Snake_Melon")
    for cookie in cookies:
        WC(cookie).run()


if __name__ == "__main__":
    start()
