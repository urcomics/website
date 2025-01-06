$(document).ready(function(){
    $.get("inc/nav.html", function(data){
        $("#nav-placeholder").replaceWith(data);
    });
});