exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  sauceBuild: 'SauceLabs Troubleshooting',
  seleniumAddress: `http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:80/wd/hub`,
  baseUrl: 'https://the-internet.herokuapp.com',
  specs: ['./tests/login.tests.js'],
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
  capabilities: {
    browserName: 'Chrome',
    platform: 'Windows 10',
    version: '58.0',
    screenResolution: '1920x1080'
  }
};