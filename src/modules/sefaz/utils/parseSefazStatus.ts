import { SefazStatusDto } from '../dto/SefazStatusDto'
import { RawSefazStatus } from '../interfaces/RawSefazStatus'

export function parseSefazStatus(rawData: any): SefazStatusDto[] {
  if (!rawData) {
    return []
  }

  const rawStatusList: RawSefazStatus[] = rawData

  const parsedStatusList: SefazStatusDto[] = rawStatusList.map(rawStatus => {
    return {
      authorizer: rawStatus.Autorizador,
      authorization: rawStatus['Autorização4'],
      return_status: rawStatus['Retorno Autorização4'],
      disablement: rawStatus.Inutilização4,
      protocol_query: rawStatus['Consulta Protocolo4'],
      service_status: rawStatus['Status Serviço4'],
      registration_query: rawStatus['Consulta Cadastro4'],
      event_reception: rawStatus['Recepção Evento4'],
    }
  })

  return parsedStatusList
}
