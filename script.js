
/*******************************Text editor**********************************************************/
//
// function addStar() {
//     var span = $("<span class='star'><img src='images/star.png'></span>")
//     $(".jar-wrapper").prepend(span);
// }
function addMoment() {
    window.location.href = "jar.html";
    window.onload(dropStar());


}

function dropStar (){
    console.log("star")
    var jar = $("#jar");
    var star = new Star;
    jar.append(star);
}

function Star(){
    return ( $("#<span class='star'><img src='images/star.png'></span>"))
}