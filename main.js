function setup() {
    canvas=createCanvas(400, 400)
    canvas.center()
    background("Ghostwhite")
    canvas.mouseReleased(classifyCanvas)
    synth=window.speechSynthesis
}
function preload() {
    classifier=ml5.imageClassifier("DoodleNet")

}
function draw() {
    strokeWeight(18)
    stroke(0)
    if (mouseIsPressed) {
        line( pmouseX, pmouseY, mouseX, mouseY)
    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotresult)
}

function papr() {
    background("Ghostwhite")
}
function gotresult(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        document.getElementById("lame").innerHTML="Drawing:" + results[0].label
        document.getElementById("cool").innerHTML="Accuracy:" + Math.round(results[0].confidence * 100) + "%"
        utterthis= new SpeechSynthesisUtterance(results[0].label)
        synth.speak(utterthis)
    }
}
