import { MessageInterface } from "./MessageInterface";

export interface Chat {
  type: string;
  title: string;
  date: Date;
  sender: string;
  description: string;
  unread: boolean;
  participant: number;
  chat: MessageInterface[];
}
