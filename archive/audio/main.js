$(document).ready( function() {

    $(".splash").click(function() {
        $(".splash").addClass("remove");
    });
    

    $(".track1").mouseenter(function() {
        console.log("mouse entering track1");
        $(".track1")[0].play();
    });

    $(".track2").mouseenter(function() {
        console.log("mouse entering track2");
        $(".track2")[0].play();
    });    

    $(".playtrack2").click(function() {
        $(".track2")[0].play();
    }); 

    $(".pausetrack2").click(function() {
        $(".track2")[0].pause();
    }); 
    



});