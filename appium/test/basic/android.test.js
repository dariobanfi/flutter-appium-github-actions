import wd from 'wd';
import chai from 'chai';
import {
  androidCaps,
  serverConfig,
  androidBuild
} from '../helpers/config';

const {assert} = chai;

describe('Android Testing', function () {

  // Setting up Android Appium Driver
  let driver;
  before(async function () {
    driver = await wd.promiseChainRemote(serverConfig)

    const caps = {
      ...androidCaps,
      app: androidBuild,
    };

    await driver.init(caps);
  });

  after(async function () {
    await driver.quit();
  });

  // Testing our application
  it('should click the button 5 times and the text should be 5', async function () {
    // Using XPath like this will create fragile tests for future changes but it looks that
    // accessibility ids are not yet supported by Flutter: https://github.com/flutter/flutter/issues/17988
    const button = await driver.waitForElementByXPath('//android.widget.Button[1]');
    const view = await driver.waitForElementByXPath('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View[3]')


    // Let's check that the counter says 0 at the beginning
    const textViewValue = await view.text()
    assert.equal(textViewValue, '0');

    // Click the button 5 times
    await button.click();
    await button.click();
    await button.click();
    await button.click();
    await button.click();

    // Let's check if the counter is 5
    let textViewValueNew = await view.text()
    assert.equal(textViewValueNew, '5');
  });
});
