export class AdminDto {
  id?: string;
  name: string;
  password: string;

  constructor(name: string, password: string, id?: string) {
    if (id) this.id = id;
    this.name = name;
    this.password = password;
  }
}
