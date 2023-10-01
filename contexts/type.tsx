export type TypePref = {
  prefCode: number;
  prefName: string;
};
export type TypePrefWithRegion = {
  region: string;
  prefs: TypePref[];
};

// 希望は以下の構造
// [
//   {
//     region: "北海道・東北",
//     prefs: ['北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県']
//   }
// ]

export type TypeTabValue = {
  id: number;
  en: string;
  jp: string;
  subtitle?: string;
};
export type TypeSpecificPopulationAndYear = {
  year: number;
  value: number;
};

export type TypePopulations = {
  [prefName: string]: Array<{
    label: string;
    data: Array<TypeSpecificPopulationAndYear>;
  }>;
};

export type TypePopulationDataSeries = {
  name: string;
  data: number[];
  comparison: number[];
};
