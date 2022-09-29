export class FusionChartsConfig {
  data?: Array<any> = [];
  numberPrefix?: string = '';
  numberSuffix?: string = '';
  legendPosition?: string = 'bottom'; // bottom, top, top-left, top-right, bottom-left, bottom-right, left, left-top, left-bottom, right, right-top, right-bottom Grafik altındaki label pozisyonu
  legendNumRows?: string = '3'; // Satır adedi
  legendNumColumns?: string = '2'; // Kolon adedi
  defaultCenterLabel?: string; // chart ortasında ki yazı
  doughnutRadius?: string = '110'; // chart kalınlığı,
  bgColor?: string = '#ffffff' // background rengi
  centerLabel?: string = '$label: $value' // chart ortasındaki yazı
  decimal?: string = '2';
  labelFontSize?: string = '16';
  decimalSeparator?: string = ',';
  thousandSeparator?: string = '.';
  legendIconScale?: string = '1';
  showLegend?: string = '1'; // 0 | 1
}
