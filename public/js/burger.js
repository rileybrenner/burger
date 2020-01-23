//AJAX that calls on click events 
$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();


     
  
      // creates new burger
      var newBurger = {
        burger_name: $("#newburger")
          .val()
          .trim(),
        devoured: 0
      };
  // POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
  
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
  // PUT post
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
  // create the DELETE action

    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });