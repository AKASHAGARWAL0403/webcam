(function(){
    var video = document.getElementById('video');
    var click = document.getElementById('capture');
    var can = document.getElementById('show_image');
    var photo = document.getElementById('photo');
    var context = can.getContext('2d');
    var vendorUrl = window.URL || window.webkitURL;

    navigator.getMedia =    navigator.getUserMedia ||
                            navigator.webkitGetUserMedia || 
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;
    navigator.getMedia({
        video : true,
        audio : true
    } , function(stream){
            video.src = vendorUrl.createObjectURL(stream);
            video.play();
    },function(err){

    });

    click.addEventListener('click',function(){
        context.drawImage(video,0,0,300,300);
        photo.setAttribute('src',can.toDataURL('image/png'));
    })
    
})();