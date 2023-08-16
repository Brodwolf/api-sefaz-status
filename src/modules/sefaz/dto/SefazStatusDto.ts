import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class SefazStatusDto {
  @ApiProperty({ description: 'Identificador do autorizador' })
  @IsString()
  @IsNotEmpty()
    authorizer: string

  @ApiProperty({ description: 'Status de autorização' })
  @IsString()
  @IsNotEmpty()
    authorization: string

  @ApiProperty({ description: 'Status do retorno' })
  @IsString()
  @IsNotEmpty()
    return_status: string

  @ApiProperty({ description: 'Status de inutilização' })
  @IsString()
  @IsNotEmpty()
    disablement: string

  @ApiProperty({ description: 'Status de consulta de protocolo' })
  @IsString()
  @IsNotEmpty()
    protocol_query: string

  @ApiProperty({ description: 'Status do Servico' })
  @IsString()
  @IsNotEmpty()
    service_status: string

  @ApiProperty({ description: 'Status da consulta de cadastro' })
  @IsString()
  @IsNotEmpty()
    registration_query: string

  @ApiProperty({ description: 'Status de recepção de evento' })
  @IsString()
  @IsNotEmpty()
    event_reception: string

  constructor(sefazStatus: Partial<SefazStatusDto>) {
    this.authorizer = sefazStatus.authorizer
    this.authorization = sefazStatus.authorization
    this.disablement = sefazStatus.disablement
    this.protocol_query = sefazStatus.protocol_query
    this.service_status = sefazStatus.service_status
    this.registration_query = sefazStatus.registration_query
    this.event_reception = sefazStatus.event_reception
  }
}
