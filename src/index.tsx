function loadImage(url: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img.src);;
    img.onerror = () => resolve('');
  });
}

async function getImageUrl(urlList: string[]): Promise<string> {
  if (urlList instanceof Array) {
    for (const url of urlList) {
      const targetUrl = await loadImage(url);
      if (targetUrl) return targetUrl;
    }
    return Promise.reject('No available url');
  }
  return Promise.reject('Params is not valid');
}

export default getImageUrl;
