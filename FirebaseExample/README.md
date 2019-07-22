

# 따라하기 #

```
yarn add @react-native-firebase/app
yarn add @react-native-firebase/analytics
cd ios && pod install && cd ..
```

# Analytics 예제 #

* https://invertase.io/oss/react-native-firebase/v6/analytics/quick-start


```
import analytics from '@react-native-firebase/analytics';

async function onProductView() {
	await analytics().logEvent('product_view', {
		id: '123456789',
		color: 'red',
		via: 'ProductCatalog',
	});
}
```
