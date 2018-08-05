
window.bottomFlag=true;
window.shouldWork=false;
$(document).ready(()=>{
  window.bottomFlag=false;
  window.pageCounter=2;
  window.appendAfter = '.comments-stream ';
  window.appendTemplate = 'wtykopHotAppendClass';
  if($('div.nav.bspace.rbl-block > ul:nth-child(3) > li:nth-child(3)')[0].className==='active'){
    window.shouldWork=true;
  }
});

async function asyncAppendList(){
  $(window.appendAfter).after(
    $('<div class="'+ window.appendTemplate + window.pageCounter +'"></div>')
      .load('https://www.wykop.pl/mikroblog/hot/strona/' + window.pageCounter + '/ .comments-stream')
     );

  window.appendAfter = '.' + window.appendTemplate + window.pageCounter;
  window.pageCounter++;
}

$(window).scroll(function() {
  if($(window).scrollTop()%500<20){
    $('.lazy:not([src])').each(function() {
      $(this).attr('src',$(this).attr('data-original'));
    });
  }
  if(!window.bottomFlag && $(window).scrollTop() + $(window).height() > $(document).height() - 500) {
    window.bottomFlag = true;
    setTimeout(()=>{window.bottomFlag=false;},1000);
    asyncAppendList();

  }
});