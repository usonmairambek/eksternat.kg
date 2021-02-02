document.getElementById('burger').onclick = function() {
    document.getElementById('burger').classList.toggle('burger-active');
  }


  document.getElementById('header').onclick = function() {
    document.getElementById('burger').classList.remove('burger-active');
  }
  
  document.getElementById('section__news-card1').onclick = function() {
    document.getElementById('burger').classList.remove('burger-active');
  }