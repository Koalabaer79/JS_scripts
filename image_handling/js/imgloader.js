
var folder = 'img/';
var images = ['car.jpg', 'fantasy.jpg', 'owl.jpg']
var counter = 1;

images.forEach(function(item) {
    var imgPath = folder+item;
    load_img(imgPath,counter);

    console.log(imgPath+' '+counter);
    counter++;
});

function load_img(path,count) {
    img = new Image();

    img.onload = function() {
        var imgDiv = document.getElementById('img_'+count);
        imgDiv.style.width = this.width;
        imgDiv.style.height = this.height;
        imgDiv.style.background = "url('" + path + "')";
        imgDiv.style.border = "1px solid #000";
        document.getElementById('name_'+count).innerHTML = path;
        document.getElementById('width_'+count).innerHTML = this.width;
        document.getElementById('height_'+count).innerHTML = this.height;
    }

    img.src = path;
};