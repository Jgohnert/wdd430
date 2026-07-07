export class Spell {
  _id?: string;
  public id: string;
  public name: string;
  public image: string;
  public damageType: string;
  public level: string;
  public school: string;
  public description: string;

  constructor(id: string, name: string, image: string, damageType: string, level: string, school: string, description: string) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.damageType = damageType;
    this.level = level;
    this.school = school;
    this.description = description;
  }
}