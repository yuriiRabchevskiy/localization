import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
        { name: 'admin', password: '+' },
        { name: 'yura', password: 'y' },
        { name: 'ksju', password: 'k' },
        { name: 'olja', password: 'o' }
    ];
    return {users};
  }
}