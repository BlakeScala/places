//Back End
function Place (_name, _location, _landmarks, _time, _notes) {
  this.name = _name;
  this.location = _location;
  this.landmarks = _landmarks;
  this.time = _time;
  this.notes = _notes;
}

//Front End
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();

    var placeName = $('input#placeName').val();
    var location = $('input#location').val();
    var landmarks = $('input#landmarks').val();
    var timeOfYear = $('input#timeOfYear').val();
    var notes = $('input#notes').val();

    var newPlace = new Place (placeName,location,landmarks,timeOfYear,notes);

    $("ul#outputList").append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function(){
      $("h3#infoName").text(newPlace.name);
      $("p#infoLocation").text(newPlace.location);
      $("p#infoLandmarks").text(newPlace.landmarks);
      $("p#infoTime").text(newPlace.time);
      $("p#infoNotes").text(newPlace.notes);
      $("div#infoOutput").show();
    });

    $("input#placeName").val("");
    $("input#location").val("");
    $("input#landmarks").val("");
    $("input#timeOfYear").val("");
    $("input#notes").val("");
  });
});
