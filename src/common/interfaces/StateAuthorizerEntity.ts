import { StateEntity } from './StateEntity'

export interface StateAuthorizerEntity extends StateEntity {
  authorizer: string;
}
