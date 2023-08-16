import { StateEntity } from 'src/common/interfaces/StateEntity'
import { EnumAuthorizer } from '../enum/EnumAuthorizer'

export interface AuthorizerGroup {
  authorizer: EnumAuthorizer;
  states: StateEntity[];
}
