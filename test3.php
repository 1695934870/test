<?php

// 关联数组
#$row=mysqli_fetch_assoc($result);
#printf ("%s (%s)\n",$row["target_table"],$row["project"]);
/*
while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){

    echo $row['type'];
    echo"<br/>";
}

foreach ($data as $row){
    echo $row['type'];
    echo"<br/>";
}*/
class test{
    public $con;
    public $sql;
    public $result;
    public $data;
    public $test;
    public function test()
    {
        $con =  mysqli_connect("localhost","root","123456","test");
        // 检查连接
        if (!$con)
        {
            die("连接错误: " . mysqli_connect_error());
        }
        mysqli_set_charset($con,"utf8");
        $sql="select * from sjzt_tree";

        $result=mysqli_query($con,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        /*
        foreach($data as $row){
            echo $row["type"];
            echo "<br/>";
        }*/
        $test = $this->getTree("dws_newhos_sale_df",$con);
        echo $test;
    }
    public function getTree($pid,$con)
    {
        $html='';
        $sql = "SELECT * FROM test.sjzt_tree WHERE target_table ='$pid'";
        $result=mysqli_query($con,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        foreach($data as $row)
        {
            if($row['source_table']==$row['target_table']){
                continue;
            }
            if($row['target_table']==$pid)
            {
                //父亲找儿子
                $html.="<li>".$row['source_table'];
                $html.=$this->getTree($row['source_table'],$con);
                $html=$html."</li>";
            }
        }
        return $html?'<ul>'.$html.'</ul>':$html;
    }

};
/*
$con=mysqli_connect("localhost","root","123456","test");
// 检查连接
if (!$con)
{
    die("连接错误: " . mysqli_connect_error());
}
mysqli_set_charset($con,"utf8");
$sql="select * from sjzt_tree";

$result=mysqli_query($con,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
$test = getTree($data,"dim_chs_ssm_project_info_df");
echo $test;
*/
$test = new test();
$test->test();
?>

