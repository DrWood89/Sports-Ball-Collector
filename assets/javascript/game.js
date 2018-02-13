
var targetNumber = $("#target-number");
var totalScoreElement = $("#total-score");
var winsElement = $("#winsCounter");
var lossesElemnt = $("#lossesCounter");
var totalScore = 0;
var randTargetNumber = 0;
var Wins = 0;
var Losses = 0;



$(document).ready(function () {

    reset();

    // Next we create a for loop to create Ball for every randvalue.
    for (var i = 0; i < 4; i++) {
        // For each iteration, we will create an imageBall
        var imageBall = $("<img>");
        // First each balls will be given the class ".Ball-image".
        // This will allow the CSS to take effect.
        imageBall.addClass("Ball-image");

        imageBall.attr("id", "Ball" + i);
        // Each imageCrystal will be given a src link to the crystal image
        imageBall.attr("src", "assets/images/Ball" + (i + 1) + ".jpg");
        // Each imageBall will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageBall.attr("data-ballvalue", getRandomInt(1, 12));
        // Lastly, each Ball image (with all it classes and attributes) will get added to the page.
        $("#Balls").append(imageBall);
    }

    console.log("data-ballvalue");


$(".Ball-image").click(function() {
    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var ballValue = $(this).attr("data-ballvalue");
    
    
    
    // ballValue = "data-ballvalue";
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    totalScore += parseInt(ballValue);
    totalScoreElement.text(totalScore);
    console.log(totalScore);
    console.log(randTargetNumber);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    
    if (totalScore === randTargetNumber) {
        Wins++;
        winsElement.text(Wins);
        reset();
    }
    else if (totalScore > randTargetNumber) {
        Losses++;
        lossesElemnt.text(Losses);
        reset();
    }
});

function reset() {

    for (i = 0; i < 4; i++) {
        $("#Ball" + i).attr("data-ballvalue", getRandomInt(1, 12));
    }

    randTargetNumber = getRandomInt(19, 120);
    targetNumber.text(randTargetNumber);
    totalScore = 0;
    totalScoreElement.text(totalScore);

   
}


    




// Function for randomizing numbers between a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
})
