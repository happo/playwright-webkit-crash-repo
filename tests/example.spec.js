const { test } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.evaluate(`
    document.body.innerHTML = \`
    <video playsinline autoplay style="width:320px;height:320px;">
      <source src="https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4" type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'/>
    </video>
    \`;
  `);
  await new Promise(p => setTimeout(p, 2000));
  await page.evaluate('document.querySelector("video")');
});
