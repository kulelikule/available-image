---
title: Simple Usage
order: 1
---

无

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
