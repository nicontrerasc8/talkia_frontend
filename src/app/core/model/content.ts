export class Content {
  id: number;
  title: string;
  description: string;
  year: string;
  type: string;
  theme: string;
  link: string;
  iCreatedAt: Date = new Date();
  iCreatedBy: string;
  iModifiedAt: Date = new Date();
  iModifiedBy: string;

}
