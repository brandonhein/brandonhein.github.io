$("#about-me").click(function(e){
    $.ajax({
        type: "GET",
        url: "/pages/aboutme/index.html",
        success: function(results) {
            $("#sub-page").html(results);
        }
    })
});

$("#experiences").click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/pages/experiences/index.html",
        success: function(results) {
            $("#sub-page").html(results);
        }
    })
});

$("#location-lookup").click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/pages/locationlookup/index.html",
        success: function(results) {
            $("#sub-page").html(results);
        }
    })
});

$("#address-validation").click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: "/pages/addressvalidation/index.html",
        success: function(results) {
            $("#sub-page").html(results);
        }
    })
});