class Player {
  constructor(id) {
    this.score = 0;
    this.id = id;
  }
}

if (typeof module !== "undefined") {
  module.exports = Player;
}
