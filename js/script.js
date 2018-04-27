$(document).ready(function(){
		$('input[type="text"]').keypress(function(event){
			if(event.which == 13){
				var todoText = $(this).val();
				$.ajax({

					'url': "create.php",
					'data': {"task":todoText},
					'type': "POST",
					'success': function(data){
						$('ul#task01').append("<li id="+ data + ">" + todoText + "</li>" );
					}
				});
			}
		});	
});
