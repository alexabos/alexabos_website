$(document).ready(function() {
    var pre_content = $("#jalpc_site_pv").html();
    $("#jalpc_site_pv").html(pre_content);

    if (!$("#jalpc_site_pv").length) {
        return;
    }

    $.ajax({
        type: "get",
        timeout: 4000,
        url: "https://miniapp.jack003.com/counter.cgi",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "flightHandler",
        success: function(json) {
            if (!json || typeof json.data === "undefined") {
                return;
            }

            var website_count = json.data;
            $("#jalpc_site_pv").html('<span class="navy">' + website_count + '</span>&nbsp;<span data-i18n="link.view">views</span>&nbsp;||&nbsp;' + pre_content);
        },
        error: function() {
            // Keep current UI when remote counter is unavailable.
        }
    });
});
