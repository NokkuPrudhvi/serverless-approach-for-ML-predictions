
// Endpoint URL for California Housing price prediction regression model
const housingEndpoint = 'https://ky6aur495e.execute-api.us-west-2.amazonaws.com/dev/get-price';


function sendHousePredictionRequest() {
    // TODO validate form
    $('#predPriceGroup').hide();
    $('#housingLoader').show();
    $.ajax({
        type: 'GET',
        url: housingEndpoint,
        data: {
            medInc: $('#medInc').val(),
            houseAge: $('#houseAge').val(),
            aveRooms: $('#aveRooms').val(),
            aveBedrms: $('#aveBedrms').val(),
            population: $('#population').val(),
            aveOccup: $('#aveOccup').val(),
            latitude: $('#latitude').val(),
            longitude: $('#longitude').val()
        },
        dataType: 'json',
        error: function(error) {
            alert('Error while obtaining house price prediction. Please check all fields and try again.');
        },
        success: function(data) {
            $('#predPrice').val(data.predictedPrice);
        },
        complete: function() {
            $('#housingLoader').hide();
            $('#predPriceGroup').show();
        }
    });
};


$('#btnPredictHousePrice').click(sendHousePredictionRequest);


Chart.defaults.global.defaultFontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
Chart.defaults.global.defaultFontSize = 14;