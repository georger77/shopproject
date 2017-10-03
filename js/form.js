$(function() {

    $('form input[type=submit]').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/rezvanovgr@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                email: $('#client-email').val(),
                information: $('#search').val(),
            },
            dataType: "json"
        });
    });


});
