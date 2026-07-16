export class Monster {
  _id?: string;
  public id: string;
  public name: string;
  public image: string;
  public type: string;
  public hp: string;
  public armor: string;
  public vulnerabilities: string[];
  public immunity: string[];

  constructor(id: string, name: string, image: string, type: string, hp: string, armor: string, vulnerabilities: string[], immunity: string[]) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.type = type;
    this.hp = hp;
    this.armor = armor;
    this.vulnerabilities = vulnerabilities;
    this.immunity = immunity;
  }
}