$("#about-me").click(function(e){
    e.preventDefault();
    var zipCode = $("#zip-lookup").val();
    var url = "https://1njp7ql9lb.execute-api.us-east-2.amazonaws.com/lookup/zipcode?codes=" + zipCode;
    $.ajax({
        type: "GET",
        url: url,
        success: function(results) {
            alert(JSON.stringify(results));
        }
    })
});

$("#what-time-is-it").click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "https://1njp7ql9lb.execute-api.us-east-2.amazonaws.com/whattimeisit/please",
        success: function(results) {
            alert(JSON.stringify(results));
        }
    })
});