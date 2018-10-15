const chai = require('chai');
const expect = chai.expect;
const Clue = require('../jsFiles/classes/clueClass.js');

describe('Clue', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  })

  it('should be able to have a question', function() {
    let clue1 = new Clue('One of the most popular shows on the Food Network is "The Essence of" him');
    expect(clue1.question).to.equal('One of the most popular shows on the Food Network is "The Essence of" him');
  })

  it('should be able to have answer', function() {
    let clue1 = new Clue('One of the most popular shows on the Food Network is "The Essence of" him', 'Emeril')
    expect(clue1.answer).to.equal('Emeril')
  })

  it('should be able to have a point value', function() {
    let clue1 = new Clue('One of the most popular shows on the Food Network is "The Essence of" him', 'Emeril', 100)
    expect(clue1.pointValue).to.equal(100)
  })

  it('should be able to have a categoryId', function() {
    let clue1 = new Clue('One of the most popular shows on the Food Network is "The Essence of" him', 'Emeril', 100, 1)
    expect(clue1.categoryId).to.equal(1)
  })
})

describe('DailyDouble', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  })
})