var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
ForagerBee.prototype = Object.create(Bee);
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.food = Grub.prototype.food;
ForagerBee.prototype.eat = Grub.prototype.eat;
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};
