import wd from 'wd';
import chai from 'chai';
import {
  iosCaps,
  serverConfig,
  iosBuild
} from '../helpers/config';

const {assert} = chai;

describe('iOS Testing', function () {

  // Setting up iOS Appium Driver
  let driver;
  before(async function () {
    driver = await wd.promiseChainRemote(serverConfig);

    const caps = {
      ...iosCaps,
      app: iosBuild,
    };

    await driver.init(caps);
  });

  after(async function () {
    await driver.quit();
  });

  // Testing our application

  it('should click the button 5 times and the text should be 5', async function () {
    const button = await driver.waitForElementByAccessibilityId('Increment');

    // As for Android, I use this awkward way because of a Flutter issue: https://github.com/flutter/flutter/issues/17988
    let view = await driver.waitForElementByXPath('//XCUIElementTypeOther[@name="0"]')


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
    view = await driver.waitForElementByXPath('//XCUIElementTypeOther[@name="5"]')
    let textViewValueNew = await view.text()
    assert.equal(textViewValueNew, '5');
  });
});
