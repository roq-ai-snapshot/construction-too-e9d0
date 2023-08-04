import { ToolInterface } from 'interfaces/tool';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OutletInterface {
  id?: string;
  location: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  tool?: ToolInterface[];
  company?: CompanyInterface;
  _count?: {
    tool?: number;
  };
}

export interface OutletGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  company_id?: string;
}
