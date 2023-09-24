const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.body;
    if (imgs.id=="map") {
      
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.695233593917!2d32.51652671558588!3d38.007568606504115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085afae1f0edb%3A0xb9ff1dbaa5e290e6!2sKonya%20Teknik%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1675796736773!5m2!1str!2str"
      // iframe.style="margin-left: 150px; margin-bottom: 100%; display: inline;"
      iframe.style.marginLeft= "500px"
    
    }
    else {
      expandImg.style.backgroundImage = "url("+imgs.src+")";
      
      iframe.style.display= none
    }

  }

  

