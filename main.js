
function start(){

  navigator.mediaDevices.getUserMedia({audio:true});
  //function should prompt the users to grant access to their connected microphones and cameras.
  classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HX2TsnJYO/model.json',modelReady);
//soundClassifier is a predefined function of ml5.js
}
function modelReady(){
  classifier.classify(gotResults);

}

function gotResults(error,results){
  if(error){
      console.error(error);
  }
  else{
      console.log(results);

  }
}
