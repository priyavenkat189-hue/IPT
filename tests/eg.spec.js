import {test} from '@playwright/test';
test('open a url',async({page})=>{
  await page.goto('https://www.amazon.in/');
  await page.wait for TIMEOUT(3000);
await page.goto('https://www.flipkart.in/');
  await page.wait for TIMEOUT(3000);
  await 

});

