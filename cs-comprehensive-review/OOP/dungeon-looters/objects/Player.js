//Problem Two: What happens if we want to create more classes?
import Knight from "./classes/Knight";
import Mage from "./classes/Mage";
import Priest from "./classes/Priest";

export default class Player {
  constructor(newClass) {
    this.health = 100;
    this.class = new newClass();
  }
  dealDamage(enemyPlayer) {
    // Problem One: What happens if we want to change this damage value?
    enemyPlayer.takeDamage(10);
  }
  takeDamage(damage) {
    self.health -= damage;
  }
}
