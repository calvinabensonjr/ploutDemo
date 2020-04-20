var thumbUp = document.getElementsByClassName("fa fa-heart");
var trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const likes = parseFloat(his.parentNode.parentNode.childNodes[7].innerText)
        const heart = parseFloat(this.parentNode.parentNode.childNodes[9].innerText)
        fetch('posts', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'like': likes,
            'heart': heart,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const imgPath = this.parentNode.parentNode.childNodes[1].childNodes[1].src.split("/")[5];
        fetch('/delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'imgPath': 'images/uploads/' + imgPath
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
