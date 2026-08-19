import { Client } from "./Client";

export type CreateClientForm = Omit<Client, 'id' | 'active'>;

export type UpdateClientForm = Omit<Client, 'id'>
