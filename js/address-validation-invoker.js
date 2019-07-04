$("#validate-address").click(function(e){
    e.preventDefault();
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var request = {
        address1: street,
        city: city,
        state: state
    };
    var body = JSON.stringify(request);
    var url = "https://bknip2zy33.execute-api.us-east-2.amazonaws.com/prod/avs";
    $.ajax({
        type: "POST",
        url: url,
        async: true,
        data: body,
        success: function(results) {
            var formatter = new ColorJson();
            var prettyJsonResponse = formatter.colorify(results);
            var prettyJsonReqeust = formatter.colorify(request);
            $("#request-url").html('<b>POST</b> ' + url + '<br/>Request:<br/><pre>' + prettyJsonReqeust + '</pre>');
            $("#address-validation-results").html(prettyJsonResponse);
        }
    })
});