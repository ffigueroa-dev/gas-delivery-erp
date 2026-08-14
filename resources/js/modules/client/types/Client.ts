import { SelectOption, UUID } from "@/types/common";

export type ClientType = 'commercial' | 'retail'

export interface Client {
    id: UUID;
    name: string;
    phone: string | null;
    type: ClientType;
    full_address: string;
    address_reference: string | null;
    active: boolean;
}

export type ClientTypeOption = SelectOption<ClientType>;
