export class AdminAccount {
  constructor(
    private _id: string,
    private _name: string,
    private _email: string,
    private _password: string,
    protected _companyName: string,
  ) {}

  get id(): string {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }

  adminOnly(): string {
    return 'Admin only!';
  }
}
