$(function(){
    $(".btn-primary").click(function(){
      $(".collapse").collapse('toggle');
    });
    $(".btn-success").click(function(){
      $(".collapse").collapse('show');
    });
    $(".btn-warning").click(function(){
      $(".collapse").collapse('hide');
    });
    $(".collapse").on('show.bs.collapse', function(){
      alert('The collapsible content is about to be shown.');
    });
    $(".collapse").on('shown.bs.collapse', function(){
      alert('The collapsible content is now fully shown.');
    });
    $(".collapse").on('hide.bs.collapse', function(){
      alert('The collapsible content is about to be hidden.');
    });
    $(".collapse").on('hidden.bs.collapse', function(){
      alert('The collapsible content is now hidden.');
    });
  });