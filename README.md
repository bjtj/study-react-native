# React Native (RN) 익히기 #


## 설치 ##

Xcode 및 Android Studio 설치


**Node.js**

```
brew install node
brew install watchman # file modification detector
```

**react-native-cli**

```
enpm install -g react-native-cli
```

**adb path**

기본 설치 위치

`$HOME/Library/Android/sdk/platform-tools/adb`

```
export PATH=$PATH:$HOME/Library/Android/sdk/platform-tools
```

## 프로젝트 만들기 ##


```
react-native init HelloRN
cd HelloRN
```

Metro 서버 실행

```
react-native start
```

App 구동

```
react-native run-android
react-native run-ios
```
