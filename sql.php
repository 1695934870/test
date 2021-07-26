<!--用于显示目标表的sql内容-->
<?php
    #session_start();
    #echo $_SESSION["code"];
    #$code = $_SESSION["code"];
    $code = urldecode($_GET [ 'id']);
    $con =  mysqli_connect("localhost","root","123456","test");
    // 检查连接
    if (!$con)
    {
        die("连接错误: " . mysqli_connect_error());
    }
    mysqli_set_charset($con,"utf8");
    $sql="select * from test.sjzt_tree WHERE target_table='$code'";

    $result=mysqli_query($con,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);

    foreach($data as $row){

        $row["code"] = str_replace(" ","&nbsp;",$row["code"]); // 解决空格问题
        $row["code"] = str_replace("\n","<br>",$row["code"]); // 解决换行问题
        echo $row["code"];
        echo "<br/>";
        if($row["code"]==null){
            echo "<script>alert('该节点数据来自于数据同步');</script> ";
        }
        break;
    }
?>