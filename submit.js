
var Quest = new Array(9);  //this sets up an array for all of the answers that are given

function populate() {
// alert("function populate started");
// this function gives each of the answers 0 points so if someone doesn't answer a question
// the whole thing will continue to work
for(var i=0; i<9; i++) { Quest[i]=0; }
}

function total() {
// alert("function total started");
// this function adds the number of points each answer is worth together
myScore=0;
for (var i=0; i<2; i++) { myScore=myScore+Quest[i]; }
console.log(myScore);
analyzer(myScore);
}
myContents = new Array();
myContents[1] = "When you want to watch Grey's Anatomy and laugh, watch the episodes below:"
+'S1 E9: Who is Zoomin Who'
+'S6 E21: How Insensitive'
+'S8 E7: Put Me In, Coach'
+'S8 E18: The Lion Sleeps Tonight';


myContents[2] = "When you want to watch Grey's Anatomy and Smile, watch the episodes below:"
+'S6 E8: Invest in Love'
+'S6 E10: Holidaze'
+'S7 E20: White Wedding'
+'S10 E12: Get Up, Stand Up';

myContents[3] = "When you want to watch Grey's Anatomy and cry.. watch the episodes below:"
+'S2 E27: Losing My Religion'
+'S5 E24: Now or Never'
+'S8 E24: Flight'
+'S9 E1: Going, Going, Gone'
+'S11 E21: How to Save a Life'
+'S2 E16: It is the End of the World'
+'S3 E15: Walk on Water'
+'S6 E23: Sanctuary'
+'S13 E23: True Colors';

myContents[4] = "When you want to watch The Office and laugh.. watch the episodes below:"
+'S1 E5: Basketball'
+'S2 E12: The Injury'
+'S4 E13: Dinner Party'
+'S4 E14: Goodbye, Toby'
+'S5 E14: Stress Relief';

myContents[5] = "When you want to watch The Office and smile.. watch the episodes below:"
+'S3 E23: The Job'
+'S4 E1: Fun Run'
+'S5 E28: Company Picnic'
+'S6 E4: Niagara'
+'S7 E19: Garage Sale';

myContents[6] = "When you want to watch The Office and cry.. watch the episodes below:"
+'S2 E22: Casino Night'
+'S3 E22: Beach Games'
+'S7 E22: Goodbye, Michael'
+'S9 E12: Customer Loyalty'
+'S9 E24: Finale';


myContents[7]= "When you want to watch Friends and laugh.. watch the episodes below:"
+'S1 E1: TOW The Blackout'
+'S10 E2: TOW Ross Is Fine'
+'S3 E2: TOW No One is Ready'
+'S6 E9: TOW Ross Got High'
+'S6 E17: TOW Unagi'
+'S7 E10: TOW The Holiday Armadillo'
+'S4 E8: TOW Chandler in a Box'
+'S10 E3: TOW Ross Tan'
+'S5 E11: TOW All the Resolutions';


myContents[8] ="When you want to watch Friends and smile.. watch the episodes below:"
+'S4 E12: TOW The Embryos'
+'S5 E14: TOW Everybody Finds Out'
+'S2 E14: TOW The Prom Video'
+'S2 E7:  TOW Ross Finds Out'
+'S7 E22: TOW Chandlers Dad';

myContents[9]="When you want to watch Friends and cry.. watch the episodes below:"
+ 'S6 E25: TOW The Proposal: Part 1'
+ 'S9 E21:TOW The Fertility Test'
+ 'S10 E9:TOW The Birth Mother'
+ 'S3 E16:TOW The Morning AFter'
+ 'S10 E17:The Last One: Parts 1&2'
+ 'S5 E3:The One Hundredth';



function analyzer(myScore) {
// this function uses the total calculated score to figure out which personality type they are
if (myScore==8) {
  myContentsPtr =1;
} else if (myScore == 12) {
  myContentsPtr = 2;
} else if(myScore==20)  {
   myContentsPtr = 3;
 } else if(myScore==11) {
   myContentsPtr = 4;
 } else if(myScore==15) {
    myContentsPtr = 5;
  } else if(myScore==23) {
    myContentsPtr = 6;
  } else if(myScore==5) {
    myContentsPtr = 7;
  } else if(myScore ==9) {
    myContentsPtr = 8;
  } else if(myScore== 17) {
    myContentsPtr = 9;
  }


myDisplay(myContents[myContentsPtr])
}

function myDisplay(myContents) {
//This function will open a new window and show the results calculated
alert(myContents);
}

function saver(q, points) {
// this function puts the points that each answer is worth into the array
q=q-1;
Quest[q]=points;
}
