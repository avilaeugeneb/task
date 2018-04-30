$(document).ready(function(){
		$('input[type="text"]').keypress(function(event){
			if(event.which == 13){
				var todoText = $(this).val();
				$.ajax({

					'url': "create.php",
					'data': {"task":todoText},
					'type': "POST",
					'success': function(createPhpOutput){
						$('ul#task01').append("<li id="+ createPhpOutput + "><span><i class='fas fa-trash'></i></span>  " + todoText + "</li>" );
					}
				});
			}
		});

		$('ul#task01').on("click","li",(function(){
			$(this).toggleClass("completed");
			$.ajax({
				'url':'done.php',
				'data':{'id':$(this).attr('id')},
				'type':'POST'
			});
		}));

		$('input[type="text"]').on("blur",function(){
				$(this).val("");
		});

		$('input[type="text"]').keyup(function(e){

			if(e.which==13){
				$(this).val("");
			}
		});

		$('ul#task01').on('click','span',function(event){
			$(this).parent().remove();
			event.stopPropagation();

			$.ajax({
				'url':'delete.php',
				'data':{'id':$(this).parent().attr('id')},
				'type':'POST'
			});
		});
});
