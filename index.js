console.log($('h2').html());
var marriageStatus = -1; // 2 is singled, 1 is married
var totalScore = new Array(2);
var ageScore = new Array(21);

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
agescore[20] = new Array(130,0,0);


$("[name='ques-s01']").click(function(){
  var statusCheck = $(this).val());
  if (statusCheck == 'married') {
    marriageStatus  = 1;

  } else if (statusCheck == 'singled') {
    marriageStatus = 2;
  }
})





//----------------------------------------------- The followings are function for calculations ------------------------------------------------------------------

function updateScore (){

}
