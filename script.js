

//Temporary random function
function getRND() {
  return Math.floor(Math.random() * 4);
}

//actual chart data
const data = [
	{x: 'Ariana', pl : 5, com: 0, life: 0, other: 1},
	{x: 'Cindy', pl : 3, com: 0, life: 0, other: 0},
	{x: 'Jacob', pl : 1, com: 0, life: 2, other: 0}, 
	{x: 'Lauren', pl : 1, com: 2, life: 0, other: 0}, 
	{x: 'Marshall', pl : 5, com: 2, life: 4, other: 3}, 
	{x: 'Zach', pl : 1, com: 0, life: 2, other: 1}
];

//Data structure to be entered into the chart
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

//Generate the chart
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