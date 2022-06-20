module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress111 ！',
  description: '这是我的第一个 VuePress 站点1',
  base: '/', // 部署站点的基础路径
  // 导航栏配置，最深两级嵌套
  navbar: [
  {
    text:'帮助',
    link:'/guild/'
  },
  {
    text:'贡献',
    link:'/contributing/'
  },],
  sidebar:{
    '/guild/':[
      {
        children: ['/guild/README.md'],
      }
    ]
  }
}