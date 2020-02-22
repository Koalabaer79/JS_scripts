// Variables to modify

// folder and image-names-array and link-array
var folder = 'img/';
var images = ['car.jpg', 'fantasy.jpg', 'owl.jpg'];
var links = ['https://pixabay.com/photos/corvette-corvette-z06-z06-zr1-auto-4815234/', 'https://pixabay.com/photos/fantasy-clouds-island-sun-light-4806773/', 'https://pixabay.com/photos/owl-bird-nature-animal-4819550/'];
// Seconds timer for pic-change
var imgSeconds = 7;

// ---------------------------------------------

// Count items in array "images"
var imgCount = images.length;
// Calculate time for image to stay
var imgStay = imgSeconds*1000;
// Calculate time of total loop
var imgLoop = imgStay*imgCount;

// Internal Loop of all images in array "images"
function loopImages () {

    images.forEach((item, i) => {
        setTimeout(() => {
            var imgPath = folder+item;
            load_img(item,imgPath,i);
        }, i * imgStay);
        // Renew Wrapper transition
    });
}

// Function to display picture in div container with short description
function load_img(name,path,i) {
    img = new Image();

    img.onload = function() {
        var imgDiv = document.getElementById('img');
        var descDiv = document.getElementById('description');
        var outSrcd = document.getElementById('outsrcd');
        var imgWrapper = document.getElementById('wrapper');

        imgDiv.style.width = this.width;
        imgDiv.style.height = this.height;
        imgDiv.style.background = "url('" + path + "')";
        outSrcd.href = links[i];
        imgDiv.style.border = "1px solid #000";
        imgWrapper.style.animation = "linear fading "+imgSeconds+"s infinite";
        descDiv.innerHTML = 'Filename: '+name+' / Width: '+this.width+'px / Height: '+this.height+'px';
    }

    img.src = path;
};

// Initial start of loop
loopImages();
// Loop timer with calculated total loop time
setInterval(function(){ loopImages(); }, imgLoop);