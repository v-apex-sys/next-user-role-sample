import { RoleType } from '@/domain//models/role/role';
import { Account } from '../account';
import { AdminAccount } from '../adminAccount';
import { ViewerAccount } from '../viewerAccount';
import { CompanyName, Email, Id, Name, Password } from '../vo';
import { Builder } from './builder';

export class AccountBuilder implements Builder {
  private _account: Account;

  constructor(account: Account) {
    this._account = account;
  }

  // ***** addメソッド
  addId(id: Id): this {
    this._account.id = id;
    return this;
  }
  addName(name: Name): this {
    this._account.name = name;
    return this;
  }
  addEmail(email: Email): this {
    this._account.email = email;
    return this;
  }
  addPassword(password: Password): this {
    this._account.password = password;
    return this;
  }
  addCompanyName(companyName: CompanyName): this {
    this._account.companyName = companyName;
    return this;
  }
  // ***** addメソッド、ここまで

  getResult(role: 'admin'): AdminAccount;
  getResult(role: 'viewer'): ViewerAccount;
  getResult(role: RoleType): AdminAccount | ViewerAccount {
    return this.build(role);
  }

  build(role: RoleType): AdminAccount | ViewerAccount {
    if (role === 'admin') {
      return new AdminAccount(
        this._account.id,
        this._account.name,
        this._account.email,
        this._account.password,
        this._account.companyName,
      );
    }
    return new ViewerAccount(
      this._account.id,
      this._account.name,
      this._account.email,
      this._account.password,
    );
  }
}
