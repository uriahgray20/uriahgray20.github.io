$(function(){
    console.log("I'm ready now");
    
    var num = ["one", "two", "three"];
    var abc = ["a", "b", "c"];
    var xyz = ["x", "y", "z"];

    function randomClass() {
        const synth = new Tone.MonoSynth().toMaster();
        synth.triggerAttackRelease("A2", "12n");
        $(".text").each(function () {
            $(this).removeClass(num);
            $(this).addClass(num[Math.floor(Math.random() * num.length)]);
        });
        $(".text").each(function () {
            $(this).removeClass(abc);
            $(this).addClass(abc[Math.floor(Math.random() * abc.length)]);
        });
        $(".text").each(function () {
            $(this).removeClass(xyz);
            $(this).addClass(xyz[Math.floor(Math.random() * xyz.length)]);
        });                
        setTimeout(randomClass, 1500)
    }

    

    $(".play-button").click(function () {
        Tone.Transport.start();
        randomClass();
        $(".play-wrapper").hide();
      });

});
