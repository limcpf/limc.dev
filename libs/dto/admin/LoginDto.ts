export default class LoginDto {
  name: string;
  accessToken: string;
  refreshToken: string;
  role: string;

  constructor(name: string, accessToken: string, refreshToken: string, role: string) {
    this.name = name;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.role = role;
  }
}
