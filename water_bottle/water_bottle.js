function WaterBottle () {
  var mVolume = 0;

  return {
    get volume() {
      return mVolume;
    },
    fill: function() {
      mVolume = 100;
    },
    drink: function() {
      var amount = 0;
      if (mVolume >= 10)
        amount = 10;
      else
        amount = mVolume;
      mVolume -= amount;
      return amount;
    },
    empty: function() {
      mVolume = 0;
    }
  }
}

module.exports = WaterBottle;