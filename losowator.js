

$(document).ready(function () {
	$(".przycisk").click(function () {
		var item = data[Math.floor(Math.random()*data.length)];
    	console.log(item)
	});
    for (let i = 0; i < data.length; i++){
    	let user = data[i]['user'];
    	let commentText = data[i]['commentText'];
    	newDiv(user, commentText);
    }
});


function newDiv(user, commentText) {
    var $div = $("<div class='a'>");
    $(".animatedDivs").append($div);
    $div.html("<p>"+user+"</p><p>"+commentText+"</p>");
    animateDiv();
    function animateDiv() {
        var newq = makeNewPosition();
        var oldq = $div.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
        $div.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv();
        });
    };
}

function makeNewPosition() {
    var h = $(window).height() - 300;
    var w = $(window).width() - 50;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh, nw];
}

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .4;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
}