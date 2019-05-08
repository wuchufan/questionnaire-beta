console.log($('h2').html());
var marriageStatus = 2; // 2 is singled, 1 is married
var totalScore = new Array(2);
var ageScore = new Array(21);
var eduScore = new Array(8);
var cWorkingExp = new Array (6);
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

$("#q1b").change(function(){
  updateScores();
});

$('#q1e').change(function(){
  updateScores();
});





//----------------------------------------------- The followings are function for calculations ------------------------------------------------------------------
function updateScores(){
  updateSectionAScore();
}

function updateSectionAScore (){
  var ageResult = updateAgeScore();
  var eduResult = updateEduScore();
  var cWorkingExpResult = updateCWorkingEXP();
  $("#section-a-result").text(ageResult + eduResult + cWorkingExpResult);
}

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
