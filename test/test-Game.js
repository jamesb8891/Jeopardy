const chai = require("chai");
const expect = chai.expect;
const Game = require("../JS/classes/Game.js");
const data = require("../JS/Data.js");

describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  it("should return true", function() {
    expect(true).to.equal(true);
  });

  it("should be able to have a gamestate of active", function() {
    expect(game.gameState).to.equal("active");
  });

  it("should have a default round of 1", function() {
    expect(game.round).to.equal(1);
  });

  it("should be able to increment rounds", function() {
    game.advanceRound();
    expect(game.round).to.equal(2);
  });

  it("should be able to increase round to 2", function() {
    game.advanceRound();
    expect(game.round).to.equal(2);
  });

  it("should be able to increase round to 3", function() {
    game.advanceRound();
    game.advanceRound();
    expect(game.round).to.equal(3);
  });

  it("should have a default turnCounter of 1", function() {
    expect(game.turnCounter).to.equal(1);
  });

  it("should be able to increment turns", function() {
    game.turnAssignment();
    expect(game.turnCounter).to.equal(2);
  });

  it("should be able to reset turn assignment to 1 if turn assignment gets to 4", function() {
    game.turnAssignment();
    game.turnAssignment();
    game.turnAssignment();
    expect(game.turnCounter).to.equal(1);
  });
});
