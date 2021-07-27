$('#1').click(function(){
    alert("按钮注册成功");

    $.ajax({
        cache: false,
        type: "GET",//重要参数1：请求的方式
        url : "G6_JSON_TREE.php?id=ADS_NEWHOS_SUPPLY_SALE_RP_MF",//重要参数2：请求的文件名
        var: "",
        //请求成功执行的function
        success: function(msg){//重要参数3：msg是后台返回的数据，和js的reponsetext一样，如果后台没有返回数据则不会弹出。
            alert("后台返回数据:"+msg);
            alert("请求成功");
            this.var = JSON.parse(msg);
            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;


            //var data ={"name":"dim_chs_ssm_sale_sys_code_info_df","children":[{"name":"ods_csxs_dm0_df","children":[{"name":"XSXSXT.dm0","children":[]}]},{"name":"ods_csxs_dm1_df","children":[{"name":"XSXSXT.DM1","children":[]}]},{"name":"ods_csxs_dm2_df","children":[{"name":"XSXSXT.DM2","children":[]}]},{"name":"ods_lyxs_dm0_df","children":[{"name":"LYXSXT.DM0","children":[]}]},{"name":"ods_lyxs_dm1_df","children":[{"name":"LYXSXT.DM1","children":[]}]},{"name":"ods_lyxs_dm2_df","children":[{"name":"LYXSXT.DM2","children":[]}]},{"name":"ods_nxxs_dm0_df","children":[{"name":"NXXSXT.dm0","children":[]}]},{"name":"ods_nxxs_dm1_df","children":[{"name":"NXXSXT.DM1","children":[]}]},{"name":"ods_nxxs_dm2_df","children":[{"name":"NXXSXT.DM2","children":[]}]},{"name":"ods_wcxs_dm0_df","children":[{"name":"WCXSXT2.dm0","children":[]},{"name":"WCXSXT2.DMO","children":[]}]},{"name":"ods_wcxs_dm1_df","children":[{"name":"WCXSXT2.DM1","children":[]}]},{"name":"ods_wcxs_dm2_df","children":[{"name":"WCXSXT2.DM2","children":[]}]},{"name":"ods_wsqy_dm0_df","children":[{"name":"XSXTUSER.DM0","children":[]}]},{"name":"ods_wsqy_dm1_df","children":[{"name":"XSXTUSER.DM1","children":[]}]},{"name":"ods_wsqy_dm2_df","children":[{"name":"XSXTUSER.DM2","children":[]}]}]};
            var option = {
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove'
                },
                series:[
                    {
                        type: 'tree',
                        id: 0,
                        name: 'tree1',
                        data: [this.var], //data为json对象，而非json字符串

                        top: '10%',
                        left: '8%',
                        bottom: '22%',
                        right: '20%',

                        symbolSize: 7,

                        edgeShape: 'polyline',
                        edgeForkPosition: '63%',
                        initialTreeDepth: 3,

                        lineStyle: {
                            width: 2
                        },

                        label: {
                            backgroundColor: '#fff',
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        },

                        leaves: {
                            label: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        },

                        emphasis: {
                            focus: 'descendant'
                        },

                        expandAndCollapse: true,
                        animationDuration: 550,
                        animationDurationUpdate: 750
                    }
                ]
            };

            option && myChart.setOption(option);
        },
        //请求成功失败执行的function
        error:function(){
            alert("请求失败");
        }
    });
    // 基于准备好的dom，初始化echarts实例
});