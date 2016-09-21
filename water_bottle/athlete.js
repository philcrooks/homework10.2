function Athlete() {
  mHydration = 100;
  mDistanceCovered = 0;

  return {
    get hydration() {
      return mHydration;
    },
    get distanceCovered() {
      return mDistanceCovered;
    },
    run: function() {
      var amount = 0;
      if (mHydration >= 10)
        amount = 10;
      else
        amount = mHydration;
      mHydration -= amount;
      mDistanceCovered += amount;
    },
    drink: function(bottle) {
      mHydration += bottle.drink();
    }
  }
}

module.exports = Athlete;