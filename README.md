# ReactNativeStudy
React Native를 공부해보자!

## React-Native
React를 이용하여 네이티브 앱을 만들 수 있는 프레임워크  
[참고] http://facebook.github.io/react-native/docs/getting-started

### JSX
자바스크립트 코드 안에서 XML을 사용하는 syntax

### Component
스크린에 랜더링되는 모든 UI들

### props
Component의 생성 매개변수로 생성될때 전달받아 내부에서 사용됨
Component이 살아있는 동안 값이 유지(고정)됨
```JSX
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Rexxar' />
      </View>
    );
  }
}
```

### state
props와는 다르게 변경할 수 있는 데이터로 Component 생성자에서 초기화/setState로 변경
```JSX
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}
```

### style
Component의 props 중 하나로 css 같은 역할로 style을 지정  
StyleSheet.create를 이용해 스타일들을 모아서 정의
```JSX
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text> {*/red*/}
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text> {*/blue*}
      </View>
    );
  }
}
```


## Expo
네이티브 개발을 따로 하지 않아도 되도록 SDK와 빌드 환경을 제공

Expo 프로젝트 생성 및 실행  
```npm install -g expo-cli```  
```expo init {PROJECT_NAME}```  
```cd {PROJECT_NAME}``` 
```expo start```  

Expo 프로젝트 빌드  
```npm add -D exp```  
```expo build:{TARGET_PLATFORM}```  
