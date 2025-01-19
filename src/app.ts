import { Component } from 'react';
import 'taro-ui/dist/style/components/input.scss'; // 引入 AtInput 样式
// import 'taro-ui/dist/style/components/button.scss'; // 引入 AtButton 样式
import './app.less'; // 引入全局样式

interface AppProps {
  children: React.ReactNode;
}

class App extends Component<AppProps> {
  render() {
    return this.props.children;
  }
}

export default App;
