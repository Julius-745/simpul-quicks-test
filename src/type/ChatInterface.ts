export interface Chat {
  type: string;
  title: string;
  date: Date;
  sender: string;
  message: string;
  unread: boolean;
  chat: [];
}
