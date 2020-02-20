import path from 'path';


const iosCaps = {
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: 'iPhone 11 Pro Max',
  platformVersion: '13.3',
  app: undefined,
  showIOSLog: false,
};

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'Android',
  platformVersion: null,
  app: undefined
};

const serverConfig = {
  host: process.env.APPIUM_HOST || 'localhost',
  port: process.env.APPIUM_PORT || 4723
};


const iosBuild = path.resolve(__dirname, '..', '..', '..', 'build', 'ios', 'Debug-iphonesimulator', 'Runner.app');
const androidBuild = path.resolve(__dirname, '..', '..', '..', 'build', 'app', 'outputs', 'apk', 'debug', 'app-debug.apk');

export {
  iosBuild,
  androidBuild,
  iosCaps,
  androidCaps,
  serverConfig
};
