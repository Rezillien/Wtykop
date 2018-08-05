
$(document).ready(()=>{
  window.bottomFlag=false;
});

$(window).scroll(function() {
  if(!window.bottomFlag && $(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    window.bottomFlag = true;
    setTimeout(()=>{window.bottomFlag=false;},1000);
    let items=$('.comments-stream');
    $.get('https://www.wykop.pl/mikroblog/hot/strona/2/').done((secondPageItems)=>{
      console.log(items);
      let secondPage = $.parseHTML(secondPageItems);

      window.seconPage = secondPage;

    });

  }
});