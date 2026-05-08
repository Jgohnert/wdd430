export class Document {
  public id: number;
  public name: string;
  public description: string;
  public docUrl: string;
  public children: string[];

  constructor(id: number, name: string, description: string, docUrl: string, children: string[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.docUrl = docUrl;
    this.children = children;
  }
}