<?php

include_once('navbar.php')

$FirstName=$_REQUEST['Fornavn'];
$LastName=$_REQUEST['Etternavn'];
$Class=$_REQUEST['Klasse'];
$Hobby=$_REQUEST['Hobby'];
$Gender=$_REQUEST['Kjønn'];
$DatamaskinID=$_REQUEST['DatamaskinID'];

$sql="insert into elev(Fornavn, Etternavn, Klasse, Hobby, Kjønn, DatamaskinID) values($FirstName, $LastName, $Class, $Hobby, $Kjønn, $DatamaskinID)";

echo $sql;

$connection=mysqli.connect('localhost', 'root', 'no')

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
}

?>