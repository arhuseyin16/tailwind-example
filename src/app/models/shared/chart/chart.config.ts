export class ChartConfig{
  numberPrefix?: string = ''; //
  numberSuffix?: string = '';
  legendPosition?: string = 'bottom'; // bottom, top, top-left, top-right, bottom-left, bottom-right, left, left-top, left-bottom, right, right-top, right-bottom Grafik altındaki label pozisyonu
  legendXPosition?: string = '0';
  legendYPosition?: string = '0';
  legendNumRows?: string = '3'; // Satır adedi
  legendNumColumns?: string = '2'; // Kolon adedi
  defaultCenterLabel?: string; // chart ortasında ki yazı
  doughnutRadius?: string = '110'; // chart kalınlığı,
  bgColor?: string = '#ffffff' // background rengi
  centerLabel?: string = '$label: $value' // chart ortasındaki yazı
  decimal?: string = '2';
  labelFontSize?: string = '16'; // label font büyüklüğü
  decimalSeparator?: string = ','; // Value'daki decimal seperatörü
  thousandSeparator?: string = '.'; // Value'daki binler basamağı seperatörü
  legendIconScale?: string = '1'; // legend ikon büyüklüğü
  showLegend?: string = '1'; // 0 | 1 // legend' hide/show özelliği
  width: string = '100'; // chart genişiliği
  height: string = '100'; // chart yüksekliği
  pieRadius?: string = '50';
  showLabels?: string =  '0'; // 0 | 1 // label hide/show özelliği
  showValues?: string =  '0 '; // 0 | 1 // value hide/show özelliği
  legendAllowDrag?: string = '1'; // 0 | 1 // legend drag and drop özelliğini kontrol etmek
  enableMultiSlicing?: string = '0'; // 0 | 1 // legend üzerinden multi item seçme özelliği
  plotHighlightEffect?: string = '' // fadeout|anchorBgColor=ff0000|color=#7f7f7f, anchorBgAlpha=50
  chartLeftMargin?: number = 0;
  legendItemFontSize?: string = '16';
  centerLabelFontSize?: string = '25';
  showPercentValues?: string = '0';
  showPercentInTooltip?: string = '0';
  theme?: string = 'fusion';
}
