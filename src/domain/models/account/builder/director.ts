import { AdminAccount } from '../adminAccount';
import { ViewerAccount } from '../viewerAccount';
import { CompanyName, Email, Id, Name, Password } from '../vo';
import { Builder } from './builder';

export class Director {
  constructor(private builder: Builder) {}

  // admin
  buildAdminAccount(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
    companyName: CompanyName,
  ): AdminAccount {
    return this.builder
      .addId(id)
      .addName(name)
      .addEmail(email)
      .addPassword(password)
      .addCompanyName(companyName)
      .getResult('admin');
  }

  // viewer
  buildViewerAccount(
    id: Id,
    name: Name,
    email: Email,
    password: Password,
  ): ViewerAccount {
    return this.builder
      .addId(id)
      .addName(name)
      .addEmail(email)
      .addPassword(password)
      .getResult('viewer');
  }
}
