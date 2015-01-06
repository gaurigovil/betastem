// A $( document ).ready() block.
var timerId = setInterval(function(){slider()}, 4000);


function menuShowHide(){
	$('#compactMenu').slideToggle();
}

var sliderPosition = 1;
var totalSlides = 4;

function slider(direction) {

	if(direction == 'left'){sliderPosition = sliderPosition -1; clearInterval(timerId);if(sliderPosition < 1){sliderPosition = totalSlides};}
	if(direction == 'right'){sliderPosition = sliderPosition +1; clearInterval(timerId);if(sliderPosition > totalSlides){sliderPosition = 1};}
	if(!direction){sliderPosition = sliderPosition + 1;if(sliderPosition > totalSlides){sliderPosition = 1};};

	$( "#header" ).animate({
    left: "-=600",
    opacity: "0"
  }, 300, function() {
    changeSliderContent(sliderPosition);

    $("#header").css({"left": "+=1200px"}); 
   
    $( "#header" ).animate({
    left: "-=600",
    opacity: "1"
  	},300);
    
  });



}

function changeSliderContent(pos) {
		console.log(pos)
	if(pos == 1){
    	document.getElementById('header').style.backgroundImage="url('images/retinalcamera.jpg')";
		document.getElementById('headerTitle').innerHTML = 'Autologous Stem Cell Therapy for <span class="boldColor">Diabetic Retinopathy</span>';
		document.getElementById('headerBody').innerHTML = 'We will utilize stem cells from one patient for that patient only. This will allow personalized medicine to be delivered to that patient without the risk of immune response to our patented cellular therapy.<br><br><span class="cta">Learn about our therapy</span><button>HERE</button>';
	}
	if(pos == 2){
    	document.getElementById('header').style.backgroundImage="url('images/Fluorescein-Retina.jpg')";
		document.getElementById('headerTitle').innerHTML = 'Diabetic Retinopathy';
		document.getElementById('headerBody').innerHTML = 'The leading cause of adult blindness <br><br><span class="cta">Learn more </span><button>HERE</button> ';
	}
	if(pos == 3){
    	document.getElementById('header').style.backgroundImage="url('images/20165bw_Kunkel.jpg')";
		document.getElementById('headerTitle').innerHTML = 'Autologous Stem Cell Therapy for <span class="boldColor">Diabetic Retinopathy (DR)</span>';
		document.getElementById('headerBody').innerHTML = 'Lorem ipsum dolor sit emet<br><br><span class="cta">Learn more </span><button>HERE</button> ';
	}
	if(pos == 4){
    	document.getElementById('header').style.backgroundImage="url('images/portrait.jpg')";
		document.getElementById('headerTitle').innerHTML = '<span class="boldColor">Vision</span> — Normal Versus Diabetic Retinopathy';
		document.getElementById('headerBody').innerHTML = 'Patient with Normal Vision (l) Patient with Diabetic Retinopathy and Macular Edema.<br>Learn the current statistics on diabetic retinopathy and the BetaStem efforts underway to stem the tide of this devastating disease<br><br><span class="cta"></span><button>LEARN MORE</button> ';
	}
}
	