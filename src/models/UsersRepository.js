import { mockedUsers } from "../components/data/users/data";
import User from "./User";

class UsersList {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id == id);
  }

  add(user) {
    this.users.push(user);
  }

  delete(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  Update(id, email, password, name, cellphone) {

    const user = this.get(id);

    if (user) {
      user.id = id;
      user.email = email;
      user.password = password;
      user.name = name;
      user.cellphone = cellphone;
    }

    return user;
  }
}

const usersRepository = new UsersList();
mockedUsers.map((user) => {
  const newUser = new User(user.email, user.password, user.name, user.cellphone || 0);

  usersRepository.add(newUser);
})
export default usersRepository;