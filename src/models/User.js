export default class User {
  constructor(name, email, password, cellphone) {
    this.id = this.generateId(),
      this.email = email,
      this.password = password,
      this.name = name,
      this.cellphone = cellphone
  }

  generateId() {
    return Math.floor(Math.random() * 10000)
  }
}
