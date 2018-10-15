const chai = require('chai');
const expect = chai.expect;
const Player = require('../JS/classes/Player.js');

describe('Player', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  })

  it('should have a default score of 0', function() {
    let player1 = new Player();
    expect(player1.score).to.equal(0);
  })

  it('should be able to have an id', function() {
    let player1 = new Player('player1');
    expect(player1.id).to.equal('player1');
  })
})