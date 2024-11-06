export class User {
  id: number;
  userName: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  totalPoints: number;
  iCreatedAt: Date = new Date();
  iModifiedAt: Date = new Date();

}
