var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.eat = Grub.prototype.eat;
HoneyMakerBee.prototype.food = Grub.prototype.food;
HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
  return this.honeyPot;
};
HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
  return this.honeyPot;
};


