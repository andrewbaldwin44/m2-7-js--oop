// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = 'cat';
    this.breed = breed;
    this.name = name;
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 100;
  }

  sleep(hours) {
    this.tiredness -= hours * 5;
    this.happiness += hours * 10;
  }

  eat(kibble) {
    this.hunger -= kibble / 5;
    this.happiness += kibble;
  }

  play(minutes) {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 4;
  }

  wait(minutes) {
    this.tiredness += minutes / 2;
    this.hunger += minutes * 5;
    this.loneliness += minutes / 20;
    this.happiness -= minutes * 4;
  }
}

const boots = new Cat('Boots', 'Siamese');

boots.sleep(12);
boots.wait(15);
boots.eat(20);
boots.play(40);

console.log(boots);
