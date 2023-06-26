// NOTE: 動作確認だけのため命名はPJでの適切な命名とする
export class Account {
  // Admin / Viewer 全てのプロパティを持つ
  id: string;
  role: string;
  name: string;
  email: string;
  password: string;
  companyName: string;

  constructor() {
    this.id = '';
    this.role = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.companyName = '';
  }

  /**** getter and set *****/
  // abstract get id(): string;
  // protected abstract setId(id: Id): void;
  // abstract get name(): string;
  // protected abstract setName(name: Name): void;
  // abstract get email(): string;
  // protected abstract setEmail(email: Email): void;
  // abstract get password(): string;
  // protected abstract setPassword(password: Password): void;
  // abstract get companyName(): string;
  // protected abstract setCompanyName(companyName: CompanyName): void;
}
