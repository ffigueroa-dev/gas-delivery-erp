import { UUID } from "@/types/common";

export type ClientType = 'commertial' | 'retail'

export interface Client {
    id: UUID;
    name: string;
    phone?: string;
    type: ClientType;
    full_address: string;
    address_reference?: string;
    active: boolean;
}
