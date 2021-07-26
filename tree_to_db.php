<!--用于生成目录树-->
<?php
session_start();

class test{

    public function test()
    {
        $is_exist = array();

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
        $code = 'ADS_NEWHOS_SUPPLY_SALE_RP_MF';
        //array_push($is_exist,$code);
        $test = "ROOT———"."<a name= 'test' href='sql.php?id=$code'  target='_blank'>"."$code"."</a>";
        $test .= $this->getTree("$code",$con,$is_exist,1);
        echo $test;
    }
    public function getTree($pid,$con,$arr,$deep=1)
    {
        if(strpos($pid,'tmp') !== false){  //该来源表为tmp临时表

            if( in_array($pid,$arr) /*array_search(,)== false*/){ //该tmp临时表已遍历
                //echo 'tmp，重复遍历';
               /* $html='';
                $html.=$pid."：已遍历";
                return $html?'<ul>'.$html.'</ul>':$html;*/
                $html='tmp，重复遍历';

                return $html?'<ul>'.$html.'</ul>':$html;
            }
            else{
                //echo '：tmp,且为第一次遍历';
                array_push($arr,$pid);
                $html='';
                /*
                if($deep>13){
                    return $html?'<ul>'.$html.'</ul>':$html;
                }*/
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
                        $code = $row['source_table'];
                        $html.="<li>".$deep."——— "."<a name= 'test' href='sql.php?id=$code' target='_blank'>".$row['source_table']."</a>";
                        $html.=$this->getTree($row['source_table'],$con,$arr,$deep+1);
                        $html=$html."</li>";
                    }
                }
                return $html?'<ul>'.$html.'</ul>':$html;
            }

        }
        else{
            $html='';
            /*
            if($deep>13){
                return $html?'<ul>'.$html.'</ul>':$html;
            }*/
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
                    $code = $row['source_table'];
                    $html.="<li>".$deep."——— "."<a name= 'test' href='sql.php?id=$code' target='_blank'>".$row['source_table']."</a>";
                    $html.=$this->getTree($row['source_table'],$con,$arr,$deep+1);
                    $html=$html."</li>";
                }
            }
            return $html?'<ul>'.$html.'</ul>':$html;
        }


    }

};


$test = new test();
$test->test();
?>



