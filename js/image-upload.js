var image_source;
var load_image_upload = function(event) {
      var image = document.getElementById('image-upload-output');
    image.src = URL.createObjectURL(event.target.files[0]);
    image_source=image.src;
};
    
   var upload_image_paper=function (event) {
       var image_upload_width=document.getElementById('image-upload-width').value;
       var image_upload_height=document.getElementById('image-upload-height').value;
    document.querySelector('#note').innerHTML = /* html */`
      <img style="width:${image_upload_width}%;" "height:${image_upload_height}%;" src="${image_source}" />
    ` + document.querySelector('#note').innerHTML;};

