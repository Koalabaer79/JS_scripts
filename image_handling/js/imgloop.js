
// folder and image names
var folder = 'img/';
var images = ['car.jpg', 'fantasy.jpg', 'owl.jpg'];
// 3 seconds timer for pic-change
var imgStay = 3000;

// Count items in image array
var imgCount = images.length;
// Calculate time of total loop
var imgLoop = imgStay*imgCount;

// Internal Loop of all images in array "images"
function loopImages () {
    images.forEach((item, i) => {
        setTimeout(() => {
            var imgPath = folder+item;
            load_img(item,imgPath);
        }, i * imgStay);
    });
}

// Function to display picture in div container with short description
function load_img(name,path) {
    img = new Image();

    img.onload = function() {
        var imgDiv = document.getElementById('img');
        var descDiv = document.getElementById('description');
        imgDiv.style.width = this.width;
        imgDiv.style.height = this.height;
        imgDiv.style.background = "url('" + path + "')";
        imgDiv.style.border = "1px solid #000";
        descDiv.innerHTML = 'Filename: '+name+' / Width: '+this.width+'px / Height: '+this.height+'px';
        descDiv.style.width = this.width;
    }

    img.src = path;
};

// Initial start of loop
loopImages();
// Loop timer with calculated total loop time
setInterval(function(){ loopImages() }, imgLoop);