$(function() {

	// Custom JS
  function hideallDropdowns() {
            $(".dropped .submnu").hide();
            $(".dropped").removeClass('dropped');
            $(".dropped .submnu").unbind("click");
        }

        function showDropdown(el) {
            var el_li = $(el).parent().addClass('dropped');
            el_li
                .find('.title')
                .click(function () {
                    hideallDropdowns();
                })
                .html($(el).html());

            el_li.find('.submnu').show();
        }

        $(".drop-down").click(function(){
            showDropdown(this);
        });

        $(document).mouseup(function () {
            hideallDropdowns();
        });
	
//------------------------------------------//

//Toggle Menu

	$(".toggle-mnu").click(function() {
  $(this).toggleClass("active");     	//Добавляется класс active для выполнения кода css
  $(".hidden-mnu").slideToggle();				//Выпадение-скрытие .main-mnu
  return false;
});

});
