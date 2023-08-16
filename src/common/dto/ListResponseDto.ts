import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsNotEmpty, IsNumber, IsOptional, ValidateNested } from 'class-validator'

export class ListResponseDto<T> {
  @ApiProperty({ description: 'Total de registros' })
  @IsNumber()
  @IsNotEmpty()
    total: number

  @IsArray()
  @IsOptional()
  @ValidateNested()
  @ApiProperty({ isArray: true })
    data: T

  constructor(response: Partial<T>, count: number) {
    this.data = response as T
    this.total = count
  }
}
