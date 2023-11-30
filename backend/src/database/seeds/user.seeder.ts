// src/db/seeds/user.seeder.ts
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from '../../users/entities/user.entity';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await dataSource.query('DELETE FROM user;');
    const repository = dataSource.getRepository(User);
    const hasedPassword = await bcrypt.hash('Michael007', 10);

    const entities = await repository.create([
      {
        email: 'michaelosas78@gmail.com',
        password: hasedPassword,
        firstName: 'Michael',
        lastName: 'Osas',
        profileImg: 'https://image.shutterstock.com/image-photo/young-smiling-cheerful-satisfied-positive-260nw-2127045413.jpg'
      },
    ]);
    await repository.upsert(entities, ['email']);
  }
}
