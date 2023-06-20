import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

  constructor(userEntity: Partial<UserEntity>) {
    this.id = userEntity?.id;
    this.name = userEntity?.name;
  }
}
