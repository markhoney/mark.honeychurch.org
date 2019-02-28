<template>
  <section>
    <h2>Year View</h2>
    <p>This view is an attempt to show a year, from January through to December (although the signs' dates don't quite line up), to get an idea of when in the year the skeptics in our sample were born. An interesting task would be to compare this to average birth rates for each month over the last 50 years or so - as obviously there will be differences, due both to the fact that the months are not all the same length and more subtle factors.</p>
    <GChart type="ColumnChart" :data="year.data" :options="year.options" class="chart"/>
    <h2>Star Signs</h2>
    <p>The two star signs that have the most skeptics here are Virgo and Aquarius (I'm Virgo myself). According to the website Astrology Zodiac Signs (which curiously seems to be the top hit for many astrology related searches, possibly because of the number of keywords in its domain name - www.astrology-zodiac-signs.com), these are the traits for both signs:</p>
    <h3>
      <a
        href="https://www.astrology-zodiac-signs.com/zodiac-signs/virgo/"
        target="_blank"
        rel="noopener noreferrer"
      >Virgo</a>
    </h3>
    <p>
      <strong>Strengths:</strong> Loyal, analytical, kind, hardworking, practical
    </p>
    <p>
      <strong>Weaknesses:</strong> Shyness, worry, overly critical of self and others, all work and no play
    </p>
    <h3>
      <a
        href="https://www.astrology-zodiac-signs.com/zodiac-signs/aquarius/"
        target="_blank"
        rel="noopener noreferrer"
      >Aquarius</a>
    </h3>
    <p>
      <strong>Strengths:</strong> Progressive, original, independent, humanitarian
    </p>
    <p>
      <strong>Weaknesses:</strong> Runs from emotional expression, temperamental, uncompromising, aloof
    </p>
    <GChart type="PieChart" :data="sign.data" :options="sign.options" class="chart"/>
    <h2>Elements</h2>
    <p>
      There's a fairly large skew here. The
      <a
        href="https://en.wikipedia.org/wiki/Astrological_sign#Polarity_and_the_four_elements"
        target="_blank"
        rel="noopener noreferrer"
      >descriptions on Wikipedia</a> for Air and Earth (the most common elements for our skeptics) respectively are "Communication; socialization; conceptualization" and "Practicality; caution; material world", whereas the descriptions for Fire and Water are "Enthusiasm; drive to express self; faith" and "Emotion; empathy; sensitivity".
    </p>
    <GChart type="PieChart" :data="element.data" :options="element.options" class="chart"/>
    <h2>Modalities</h2>
    <p>
      The
      <a
        href="https://en.wikipedia.org/wiki/Astrological_sign#The_three_modalities"
        target="_blank"
        rel="noopener noreferrer"
      >Wikipedia descripions</a> for Cardinal, Mutable and Fixed are "Action; dynamic; initiative; great force", "Adaptability; flexible; resourceful" and "Resistance to change; great willpower; inflexible".
      <GChart type="PieChart" :data="modality.data" :options="modality.options" class="chart"/>
    </p>
    <h2>Polarities</h2>
    <GChart type="PieChart" :data="polarity.data" :options="polarity.options" class="chart"/>
  </section>
</template>

<script>
import data from './astrology.json';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const colours = [
  '#bf3030',
  '#c2cc99',
  '#00e6d6',
  '#e639da',
  '#ff8800',
  '#003300',
  '#0099e6',
  '#40002b',
  '#00cc52',
  '#0000ff',
  '#f2b6c6',
  '#e5b800',
  '#26332b',
  '#606080'
];
function monthDay(date) {
  return months[parseInt(date.slice(5, 7)) - 1] + ' ' + date.slice(8);
}
function getTotals(type) {
  return Object.entries(
    data.reduce((totals, sign) => {
      totals[sign[type]] = sign[type] in totals ? totals[sign[type]] + sign.total : sign.total;
      return totals;
    }, {})
  );
}
export default {
  computed: {
    year() {
      return {
        data: [['Sign', 'Total', { role: 'style' }]].concat(
          data.map((sign, index) => [monthDay(sign.start) + ' - ' + monthDay(sign.end) + ' (' + sign.name + ')', sign.total, colours[index]])
        ),
        options: {
          legend: { position: 'none' },
          animation: {
            duration: 1500,
            easing: 'linear',
            startup: true
          }
        }
      };
    },
    sign() {
      return {
        data: [['Sign', 'Total']].concat(data.map(sign => [sign.name, sign.total])),
        options: {
          legend: { position: 'none' },
          is3D: true,
          pieSliceText: 'label'
        }
      };
    },
    element() {
      return {
        data: [['Element', 'Total']].concat(getTotals('element')),
        options: {
          legend: { position: 'none' },
          is3D: true,
          pieSliceText: 'label'
        }
      };
    },
    modality() {
      return {
        data: [['Modalities', 'Total']].concat(getTotals('modality')),
        options: {
          legend: { position: 'none' },
          is3D: true,
          pieSliceText: 'label'
        }
      };
    },
    polarity() {
      return {
        data: [['Polarities', 'Total']].concat(getTotals('polarity')),
        options: {
          legend: { position: 'none' },
          is3D: true,
          pieSliceText: 'label'
        }
      };
    }
  }
};
</script>

<style scoped>
.chart {
  width: 750px;
  height: 700px;
}
</style>
