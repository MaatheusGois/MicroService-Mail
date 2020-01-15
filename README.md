# MicroService-Email

> This is a project for study who is possible send e-mails

**MicroService-Emails** is a solution for all.

### Dependencies

- Nodejs:
    - Nodemailer
    - Express

### Installing

The server is written in Django and is  placed on `package.json/` folder. Follow this steps to setup the server:

1. Install dependences of server:

```shell
$ npm install
```

2. Run the server!

```shell
$ npm start
```


To check the api, open `/api`.

#### API

- Send Email `url.com/api/email`

**Send:**

```
{
	"from": "MicroService 🙏' <br.micro.service@gmail.com>",
	"to": ["exemplo@gmail.com"],
	"subject": "This is a Subject",
	"text": "This is a text of the email",
	"html": "<p>This is a html of body</p>",
	"auth": {
		"user": "Your e-mail",
		"pass": "Your password"
	}
	
}
```

**Receive:**

If success:

```
{
    "success": true,
    "msg": "Send request with Success!",
    "content": {
        "accepted": [
            exemplo@gmail.com
        ],
        "rejected": [],
        "envelopeTime": 1192,
        "messageTime": 870,
        "messageSize": 365,
        "response": "250 2.0.0 OK  1579111960 q131sm8869589qke.1 - gsmtp",
        "envelope": {
            "from": "br.micro.service@gmail.com",
            "to": [
                "exemplo@gmail.com"
            ]
        },
        "messageId": "<ef7375c0-6e7f-b143-e22c-d5af0f691926@gmail.com>"
    }
}
```

Else:

```
{
    "success": false,
    "msg": "Error: 'This describe the error' "
}
```