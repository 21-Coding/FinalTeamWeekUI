
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './src-noconflict/ace.js';
import './src-noconflict/theme-monokai.js';
import './src-noconflict/mode-javascript.js';
// import './src-noconflict/worker-javascript.js';
import { Game } from './game.js';

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/javascript");

function switchQuestions(game){
  let goal;

  let goalPicker = 1;

  // (Math.floor(Math.random() * Math.floor(12))) + 1;

  if (goalPicker === 1) {
    goal = "Copy";
    game.copyCountDown();
  }else if (goalPicker === 2) {
    goal = "Paste";
    game.pasteCountDown();
  }else if (goalPicker === 3) {
    goal = "Select all"
    game.selectAllCountDown();
  }else if (goalPicker === 4) {
    goal = "Toggle Comments";
    game.toggleCommentsCountDown();
  }else if (goalPicker === 5) {
    goal = "Cut"


  }else if (goalPicker === 6) {
    goal = "Delete Line";
  }else if (goalPicker === 7) {
    goal = "Go to beginning of line"
  }else if (goalPicker === 8) {
    goal = "Go to beginning of line";
  }else if (goalPicker === 9) {
    goal = "Cut to the end of line"
  }else if (goalPicker === 10) {
    goal = "Select next match";
  }else if (goalPicker === 11) {
    goal = "Save";
  }else if (goalPicker === 12) {
    goal = "Select all";
  }


$("#goalPlace").text(goal);
$("#displayGoal").show();

}

function showKeys(code) {
  let html = this.collectionArray.map(function() {
      $('.keys').html(html.join(`<div class="key">${code}</div>`));
    });
  }


function countDownTimer(game){
  let displayCounter = setInterval(() => {
    $('h1#countDown').text(`Timer: ${game.starterScore}`);
    $('.score').html(`Score: ${game.score}`);
  }, 1);
}

//setTimeout(switchQuestion, 10) --hoping this will make the function run 10 time for each question. but that would just make the loop do it's 10 loops, 10 times.

$(document).ready(function(){
  let game = new Game();
  let collectionArray = game.collectionArray;
  countDownTimer(game);
  game.copyCountDown();
  // Collect on key press array.
  $(document).keydown(function (event) {
    event.preventDefault();
    collectionArray.push(event.keyCode);
    console.log(collectionArray);
  });
  $('#startGame').click(function(event) {
    $('.all').hide();
    $('#game').toggle();
  });

});
// For nav bars -------

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// atom buttons that link to pop up banner
$("#moveCurrent").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut1").fadeIn();

})

$("#selectNext").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut2").fadeIn();
})

$("#selectAll").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut3").fadeIn();
})

$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut4").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut5_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut6_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut7_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut8_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut9_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut10_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut11_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut12_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut13_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut14_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut15_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut16_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut17_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut18_").fadeIn();
})
$("#shakeSelect").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut19_").fadeIn();
})

// end atom buttons to pop up banner






// chrome buttons to pop up banner
$("#clearConsole").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut5").fadeIn();

})

$("#openInspector").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut6").fadeIn();

})

$("#newTab").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut7").fadeIn();
})

$("#newWindow").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut8").fadeIn();
})

// end chrome buttons to pop up banner





// general buttons to pop up banner
$("#copy").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut9").fadeIn();

})

$("#paste").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut10").fadeIn();

})

$("#pasteWithout").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut11").fadeIn();
})

$("#select").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut12").fadeIn();
})

$("#cut").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut13").fadeIn();
})

$("#openSet").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut14").fadeIn();
})

$("#indent").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut15").fadeIn();
})

$("#deIndent").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut16").fadeIn();
})

$("#zoomIn").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut17").fadeIn();
})

$("#zoomOut").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut18").fadeIn();
})

$("#find").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut19").fadeIn();
})

$("#save").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut20").fadeIn();
})

$("#saveAs").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut22").fadeIn();
})

$("#open").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut23").fadeIn();
})

$("#bold").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut24").fadeIn();
})

$("#italics").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut25").fadeIn();
})
$("#underline").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut26").fadeIn();
})
$("#create").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut27").fadeIn();
})
$("#quit").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut28").fadeIn();
})
$("#forceQuit").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut29").fadeIn();
})
$("#hide").click(function(event){
  event.preventDefault();
  $(".noShow").hide();
  $("#pointer").fadeIn();
  $("#shortcut30").fadeIn();
})

// end general buttons to pop up banner
