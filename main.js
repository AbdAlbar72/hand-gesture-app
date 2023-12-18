
function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById('capturedImageContainer').innerHTML = '<img src="'+data_uri+'"/>';
    });
}
function identifyImage() {
    document.getElementById('gestureName').innerText = 'Hand Gesture: Gesture 1'; 
    document.getElementById('gestureIcon').src = 'gesture1.png';
}
