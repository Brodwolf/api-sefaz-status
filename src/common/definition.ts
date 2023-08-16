import { EnumAuthorizer } from 'src/modules/sefaz/enum/EnumAuthorizer'
import { StateAuthorizerEntity } from './interfaces/StateAuthorizerEntity'

export const stateList: StateAuthorizerEntity[] = [
  {
    acronym: 'AC',
    name: 'Acre',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'AL',
    name: 'Alagoas',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'AP',
    name: 'Amapá',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'AM',
    name: 'Amazonas',
    authorizer: EnumAuthorizer.AM,
  },
  {
    acronym: 'BA',
    name: 'Bahia',
    authorizer: EnumAuthorizer.BA,
  },
  {
    acronym: 'CE',
    name: 'Ceará',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'DF',
    name: 'Distrito Federal',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'ES',
    name: 'Espírito Santo',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'GO',
    name: 'Goiás',
    authorizer: EnumAuthorizer.GO,
  },
  {
    acronym: 'MA',
    name: 'Maranhão',
    authorizer: EnumAuthorizer.SVAN,
  },
  {
    acronym: 'MT',
    name: 'Mato Grosso',
    authorizer: EnumAuthorizer.MT,
  },
  {
    acronym: 'MS',
    name: 'Mato Grosso do Sul',
    authorizer: EnumAuthorizer.MS,
  },
  {
    acronym: 'MG',
    name: 'Minas Gerais',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'PA',
    name: 'Pará',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'PB',
    name: 'Paraíba',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'PR',
    name: 'Paraná',
    authorizer: EnumAuthorizer.PR,
  },
  {
    acronym: 'PE',
    name: 'Pernambuco',
    authorizer: EnumAuthorizer.PE,
  },
  {
    acronym: 'PI',
    name: 'Piauí',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'RJ',
    name: 'Rio de Janeiro',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'RN',
    name: 'Rio Grande do Norte',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'RS',
    name: 'Rio Grande do Sul',
    authorizer: EnumAuthorizer.RS,
  },
  {
    acronym: 'RO',
    name: 'Rondônia',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'RR',
    name: 'Roraima',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'SC',
    name: 'Santa Catarina',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'SP',
    name: 'São Paulo',
    authorizer: EnumAuthorizer.SP,
  },
  {
    acronym: 'SE',
    name: 'Sergipe',
    authorizer: EnumAuthorizer.SVRS,
  },
  {
    acronym: 'TO',
    name: 'Tocantins',
    authorizer: EnumAuthorizer.SVRS,
  },
]
