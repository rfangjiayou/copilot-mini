import { Component } from 'react';
import "taro-ui/dist/style/components/input.scss";
import "taro-ui/dist/style/components/icon.scss";
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
