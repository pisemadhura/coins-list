var coins = {
    currency: [200, 100, 50, 20, 2, 1],

  minimumCoins: function(pennies) {
    var resultb = {},
        currentCoin;
    var x = 0;
    while (pennies) {
      currentCoin = this.currency[x++];
      if (pennies >= currentCoin) {
        resultb[currentCoin] = this.numberOfCoins(pennies, currentCoin);
        pennies = this.remainingPennies(pennies, currentCoin);
      }
    }
    return resultb;
  },

  numberOfCoins: function(pennies, coin) {
    return Math.floor(pennies / coin);
  },

  remainingPennies: function(pennies, coin) {
    return pennies % coin;
  }
};