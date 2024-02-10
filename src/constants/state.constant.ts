import { Bookstore } from '../types/bookstore.type';
import { EventLog } from '../types/event.type';

export const INIT_STATE_BOOKSTORE: Bookstore = {
  id: 0,
  title: '',
  author: '',
  price: 0,
  stock: 0,
};

export const INIT_STATE_EVENT: EventLog = {
  id: 0,
  name: '',
  description: '',
  date: '',
  spotId: 0,
  quantity: 0,
};
