export interface Supp {
  id: string;
  name: string;
  description: string;
  dosage: string;
  doseSched: string;
  bannedSub: boolean;
};

export const emptySupp = {
  id: '',
  name: '',
  description: '',
  dosage: '',
  doseSched: '',
  bannedSub: false
};