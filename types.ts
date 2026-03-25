
export type FunnelStep = 'landing' | 'order' | 'thanks';

export interface UserData {
  name: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate: string;
  quartier: string;
  packName: string;
  packTotal: number;
}

export interface OrderDetails {
  packName: string;
  total: number;
}
