const puppeteer = require('puppeteer');

async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport to exactly 320x80 to see the constraint
  await page.setViewport({ width: 320, height: 80 });

  try {
    // Screenshot downtown platform 13
    await page.goto('http://localhost:3005/downtown/platform/13');
    await page.waitForTimeout(2000); // Wait for page to load
    await page.screenshot({ path: 'downtown-platform-13.png' });
    console.log('Screenshot saved: downtown-platform-13.png');

    // Screenshot downtown platform 14
    await page.goto('http://localhost:3005/downtown/platform/14');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'downtown-platform-14.png' });
    console.log('Screenshot saved: downtown-platform-14.png');

    // Screenshot allandale platform 1
    await page.goto('http://localhost:3005/allandale/platform/1');
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'allandale-platform-1.png' });
    console.log('Screenshot saved: allandale-platform-1.png');

  } catch (error) {
    console.error('Error taking screenshots:', error);
  }

  await browser.close();
}

takeScreenshot();