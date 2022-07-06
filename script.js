const chart_data = {
	labels: ['Ariana', 'Cindy', 'Jacob', 'Lauren', 'Marshall', 'Zach'],
	datasets: [{
		label: 'Personal Lines',
		data: [100, 20],
		parsing: {
			yAxisKey: 'pl'
		}
	}, {
		label: 'Commercial',
		data: [50, 10],
		parsing: {
			yAxisKey: 'com'
		}
	}, {
		label: 'Life',
		data: [50, 10],
		parsing: {
			yAxisKey: 'life'
		}
	}, {
		label: 'Other',
		data: [100, 500], 
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
        text: 'Chart.js Bar Chart - Stacked'
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