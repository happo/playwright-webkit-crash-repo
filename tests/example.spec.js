const { test } = require('@playwright/test');

test('basic test', async ({ page }) => {
  const src = 'https://static.digitecgalaxus.ch/Files/3/8/9/7/2/2/6/6/iPhone_12_PDP_Image_Position-3__en-US.jpg';
  const start = Date.now();
  await page.evaluate(`document.body.innerHTML = '<img src="${src}" style="width:200px; height: 200px">';`);
  await page.evaluate(`new Promise((resolve) => document.querySelector("img").addEventListener("load", resolve))`);
  console.log('image load time in ms', Date.now() - start);
});
