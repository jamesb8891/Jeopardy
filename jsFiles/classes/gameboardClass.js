class GameBoard {
  constructor(askedQuestions, unaskedQuestions, categories) {
    this.askedQuestions = askedQuestions;
    this.unaskedQuestions = unaskedQuestions;
    this.categories = categories;
  }
}


if (typeof module !== 'undefined') {
  module.exports = GameBoard;
}