import { StateDto } from './StateDto'
import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class StateAuthorizerDto extends StateDto {
  @ApiProperty({ description: 'Identificador do órgão autorizador' })
  @IsString()
  @IsNotEmpty()
    authorizer: string

  constructor(stateAuthorizerDto: Partial<StateAuthorizerDto>) {
    super(stateAuthorizerDto)
    this.authorizer = stateAuthorizerDto.authorizer
  }
}
