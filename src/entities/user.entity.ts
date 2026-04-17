import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'password' })
  password: string;
  @Column({ name: 'date_of_birth' })
  dateOfBirth: Date;
  @Column({ name: 'picture' })
  picture: string;
}
