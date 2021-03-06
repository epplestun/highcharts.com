$(function () {
    $('#container').highcharts({
        chart: {
            height: 200,
            type: 'line'
        },
        title: {
            text: 'The height of the chart is set to 200px'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
        },
        legend: {
            layout: 'vertical',
            floating: true,
            backgroundColor: '#FFFFFF',
            align: 'left',
            verticalAlign: 'top',
            y: 60,
            x: 90
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
        },
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }]
    });
});