<?php
//Call file db-config.php who have the database config
// include_once 'db-config.php';
class Connection{
    public $connection;
    function __construct(){
        $dbms="mysql";
        $host="localhost";
        $dbname="origamidb";
        $user='root';
        $passwd='';
        $argDSN=$dbms.":host=".$host.";dbname=".$dbname;
        $option=[
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false

        ];

        try {
            $this->connection= new PDO($argDSN,$user,$passwd,$option);
            echo "connection established";
            // header('Location: index.php');
            
        }catch (PDOException $error){
            $this->connection= "";
            echo "<br>Connection failure ".$error->getMessage();
        
        }
    }
    function getConnection(){
        return $this->connection;

    }
}

?>