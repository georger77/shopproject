$(function() {
    
    $('form input[type=submit]').click(function(e) {
        
        const form=$('form')[0];
        if(!form.checkValidity()){
            return;     
        }
       e.preventDefault();
        $.ajax({
            url: "https://formspree.io/rezvanovgr@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
                 clientPhone: $('#client-phone').val(),
               order: $('#order').val()
            },
            dataType: "json" 
        }).done(function() {
            form.reset();
            $('#message-box').html('<h2>ok</h2>');
        }).fail(function(){
            $('#message-box').html('error');
        });
    });
});