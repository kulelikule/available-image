# 获取可用的图片地址

available-image

- 作者：千绪
- 仓库地址：https://gitlab.alibaba-inc.com/qianxu.ljj/deep-fetch-select-field

Get an available image address
* 📦 0.7kb mini library
* 💪 Easy to use api

## Install
```
npm install available-image -S
```

## Usage
```js
import getImageUrl from 'available-image';

(async () => {
  // image url
  const baseUrl = await getImageUrl(['Non-existent.png', 'https://www.baidu.com/img/bd_logo1.png']);
  console.log(baseUrl);

  // base64 image
  const base64Url = await getImageUrl(['Non-existent.png', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABA...']);
  console.log(base64Url);
})();
```
