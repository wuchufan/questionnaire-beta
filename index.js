console.log($('h2').html());
var marriageStatus = 2; // 2 is singled, 1 is married
var totalScore = new Array(2);
var ageScore = new Array(21);
var eduScore = new Array(8);
var cWorkingExp = new Array (6);
var lang1LiScore = new Array(10);
var lang1SpScore = new Array(8);
var lang1ReScore = new Array(11);
var lang1WrScore = new Array(9);
var age = 0;


var sectionAScore = new Array(2);
var sectionBScore = new Array(2);
var sectionCScore = new Array(1);
var sectionDScore = new Array(2);
ageScore[0] = new Array(0,0,0);
ageScore[1] = new Array(18,90,99);
ageScore[2] = new Array(19,95,105);
ageScore[3] = new Array(20,100,110);
ageScore[4] = new Array(30,95,105);
ageScore[5] = new Array(31,90,99);
ageScore[6] = new Array(32,85,94);
ageScore[7] = new Array(33,80,88);
ageScore[8] = new Array(34,75,83);
ageScore[9] = new Array(35,70,77);
ageScore[10] = new Array(36,65,72);
ageScore[11] = new Array(37,60,66);
ageScore[12] = new Array(38,55,61);
ageScore[13] = new Array(39,50,55);
ageScore[14] = new Array(40,45,50);
ageScore[15] = new Array(41,35,39);
ageScore[16] = new Array(42,25,28);
ageScore[17] = new Array(43,15,17);
ageScore[18] = new Array(44,5,6);
ageScore[19] = new Array(45,0,0);
ageScore[20] = new Array(130,0,0);

eduScore[0] = new Array (28,30);
eduScore[1] = new Array (84,90);
eduScore[2]= new Array(91,98);
eduScore[3]= new Array (112,120);
eduScore[4]=new Array(119,128);
eduScore[5]= new Array (126,135);
eduScore[6] = new Array(140,150);
eduScore[7] = new Array(0,0);

cWorkingExp[0]= new Array(0,0);
cWorkingExp[1] = new Array(35,40);
cWorkingExp[2] = new Array(46,53);
cWorkingExp[3] = new Array(56,64);
cWorkingExp[4] = new Array(63,72);
cWorkingExp[5] = new Array(70,80);

lang1LiScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1LiScore[1] = new Array(6,6); //4.5
lang1LiScore[2] = new Array(6,6); //5
lang1LiScore[3] = new Array(8,9); //5.5
lang1LiScore[4] = new Array(16,17); //6
lang1LiScore[5] = lang1LiScore[4]; //6.5
lang1LiScore[6] = lang1LiScore[4]; //7
lang1LiScore[7] = new Array(22,23); //7.5
lang1LiScore[8] = new Array (29,31);//8
lang1LiScore [9] = new Array (32,34);//8.5+

lang1ReScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1ReScore[1] = new Array(6,6); //3.5
lang1ReScore[2] = new Array(6,6); //4
lang1ReScore[3] = new Array(6,6); //4.5
lang1ReScore[4] = new Array(8,9); //5
lang1ReScore[5] = new Array(8,9); //5.5
lang1ReScore[6] = new Array(16,17); //6
lang1ReScore[7] = new Array(22,23); //6.5
lang1ReScore[8] = new Array(29,31); //7
lang1ReScore[9] = new Array(29,31); //7.5
lang1ReScore[10] = new Array(32,34); //8+

lang1SpScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1SpScore[1] = new Array(6,6); //
lang1SpScore[2] = new Array(6,6); //
lang1SpScore[3] = new Array(8,9); //
lang1SpScore[4] = new Array(16,17); //
lang1SpScore[5] = new Array (22,23); //
lang1SpScore[6] = new Array(29,31); //
lang1SpScore[7] = new Array(32,34); //

lang1WrScore[0] = new Array(0,0); //1 is singled, 0 is married
lang1WrScore[1] = new Array(6,6); //4
lang1WrScore[2] = lang1WrScore[1]; //4.5
lang1WrScore[3] = new Array(6,6); //5
lang1WrScore[4] = new Array(8,9); //5.5
lang1WrScore[5] = new Array (16,17); //6
lang1WrScore[6] = new Array(22,23); //6.5
lang1WrScore[7] = new Array(29,31); //7
lang1WrScore[8] = new Array (32,34);//7.5+






$("[name='ques-s01']").click(function(){
  var statusCheck = $(this).val();
  console.log(statusCheck);
  if (statusCheck == 'married') {
    marriageStatus  = 1;

  } else if (statusCheck == 'singled') {
    marriageStatus = 2;
  }
  updateScores();
});

$("#ques-sa1").change(function(){
  age = $(this).val();
  updateScores();


});

$("#ques-sc1").change(function(){
  updateScores();
});

$("#q1b").change(function(){
  updateScores();
});

$('#q1e').change(function(){
  updateScores();
});

$(".qlang1").change(function(){
  updateScores();

});





//----------------------------------------------- The followings are function for calculations ------------------------------------------------------------------
function updateScores(){
  updateSectionAScore();
  updateSectionCScore();
}

function updateSectionAScore (){
  var ageResult = updateAgeScore();
  var eduResult = updateEduScore();
  var cWorkingExpResult = updateCWorkingEXP();
  var totalLang1ScoreResult = updateTotalLang1Score();
  $("#section-a-result").text(ageResult + eduResult + cWorkingExpResult+totalLang1ScoreResult);
}
function updateSectionCScore(){

}
//Section A
function updateAgeScore(){
  var index = 0;
  var result;
  while(index < ageScore.length){
    if (age >= ageScore[index][0]){
      if (age < ageScore[index+1][0]){


        result = ageScore[index][marriageStatus];
      } else if (age == ageScore[index+1][0]){
        result = ageScore[index+1][marriageStatus];
      }

    } index++;

  }
  $("#age-score-result").text(result);
  return result;
}

function updateEduScore(){
  var optionValue = $("#q1b").val();
  $("#edu-score-result").text(eduScore[optionValue][marriageStatus-1]);
  return eduScore[optionValue][marriageStatus-1];
}

function updateCWorkingEXP(){
  var optionValue = $("#q1e").val();
  $("#cworkexp-score-result").text(cWorkingExp[optionValue][marriageStatus-1]);
  return cWorkingExp[optionValue][marriageStatus-1];
}

function updateTotalLang1Score(){
  var lang1LiScore = updateLangLi1Score();
  var lang1ReScore = updateLangRe1Score();
  var lang1SpScore = updateLangSp1Score();
  var lang1WrScore = updateLangWr1Score();
  var totalLang1Score = lang1LiScore+lang1ReScore+lang1SpScore+lang1WrScore;
  $("#lang1-score-result").text(totalLang1Score);
  return totalLang1Score;

}
//update individual lang1 score functions：
function updateLangLi1Score(){
  var optionValue = $("#qlangli1").val();
  return lang1LiScore[optionValue][marriageStatus-1];
}
function updateLangSp1Score(){
  var optionValue = $("#qlangsp1").val();
  return lang1LiScore[optionValue][marriageStatus-1];
}
function updateLangRe1Score(){
  var optionValue = $("#qlangre1").val();
  return lang1LiScore[optionValue][marriageStatus-1];
}
function updateLangWr1Score(){
  var optionValue = $("#qlangwr1").val();
  return lang1LiScore[optionValue][marriageStatus-1];
}

//Section C
function updateMixedScores(){
  var optionValueEdu = $("#q1b").val();
  var optionValueFgnWorkExp = $("ques-sc1").val();
  var optionValueCWorkExp = $("#q1e").val();
  var optionValueLi = $("#qlangli1").val();
  var optionValueSp = $("#qlangsp1").val();
  var optionValueRe = $("#qlangre1").val();
  var optionValueWr = $("#qlangwr1").val();
  var sectionScore = [[0,0],[0,0]];
  var sectionTotalScore = 0;
  //first section:
  if (optionValueLi >= 4 && optionValueSp >= 4 && optionValueRe >= 6 && optionValueWr >= 5 && optionValueEdu >1){ //if at least All CLB7+ and at least have higher education
    if (optionValueLi >= 8 && optionValueSp >= 6 && optionValueRe >= 8 && optionValueWr >= 7 ){ //if ALL CLB 9+
      if (optionValueEdu >= 5){ //if have highest level education
        sectionScore[0][0] = 50;
      } else {
        sectionScore [0][0] = 25;
      }
    } else{ // if ALL CLB7+
      if (optionValueEdu >= 5){ //if highest edu
        sectionScore[0][0] = 25;
      } else {
        sectionScore[0][0] = 13;
      }

    }
  }

  // second section:
  if (optionValueCWorkExp >= 1 && optionValueEdu >1){ //at least have 1 year of c-experience AND at least higher edu
    if (optionValueCWorkExp >= 2){ // if exp higher than or equal to 2 years
      if (optionValueEdu >=5){ // if have highest education
        sectionScore[0][1] =50;
      } else {
        sectionScore[0][1] =25;
      }
    } else { //1 year exp
      if (optionValueEdu >= 5){
        sectionScore[0][1] =25;
      } else {
        sectionScore[0][1] =13;
      }
    }
  }

  // third section:
  if (optionValueFgnWorkExp >= 1 && optionValueLi >= 4 && optionValueSp >= 4 && optionValueRe >= 6 && optionValueWr >= 5){
    if (optionValueLi >= 8 && optionValueSp >= 6 && optionValueRe >= 8 && optionValueWr >= 7 ){
      if (optionValueFgnWorkExp == 2){
        sectionScore[1][0] =50;
      } else {
        sectionScore[1][0] = 25;
      }
    } else {
      if (optionValueFgnWorkExp ==1){
        sectionScore[1][0] = 13;
      } else {
        sectionScore[1][0] =25;
      }
    }
  }

  // fourth Section:
  if (optionValueCWorkExp >= 1 && optionValueFgnWorkExp >=1){
    if (optionValueCWorkExp >=2){
      if (optionValueFgnWorkExp ==1){
        sectionScore[1][1] = 25;
      } else {
        sectionScore [1][1] =50;
      }
    } else{
      if (optionValueFgnWorkExp ==1){
        sectionScore[1][1] =13;

      } else{
        sectionScore [1][1]= 25;
      }
    }
  }

}
