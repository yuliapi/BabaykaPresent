var requestURL = 'https://yuliapi.github.io/datastorage/presentdata.json'
var availableColors;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var data = request.response;
    availableColors = data.colors
    // createCloud(data.wishes)
};

window.onload = function () {
    $("#wish-form").submit(function (event) {
        var input = $("#" + this.id + " :input[name='iwish']");
        var value = input.val()

        event.preventDefault();
    });
};


// function createCloud(wishes) {
//     var array = [];
//     var randomWishes = {};
//     for (var key in wishes) {
//         if (wishes.hasOwnProperty(key)) {
//             array.push(key);
//         }
//     }
//
//     var newArr = randomizeArr(array);
//
//     for (var i = 0; i < newArr.length; i++) {
//         var k = newArr[i]
//         randomWishes[k] = wishes[k]
//     }
//
//     for (var key in randomWishes) {
//         if (wishes.hasOwnProperty(key)) {
//             var entry = new CloudElement(key, wishes[key])
//             $("#cloud").append(entry);
//         }
//     }
// }
//
// function randomizeArr(array) {
//     //shuffle algorithm is the Fisher-Yates Shuffle.
//     console.log("run")
//     var currentIndex = array.length, temporaryValue, randomIndex;
//
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//
//         // Pick a remaining element...
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//
//         // And swap it with the current element.
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     }
//     return array;
// }
//
// function CloudElement(tag, weight) {
//     var tag = tag + ' '
//     var span = $("<span></span>");
//     var link = $("<a class='cloud'></a>");
//     link.text(tag);
//     var size;
//     if (weight > 0 && weight <= 3) {
//         size = "18px"
//     }
//     if (weight > 3 && weight <= 5) {
//         size = "24px"
//     }
//     if (weight > 5) {
//         size = "30px"
//     }
//     link.css("font-size", size);
//     var color = availableColors[Math.floor(Math.random() * availableColors.length)];
//     console.log(color);
//     link.css("color", color)
//     span.append(link);
//     return span;
// }

function saveMemory() {
    console.log('save');
    // var textArea = document.getElementById("userText");
    // var text = textArea.value;
    window.location.href = "jar.html";

}