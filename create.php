<?php
	
$task = $_POST['task'] ;

$todos = file_get_contents('todos.json');

$todos = json_decode($todos, true);

array_push($todos, array('tasks'=>$task, 'done' => false));

$file = fopen('todos.json','w');

fwrite($file, json_encode($todos,JSON_PRETTY_PRINT));
fclose($file);

$id = count($todos)-1;
echo $id;
?>