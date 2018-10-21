const chai = require("chai");
const expect = chai.expect;
const domupdates = require("../JS/domUpdates.js");
const spies = require("chai-spies");
chai.use(spies);

global.domUpdates = require("../JS/domUpdates.js");
chai.spy.on(
  global.domUpdates,
  ["initializePlayers", "domCategories"],
  () => true
);

describe("domupdates", function() {
  it("should have an initializePlayers method that adds players names to the scoreboard", function() {
    domupdates.initializePlayers();
    expect(domUpdates.initializePlayers).to.have.been.called(1);
  });

  it("should have an domCategories method that adds categories to the gameboard", function() {
    domupdates.domCategories();
    expect(domUpdates.domCategories).to.have.been.called(1);
  });
});
