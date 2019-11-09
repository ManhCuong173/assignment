export class user {
  username: String;
  email: String;
  password: any = [];
  gender: boolean;
  birthday: String;
  schoolfee: number;
  mark: any = [];

  constructor(username, email, password, gender, birthday, schoolfee) {
    this.username = username;
    this.email = email;
    this.password[0] = password;
    this.gender = gender;
    this.birthday = birthday;
    this.schoolfee = schoolfee;
  }
}