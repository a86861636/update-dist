"use strict"
const ssh = require("./ssh.js")

//服务器配置
const Server = {
  host: '',
  username: '',
  password: ''
}
//本地文件路径
const LocalDir = 'dist'
//远程路径
const RemoteDir = '/opt/html/test'

//远程路径不合格
if (!new RegExp('^/[\\S\\s]+$', 'g').test(RemoteDir)) return

//删除原来文件夹
ssh.Exec(Server, `rm -r ${RemoteDir}`, function (err, data) {
  //上传文件
  ssh.UploadDir(Server, LocalDir, RemoteDir, function (err) {
    console.log(err ? err : '上传成功')
  })
})