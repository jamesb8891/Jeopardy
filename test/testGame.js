const chai = require('chai');
const expect = chai.expect;
const Game = require('../jsFiles/classes/gameClass.js');


describe('Game', function() {
  
  it('should return true', function() {
    expect(true).to.equal(true);
  })

  it('should be able to have a gamestate of active', function() {
    let game1 = new Game('active');
    expect(game1.gameState).to.equal('active');
  })
    
  it('should have a default round of 1', function() {
    let game1 = new Game();
    expect(game1.round).to.equal(1);
  })

  it('should have a default array of players', function() {
    let game1 = new Game();
    expect(game1.players).to.eql(['player1','player2','player3']);
  })

  it('should be able to increase round to 2', function() {
    let game1 = new Game();
    game1.advanceRound()
   
    expect(game1.round).to.equal(2)
  })

})




