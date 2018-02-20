const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"

var h1 = document.createElement("h3");
h1.textContent = "Excercise 1:"
document.body.appendChild(h1);
var q1 = document.createElement("p");
q1.textContent = gotCitiesCSV.split(",");
document.body.appendChild(q1);

var h2 = document.createElement("h3");
h2.textContent = "Excercise 2:"
document.body.appendChild(h2);
var q2 = document.createElement("p");
q2.textContent = JSON.stringify(bestThing);
document.body.appendChild(q2);

var h3 = document.createElement("h3");
h3.textContent = "Excercise 3: "
document.body.appendChild(h3);
var q3 = document.createElement("p");
q3.textContent = JSON.stringify(lotrCitiesArray).replace(/,/g,":");
document.body.appendChild(q3);

var h4 = document.createElement("h3");
h4.textContent = "Excercise 4: "
document.body.appendChild(h4);
var q4 = document.createElement("p");
q4.textContent = lotrCitiesArray;
document.body.appendChild(q4);

var h5 = document.createElement("h3");
h5.textContent = "Excercise 5: "
document.body.appendChild(h5);
var q5 = document.createElement("p");
var firstFive = [];
for(x=0; x<5; x++) {
    firstFive.push(lotrCitiesArray[x]);
}
q5.textContent = JSON.stringify(firstFive);
document.body.appendChild(q5);

var h6 = document.createElement("h3");
h6.textContent = "Excercise 6: "
document.body.appendChild(h6);
var q6 = document.createElement("p");
var lastFive = [];
for(i=3; i<lotrCitiesArray.length; i++) {
    lastFive.push(lotrCitiesArray[i]);
}
q6.textContent = JSON.stringify(lastFive);
document.body.appendChild(q6);

var h7 = document.createElement("h3");
h7.textContent = "Excercise 7: "
document.body.appendChild(h7);
var q7 = document.createElement("p");
q7.textContent = lotrCitiesArray.slice(2, 5);
document.body.appendChild(q7);

var h8 = document.createElement("h3");
h8.textContent = "Excercise 8: "
document.body.appendChild(h8);
var q8 = document.createElement("p");
var sliceIndexOne = lotrCitiesArray.indexOf("Rohan");
var noRohan;
if( sliceIndexOne != -1) {
    lotrCitiesArray.splice(sliceIndexOne, 1);
}
q8.textContent = lotrCitiesArray;
document.body.appendChild(q8);

var h9 = document.createElement("h3");
h9.textContent = "Excercise 9: "
document.body.appendChild(h9);
var q9 = document.createElement("p");
var sliceIndexTwo = lotrCitiesArray.indexOf("Rhun");
if( sliceIndexTwo != -1) {
    lotrCitiesArray.splice(sliceIndexTwo, 2);
}
q9.textContent = lotrCitiesArray;
document.body.appendChild(q9);

var h10 = document.createElement("h3");
h10.textContent = "Excercise 10: "
document.body.appendChild(h10);
var q10 = document.createElement("p");
var sliceIndexGondor = lotrCitiesArray.indexOf("Gondor");
if( sliceIndexGondor != -1) {
    lotrCitiesArray.splice(sliceIndexGondor+1, 0, "Rohan");
}
q10.textContent = lotrCitiesArray;
document.body.appendChild(q10);

var h11 = document.createElement("h3");
h11.textContent = "Excercise 11: "
document.body.appendChild(h11);
var q11 = document.createElement("p");
var sliceIndexDead = lotrCitiesArray.indexOf("Dead Marshes");
if( sliceIndexDead != -1) {
    lotrCitiesArray.splice(sliceIndexDead, 1, "Deadest Marshes");
}
q11.textContent = lotrCitiesArray;
document.body.appendChild(q11);

var h12 = document.createElement("h3");
h12.textContent = "Excercise 12: "
document.body.appendChild(h12);
var q12 = document.createElement("p");
q12.textContent = bestThing.slice(0, 14);
document.body.appendChild(q12);

var h13 = document.createElement("h3");
h13.textContent = "Excercise 13: "
document.body.appendChild(h13);
var q13 = document.createElement("p");
q13.textContent = bestThing.slice(bestThing.length-12, bestThing.length);
document.body.appendChild(q13);

var h14 = document.createElement("h3");
h14.textContent = "Excercise 14: "
document.body.appendChild(h14);
var q14 = document.createElement("p");
q14.textContent = bestThing.slice(23, 38);
document.body.appendChild(q14);

var h15 = document.createElement("h3");
h15.textContent = "Excercise 15: "
document.body.appendChild(h15);
var q15 = document.createElement("p");
q15.textContent = bestThing.substring(bestThing.length-12, bestThing.length);
document.body.appendChild(q15);

var h16 = document.createElement("h3");
h16.textContent = "Excercise 16: "
document.body.appendChild(h16);
var q16 = document.createElement("p");
q16.textContent = bestThing.substring(23, 38);
document.body.appendChild(q16);

var h17 = document.createElement("h3");
h17.textContent = "Excercise 17: "
document.body.appendChild(h17);
var q17 = document.createElement("p");
q17.textContent = bestThing.indexOf("only");
document.body.appendChild(q17);

var h18 = document.createElement("h3");
h18.textContent = "Excercise 18: "
document.body.appendChild(h18);
var q18 = document.createElement("p");
q18.textContent = bestThing.indexOf("bit");
document.body.appendChild(q18);

function checkLetters(city) {
    return city.includes("ee"), city.includes("aa");
}

var h19 = document.createElement("h3");
h19.textContent = "Excercise 19: "
document.body.appendChild(h19);
var q19 = document.createElement("p");
var arrayOfString = gotCitiesCSV.split(",");
var vowels = [];
for( x = 0; x <arrayOfString.length; x++) {
    if(arrayOfString[x].includes("aa")) {
        vowels.push(arrayOfString[x]);
    } else if(arrayOfString[x].includes("ee")) {
        vowels.push(arrayOfString[x]);
    }
}
q19.textContent = vowels;
document.body.appendChild(q19);

var h20 = document.createElement("h3");
h20.textContent = "Excercise 20: "
document.body.appendChild(h20);
var q20 = document.createElement("p");
var or = [];
for( x = 0; x <lotrCitiesArray.length; x++) {
    if(lotrCitiesArray[x].includes("or")) {
        or.push(lotrCitiesArray[x]);
    }
}
q20.textContent = or;
document.body.appendChild(q20);

var h21 = document.createElement("h3");
h21.textContent = "Excercise 21: "
document.body.appendChild(h21);
var q21 = document.createElement("p");
var bestArray = bestThing.split(" ");
var bWords = [];
for( x = 0; x <bestArray.length; x++) {
    if(bestArray[x][0].includes("b")) {
        bWords.push(bestArray[x]);
    }
}
q21.textContent = bWords;
document.body.appendChild(q21);

var h22 = document.createElement("h3");
h22.textContent = "Excercise 22: "
document.body.appendChild(h22);
var q22 = document.createElement("p");
if(lotrCitiesArray.includes("Mirkwood")) {
    q22.textContent = "Yes";
} else {
    q22.textContent = "No";
}
document.body.appendChild(q22);

var h23 = document.createElement("h3");
h23.textContent = "Excercise 23: "
document.body.appendChild(h23);
var q23 = document.createElement("p");
if(lotrCitiesArray.includes("Hollywood")) {
    q23.textContent = "Yes";
} else {
    q23.textContent = "No";
}
document.body.appendChild(q23);

var h24 = document.createElement("h3");
h24.textContent = "Excercise 24: "
document.body.appendChild(h24);
var q24 = document.createElement("p");
q24.textContent = lotrCitiesArray.indexOf("Mirkwood");
document.body.appendChild(q24);

var h25 = document.createElement("h3");
h25.textContent = "Excercise 25: "
document.body.appendChild(h25);
var q25 = document.createElement("p");
for(x=0; x<lotrCitiesArray.length; x++) {
    if(lotrCitiesArray[x].includes(" ")) {
        q25.textContent = lotrCitiesArray[x];
        break;
    }
}
document.body.appendChild(q25);

var h26 = document.createElement("h3");
h26.textContent = "Excercise 26: "
document.body.appendChild(h26);
var q26 = document.createElement("p");
q26.textContent = lotrCitiesArray.reverse();
document.body.appendChild(q26);

var h27 = document.createElement("h3");
h27.textContent = "Excercise 27: "
document.body.appendChild(h27);
var q27 = document.createElement("p");
q27.textContent = lotrCitiesArray.sort();
document.body.appendChild(q27);

var h28 = document.createElement("h3");
h28.textContent = "Excercise 28: "
document.body.appendChild(h28);
var q28 = document.createElement("p");
q28.textContent = lotrCitiesArray.sort(function(a, b) {return b-a});
document.body.appendChild(q28);

var h29 = document.createElement("h3");
h29.textContent = "Excercise 29: "
document.body.appendChild(h29);
var q29 = document.createElement("p");
lotrCitiesArray.pop();
q29.textContent = lotrCitiesArray;
document.body.appendChild(q29);

var h30 = document.createElement("h3");
h30.textContent = "Excercise 30: "
document.body.appendChild(h30);
var q30 = document.createElement("p");
lotrCitiesArray.push("Rohan");
q30.textContent = lotrCitiesArray;
document.body.appendChild(q30);

var h31 = document.createElement("h3");
h31.textContent = "Excercise 31: "
document.body.appendChild(h31);
var q31 = document.createElement("p");
lotrCitiesArray.shift();
q31.textContent = lotrCitiesArray;
document.body.appendChild(q31);

var h32 = document.createElement("h3");
h32.textContent = "Excercise 32: "
document.body.appendChild(h32);
var q32 = document.createElement("p");
lotrCitiesArray.unshift("Beleriand");
q32.textContent = lotrCitiesArray;
document.body.appendChild(q32);