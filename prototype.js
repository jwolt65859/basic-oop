function Cat(name) {
  this.name = name;
}

Cat.prototype.talk = function() {
  console.log('meow meow');
}

const myCat = new Cat('tiger');
console.log(myCat);

myCat.talk()