

Webcam.set({
    width:300,height:301,
    image_format:'png',
    png_quality:90
})
 
Webcam.attach('#Camera')

camera=document.getElementById("Camera");

function take_picture(){
    Webcam.snap(function(data_URI){
        document.getElementById("Result").innerHTML='<img id="ImageCapture" src="'+data_URI+'">'
    })
}

console.log("ml5 version",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3zMROFqNL/model.json",modelLoaded);


function modelLoaded(){
    console.log("Model Loaded");
}

function FindObject(){
    img=document.getElementById("ImageCapture");
classifier.classify(img,gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error)
    }else{
        console.log(results);
document.getElementById("Sugested_Object").innerHTML= results[0].label;
document.getElementById("Accuracy_Object").innerHTML=results[0].confidence.toFixed[2];
    }
    
}