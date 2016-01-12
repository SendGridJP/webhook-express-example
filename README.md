# webhook-express-example

SendGridのWebhook受信アプリケーションのサンプルコードです。
Event WebhookおよびParse Webhookに対応しています。
[Node.js](https://nodejs.org)/[Express](http://expressjs.com/)上で動作します。

# 前提条件
- Node.js：0.12.9以降

# 起動方法
```
$ git clone https://github.com/SendGridJP/webhook-express-example
$ cd webhook-express-example
$ npm install
$ npm start
```

# SendGridの設定
## Event Webhook
- Webポータルで[SETTINGS > Mail Settings > Event Notification](https://app.sendgrid.com/settings/mail_settings)を開きます。
- HTTP POST URLを設定します。  
http://%ホスト名%/webhook-express-example/EventReceiver
- SELECT ACTIONSで受信したいイベントのチェックをONにします。
- 「Test Your Integration」ボタンを選択してイベントがWebアプリケーションにPOSTされることを確認します。
- SendGrid経由で[送信](https://sendgrid.com/docs/API_Reference/Web_API/mail.html)したメールの各イベントがアプリケーションにPOSTされることを確認します。

## Parse Webhook
- Webポータルで[SETTINGS > Inbound Parse](https://app.sendgrid.com/settings/parse)を開きます。
- 「Add Host & URL」ボタンを選択して各設定を行います。[参考](https://sendgrid.kke.co.jp/blog/?p=827)
  - HOSTNAME：メールの宛先ドメイン。
  - URL：POSTを受信するWebアプリケーションのURL。
  - SPAM CHECK：OFF
  - SEND RAW：OFF
- 「Save」ボタンを選択して保存します。
- HOSTNAMEに設定したドメインの任意のメールアドレス宛にメールを送信して、受信したメールの内容がWebアプリケーションにPOSTされることを確認します。
