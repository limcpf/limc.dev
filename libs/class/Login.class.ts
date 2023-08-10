export default class Login {
  name: String;
  accessToken: String;
  refreshToken: String;
  role: String;

  constructor(name: String, accessToken: String, refreshToken: String, role: String) {
    this.name = name;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.role = role;
  }
}
