var options = {
    series: [{
        name: 'Video',
        data: [85, 100, 95, 90, 80, 90, 95, 75, 70]
    }, {
        name: 'Music',
        data: [60, 50, 60, 52, 55, 48, 52, 50, 43]
    }],

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
    },

    colors: ['#9ec7aa', '#f5d9af'],

    fill: {
        opacity: 1
    },

    legend: {
        markers: {
            radius: 50,
        }
    },

    tooltip: {
        theme: 'dark',
    },

    grid: {
        show: false,
    },

    chart: {
        toolbar: {
            show: false,
        },
        height: 300,
        type: 'bar',
    },

    dataLabels: {
        enabled: false
    },

    plotOptions: {
        bar: {
            columnWidth: '50%',
        },
    },

    stroke: {
        show: true,
        width: 4,
        colors: ['none']
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();








var options = {
    series: [{
        name: 'Video',
        data: [31, 40, 28, 51, 42, 95, 80]
    }, {
        name: 'Music',
        data: [11, 32, 45, 32, 34, 52, 41]
    }],

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
    },

    colors: ['#9ec7aa', '#f5d9af'],

    chart: {
        height: 300,
        type: 'area',

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false
    },

    grid: {
        show: false,
    },

    stroke: {
        curve: 'smooth'
    },

    tooltip: {
        theme: 'dark',
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#area"), options);
chart.render();









var artist = {
    series: [{
            name: 'Free (Silver)',
            data: [31, 40, 28, 51, 42, 95, 80]
        }, {
            name: 'Premium (Gold)',
            data: [11, 32, 20, 32, 34, 52, 41]
        },
        {
            name: 'Platinum',
            data: [8, 10, 8, 12, 16, 38, 28]
        }
    ],

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
    },

    colors: ['#9ec7aa', '#f5d9af', '#15151557'],

    chart: {
        height: 300,
        type: 'area',

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false
    },

    grid: {
        show: false,
    },

    stroke: {
        curve: 'smooth'
    },

    tooltip: {
        theme: 'dark',
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#artist"), artist);
chart.render();



var earnings = {
    series: [{
            name: 'New Advertisement',
            data: [31, 40, 28, 51, 42, 95, 80]
        }
    ],

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
    },

    colors: ['#9ec7aa'],

    chart: {
        height: 300,
        type: 'area',

        toolbar: {
            show: false,
        },
    },

    dataLabels: {
        enabled: false
    },

    grid: {
        show: false,
    },

    stroke: {
        curve: 'smooth'
    },

    tooltip: {
        theme: 'dark',
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
};

var chart = new ApexCharts(document.querySelector("#earnings"), earnings);
chart.render();



var advertiser = {
    series: [{
        name: 'Homepage',
        data: [85, 100, 95, 90, 80, 90, 95, 75, 70]
    }, {
        name: 'Summarypage',
        data: [60, 50, 60, 52, 55, 48, 52, 50, 43]
    }],

    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },

    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
    },

    colors: ['#9ec7aa', '#f5d9af'],

    fill: {
        opacity: 1
    },

    legend: {
        markers: {
            radius: 50,
        }
    },

    tooltip: {
        theme: 'dark',
    },

    grid: {
        show: false,
    },

    chart: {
        toolbar: {
            show: false,
        },
        height: 300,
        type: 'bar',
    },

    dataLabels: {
        enabled: false
    },

    plotOptions: {
        bar: {
            columnWidth: '50%',
        },
    },

    stroke: {
        show: true,
        width: 4,
        colors: ['none']
    },
};

var chart = new ApexCharts(document.querySelector("#advertiser"), advertiser);
chart.render();



var sales = {
    series: [60, 47, 20],
    labels: ["Free", "Pending", "Paid"],
    chart: {
        width: 400,
        type: 'donut',
    },

    tooltip: {
        theme: 'dark',
    },
    colors: ['#9ec7aa', '#f5d9af', '#15151557'],
    dataLabels: {
        enabled: false
    },

    legend: {
        show: true,
        position: 'bottom',
      horizontalAlign: 'center',
    },

    stroke: {
        show: true,
    },

    plotOptions: {
        pie: {
            donut: {
                size: '70%',
                background: 'none',
                labels: {
                    show: false,
                    name: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: -10,
                    },
                    value: {
                        show: false,
                        color: "#98aab4",
                    },
                    total: {
                        show: false,
                        label: 'Our Visitors',
                        color: '#98aab4',
                    }
                }
            }
        }
    }
};


var chart = new ApexCharts(document.querySelector("#sales"), sales);
chart.render();