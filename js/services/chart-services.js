

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart(response) {
        var chartData = prepareChartData(response);
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Secteur');
        data.addColumn('number', "chiffre d'affaire");
        data.addRows(chartData);


        var options = {
          chart: {
            title: "Chriffre d'affaire annuel par secteurs",
            subtitle: "Secteur, Chiffre d'affaire",
          },
          height: 500
        };
        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }

      function drawHighChart(response){
        $('#container').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: "chriffre d'affaire annuel par secteurs"
            },
            xAxis: {
                categories: getSectorName(response)
            },
            credits: {
                enabled: false
            },
            series: [{
              name: "Chiffre d'affaire",
              data: getChiffres(response),
              shadow: true
            }
            ]
        });
      }
      function drawHighCharts(response){
        $('#chartsect').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: "chriffre d'affaire par effectif et par secteur"
            },
            xAxis: {
                categories: getEffectif(response)
            },
            credits: {
                enabled: false
            },
            series: [{
              name: "2012",
              data: getChiffre(response, 2012),
              shadow: true
            },
            {
            name: "2013",
            data: getChiffre(response, 2013),
            shadow: true
          },

            ]
        });
      }


      function drawHighChartAll(response){
        $('#newchart').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: "chriffre d'affaire par effectif pour tous les secteus"
            },
            xAxis: {
                categories: getSectorName(response)
            },
            credits: {
                enabled: false
            },
            series: [{
              name: "0-9",
              data: getChiffreAffaire(response, 1),
              shadow: true
            },
            {
            name: "10-19",
            data: getChiffreAffaire(response, 2),
            shadow: true
          },
          {
            name: "20-249",
            data: getChiffreAffaire(response, 3),
            shadow: true
          },
          {
            name: "250 et plus",
            data: getChiffreAffaire(response, 4),
            shadow: true
          },

            ]
        });
      }



      function prepareChartData(response){
        var chartData =[];
        for (i=0; i<response.length; i++){
          temp= [response[i].secteur.name, parseInt(response[i].value.value)] ;
            chartData.push(temp);
        }

        return chartData;
      }

      function getSectorName(response){
        var chartData =[];
        for (i=0; i<response.length; i++){
          temp= [response[i].secteur.name] ;
            chartData.push(temp);
        }

        return chartData;
      }

      function getChiffres(response){
        var chartData =[];
        for (i=0; i<response.length; i++){
          temp= parseInt(response[i].value.value) ;
            chartData.push(temp);
        }

        return chartData;
      }

      function getChiffre(response, year){
        var chartData =[];
        for (i=0; i<response.length; i++){
          if (parseInt(response[i].year) == year && parseInt(response[i].value.type)!= 0 ){

              chartData.push(parseInt(response[i].value.value))

          }
        }

        return chartData;
      }

      function getChiffreAffaire(response, type){
        var chartData =[];
        for (i=0; i<response.length; i++){
          if (parseInt(response[i].value.type)== type ){
              chartData.push(parseInt(response[i].value.value))
          }
          
        }

        return chartData;
      }


      function getEffectif(response){
        var chartData =[];
        for (i=0; i<response.length; i++){
          switch (parseInt(response[i].value.type)) {
            case 1:
             chartData.push('0-9');
             break;

            case 2:
              chartData.push('10-19');
              break;
            case 3:
               chartData.push('20-249');
               break;
            case 4:
               chartData.push('250 - plus');
               break;

            default:

          }
      }

        return chartData;
      }
