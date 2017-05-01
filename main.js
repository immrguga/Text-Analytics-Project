$(document).ready(function(){



$("#button").click(function(){
  var text = $("#text").val();
  var words1 = text.split(/[^{áéíóú}\w]/g);
  var words = cleanArray(words1);

  function longestword(words){
    var long = 0;
    var lw = "";
    for (var p = 0; p < words.length; p++){
      if(words[p].length > long){
        long = words[p].length;
      if(long == words[p].length){
        lw = p
      }
      }
    }
    return(words[lw].split(".") + " (" + words[lw].length + " characters)");
  }

  function shortestword(words){
    var long = 100;
    var sw = "";

    for (var p = 0; p < words.length; p++){
      if(words[p].length < long && words[p].length > 3){
        long = words[p].length;
      }
      if(long == words[p].length){
        sw = p
      }
    }
    return (words[sw] + " (" +words[sw].length + " characters)")
  }

  function cleanArray(actual){
    var newArray = new Array();
    for (var i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }

  function eliminateDuplicates(arr){
    var i,
        len=arr.length,
        out=[],
        obj={};

    for (i=0;i<len;i++) {
      obj[arr[i]]=0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }


  var uniqueWords = eliminateDuplicates(words);
  var letters = text.split("");
  var sentc = text.split(".");
  var numWords = words.length;
  var longWord = longestword(words)
  var shortWord = shortestword(words)
  var wordsPerc = [];
  var wordsPercNum = [];
  var percIndex = [];
  var maxPerc = [];

  function percent(word){
    var pword = 0;
    for(var p = 0; p < numWords; p++){
      if(words[p] == word){
        pword += 1;
      }
    }
    return (pword * 100/numWords);
  }

  for(var i = 0; i < uniqueWords.length; i++){

    wordsPerc.push(uniqueWords[i]);
    wordsPercNum.push(percent(uniqueWords[i]));

  }

  function findLargest5(){
        maxPerc[0]=0;
        maxPerc[1]=0;
        maxPerc[2]=0;
        maxPerc[3]=0;
        maxPerc[4]=0;

      for(i=0;i < wordsPercNum.length; i++){
          if( wordsPercNum[i] > maxPerc[0]){
               maxPerc[0] = wordsPercNum[i];
               percIndex[0]=i;
          };
      };

      for(i=0;i < wordsPercNum.length; i++){
          if( wordsPercNum[i] >= maxPerc[1] && wordsPercNum[i] < maxPerc[0] ){
               maxPerc[1] = wordsPercNum[i];
               percIndex[1]=i;
          };
      };

      for(i=0;i < wordsPercNum.length; i++){
          if( wordsPercNum[i] >= maxPerc[2] && wordsPercNum[i] < maxPerc[1] ){
               maxPerc[2] = wordsPercNum[i];
               percIndex[2]=i;
          };
      };

      for(i=0;i < wordsPercNum.length; i++){
          if( wordsPercNum[i] >= maxPerc[3] && wordsPercNum[i] < maxPerc[2] ){
               maxPerc[3] = wordsPercNum[i];
               percIndex[3]=i;
          };
      };
      for(i=0;i < wordsPercNum.length; i++){
          if( wordsPercNum[i] >= maxPerc[4] && wordsPercNum[i] < maxPerc[3] ){
               maxPerc[4] = wordsPercNum[i];
               percIndex[4]=i;
          };
      };

    }

  findLargest5()


  $("#num_words").empty().append(numWords + " Words");
  $("#long_word").empty().append(longWord);
  $("#short_word").empty().append(shortWord);

  $("#button2").click(function(){
    function percent(word){
      var pword = 0;
      for(var p = 0; p < numWords; p++){
        if(words[p] == word){
          pword += 1;
        }
      }
      return (pword * 100/numWords);
    }
    var searchW = $("#searchWord").val();

    var swPerc = 0
    swPerc+= percent(searchW);
    var swTimes = 0;
    for(var p = 0; p < words.length; p++){
      if(words[p] == searchW){
        swTimes +=1;
      }
    }

    $("#wordSearch").empty().append(Math.floor(swPerc)+"%"+"("+swTimes+" Times)");
    $("#wu").css("width", (swPerc + 10)+"%");
  })

  $("#word1").empty().append(uniqueWords[percIndex[0]] + " " + Math.floor(maxPerc[0])+"%")
  $("#w1").css("width", (maxPerc[0]+10)+"%");

  $("#word2").empty().append(uniqueWords[percIndex[1]] + " " + Math.floor(maxPerc[1])+"%")
  $("#w2").css("width", (maxPerc[1]+10)+"%");

  $("#word3").empty().append(uniqueWords[percIndex[2]] + " " + Math.floor(maxPerc[2])+"%")
  $("#w3").css("width", (maxPerc[2]+10)+"%");

  $("#word4").empty().append(uniqueWords[percIndex[3]] + " " + Math.floor(maxPerc[3])+"%")
  $("#w4").css("width", (maxPerc[3]+10)+"%");

  $("#word5").empty().append(uniqueWords[percIndex[4]] + " " + Math.floor(maxPerc[4])+"%")
  $("#w5").css("width", (maxPerc[4]+10)+"%");
  });





});
