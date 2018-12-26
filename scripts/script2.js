var tempIndexInOrder=0,imagesAmount=0,imagesPath="images/courseimages/chemia/",
result=0;
// var correctAnsers=[
// "stonehenge",
// "zwierzak",
// "galaktyka"
// ];
var anwersToDisplay=[
"Ag <sub> 2 </sub> O",
"Pb(OH) <sub> 2 </sub> ",
"Cd(OH) <sub> 2 </sub> ",
"Bi(OH) <sub> 3 </sub> ",
"Cu(OH) <sub> 2 </sub> ",
"Al(OH) <sub> 3 </sub> ",
"Zn(OH) <sub> 2 </sub> ",
"Fe(OH) <sub> 2 </sub> ",
"Fe(OH) <sub> 3 </sub> ",
"Cr(OH) <sub> 3 </sub> ",
"Mn(OH) <sub> 2 </sub> ",
"Ni(OH) <sub> 2 </sub> ",
"Ba(OH) <sub> 2 </sub> ",
"Sr(OH) <sub> 2 </sub> ",
"Ca(OH) <sub> 2 </sub> ",
"Mg(OH) <sub> 2 </sub> ",
// nowe dodanie
"PbF <sub> 2 </sub> ",
"BiF <sub> 3 </sub> ",
"AlF <sub> 3 </sub> ",
"[FeF6] <sup> 3- </sup>",
"CrF <sub> 3 </sub> ",
"BaF <sub> 2 </sub> ",
"SrF <sub> 2 </sub> ",
"CaF <sub> 2 </sub> ",
"MgF <sub> 2 </sub> ",
"AgCl",
"PbCl <sub> 2 </sub> ",
"AgBr",
"PbBr <sub> 2 </sub> ",
"AgI",
"PbI <sub> 2 </sub> ",
"BiI <sub> 3 </sub> ",
"CuI+I <sub> 2 </sub> ",
"I <sub> 2 </sub> + Fe <sup> 2+ </sup>+I <sup> – </sup>",
"AgSCN",
"Pb(SCN) <sub> 2 </sub> ",
"[Bi(SCN) <sub> 6 </sub> ] <sup> 3– </sup> ",
"[Cu(SCN) <sub> 4 </sub> ] <sup> 2– </sup> ",
"[Fe(SCN)] <sup> + </sup> ",
"[Fe(SCN) <sub> 2 </sub> ] <sup> + </sup> ",
"[Co(SCN)] <sup> + </sup> ",
"Ag <sub> 2 </sub> SO <sub> 4 </sub> ",
"PbSO <sub> 4 </sub> ",
"BaSO <sub> 4 </sub> ",
"SrSO <sub> 4 </sub> ",
"CaSO <sub> 4 </sub> ",
"Ag <sub> 2 </sub> SO <sub> 3 </sub> ",
"PbSO <sub> 3 </sub> ",
"CdSO <sub> 3 </sub> ",
"Bi <sub> 2 </sub> (SO <sub> 3 </sub> ) <sub> 3 </sub> ",
"Al <sub> 2 </sub> (SO <sub> 3 </sub> ) <sub> 3 </sub> ",
"ZnSO <sub> 3 </sub> ",
"FeSO <sub> 3 </sub> ",
"FeSO <sub> 3 </sub> ",
"NiSO <sub> 3 </sub> ",
"CoSO <sub> 3 </sub> ",
"BaSO <sub> 3 </sub> ",
"SrSO <sub> 3 </sub> ",
"CaSO <sub> 3 </sub> ",
"Ag <sub> 2 </sub> S <sub> 2 </sub> O <sub> 3 </sub> ",
"PbS <sub> 2 </sub> O <sub> 3 </sub> ",
"Bi <sub> 2 </sub> (S <sub> 2 </sub> O <sub> 3 </sub> ) <sub> 3 </sub> ",
"[Cu(S <sub> 2 </sub> O <sub> 3 </sub> ) <sub> 2 </sub> ] <sup> 2- </sup>",
"FeS+Fe <sub> 2 </sub> S <sub> 3 </sub> ",
"NiS <sub> 2 </sub> O <sub> 3 </sub> ",
"BaS <sub> 2 </sub> O <sub> 3 </sub> ",
"Ag <sub> 2 </sub> S",
"PbS",
"CdS",
"Bi <sub> 2 </sub> S <sub> 3 </sub> ",
"CuS",
"Al(OH) <sub> 3 </sub> ",
"ZnS",
"FeS",
"Fe <sub> 2 </sub> S <sub> 3 </sub> ",
"Cr(OH) <sub> 3 </sub> ",
"MnS",
"NiS",
"CoS",
"AgNO <sub> 2 </sub> ",
"[Cu(NO <sub> 2 </sub> ) <sub> 2 </sub> ]",
"Fe(OH) <sub> 3 </sub> ",
"Fe(NO <sub> 2 </sub> ) <sub> 3 </sub> ",
];
var anwersToCheck=[
"Ag2O",
"Pb(OH)2",
"Cd(OH)2",
"Bi(OH)3",
"Cu(OH)2",
"Al(OH)3",
"Zn(OH)2",
"Fe(OH)2",
"Fe(OH)3",
"Cr(OH)3",
"Mn(OH)2",
"Ni(OH)2",
"Ba(OH)2",
"Sr(OH)2",
"Ca(OH)2",
"Mg(OH)2",
//nowe dodanie
"PbF2",
"BiF3",
"AlF3",
"[FeF6]3-",
"CrF3",
"BaF2",
"SrF2",
"CaF2",
"MgF2",
"AgCl",
"PbCl2",
"AgBr",
"PbBr2",
"AgI",
"PbI2",
"BiI3",
"CuI+I2",
"I2+Fe2++I–",
"AgSCN",
"Pb(SCN)2",
"[Bi(SCN)6]3–",
"[Cu(SCN)4]2–",
"[Fe(SCN)]+",
"[Fe(SCN)2]+",
"[Co(SCN)]+",
"Ag2SO4",
"PbSO4",
"BaSO4",
"SrSO4",
"CaSO4",
"Ag2SO3",
"PbSO3",
"CdSO3",
"Bi2(SO3)3",
"Al2(SO3)3",
"ZnSO3",
"FeSO3",
"FeSO3",
"NiSO3",
"CoSO3",
"BaSO3",
"SrSO3",
"CaSO3",
"Ag2S2O3",
"PbS2O3",
"Bi2(S2O3)3",
"[Cu(S2O3)2]2-",
"FeS+Fe2S3",
"NiS2O3",
"BaS2O3",
"Ag2S",
"PbS",
"CdS",
"Bi2S3",
"CuS",
"Al(OH)3",
"ZnS",
"FeS",
"Fe2S3",
"Cr(OH)3",
"MnS",
"NiS",
"CoS",
"AgNO2",
"[Cu(NO2)2]",
"Fe(OH)3",
"Fe(NO2)3",
];

var orderOfImages = [];
// for(var i=0; i<imagesAmount; i++)
// 	orderOfImages.push(i);



var chosenCourses = [];
for(var i=0; i<$("#choicebuttons").children().length; i++)
	chosenCourses.push(false);


function mixOrder(){

	for(var i=0; i<imagesAmount; i++)
	{
		var v1=Math.floor(Math.random()*imagesAmount), v2=Math.floor(Math.random()*imagesAmount),temp;
		temp=orderOfImages[v1];
		orderOfImages[v1]=orderOfImages[v2];
		orderOfImages[v2]=temp;
	}

}

var courseHaveRun = false;

$(document).ready(function(){



	// alert("okbegin");
	var h = $(window).height()/2;

	$("#repeat-answer").css("display","none");

	$("#image-display").css("height", h);
	// alert("okend");

	// $("#image-display").children().attr("src","images/courseimages/chemia/"+orderOfImages[0]+".png").css("max-height",h);

	// $("#answer").focus();

	var checkbutton = $("#checkbutton");
	var buttonLocked = false, errorImage=false;
	var courseSize = 20;

	$("#launch-course-button").click(function(){
		// $("html,body").animate({
		// 	scrollTop: $(window).height()
		// });
		orderOfImages = [];
		imagesAmount=0;
		tempIndexInOrder=0;

		for(var i=0; i < $("#choicebuttons").children().length; i++)
		{
			if(chosenCourses[i])
			{
				imagesAmount+=courseSize;
				var start=i*courseSize;
				for(var j=0; j<courseSize; j++)
				{
					orderOfImages.push(start);
					start++;
				}
			}
		}
		mixOrder();	


		$("#block-choice").css("display","none");
		$("#block-course").css("display","block");

		// $("#image-display img").attr("src",imagesPath+orderOfImages[tempIndexInOrder]+".png");
		
		if(checkbutton.val()=="Sprawdź!"){
			buttonPushed();
			buttonPushed();
		}
		else
			buttonPushed();
	

	});

	function buttonPushed(){
		if(!buttonLocked){
			var tempNumber = orderOfImages[tempIndexInOrder];
			if(checkbutton.val()=="Sprawdz!"){
					// $("#answer-area").children().remove();
					// $("#answer-area").append("<section> appended text </section>").append(answerButton);
					$(document).focus();
					buttonLocked = true;
					if($("#answer").val()==anwersToCheck[tempNumber]){
						$("#answer").attr("readonly","readonly");
						// $("#answer-area").prepend("<div>"+$("#answer").val()+"</div>");
						// $("#answer").css("display","none");
						// $("#answer-area section").css("display","block").addClass("correct-answer");
						$("#title").html("Dobrze!").animate({
							fontSize: "+=10"
						}).animate({
							fontSize: "-=10"
						},function(){buttonLocked=false;});
						$("#answer").css("border-color","green").css("color","green");
						if(!errorImage)result++;
					}else{
						$("#answer").attr("readonly","readonly");
						$("#title").html("Poprawna odpowiedź: <b>" + anwersToDisplay[tempNumber] + "</b>").animate({
							fontSize: "+=10"
						}).animate({
							fontSize: "-=10"
						},function(){buttonLocked=false;});
						$("#answer").css("border-color","red").css("color","red");
						
						if(!errorImage)result--;
					}
					if(result<=0)
						$("#points").html(""+result);
					else
						$("#points").html("+"+result);

					$("#points").delay(300).animate({
						fontSize: "+=30"
					}).animate({
						fontSize: "-=30"
					});
					checkbutton.val("Dalej");

					tempIndexInOrder++;
					
					if(tempIndexInOrder>=imagesAmount)
					{
						tempIndexInOrder=0;
						mixOrder();
						
					}
			}else{
				$("#answer").attr("readonly",false);
				$("#title").html("Co to jest?");
				errorImage=false;
				//!!! do poprawienia

				// $("#image-display img").error(function(){
				// 	$("#image-display img").attr("src","../images/red-cross.png");
				// 	errorImage=true;
				// });
				
				$("#image-display img").attr("src",imagesPath+tempNumber+".png");

				checkbutton.val("Sprawdz!");
				$("#answer").val("").css("border-color","#058ED0").css("color","#058ED0").attr("autocomplete","off").focus();			
			}
					
		}
	}

	checkbutton.click(function(){buttonPushed();});
	$(document).keypress(function(e){
		if(e.which == 13)
			buttonPushed();
	});
	// $(document).enterKey(function(){buttonPushed();});

	// var exitButtonHovered=false;
	// $("#course-title img").hover(function(){
	// 	// alert("mam");
	// 	if(exitButtonHovered)
	// 	{
	// 		$("#course-title img").attr("src","images/blue-cross.png");
	// 		exitButtonHovered=false;
	// 	}
	// 	else
	// 	{
	// 		$("#course-title img").attr("src","images/blue-cross-light.png");
	// 		exitButtonHovered=true;
	// 	}
	// });


	checkbutton.bind({
		mouseenter: function(){
			$(this).css("backgroundColor","#FFA719").css("color","#2152A5");
		},
		mouseleave: function(){
			$(this).css("backgroundColor","#058ED0").css("color","#FDA147");
		}
	});

	var choiceButtonsListenerArea = document.querySelector("#choicebuttons");

	choiceButtonsListenerArea.addEventListener("click", function(e){
		if(e.target!==e.currentTarget){
			if(e.target.nodeName==="INPUT"){
				if(chosenCourses[$("#choicebuttons input").index($(e.target))])
				{
					$(e.target).css("background-color","#058ED0").css("color","#fff");
					chosenCourses[$("#choicebuttons input").index($(e.target))]=!chosenCourses[$("#choicebuttons input").index($(e.target))]
				}
				else
				{
					$(e.target).css("background-color","white").css("color","#078CCC").css("border","3px solid #058ED0");
					chosenCourses[$("#choicebuttons input").index($(e.target))]=!chosenCourses[$("#choicebuttons input").index($(e.target))]
				}
			}
		}
		// e.stopPropagation();
	});






	$("img.exit-cross").bind({
		mouseenter: function(){
			$("#course-title img").attr("src","images/blue-cross-light.png");
		},
		mouseleave: function(){
			$("#course-title img").attr("src","images/blue-cross.png");
		},
		click: function(){
			// $("body,html").animate({
			// 	scrollTop: "0"
			// });
			$("#block-choice").css("display","block");
			$("#block-course").css("display","none")
			$("#image-display img").attr("src","");
			tempIndexInOrder=0;
			result=0;
			$("#points").val(result);

			// checkbutton.val("Sprawdź!");
		}
	});
});
