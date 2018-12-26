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
//"Ag <sub> 2 </sub> SO <sub> 3 </sub> ", puste zdjecie
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
"Fe(NO <sub> 2 </sub> ) <sub> 2 </sub> ",
"Fe(NO <sub> 2 </sub> ) <sub> 3 </sub> ",
"Ag <sub> 2 </sub> CO <sub> 3 </sub> ",
"PbCO <sub> 3 </sub> ",
"CdCO <sub> 3 </sub> ",
"Bi <sub> 2 </sub> (CO <sub> 3 </sub> ) <sub> 3 </sub> ",
"CuCO <sub> 3 </sub> ",
"Al <sub> 2 </sub> (CO <sub> 3 </sub> ) <sub> 3 </sub> ",
"ZnCO <sub> 3 </sub> ",
"FeCO <sub> 3 </sub> ",
"Fe <sub> 2 </sub> (CO <sub> 3 </sub> ) <sub> 3 </sub> ",
"Cr <sub> 2 </sub> (CO <sub> 3 </sub> ) <sub> 3 </sub> ",
"MnCO <sub> 3 </sub> ",
"NiCO <sub> 3 </sub> ",
"CoCO <sub> 3 </sub> ",
"BaCO <sub> 3 </sub> ",
"SrCO <sub> 3 </sub> ",
"CaCO <sub> 3 </sub> ",
"MgCO <sub> 3 </sub> ",
"Ag <sub> 2 </sub> SiO <sub> 3 </sub> ",
"PbSiO <sub> 3 </sub> ",
"CdSiO <sub> 3 </sub> ",
"Bi <sub> 2 </sub> (SiO <sub> 3 </sub> ) <sub> 3 </sub> ",
"CuSiO <sub> 3 </sub> ",
"Al <sub> 2 </sub> (SiO <sub> 3 </sub> ) <sub> 3 </sub> ",
"ZnSiO <sub> 3 </sub> ",
"FeSiO <sub> 3 </sub> ",
"Fe <sub> 2 </sub> (SiO <sub> 3 </sub> ) <sub> 3 </sub> ",
"Cr <sub> 2 </sub> (SiO <sub> 3 </sub> ) <sub> 3 </sub> ",
"MnSiO <sub> 3 </sub> ",
"NiSiO <sub> 3 </sub> ",
"CoSiO <sub> 3 </sub> ",
"BaSiO <sub> 3 </sub> ",
"SrSiO <sub> 3 </sub> ",
"CaSiO <sub> 3 </sub> ",
"MgSiO <sub> 3 </sub> ",
"Ag <sub> 3 </sub> PO <sub> 4 </sub> ",
"Pb <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
"Cd <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
"BiPO <sub> 4 </sub> ",
// "Cu <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "AlPO <sub> 4 </sub> ",
// "Zn <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Fe <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "FePO <sub> 4 </sub> ",	
// "CrPO <sub> 4 </sub> ",
// "Mn <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Ni <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Co <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Ba <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Sr <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Ca <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Mg <sub> 3 </sub> (PO <sub> 4 </sub> ) <sub> 2 </sub> ",
// "Ag <sub> 2 </sub> CrO <sub> 4 </sub> ",
// "PbCrO <sub> 4 </sub> ",
// "CdCrO <sub> 4 </sub> ",
// "Bi <sub> 2 </sub> (CrO <sub> 4 </sub> ) <sub> 3 </sub> ",
// "CuCrO <sub> 4 </sub> ",
// "Al <sub> 2 </sub> (CrO <sub> 4 </sub> ) <sub> 3 </sub> ",
// "ZnCrO <sub> 4 </sub> ",
// "FeCrO <sub> 4 </sub> ",
// "Fe <sub> 2 </sub> (CrO <sub> 4 </sub> ) <sub> 3 </sub> ",
// "Cr <sub> 2 </sub> (CrO <sub> 4 </sub> ) <sub> 3 </sub> ",
// "MnCrO <sub> 4 </sub> ",
// "NiCrO <sub> 4 </sub> ",
// "CoCrO <sub> 4 </sub> ",
// "BaCrO <sub> 4 </sub> ",
// "SrCrO <sub> 4 </sub> "
"Au + HCl + Zn",
"Au + KBr ( <sub> 2 </sub> )    ",
"Au + KBr       ",
"Au + KI ( <sub> 2 </sub> )",
"Au + KI",
"Au + NaOH",
"Au + SnCl <sub> 2 </sub>  ( <sub> 2 </sub> )",
"Au + SnCl <sub> 2 </sub>       ",
"FeCl <sub> 3 </sub> ",
"Fe + H <sub> 2 </sub> SO <sub> 4 </sub> ",
"Fe + HCl + Zn",
"Fe + KBr",
"Fe + KI",
"Fe + NaOH",
"Fe + SnCl <sub> 2 </sub> ",
"Fe + SnCl <sub> 2 </sub>  + SCN",
"HAuCl <sub> 4 </sub> ",
"Mo + H <sub> 2 </sub> O <sub> 2 </sub>  ( <sub> 2 </sub> )",
"Mo + H <sub> 2 </sub> O <sub> 2 </sub> ",
"Mo + H <sub> 2 </sub> SO <sub> 4 </sub> ",
"Mo +H <sub> 2 </sub> SO <sub> 4 </sub>  N",
"Mo + HCl + Zn",
"Mo + SnCl <sub> 2 </sub> ",
"Mo + SnCl <sub> 2 </sub>  + SCN",
"Ti + H <sub> 2 </sub> O <sub> 2 </sub>  ( <sub> 1 </sub> )",
"Ti + H <sub> 2 </sub> O <sub> 2 </sub>  ( <sub> 2 </sub> )",
"Ti + HCl + Zn",
"Ti + NaOH ( <sub> 1 </sub> )",
"Ti + NaOH ( <sub> 2 </sub> )",
"Ti + NaOH ( <sub> 3 </sub> )",
"V + H <sub> 2 </sub> O <sub> 2 </sub>  T",
"V + HCl + Zn",
"V + SnCl <sub> 2 </sub>  ( <sub> 1 </sub> )",
"V + SnCl <sub> 2 </sub>  ( <sub> 2 </sub> )",
"V + SnCl <sub> 2 </sub>  ( <sub> 3 </sub> )",
"W + H <sub> 2 </sub> SO <sub> 4 </sub> ",
"W + HCl + Zn",
"W + SnCl <sub> 2 </sub> ",
"W + SnCl <sub> 2 </sub>  + SCN",
""
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
//"Ag2SO3", puste zdjecie
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
"Fe(NO2)2",
"Fe(NO2)3",
"Ag2CO3",
"PbCO3",
"CdCO3",
"Bi2(CO3)3",
"CuCO3",
"Al2(CO3)3",
"ZnCO3",
"FeCO3",
"Fe2(CO3)3",
"Cr2(CO3)3",
"MnCO3",
"NiCO3",
"CoCO3",
"BaCO3",
"SrCO3",
"CaCO3",
"MgCO3",
"Ag2SiO3",
"PbSiO3",
"CdSiO3",
"Bi2(SiO3)3",
"CuSiO3",
"Al2(SiO3)3",
"ZnSiO3",
"FeSiO3",
"Fe2(SiO3)3",
"Cr2(SiO3)3",
"MnSiO3",
"NiSiO3",
"CoSiO3",
"BaSiO3",
"SrSiO3",
"CaSiO3",
"MgSiO3",
"Ag3PO4",
"Pb3(PO4)2",
"Cd3(PO4)2",
"BiPO4",

//tych jeszcze nie było w kursie a po trzebowałem dołożyć coś innego
//
// "Cu3(PO4)2",
// "AlPO4",
// "Zn3(PO4)2",
// "Fe3(PO4)2",
// "FePO4",
// "CrPO4",
// "Mn3(PO4)2",
// "Ni3(PO4)2",
// "Co3(PO4)2",
// "Ba3(PO4)2",
// "Sr3(PO4)2",
// "Ca3(PO4)2",
// "Mg3(PO4)2",
// "Ag2CrO4",
// "PbCrO4",
// "CdCrO4",
// "Bi2(CrO4)3",
// "CuCrO4",
// "Al2(CrO4)3",
// "ZnCrO4",
// "FeCrO4",
// "Fe2(CrO4)3",
// "Cr2(CrO4)3",
// "MnCrO4",
// "NiCrO4",
// "CoCrO4",
// "BaCrO4",
// "SrCrO4"
"Au + HCl + Zn",
"Au + KBr (2)    ",
"Au + KBr       ",
"Au + KI (2)",
"Au + KI",
"Au + NaOH",
"Au + SnCl2 (2)",
"Au + SnCl2      ",
"FeCl3",
"Fe + H2SO4",
"Fe + HCl + Zn",
"Fe + KBr",
"Fe + KI",
"Fe + NaOH",
"Fe + SnCl2",
"Fe + SnCl2 + SCN",
"HAuCl4",
"Mo + H2O2 (2)",
"Mo + H2O2",
"Mo + H2SO4",
"Mo +H2SO4 N",
"Mo + HCl + Zn",
"Mo + SnCl2",
"Mo + SnCl2 + SCN",
"Ti + H2O2 (1)",
"Ti + H2O2 (2)",
"Ti + HCl + Zn",
"Ti + NaOH (1)",
"Ti + NaOH (2)",
"Ti + NaOH (3)",
"V + H2O2 T",
"V + HCl + Zn",
"V + SnCl2 (1)",
"V + SnCl2 (2)",
"V + SnCl2 (3)",
"W + H2SO4",
"W + HCl + Zn",
"W + SnCl2",
"W + SnCl2 + SCN",
""
];

var orderOfImages = [];
// for(var i=0; i<imagesAmount; i++)
// 	orderOfImages.push(i);



var chosenCourses = [];
for(var i=0; i<$("#choicebuttons").children().length; i++)
	chosenCourses.push(false);

function changeBool(b){
		if(b)
			return false;
		else  return true;
}

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

	

	$("#checkbox-checkall").click(function(){
		if(this.checked)
			for(var i=0; i < $("#choicebuttons").children().length; i++)
			{
				chosenCourses[i]=false;
				$("#choicebuttons").children()[i].click();
				$("#checkall-text").html(" <span></span> Odznacz wszystkie");
			}
		else
			for(var i=0; i < $("#choicebuttons").children().length; i++)
			{
				chosenCourses[i]=true;
				$("#choicebuttons").children()[i].click();
				$("#checkall-text").html(" <span></span> Zaznacz wszystkie");
			}
		allChecked=changeBool(allChecked);
	});

	$("#launch-course-button").click(function(){
		// $("html,body").animate({
		// 	scrollTop: $(window).height()
		// });
		orderOfImages = [];
		imagesAmount=0;
		tempIndexInOrder=0;

		var anyChecked=false;
		for(var i=0; i < $("#choicebuttons").children().length; i++)
		{			
			if(chosenCourses[i])
			{
				anyChecked=true;
				imagesAmount+=courseSize;
				var start=i*courseSize;
				for(var j=0; j<courseSize; j++)
				{
					orderOfImages.push(start);
					start++;
				}
			}
		}
		if(!anyChecked)
		{
			alert("Nie wybrałeś żadnego kursu! Wybierz kurs(kursy) klikając na odpowiednie przyciski.");
			// break;
		}
		else
		{	
			mixOrder();	


			$("#block-choice").css("display","none");
			$("#block-course").css("display","block");

			// $("#image-display img").attr("src",imagesPath+orderOfImages[tempIndexInOrder]+".png");
			
		
				buttonPushed();
		}

	});

	function buttonPushed(){
		if(!buttonLocked){
			var tempNumber = orderOfImages[tempIndexInOrder];
			console.log("temp number = "+tempNumber);
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
						},200).animate({
							fontSize: "-=10"
						},200,function(){buttonLocked=false;});
						$("#answer").css("border-color","green").css("color","green");
						if(!errorImage)result++;
					}else{
						$("#answer").attr("readonly","readonly");
						$("#title").html("Poprawna odpowiedź: <b>" + anwersToDisplay[tempNumber] + "</b>").animate({
							fontSize: "+=10"
						},200).animate({
							fontSize: "-=10"
						},200,function(){buttonLocked=false;});
						$("#answer").css("border-color","red").css("color","red");
						
						if(!errorImage)result--;
					}
					if(result<=0)
						$("#points").html(""+result);
					else
						$("#points").html("+"+result);

					$("#points").delay(400).animate({
						fontSize: "+=30"
					},200).animate({
						fontSize: "-=30"
					},200);
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
			checkbutton.val("nic");
			tempIndexInOrder=0;
			result=0;
			if(result<=0)
				$("#points").html(""+result);
			else
				$("#points").html("+"+result);

			
		}
	});
});
