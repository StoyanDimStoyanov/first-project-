$(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      $.ajax({
        method: "POST",
        url: "test101.php",
        data: {
          name: $("#name").val(),
          family: $("#family").val(),
          company: $("#company").val(),
          email: $("#email").val()

        }
      }).done(function(msg){
        console.log(msg);
        $("#error-text").text("")
        $("#name, #company, #family, #email").removeClass("danger");
        $("#error-text").removeClass("text-success");
        $("#error").hide();
        $("#error-text").removeClass("text-danger");       
        if (msg == "allEmpty") {
              $("#error").show();
              $("#error-text").addClass("text-danger");
              $("#name, #email, #company, #family").addClass("danger");
              $("#error-text").text("All fields must be filled in");
        }
        
        else if (msg == "notValid"){
          $("#email").addClass("danger");
          $("#error-text").text("");
          $("#error").show();
          $("#error-text").addClass("text-danger");
          $("#error-text").text("Not valid e-mail address."); 
        }
        else if (msg == "ok") {
              $("#error-text").text("");
              $("#error-text").text("The data has been send.");
              $("#error-text").addClass("text-success");
              $("#error-text").removeClass("text-danger");
              $("#name, #company, #family, #email").removeClass("danger");
              $("#name, #company, #family, #email").val("");
              $("#error").show();
              setTimeout(function() { 
              $('#error').fadeOut(); 
               }, 2000);
               
        }
      })
        
              
      


    })

  });