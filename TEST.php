<!--用于生成目录树-->
<?php
session_start();

class test{

    public function Echo()
    {
        $con =  mysqli_connect("localhost","root","123456","test");
        if (!$con)// 检查连接
        {
            die("连接错误: " . mysqli_connect_error());
        }
        mysqli_set_charset($con,"utf8");
        $code='test';
        if(isset($_GET['target'])){
            #echo $_GET['target'];
            $code = $_GET["target"];
        }
        if(isset($_GET['id'])){
            #echo $_GET['id'];
            $code = $_GET["id"];
        }

        $test = "ROOT———"."<a name= 'test' href='sql.php?id=$code'  target='_blank'>"."$code"."</a>";
        $test .= $this->getTree("$code",$con);
        $content = addslashes($test);
        $sql = "INSERT IGNORE INTO test.sjzt_tree_html(target_table,content) VALUES('$code','$content')";
        if (mysqli_query($con, $sql)) {
            echo "新记录插入成功";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($con);
        }
        mysqli_close($con);
		echo $test;

		/*$sql = "SELECT content FROM test.sjzt_tree_html WHERE target_table = '$code'";
		$data = mysqli_fetch_all(mysqli_query($con, $sql),MYSQLI_ASSOC);
		foreach($data as $row){
        echo $row["content"];
		}*/
    }

    public function getTree($pid,$con,$deep=1)
    {

        $html='';
        
        $sql = "SELECT * FROM test.sjzt_tree WHERE target_table ='$pid'";
        $result=mysqli_query($con,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        foreach($data as $row)
        {
            $code = $row['source_table'];
            $html.="<li>"."第".$deep."层——— "."<a name= 'test' href='sql.php?id=$code' target='_blank'>".$row['source_table']."</a>";
            $html.=$this->getTree($row['source_table'],$con,$deep+1);
            $html =$html."</li>";
        }
        return $html?'<ul>'.$html.'</ul>':$html;
    }

};


$test = new test();
$test->Echo();
?>



