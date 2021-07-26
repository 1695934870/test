<!--用于生成目录树-->
<?php
session_start();

class test{

    public function test()
    {
        $con =  mysqli_connect("localhost","root","123456","test");
        // 检查连接
        if (!$con)
        {
            die("连接错误: " . mysqli_connect_error());
        }
        mysqli_set_charset($con,"utf8");

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
        echo $test;
    }
    public function getTree($pid,$con,$deep=1)
    {

        $html='';
        /*if($deep>13){
            return $html?'<ul>'.$html.'</ul>':$html;
        }*/
        $sql = "SELECT * FROM test.sjzt_tree WHERE target_table ='$pid'";
        $result=mysqli_query($con,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        foreach($data as $row)
        {
            /*if($row['source_table']==$row['target_table']){
                echo "bug_start";
                echo $row['source_table'];
                echo "bug_end";
                continue;
            }*/
            /*if($row['target_table']==$pid)
            {
                //父亲找儿子
                $code = $row['source_table'];
                $html.="<li>".$deep."——— "."<a name= 'test' href='sql.php?id=$code' target='_blank'>".$row['source_table']."</a>";
                $html.=$this->getTree($row['source_table'],$con,$deep+1);
                $html =$html."</li>";
            }*/
            $code = $row['source_table'];
            $html.="<li>"."第".$deep."层——— "."<a name= 'test' href='sql.php?id=$code' target='_blank'>".$row['source_table']."</a>";
            $html.=$this->getTree($row['source_table'],$con,$deep+1);
            $html =$html."</li>";
        }
        return $html?'<ul>'.$html.'</ul>':$html;
    }

};


$test = new test();
$test->test();
?>



