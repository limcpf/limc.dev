export class AdminDto {
  id?: String;
  name: String;
  password: String;

  constructor(name: string, password: string, id?: string) {
    if(id) this.id = id;
    this.name = name;
    this.password = password;
  }
}