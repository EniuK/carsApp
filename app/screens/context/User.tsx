import { action, makeObservable, observable } from "mobx"

class User {
  name: string
  surrname: string
  hasAccount: boolean

  constructor(name: string, surrname: string, hasAccount: boolean) {
    this.name = name
    this.surrname = surrname
    this.hasAccount = hasAccount

    makeObservable(this, {
      name: observable,
      surrname: observable,
      hasAccount: observable,
      updateData: action,
    })
  }

  updateData(name, surrname, hasAccount) {
    this.name = name
    this.surrname = surrname
    this.hasAccount = hasAccount
  }
}

export default User
