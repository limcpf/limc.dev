export class Admin {
  id: String;
  name: String;
  password: String;

  constructor(id:string, name: string, password: string) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}