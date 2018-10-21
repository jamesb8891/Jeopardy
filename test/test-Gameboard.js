const chai = require("chai");
const expect = chai.expect;
const Gameboard = require("../JS/classes/Gameboard.js");
global.data = require('../JS/Data.js')

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

  it("should have generateRandomCategoryIds to equal an array", function() {
    gameboard.generateRandomCategoryIds();
    expect(gameboard.randomCategoryIds.length).to.equal(4);
  });

  it("should have generateRandomCategoryIds to equal an array with a length of 4", function() {
    gameboard.generateRandomCategoryIds();
    gameboard.randomIdsLengthSetter();
    expect(gameboard.randomCategoryIds.length).to.equal(4);
  });

  it("should return an object that is a question", function() {
    gameboard.filterQuestions();
    expect(gameboard.filterQuestions).to.be.an.instanceof(Object);
  });

  it("should return an array", function() {
    gameboard.retrieveCategory(0);
    expect(gameboard.gameQuestions).to.be.an.instanceof(Array);
  });

  it("should return an array of 5 questions", function() {
    gameboard.retrieveCategory(0);
    expect(gameboard.gameQuestions.length).to.equal(5);
  });














});