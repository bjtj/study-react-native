# React Native (RN) 익히기 #

## react native upgrade ##

### Upgrading to new React Native versions ###

<https://reactnative.dev/docs/upgrading>

<https://react-native-community.github.io/upgrade-helper/?from=0.60.3&to=0.63.4>

```
$ yarn
$ cd ios
$ pod install
$ cd ..
$ npx react-native upgrade
```

## CocoaPods could not find compatible versions for pod "Folly" #30015 ##

<https://github.com/facebook/react-native/issues/30015#issuecomment-698127149>

```
pod update Folly --no-repo-update
```


## `/ios/Pods/Target Support Files/Yoga/Yoga.debug.xcconfig: unable to open file (in target "Yoga" in project "Pods")` ##

<https://stackoverflow.com/a/60754612/5676460>

```
rm -rf ~/Library/Developer/Xcode/DerivedData
rm -rf node_modules && rm -rf ios/build/* && rm -rf android/build/* && rm -rf $TMPDIR/react-* && yarn cache clean && rm -rf /tmp/haste-map-react-native-packager-* && yarn
```

## `Showing Recent Messages Undefined symbol: associated type descriptor for Swift.ExpressibleByFloatLiteral.FloatLiteralType` ##

<https://blog.cpming.top/p/react-native-0-62-undefined-symbol>

Solution 확인

## 설치 ##

Xcode 및 Android Studio 설치


**Node.js**

```
brew install node
brew install watchman # file modification detector
```

**react-native-cli**

```
npm install -g react-native-cli
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
