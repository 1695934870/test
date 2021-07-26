const btn = document.getElementById('generate')          //获取一个按钮对象
btn.onclick = () => {                                    //为按钮添加一个单击事件
    const textarea = document.getElementById('input')    //获取document对象
    const input = textarea.value.trim()                  //获取文本框中输入的内容
    const labs = input.split('\n\n')                     
    const data = [{
        "id": "dwd_hos_fix_room_supply_min_date_df",
        "children": [
            {
                "id": "dim_hos_ssm_house_type_info_df",
                "children": [
                    {
                        "id": "dim_chs_ssm_sale_sys_code_info_df",
                        "children": [
                            {
                                "id": "ods_csxs_dm0_df",
                                "children": [
                                    {
                                        "id": "XSXSXT.dm0",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_csxs_dm1_df",
                                "children": [
                                    {
                                        "id": "XSXSXT.DM1",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_csxs_dm2_df",
                                "children": [
                                    {
                                        "id": "XSXSXT.DM2",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_lyxs_dm0_df",
                                "children": [
                                    {
                                        "id": "LYXSXT.DM0",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_lyxs_dm1_df",
                                "children": [
                                    {
                                        "id": "LYXSXT.DM1",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_lyxs_dm2_df",
                                "children": [
                                    {
                                        "id": "LYXSXT.DM2",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_nxxs_dm0_df",
                                "children": [
                                    {
                                        "id": "NXXSXT.dm0",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_nxxs_dm1_df",
                                "children": [
                                    {
                                        "id": "NXXSXT.DM1",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_nxxs_dm2_df",
                                "children": [
                                    {
                                        "id": "NXXSXT.DM2",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wcxs_dm0_df",
                                "children": [
                                    {
                                        "id": "WCXSXT2.dm0",
                                        "children": []
                                    },
                                    {
                                        "id": "WCXSXT2.DMO",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wcxs_dm1_df",
                                "children": [
                                    {
                                        "id": "WCXSXT2.DM1",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wcxs_dm2_df",
                                "children": [
                                    {
                                        "id": "WCXSXT2.DM2",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wsqy_dm0_df",
                                "children": [
                                    {
                                        "id": "XSXTUSER.DM0",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wsqy_dm1_df",
                                "children": [
                                    {
                                        "id": "XSXTUSER.DM1",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wsqy_dm2_df",
                                "children": [
                                    {
                                        "id": "XSXTUSER.DM2",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "id": "dwd_hos_room_supply_min_date_df",
                "children": [
                    {
                        "id": "dim_chs_ssm_project_info_df",
                        "children": [
                            {
                                "id": "dim_chs_ssm_project_local_info_df",
                                "children": [
                                    {
                                        "id": "ods_wsqy_xmdd_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.XMDD",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                "children": [
                                    {
                                        "id": "ods_csxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.dm0",
                                                "children": []
                                            },
                                            {
                                                "id": "WCXSXT2.DMO",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM2",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "dim_hos_ssm_build_info_df",
                                "children": [
                                    {
                                        "id": "dim_hos_ssm_room_structure_info_df",
                                        "children": [
                                            {
                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                "children": [
                                                    {
                                                        "id": "ods_csxs_dm0_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.dm0",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_csxs_dm1_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.DM1",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_csxs_dm2_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.DM2",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_dm0_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.DM0",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_dm1_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.DM1",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_dm2_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.DM2",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_dm0_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.dm0",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_dm1_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.DM1",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_dm2_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.DM2",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_dm0_df",
                                                        "children": [
                                                            {
                                                                "id": "WCXSXT2.dm0",
                                                                "children": []
                                                            },
                                                            {
                                                                "id": "WCXSXT2.DMO",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_dm1_df",
                                                        "children": [
                                                            {
                                                                "id": "WCXSXT2.DM1",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_dm2_df",
                                                        "children": [
                                                            {
                                                                "id": "WCXSXT2.DM2",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_dm0_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.DM0",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_dm1_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.DM1",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_dm2_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.DM2",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_kfs_db_base_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.KFS_DB_BASE",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_kfs_db_base_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.KFS_DB_BASE",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_kfs_db_base_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.KFS_DB_BASE",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_kfs_db_base_df",
                                        "children": [
                                            {
                                                "id": "wCXSXT2.KFS_DB_BASE",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_kfs_db_base_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.KFS_DB_BASE",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "ods_bk_building_coordinate_new_df",
                                "children": [
                                    {
                                        "id": "building_coordinate_new",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_csxs_kfs_xmb_base_df",
                                "children": [
                                    {
                                        "id": "XSXSXT.KFS_XMB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_lyxs_kfs_xmb_base_df",
                                "children": [
                                    {
                                        "id": "LYXSXT.KFS_XMB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_nxxs_kfs_xmb_base_df",
                                "children": [
                                    {
                                        "id": "NXXSXT.KFS_XMB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wcxs_kfs_xmb_base_df",
                                "children": [
                                    {
                                        "id": "WCXSXT2.KFS_XMB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wsqy_kfs_xmb_base_df",
                                "children": [
                                    {
                                        "id": "XSXTUSER.KFS_XMB_BASE",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "dim_hos_ssm_build_info_df",
                        "children": [
                            {
                                "id": "dim_hos_ssm_room_structure_info_df",
                                "children": [
                                    {
                                        "id": "dim_chs_ssm_sale_sys_code_info_df",
                                        "children": [
                                            {
                                                "id": "ods_csxs_dm0_df",
                                                "children": [
                                                    {
                                                        "id": "XSXSXT.dm0",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_csxs_dm1_df",
                                                "children": [
                                                    {
                                                        "id": "XSXSXT.DM1",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_csxs_dm2_df",
                                                "children": [
                                                    {
                                                        "id": "XSXSXT.DM2",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_lyxs_dm0_df",
                                                "children": [
                                                    {
                                                        "id": "LYXSXT.DM0",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_lyxs_dm1_df",
                                                "children": [
                                                    {
                                                        "id": "LYXSXT.DM1",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_lyxs_dm2_df",
                                                "children": [
                                                    {
                                                        "id": "LYXSXT.DM2",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_nxxs_dm0_df",
                                                "children": [
                                                    {
                                                        "id": "NXXSXT.dm0",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_nxxs_dm1_df",
                                                "children": [
                                                    {
                                                        "id": "NXXSXT.DM1",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_nxxs_dm2_df",
                                                "children": [
                                                    {
                                                        "id": "NXXSXT.DM2",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_wcxs_dm0_df",
                                                "children": [
                                                    {
                                                        "id": "WCXSXT2.dm0",
                                                        "children": []
                                                    },
                                                    {
                                                        "id": "WCXSXT2.DMO",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_wcxs_dm1_df",
                                                "children": [
                                                    {
                                                        "id": "WCXSXT2.DM1",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_wcxs_dm2_df",
                                                "children": [
                                                    {
                                                        "id": "WCXSXT2.DM2",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_wsqy_dm0_df",
                                                "children": [
                                                    {
                                                        "id": "XSXTUSER.DM0",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_wsqy_dm1_df",
                                                "children": [
                                                    {
                                                        "id": "XSXTUSER.DM1",
                                                        "children": []
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "ods_wsqy_dm2_df",
                                                "children": [
                                                    {
                                                        "id": "XSXTUSER.DM2",
                                                        "children": []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "id": "ods_csxs_kfs_db_base_df",
                                "children": [
                                    {
                                        "id": "XSXSXT.KFS_DB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_lyxs_kfs_db_base_df",
                                "children": [
                                    {
                                        "id": "LYXSXT.KFS_DB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_nxxs_kfs_db_base_df",
                                "children": [
                                    {
                                        "id": "NXXSXT.KFS_DB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wcxs_kfs_db_base_df",
                                "children": [
                                    {
                                        "id": "wCXSXT2.KFS_DB_BASE",
                                        "children": []
                                    }
                                ]
                            },
                            {
                                "id": "ods_wsqy_kfs_db_base_df",
                                "children": [
                                    {
                                        "id": "XSXTUSER.KFS_DB_BASE",
                                        "children": []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "dim_hos_ssm_house_type_info_df",
                        "children": [
                            {
                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                "children": [
                                    {
                                        "id": "ods_csxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.dm0",
                                                "children": []
                                            },
                                            {
                                                "id": "WCXSXT2.DMO",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM2",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "dim_hos_ssm_purpose_type_info_df",
                        "children": [
                            {
                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                "children": [
                                    {
                                        "id": "ods_csxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.dm0",
                                                "children": []
                                            },
                                            {
                                                "id": "WCXSXT2.DMO",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM2",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "dim_hos_ssm_room_type_info_df",
                        "children": [
                            {
                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                "children": [
                                    {
                                        "id": "ods_csxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_csxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_lyxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "LYXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.dm0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_nxxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "NXXSXT.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm0_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.dm0",
                                                "children": []
                                            },
                                            {
                                                "id": "WCXSXT2.DMO",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm1_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wcxs_dm2_df",
                                        "children": [
                                            {
                                                "id": "WCXSXT2.DM2",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm0_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM0",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm1_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM1",
                                                "children": []
                                            }
                                        ]
                                    },
                                    {
                                        "id": "ods_wsqy_dm2_df",
                                        "children": [
                                            {
                                                "id": "XSXTUSER.DM2",
                                                "children": []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": "tmp_room_supply_202008211525_${bdp.system.bizdate}",
                        "children": [
                            {
                                "id": "tmp_ssm_room_union_info_202008211525_${bdp.system.bizdate}",
                                "children": [
                                    {
                                        "id": "tmp_ssm_on_sale_info_202008211524_${bdp.system.bizdate}",
                                        "children": [
                                            {
                                                "id": "dim_hos_ssm_build_info_df",
                                                "children": [
                                                    {
                                                        "id": "dim_hos_ssm_room_structure_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_csxs_kfs_db_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.KFS_DB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_kfs_db_base_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.KFS_DB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_kfs_db_base_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.KFS_DB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_kfs_db_base_df",
                                                        "children": [
                                                            {
                                                                "id": "wCXSXT2.KFS_DB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_kfs_db_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.KFS_DB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "dwd_hos_bsm_ownership_df",
                                                "children": [
                                                    {
                                                        "id": "dim_chs_sys_code_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_csyw_dm0_df",
                                                                "children": [
                                                                    {
                                                                        "id": "XSFDC.dm0",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_csyw_dm1_df",
                                                                "children": [
                                                                    {
                                                                        "id": "XSFDC.DM1",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_csyw_dm2_df",
                                                                "children": [
                                                                    {
                                                                        "id": "WCFDC.DM2",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_lyyw_dm0_df",
                                                                "children": [
                                                                    {
                                                                        "id": "LYFDC.dm0",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_lyyw_dm1_df",
                                                                "children": [
                                                                    {
                                                                        "id": "LYFDC.DM1",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_lyyw_dm2_df",
                                                                "children": [
                                                                    {
                                                                        "id": "LYFDC.DM2",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nwqyw_dm0_df",
                                                                "children": [
                                                                    {
                                                                        "id": "REALESTATE.DM0",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nwqyw_dm1_df",
                                                                "children": [
                                                                    {
                                                                        "id": "REALESTATE.DM1",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nwqyw_dm2_df",
                                                                "children": [
                                                                    {
                                                                        "id": "REALESTATE.DM2",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nxyw_dm0_df",
                                                                "children": [
                                                                    {
                                                                        "id": "NXFDC.dm0",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nxyw_dm1_df",
                                                                "children": [
                                                                    {
                                                                        "id": "NXFDC.DM1",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nxyw_dm2_df",
                                                                "children": [
                                                                    {
                                                                        "id": "NXFDC.DM2",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_wcyw_dm0_df",
                                                                "children": [
                                                                    {
                                                                        "id": "WCFDC.dm0",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_wcyw_dm1_df",
                                                                "children": [
                                                                    {
                                                                        "id": "XSFDC.DM1",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_wcyw_dm2_df",
                                                                "children": [
                                                                    {
                                                                        "id": "WCFDC.DM2",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_csyw_syqqk_df",
                                                        "children": [
                                                            {
                                                                "id": "XSFDC.SYQQK",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyyw_syqqk_df",
                                                        "children": [
                                                            {
                                                                "id": "LYFDC.SYQQK",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nwqyw_syqqk_df",
                                                        "children": [
                                                            {
                                                                "id": "REALESTATE.SYQQK",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxyw_syqqk_df",
                                                        "children": [
                                                            {
                                                                "id": "NXFDC.SYOOK",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcyw_syqqk_df",
                                                        "children": [
                                                            {
                                                                "id": "WCFDC.SYQQK",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "dwd_hos_ssm_house_price_control_df",
                                                "children": [
                                                    {
                                                        "id": "ods_csxs_t_fjtk_hsjz_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.T_FJTK_HSJZ",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_t_fjtk_hsjz_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.T_FJTK_HSJZ",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_t_fjtk_hsjz_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.T_FJTK_HSJZ",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_t_fjtk_hsjz_df",
                                                        "children": [
                                                            {
                                                                "id": "WCXSXT2.T_FJTK_HSJZ",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_t_fjtk_hsjz_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.T_FJTK_HSJZ",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "dwd_hos_ssm_on_sale_range_info_df",
                                                "children": [
                                                    {
                                                        "id": "dim_hos_ssm_balcony_desc_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_house_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_purpose_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_room_status_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_room_structure_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_room_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dwd_hos_ssm_house_price_control_df",
                                                        "children": [
                                                            {
                                                                "id": "ods_csxs_t_fjtk_hsjz_df",
                                                                "children": [
                                                                    {
                                                                        "id": "XSXSXT.T_FJTK_HSJZ",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_lyxs_t_fjtk_hsjz_df",
                                                                "children": [
                                                                    {
                                                                        "id": "LYXSXT.T_FJTK_HSJZ",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_nxxs_t_fjtk_hsjz_df",
                                                                "children": [
                                                                    {
                                                                        "id": "NXXSXT.T_FJTK_HSJZ",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_wcxs_t_fjtk_hsjz_df",
                                                                "children": [
                                                                    {
                                                                        "id": "WCXSXT2.T_FJTK_HSJZ",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "id": "ods_wsqy_t_fjtk_hsjz_df",
                                                                "children": [
                                                                    {
                                                                        "id": "XSXTUSER.T_FJTK_HSJZ",
                                                                        "children": []
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_csxs_xf_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.XF_HSXSFW_BASEM",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_xf_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.XF_HSXSFW_BASE",
                                                                "children": []
                                                            },
                                                            {
                                                                "id": "LYXSXT.XF_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_xf_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.XF_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_xf_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "WCXSXT2.XF_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_xf_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.XF_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "id": "tmp_ssm_psp_info_202008211523_${bdp.system.bizdate}",
                                        "children": [
                                            {
                                                "id": "",
                                                "children": []
                                            },
                                            {
                                                "id": "dwd_hos_ssm_psp_info_df",
                                                "children": [
                                                    {
                                                        "id": "ods_csxs_kfs_dfzxxb_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.KFS_DFZXXB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_kfs_dfzxxb_base_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.KFS_DFZXXB_BASE",
                                                                "children": []
                                                            },
                                                            {
                                                                "id": "LYXSXT.KFS_DFZXXB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_kfs_dfzxxb_base_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.KFS_DFZXXB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_kfs_dfzxxb_base_df",
                                                        "children": [
                                                            {
                                                                "id": "WCXSXT2.KFS_DFZXXB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_kfs_dfzxxb_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.KFS_DFZXXB_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                "id": "dwd_hos_ssm_psp_sale_range_info_df",
                                                "children": [
                                                    {
                                                        "id": "dim_hos_ssm_balcony_desc_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_decoration_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_house_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_purpose_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_room_status_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_room_structure_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "dim_hos_ssm_room_type_info_df",
                                                        "children": [
                                                            {
                                                                "id": "dim_chs_ssm_sale_sys_code_info_df",
                                                                "children": [
                                                                    {
                                                                        "id": "ods_csxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_csxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_lyxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "LYXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.dm0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_nxxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "NXXSXT.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.dm0",
                                                                                "children": []
                                                                            },
                                                                            {
                                                                                "id": "WCXSXT2.DMO",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wcxs_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "WCXSXT2.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm0_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM0",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm1_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM1",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "id": "ods_wsqy_dm2_df",
                                                                        "children": [
                                                                            {
                                                                                "id": "XSXTUSER.DM2",
                                                                                "children": []
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_csxs_kfs_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXSXT.KFS_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_lyxs_kfs_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "LYXSXT.KFS_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_nxxs_kfs_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "NXXSXT.KFS_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wcxs_kfs_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "wCXSXT2.KFS_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "id": "ods_wsqy_kfs_hsxsfw_base_df",
                                                        "children": [
                                                            {
                                                                "id": "XSXTUSER.KFS_HSXSFW_BASE",
                                                                "children": []
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }]
    for (const lab of labs) {
        const lines = lab.trim().split('\n')             //将输入的文本按中间的换行切分
        const mentorRegex = /导师：(.+)/                  //通过正则表达式匹配导师这个根节点
        const mentor = lines[0].match(mentorRegex)[1]                          
        const labData = {
            id: mentor+'导师',
            children: []
        }
        const tmp = {}
        for (let line of lines) {
            line = line.trim()
            if (line.includes('导师')) {
                continue
            }
            const kv = line.split('：')
            const key = kv[0]
            //alert(key)   //“2016级博士生”
            const students = kv[1].split('、')   //“天一，王二，吴五”
            for (let i in students) {    //i = 0,1,2
                students[i] = {
                    id: students[i]
                }
            }
            const year = key.match(/[0-9]+/)[0]        //通过正则表达式匹配学年这个节点
            //alert(typeof(year))
            const type = key.split('级')[1]
            if (tmp[year] === undefined) {
                tmp[year] = {}
            }
            tmp[year][type] = students
        }




        for (const key of Object.keys(tmp)) {
            //alert(key)
            const yearStds = tmp[key]
            //console.log(yearStds)
            const types = ['本科生', '硕士生', '博士生']        //学位根节点
            const yearChildren = []
                types.forEach(type => {
                    if (yearStds[type] !== undefined) {
                        yearChildren.push({
                            id: key+'级'+type,
                            children: yearStds[type]
                        })
                    }
                })
            console.log(yearChildren)
            const yearData = {
                id: key+'学年',
                children: yearChildren
            }
            labData.children.push(yearData)
        }




        data.push(labData)
        //console.log(labData)
    }

    for (const item of data) {
        const ele = document.createElement('div')
        ele.id = item.id
        document.getElementById('nodes').appendChild(ele)
        generateGraph(ele.id, item)
    }
    document.getElementsByTagName('body').height = labs.length * 500 + 1000
}

const generateGraph = (container, data) => {
    var graph = new G6.TreeGraph({
        container: container,
        width: 1300,
        height: 600,
        pixelRatio: 2,
        linkCenter: true,
        modes: {
            default: [{
                    type: "collapse-expand",
                    onChange: function onChange(item, collapsed) {
                        var data = item.get("model").data;
                        data.collapsed = collapsed;
                        return true;
                    },
                },
                'drag-canvas',
                'zoom-canvas',
            ],
        },
        defaultNode: {
            size: 26,
            anchorPoints: [
                [0, 0.5],
                [1, 0.5]
            ],
            style: {
                fill: "#c4ff0e",
                // stroke: "#096dd9"
            }
        },
        defaultEdge: {
            shape: "cubic-vertical",
            style: {
                stroke: "#16eb52"   //线的颜色
            }
        },
        layout: {
            type: "compactBox",
            direction: "TB",
            
            getId: function getId(d) {
                return d.id;
            },
            getHeight: function getHeight() {
                return 16;
            },
            getWidth: function getWidth() {
                return 26;
            },
            getVGap: function getVGap() {
                return 80;
            },
            getHGap: function getHGap() {
                return 30;
            }
        }
    });

    graph.node(function (node) {
        let position = 'right';
      let rotate = 0;
      if (!node.children) {
        position = 'bottom';
        rotate = Math.PI / 2;
      }
        return {
            label: node.id,
            labelCfg: {
            position,
            offset: 5,
            style: {
            rotate,
            textAlign: 'start',
          },
        },
        };
    });

    graph.data(data);
    graph.render();
    graph.fitView();
}
