import { Contract } from "./contract.enum";
import { Requirements } from "./requirements.interface";

export interface Job {
  id?: number;
  company?: string;
  logo?: string;
  logoBackground?: string;
  position?: string;
  postedAt?: string;
  contract?: Contract;
  location?: string;
  website?: string;
  apply?: string;
  description?: string;
  requirements?: Requirements;
  role?: Requirements;
}
