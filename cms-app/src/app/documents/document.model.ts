export class Document {
  _id?: string;
  public id: string;
  public name: string;
  public description: string;
  public url: string;
  public children: string[];

  constructor(id: string, name: string, description: string, docUrl: string, children: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.url = docUrl;
    this.children = children;
  }
}