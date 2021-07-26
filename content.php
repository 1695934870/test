<?php
    $code = urldecode($_GET ['id']);
    #$code = "新建商品房-供销报表";
    $con =  mysqli_connect("localhost","root","123456","test");
    // 检查连接
    if (!$con)
    {
        die("连接错误: " . mysqli_connect_error());
    }
    mysqli_set_charset($con,"utf8");
    $sql="select `sql` from test.fanruan_formwork WHERE sec_directory='$code'";

    $result=mysqli_query($con,$sql);
    $data = mysqli_fetch_all($result,MYSQLI_ASSOC);


    foreach($data as $row){
        #$row["sql"] = str_replace(" ","&nbsp;",$row["code"]); // 解决空格问题
        #$row["sql"] = str_replace("\n","<br>",$row["code"]); // 解决换行问题
        #echo $row["sql"];
        $sql_text = $row["sql"];
        #$arr = array("sql" => ""+$row["sql"]+"" );
        $arr = array("sql"=>$sql_text);
        //echo $arr;
        $jsonstr = json_encode($arr); // 转换成json数据存储格式
        echo $jsonstr;
    }
?>








