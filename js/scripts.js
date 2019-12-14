$(function() {
    for (i in gamesObj) {
        let tableRow = "<tr id='" + gamesObj[i]["elemId"] + "'>" + 
            "<td scope='row'>" + gamesObj[i]["name"] + "</td>" + 
            "<td>" + gamesObj[i]["quantity"] + "</td>" + 
            "<td>" + gamesObj[i]["numPlayers"] + "</td>" + 
            "<td>" + gamesObj[i]["description"] + "</td>" + 
            "</tr>";
        $("#gameMenuBody").append(tableRow);
    }
    for (j in drinksObj) {
        let menuRow = "<tr id='" + drinksObj[j]["elemId"] + "'>" + 
            "<td scope='row'>" + drinksObj[j]["name"] + "</td>" +
            "<td>" + drinksObj[j]["ingredients"] + "</td>" +
            "<td>" + drinksObj[j]["price"] + "</td>" + "</tr>";
            $("#drinkMenuBody").append(menuRow);
    }
    $("#showGames").click(function(){ 
        $("#gameMenu").show();
        $("#drinkMenu").hide();
    });
    $("#showDrinks").click(function(){
        $("#drinkMenu").show();
        $("#gameMenu").hide();
    });
    $("#reserveButton").click(function () {
        $("#reserveModal").modal('toggle');
    });
});

