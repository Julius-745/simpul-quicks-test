export interface MessageInterface {
  date: Date;
  messages: {
    name: string;
    message: string;
  }[];
}
