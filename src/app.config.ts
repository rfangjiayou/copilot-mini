export default defineAppConfig({
  pages: [
    'pages/Sentence/index',
    'pages/Profile/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/Sentence/index',
        text: '广场',
        // iconPath: 'assets/icons/sentence.png',
        // selectedIconPath: 'assets/icons/sentence-active.png'
      },
      {
        pagePath: 'pages/Profile/index',
        text: '我的',
        // iconPath: 'assets/icons/profile.png',
        // selectedIconPath: 'assets/icons/profile-active.png'
      }
    ],
    color: '#000',
    selectedColor: '#6190E8',
    backgroundColor: '#fff',
    borderStyle: 'black'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
