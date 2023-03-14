const click_button = document.querySelectorAll('.btn button');
const block_visible = document.querySelectorAll('.content');

click_button.forEach(function(btn) {
  btn.addEventListener('click', function(){
    let activ_btn = btn;
    let btn_data = activ_btn.getAttribute('data-id');
    let div_id = document.querySelector(btn_data);
    
    if(! activ_btn.classList.contains('active')){
      click_button.forEach(function(btn){
        btn.classList.remove('active');
      });
  
      block_visible.forEach(function(btn){
        btn.classList.remove('active');
      });
  
      activ_btn.classList.add('active');
      div_id.classList.add('active');
    }
  })
});