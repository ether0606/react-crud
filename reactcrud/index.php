<?php
include 'connection.php';
$data = [];

$sql = 'SELECT * FROM users order by id desc';
$result=$db->query($sql);
while($row = $result->fetch_object()){
	$data[]= $row;
}
echo json_encode($data);