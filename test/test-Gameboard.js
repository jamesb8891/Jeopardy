const chai = require("chai");
const expect = chai.expect;
const Gameboard = require("../JS/classes/Gameboard.js");
const data = require("../JS/Data.js");

describe("Gameboard", function() {
  beforeEach(function() {
    gameboard = new Gameboard();
  });

  it("should return true", function() {
    expect(true).to.equal(true);
  });

  it("should have gameCategories to equal an empty array", function() {
    expect(gameboard.gameCategories).to.eql([]);
  });

  it("should have gameQuestions to equal an empty array", function() {
    expect(gameboard.gameQuestions).to.eql([]);
  });

  it("should have randomCategoryIds to equal an empty array", function() {
    expect(gameboard.randomCategoryIds).to.eql([]);
  });














});