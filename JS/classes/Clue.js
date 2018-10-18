class Clue {
  constructor(question, answer, pointValue, categoryId) {
    this.question = question;
    this.answer = answer;
    this.pointValue = pointValue;
    this.categoryId = categoryId;
  }
}

class DailyDouble extends Clue {
  constructor(question, answer, pointValue, categoryId) {
    super(question, answer, pointValue, categoryId);
  }
}

if (typeof module !== "undefined") {
  module.exports = Clue;
}
