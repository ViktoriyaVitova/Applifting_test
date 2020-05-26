let urlApplifting = 'https://test-stfu-applifting.herokuapp.com/'
let clickButton = '#root > div > main > div.sc-htoDjs.coDSFL > form > button'
let teamLink = '#root > div > input'


module.exports = {
    'Team name propogates to link':  function (client) {
    client
      .url(urlApplifting)
      .waitForElementVisible('#name')
      .waitForElementVisible(clickButton)
      .setValue('#name','MySuperTeam')
      .click(clickButton)
      .assert.value(teamLink, 'stfuandclick.com/MySuperTeam')
      .pause(5000)
 } };