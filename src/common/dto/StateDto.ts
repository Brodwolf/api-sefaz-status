import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export class StateDto {
  @ApiProperty({ description: 'Sigla do Estado' })
  @IsString()
  @IsNotEmpty()
    acronym: string

  @ApiProperty({ description: 'Descrição do Estado' })
  @IsString()
  @IsNotEmpty()
    name: string

  constructor(stateDto: Partial<StateDto>) {
    this.name = stateDto.name
    this.acronym = stateDto.acronym
  }
}
