function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var downloadBtn = document.getElementById('download-btn');
  
    lightboxImg.src = imageSrc;
    downloadBtn.href = imageSrc; // Set download link
    lightbox.style.display = 'block';
    document.body.classList.add('lightbox-open');
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.classList.remove('lightbox-open');
  }
  

  $(document).ready(function(){
   $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.grid-item').show('1000');
    }
    else{
      $('.grid-item').not('.'+value).hide('1000');
      $('.grid-item').filter('.'+value).show('1000');
    }
   })

   $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
   })
  })