function getRND() {
  return Math.floor(Math.random() * 4);
}

const data = [
	{x: 'Ariana', pl : getRND(), com: getRND(), life: getRND(), other: getRND()},
	{x: 'Cindy', pl : getRND(), com: getRND(), life: getRND(), other: getRND()},
	{x: 'Jacob', pl : getRND(), com: getRND(), life: getRND(), other: getRND()}, 
	{x: 'Lauren', pl : getRND(), com: getRND(), life: getRND(), other: 0}, 
	{x: 'Marshall', pl : getRND(), com: getRND(), life: getRND(), other: getRND()}, 
	{x: 'Zach', pl : getRND(), com: getRND(), life: getRND(), other: getRND()}
];

const chart_data = {
	labels: ['Ariana', 'Cindy', 'Jacob', 'Lauren', 'Marshall', 'Zach'],
	datasets: [{
		label: 'Personal Lines',
		data: data,
		backgroundColor: 'rgb(255, 99, 132)',
		parsing: {
			yAxisKey: 'pl'
		}
	}, {
		label: 'Commercial',
		data: data,
		backgroundColor: 'rgb(54, 162, 235)',
		parsing: {
			yAxisKey: 'com'
		}
	}, {
		label: 'Life',
		data: data,
		backgroundColor: 'rgb(255, 205, 86)',
		parsing: {
			yAxisKey: 'life'
		}
	}, {
		label: 'Other',
		data: data,
		backgroundColor: 'rgb(75, 192, 192)',
		parsing: {
			yAxisKey: 'other'
		}
	}]
}


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: chart_data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Production Log'
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
});