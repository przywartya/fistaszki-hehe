

var stop = 0;
$(document).ready(function () {
	$(".przycisk").click(function () {
		var item = data[Math.floor(Math.random()*data.length)];
		$(".przycisk").html("<i class='fa fa-cog fa-spin fa-3x fa-fw'></i>");
		setTimeout(function(){
	    $(".przycisk").html("<p>"+item['user']+"</p><p>"+item['commentText']+"</p>")
			stop = 1;
			$('.przycisk').css('background-image', 'url("https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/19399692_1954106954804443_7511942356344464986_n.jpg?oh=41cc819471cd860c8ea8d2e2e1a98b13&oe=5A03CABB")');
			$('.przycisk').css('background-size', '100% 100%;');
			$('.przycisk').css('color', 'white');
	  }, 5000);
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
					if (stop === 0) {
	            animateDiv();
					}
        });
    };
}

function makeNewPosition() {
    var h = $(window).height() - 320;
    var w = $(window).width() - 70;
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
