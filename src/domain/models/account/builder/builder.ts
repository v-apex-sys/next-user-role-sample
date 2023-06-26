import { AdminAccount } from '../adminAccount';
import { ViewerAccount } from '../viewerAccount';
import { CompanyName, Email, Id, Name, Password, RoleType } from '../vo';

export interface Builder {
  addId(Id: Id): this;
  addName(name: Name): this;
  addEmail(email: Email): this;
  addPassword(password: Password): this;
  addCompanyName(companyName: CompanyName): this;
  getResult(role: 'admin'): AdminAccount;
  getResult(role: 'viewer'): ViewerAccount;
  getResult(role: RoleType): AdminAccount | ViewerAccount;
}
