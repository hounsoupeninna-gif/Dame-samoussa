
export type FunnelStep = 'landing' | 'upsell' | 'downsell' | 'order' | 'thanks' | 'automation';

export interface UserData {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  city: string;
}

export interface OrderDetails {
  basePack: boolean;
  premiumPack: boolean;
  snackTray: boolean;
  total: number;
}
