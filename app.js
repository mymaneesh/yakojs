var yako = require('./index');
var spark = yako.spark;
var pie = yako.pie;
var donut = yako.donut;
var bubble = yako.bubble;
var bar = yako.bar;
var label = yako.label;

var http = require('http');
var express = require('express');
var app = express();
var fs = require('fs');

// TODO:: fix edge case of 1 data Point
var dataPoints = 30;
var nOfGraphs = 10;
var kind = 10;
var oddKinds = 2;
var amount = nOfGraphs;

var now = Date.now();
var nodes = '';

while (amount--) {
  var dataSet = [];
  var dataSet2 = [];
  var dataSet3 = [];
  var dataSet4 = [];
  var dataSet5 = [];
  var dataSet6 = [];
  for (var i=0;i < dataPoints;i++) {
    dataSet.push(Math.floor((Math.random() * 500) + 10));
    dataSet2.push(Math.floor((Math.random() * 500) + 10));
    dataSet3.push(Math.floor((Math.random() * 500) + 10));
    dataSet4.push(Math.floor((Math.random() * 500) + 1));
  }

  for (var i = 0; i < dataPoints; i++) {
    var temp = [];
    var temp2 = [];
    for (var j = 0; j < 3; j++) {
      temp.push(Math.floor((Math.random() * 500) + 10));
      temp2.push(Math.floor((Math.random() * 500) + 10));
    }
    dataSet5.push(temp);
    dataSet6.push(temp2);
  }

  var strokColorFirst = yako.spark()._randomColor();
  var strokeColorSecond = yako.spark()._randomColor();
  var set = [
      {
          data: dataSet,
          //color controls the line
          strokeColor: strokColorFirst,
          fill: yako.spark()._randomColor(),
          scattered : {
            strokeColor: strokColorFirst,
            fill: 'white',
            strokeWidth: 2,
            radius: 3
          }
      },
      {
          data: dataSet2,
          strokeColor: strokeColorSecond,
          fill: yako.spark()._randomColor(),
          scattered : {
            strokeColor: strokeColorSecond,
            fill: 'white',
            strokeWidth: 2,
            radius: 3
          }
      }
  ];

  var singleSet = [
    {
        label: 'Auto Generated 3',
        data: dataSet3,
        strokeColor: yako.spark()._randomColor(),
        fill: yako.spark()._randomColor()
    }
  ];

  var bubbleSet = [
    {
      data: dataSet5,
      fill: yako.spark()._randomColor()
    },
    {
      data: dataSet6,
      fill: yako.spark()._randomColor()
    }
  ];

  var sparkInstance = spark('.graph');

  nodes += sparkInstance.attr({
    chart : {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'
    },
    title: 'just a test',
    data: set
  });

  nodes += sparkInstance.attr({
    chart : {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif'
    },
    title: 'just a test',
    data: singleSet
  });

  nodes += spark('.graph').attr({
    chart : {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      scattered: true,
      fill: false
    },
    title: 'just a test',
    data: set
  });

  nodes += spark('.graph').attr({
    chart : {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      scattered: true,
      line: false,
      fill: false
    },
    title: 'just a test',
    data: set
  });

  nodes += pie('.graph').attr({
    chart: {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      // additional options
      // strokes: [],
      // fills: []
    },
    title: 'just a test',
    data: dataSet4
  });

  nodes += donut('.graph').attr({
    chart: {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      innerRadius: 40,
      outerRadius: 50
      // addtional options
      // strokes: [],
      // fills: []
    },
    title: 'just a test',
    data: dataSet4
  });

  nodes += bubble('.graph').attr({
    chart: {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      maxRadius: '10'
      // additional options
      // strokes: [],
      // fills: []
    },
    title: 'just a test',
    data: dataSet4
  });
  // scattered graph
  nodes += bubble('.graph').attr({
    chart: {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      maxRadius: '10',
      type: 'scattered'
      // additional options
      // strokes: [],
    },
    title: 'just a test',
    data: bubbleSet
  });

  nodes += bar('.graph').attr({
    chart : {
      stack: true,
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      showPointer: false,
      fill: []
    },
    title: 'just a test',
    data: set
  });

  nodes += bar('.graph').attr({
    chart : {
      width: 300,
      height: 100,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      showPointer: false,
      fill: []
    },
    title: 'just a test',
    data: set
  });
}

dataSet = [];
dataSet2 = [];
for (var i=0;i < 10;i++) {
  dataSet.push(Math.floor((Math.random() * 500) + 10));
  dataSet2.push(Math.floor((Math.random() * 500) + 10));
}

var strokColorFirst = 'red';
var strokeColorSecond = 'blue';
var set = [
    {
        data: dataSet,
        //color controls the line
        strokeColor: strokColorFirst,
        strokeWidth: 2,
        scattered : {
          strokeColor: strokColorFirst,
          fill: 'white',
          strokeWidth: 2,
          radius: 5
        }
        //nodeColor controls the pointer color
    },
    {
        data: dataSet2,
        strokeColor: strokeColorSecond,
        strokeWidth: 2,
        scattered : {
          strokeColor: strokeColorSecond,
          fill: 'white',
          strokeWidth: 2,
          radius: 5
        }
    }
];

nodes = sparkInstance.attr({
    chart : {
      width: 1200,
      height: 150,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      // scattered: true
    },
    title: 'just a test',
    data: set,
    yAxis: {
      multi: true
    },
    xAxis : {
      // including format will show the xAxis Label
      format : 'dateTime',
      // interval indicates the data interval, the number of the interval indicates the label tick interval
      // same representation is also used for `dateTimeLabelFormat`
      // s - seconds
      // m - minutes
      // h - hours
      // D - days
      // M - months
      // Y - years
      interval: '4h',  //[1-9]s, [1-9]m, [1-9]h, [1-9]D, [1-9]M, [1-9]Y
      // uses the min start date and increment the label by the set interval.  interval will be converted to miliseconds
      minUTC: Date.UTC(2013,8,7),
      //this controls the dateTime label format
      //depending on the format, it will affect the label, try :: dateTimeLabelFormat: 'hhh'
      dateTimeLabelFormat: 'MM/DD hh ap'
      // or if wanted custom label
      // format: 'label',
      // labels: [Array of label], this label must match the data value length, if not the data will be limited.  We will not aggregate the data for you.
  }
}) + sparkInstance.attr({
    chart : {
      width: 1200,
      height: 150,
      'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
      scattered: true
    },
    title: 'just a test',
    data: set,
    yAxis: true,
    xAxis : {
      // including format will show the xAxis Label
      format : 'dateTime',
      // interval indicates the data interval, the number of the interval indicates the label tick interval
      // same representation is also used for `dateTimeLabelFormat`
      // s - seconds
      // m - minutes
      // h - hours
      // D - days
      // M - months
      // Y - years
      interval: '1D',  //[1-9]s, [1-9]m, [1-9]h, [1-9]D, [1-9]M, [1-9]Y
      // uses the min start date and increment the label by the set interval.  interval will be converted to miliseconds
      minUTC: Date.UTC(2013,8,7),
      //this controls the dateTime label format
      //depending on the format, it will affect the label, try :: dateTimeLabelFormat: 'hhh'
      dateTimeLabelFormat: 'MM/DD hh ap'
      // or if wanted custom label
      // format: 'label',
      // label: [Array of label], this label must match the data value length, if not the data will be limited.  We will not aggregate the data for you.
  }
}) + nodes;



// *** preRender Test *** //
var label = new label();
nodes = "<div class='.graph'>"+ bubble({
  preRender: function (immutableScale) {
    var self = this;
    var scale = self._deepCopy(immutableScale);
    var max = scale.max;
    scale.pHeight = (scale.height - (scale.paddingTop + scale.paddingBottom));
    // with bubble
    // max[0] = width
    // max[1] = height
    // say if you want to compute the number of y sections
    var copy = self._deepCopy(scale);
    var splitProperty = self._getSplits(scale.max[1]);
    copy.paddingLeft = 30;
    copy.max = splitProperty.max;
    copy.ySecs = splitProperty.splits;
    var axis = label.describeYAxis(copy);
    
    return {
      prepend: axis
    };
  }
}).attr({
  chart: {
    width: 300,
    height: 100,
    'font-family': '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
    maxRadius: '10',
    type: 'scattered',
    paddingLeft: 35
  },
  title: 'just a test',
  data: bubbleSet
})+ "</div>" + nodes;


var diff = (Date.now() - now);

console.log('Took ' + diff + 'ms to generate ' + (nOfGraphs * kind + oddKinds) + ' graphs with '+ dataPoints + ' different data points each avg of ' + (diff/((nOfGraphs*kind)+oddKinds)) + 'ms');
nodes = '<div>' + 'Took ' + diff + 'ms to generate ' + (nOfGraphs * kind + oddKinds) + ' graphs with '+ dataPoints + ' different data points avg of ' + (diff/((nOfGraphs*kind)+oddKinds)) + 'ms' + '</div>' + nodes;

// test optimization => round all numbers to 1 decimal place
nodes = nodes.replace(/([0-9]+\.[0-9]+)/g, function (match, p1) {
  return Math.round10(p1,-1);
});

var str = '<html><head>'+
"<link href='http://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css'>"+
'</head><body>' + nodes + '</body><style>.graph {display:inline-block;</style></html>';


var proxy = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
});

app.get('/', function (req, res) {
  res.send(str);
});

app.listen(5000);
