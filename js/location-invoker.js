$("#zip-lookup-btn").click(function(e){
    e.preventDefault();
    var zipCode = $("#zip-lookup").val();
    var url = "https://1njp7ql9lb.execute-api.us-east-2.amazonaws.com/lookup/zipcode?codes=" + zipCode;
    $.ajax({
        type: "GET",
        url: url,
        async: true,
        success: function(results) {
            var formatter = new ColorJson();
            var prettyJson = formatter.colorify(results);
            $("#location-lookup-results").html(prettyJson);
        }
    })
});

$("#what-time-is-it").click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "https://1njp7ql9lb.execute-api.us-east-2.amazonaws.com/whattimeisit/please",
        async: true,
        success: function(results) {
            var formatter = new ColorJson();
            var prettyJson = formatter.colorify(results);
            $("#location-lookup-results").html(prettyJson);
        }
    })
});