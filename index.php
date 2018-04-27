<?php 
	require_once 'heading.php';

	$todos = file_get_contents('todos.json'); //reads the content of the file indicated
	$todos = json_decode($todos,true); //converts the file contents to PHP Associative Array
?>

	<!-- Start your project here-->
	<script src="js/script.js"></script>
	<main id="grid">
		<div id="todoform">
			<h1>To-do List</h1>
			<input type="text" placeholder="Add New To-do">
			<ul id="task01">
				<?php
					foreach ($todos as $key => $todo) {
						echo "<li id ='". $key . "'>". $todo['task'] ."</li>";
					}

				?>
			</ul>
		</div>
	</main>

	<!-- /Start your project here-->

<?php 
	require_once 'footer.php';
?>
