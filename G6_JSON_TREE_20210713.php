
<?php



class test{

    public function Echo()
    {
        $con =  mysqli_connect("localhost","root","123456","test");
        if (!$con)// 检查连接
        {
            die("连接错误: " . mysqli_connect_error());
        }
        mysqli_set_charset($con,"utf8");
        #$code='ADS_NEWHOS_SUPPLY_SALE_RP_MF';
        #$code = urldecode($_GET ['id']);
        if(isset($_GET['target'])){
            #echo $_GET['target'];
            $code = $_GET["target"];
        }
        if(isset($_GET['id'])){
            #echo $_GET['id'];
            $code = $_GET["id"];
        }


        #$arr_json = array("deep"=>"0","id"=>"$code");
        $arr_json = array("name"=>"$code");
        $arr_json['children'] = $this->getTree("$code",$con);
        $jsonstr = json_encode($arr_json); // 转换成json数据存储格式
        echo $jsonstr;


    }

    #public function getTree($pid,$con,$deep=1)+
    public function getTree($pid,$con)
    {

        #$html='';
        $arr = array();
        $sql = "SELECT source_table_task FROM test.sjzt_tree WHERE target  _table_task ='$pid'";
        $result=mysqli_query($con,$sql);
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
        foreach($data as $row)
        {
            $code = $row['source_table_task'];
            #$tmp_arr = array("deep"=>"$deep","id"=>"$code","children"=>$this->getTree($row['source_table'],$con,$deep+1));
            $tmp_arr = array("name"=>"$code","children"=>$this->getTree($row['source_table_task'],$con));
            array_push($arr,$tmp_arr);
        }
        return $arr;
    }

};


$test = new test();
$test->Echo();

?>



