const noSuchElement = require('../pages/nosuchelement.po');

describe('Dynamic Controls Test', () => {
  it('Remove/Add checkbox', () => {
    const EC = protractor.ExpectedConditions;
    browser.get('/dynamic_controls');
    noSuchElement.btnButton().click();
    browser.wait(EC.not(EC.visibilityOf(noSuchElement.chkCheckbox())), 15000);
    try {
      noSuchElement.chkCheckbox().click();
    }
    catch(e){
      console.log('el elemento no esta');

    }

  });
});
