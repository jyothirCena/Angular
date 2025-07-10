import { CustomerResponse } from "./customer-response";

export class ServiceList {
    serviceId: number | undefined;
    serviceName: string | undefined;
    date: string | undefined;
    slot: string | undefined;
    address: string | undefined;
    vendorName: string | undefined;
    amount: number | undefined;
    customer: CustomerResponse | undefined;
}
