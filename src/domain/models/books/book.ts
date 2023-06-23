import isEmpty from 'lodash/isEmpty';
import { Author, CreatedAt, Id, Title, UpdatedAt } from './vo';

export class Book {
  // 完全コンストラクタパターン
  constructor(
    private _id: Id,
    private _title: Title,
    private _author: Author,
    private _createdAt: CreatedAt,
    private _updatedAt: UpdatedAt,
  ) {}

  get id(): Id {
    return this._id;
  }

  get title(): Title {
    return this._title;
  }

  get author(): Author {
    return this._author;
  }

  get createdAt(): CreatedAt {
    return this._createdAt;
  }

  get updatedAt(): UpdatedAt {
    return this._updatedAt;
  }

  hasId(): boolean {
    return !isEmpty(this._id);
  }
}
