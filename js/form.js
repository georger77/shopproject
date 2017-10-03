$(function() {

    $('form input[type=submit]').click(function(e) {
      
        const form=$('form')[0];
        if (!form.checkValidity()){
          
            return;
        }
          e.preventDefault();
        $.ajax({
            url: "https://formspree.io/rezvanovgr@gmail.com",
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                email: $('#client-email').val(),
                information: $('#search').val()},   
            dataType: "json"
        }).done(function(){
            form.reset();
            $('#message-box').html('<h3>Дякуємо за звернення, чекайте на відповідь</h3>');
        }).fail(function(){
            $('#message-box').html('<h3>Некоректні дані, перевірте введену інформацію</h3>');
        });
    });


});
