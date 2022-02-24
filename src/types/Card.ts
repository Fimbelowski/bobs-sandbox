type PoolOrTribe = 'beast'| 'elemental' | 'murloc' | 'pirate' | 'quilboar';

export interface Card {
  attack: number;
  avenge: boolean;
  battlecry: boolean;
  divineShield: boolean;
  deathrattle: boolean;
  frenzy: boolean;
  health: number;
  magnetic: boolean;
  megaWindfury: boolean;
  name: string;
  poisonous: boolean;
  pool: PoolOrTribe;
  reborn: boolean;
  src: {
    plain: string;
    golden: string;
  }
  taunt: boolean;
  tribe: PoolOrTribe;
  windfury: boolean;
}
