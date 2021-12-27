## 说明

使用node.js的ssh2库连接服务器上传文件

指定上传本地文件夹到指定服务器路径

## 配置app.js

服务器配置
```js
const Server = {
  host: '',
  username: '',
  password: ''
}
```

本地文件路径

```js
const LocalDir = 'dist'
```

远程路径
```js
const RemoteDir = '/opt/html/test'
```

## 运行
下载相关的库然后运行
```js
node app.js
```
