export interface ContactLead {
  _id: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  phone: string;
  email: string;
  fleetType?: string;
  fleetSize?: number;
  message?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactLeadPayload {
  firstName: string;
  lastName: string;
  companyName?: string;
  phone: string;
  email: string;
  fleetType?: string;
  fleetSize?: number;
  message?: string;
}

export interface GetAllLeadsData {
  leads: ContactLead[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}
