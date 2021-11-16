function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/p68bR-nSu/model.json", modelReady);
 
 }
 
 function modelReady() {
     classifier.classify(gotResult);
     console.log("Model is Ready");
 }
 
 function gotResult(error,result) {
   console.log(result);  
 }