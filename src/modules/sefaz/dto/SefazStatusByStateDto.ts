import { ApiProperty } from '@nestjs/swagger'
import { SefazStatusDto } from './SefazStatusDto'
import { StateDto } from 'src/common/dto/StateDto'
import { IsObject, IsNotEmpty } from 'class-validator'

export class SefazStatusByStateDto extends SefazStatusDto {
  @ApiProperty({ description: 'Informações do Estado', type: StateDto })
  @IsObject()
  @IsNotEmpty()
    state: StateDto

  constructor(sefazStatusByState: Partial<SefazStatusByStateDto>) {
    super(sefazStatusByState)
    this.state = sefazStatusByState.state
  }
}
