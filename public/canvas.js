var saveDraw = document.getElementById('saveDraw');
var capture = document.getElementById('capture');
console.log('saveDraw',saveDraw)
saveDraw.addEventListener('click', function(){
  designer.toDataURL('image/png', function(dataURL) {
    fetch('drawPost', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'imgPath':dataURL ,
      })
    })
    .then(response => {
      // console.log("result from draw post",data)
      window.location.replace('/profile');    })
    })
    // console.log(dataURL)
    // capture.src = dataURL //defining capture's src as the dataURL
  });
