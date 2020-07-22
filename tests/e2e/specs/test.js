// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': (browser) => {
    browser
      .url('http://localhost:8080/#/singin')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.container')
      .assert.containsText('h1', 'Vue Vuetify Admin Template')
      .assert.elementCount('img', 1)
      .end()
  }
}
