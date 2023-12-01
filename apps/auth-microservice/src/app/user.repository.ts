import { Injectable } from '@nestjs/common';
import { User } from '@nestjs-microservices/shared/entities';

@Injectable()
export class UserRepository {
    private readonly users: User[] = [];

    save(user:User) {
        this.users.push({ ...user, id: this.users.length + 1 });
    }

    findOne(id: number) {
        return this.users.find( user => user.id === id);
    }
}