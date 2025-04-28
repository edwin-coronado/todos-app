import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "package_json": {
                            "table": "sys_module",
                            "id": "5f1e0e45adc7437a8fb405ea91c5dd3f"
                        },
                        "admin_role": {
                            "table": "sys_user_role",
                            "id": "de2e802c8a50401383bbac5b99f32465"
                        },
                        "user_role": {
                            "table": "sys_user_role",
                            "id": "a2e336209fd343b697d82a081cf58ce1"
                        },
                        "list_create_acl": {
                            "table": "sys_security_acl",
                            "id": "8c86ee2882c5440bab17a572de273d31"
                        },
                        "list_read_acl": {
                            "table": "sys_security_acl",
                            "id": "833ab130927e489e9596fd4fc6246294"
                        },
                        "list_write_acl": {
                            "table": "sys_security_acl",
                            "id": "c4d5016d41134d0e97b7e0dc763a541d"
                        },
                        "list_delete_acl": {
                            "table": "sys_security_acl",
                            "id": "a9dd9710b35b4470bcfad36d5582dbab"
                        },
                        "task_create_acl": {
                            "table": "sys_security_acl",
                            "id": "951e3d2e6ab34f158de6fd7eed09bc95"
                        },
                        "task_read_acl": {
                            "table": "sys_security_acl",
                            "id": "e066b1faa3c7428296832f4b7ba885ec"
                        },
                        "task_write_acl": {
                            "table": "sys_security_acl",
                            "id": "321fb35e57a74e0db40e612cf3a89cf0"
                        },
                        "task_delete_acl": {
                            "table": "sys_security_acl",
                            "id": "a03a3304bc9f411a832501d686e0b859"
                        },
                        "category_create_acl": {
                            "table": "sys_security_acl",
                            "id": "a989484d39464d389206a1ba381deff5"
                        },
                        "category_read_acl": {
                            "table": "sys_security_acl",
                            "id": "0a3f5ffcb4e248dbb8f4c297a6bf14e5"
                        },
                        "category_write_acl": {
                            "table": "sys_security_acl",
                            "id": "b2200a15f1d14bcaa093397c45559237"
                        },
                        "category_delete_acl": {
                            "table": "sys_security_acl",
                            "id": "8ecf3c2a1f5c4ac9861e4f99d48b6d7c"
                        },
                        "handletaskupdate": {
                            "table": "sys_script",
                            "id": "ea4a02784e7642008051803444dd548c"
                        },
                        "src_server_constants_ts": {
                            "table": "sys_module",
                            "id": "c45551da1e764e7d84f16b209f9f1f93"
                        },
                        "my-app-menu": {
                            "table": "sys_app_application",
                            "id": "66a57799b6c446c1aeb0d7e204df4179"
                        },
                        "lists-module": {
                            "table": "sys_app_module",
                            "id": "de1e3600c79e4ae28ba5547b67f1ab2c"
                        },
                        "tasks-module": {
                            "table": "sys_app_module",
                            "id": "ee750a4b2fcb44e0b7c39de3e521e3d2"
                        },
                        "categories-module": {
                            "table": "sys_app_module",
                            "id": "c500d9991c8d4d1f9487a589c0a1f5ce"
                        },
                        "work-category": {
                            "table": "x_snc_todos_category",
                            "id": "5ba1e5af2e11479b8fa8575a17c296d2"
                        },
                        "personal-category": {
                            "table": "x_snc_todos_category",
                            "id": "0927ebae53eb49448443e2b8af8122eb"
                        },
                        "health-fitness-category": {
                            "table": "x_snc_todos_category",
                            "id": "a9860db9197c424faff7848a5bd0ab31"
                        },
                        "home-category": {
                            "table": "x_snc_todos_category",
                            "id": "7aee0536cb9349e9b97f4e00212fe167"
                        },
                        "finance-category": {
                            "table": "x_snc_todos_category",
                            "id": "154451a9a8ff4dce99e9638ab8bb3c96"
                        },
                        "shopping-category": {
                            "table": "x_snc_todos_category",
                            "id": "6b2a10a91e7a44d0a6b7c782748061e5"
                        },
                        "errands-category": {
                            "table": "x_snc_todos_category",
                            "id": "f12d1abbb2d64d92a66abff37f6469a1"
                        },
                        "study-learning-category": {
                            "table": "x_snc_todos_category",
                            "id": "b0764b0429f04e2687633e977e9e7b44"
                        },
                        "travel-category": {
                            "table": "x_snc_todos_category",
                            "id": "cd5ca92e4bf0484eb1649c06a981471e"
                        },
                        "goals-category": {
                            "table": "x_snc_todos_category",
                            "id": "21f66ee324fa47c78ad58bf5ca51d119"
                        },
                        "events-category": {
                            "table": "x_snc_todos_category",
                            "id": "3de6c8268457460ba73ad40ac7a4128d"
                        },
                        "family-category": {
                            "table": "x_snc_todos_category",
                            "id": "77e9209d828f487cbd35593c637306e3"
                        },
                        "social-category": {
                            "table": "x_snc_todos_category",
                            "id": "fca0289ea98e4657aaab694288f00b4d"
                        },
                        "self-care-category": {
                            "table": "x_snc_todos_category",
                            "id": "7b559bb0f70d41a08c3a198478fb19a3"
                        },
                        "projects-category": {
                            "table": "x_snc_todos_category",
                            "id": "d642e2a7412949a481abc79851bacc07"
                        },
                        "sys_atf_step_atf-test-0_list0": {
                            "table": "sys_atf_step",
                            "id": "700f3676c4aa49618c5d9120b3076dfa"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_list0_9024a37f671003007ba405225685efe5": {
                            "table": "sys_variable_value",
                            "id": "805a553b54d34da3841063fdbb8c4150"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_list0_e6e3c7535320220002c6435723dc3496": {
                            "table": "sys_variable_value",
                            "id": "6188569bc10a4bd9bd33d76f87915fb0"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_list0_dd54cf535320220002c6435723dc34fd": {
                            "table": "sys_variable_value",
                            "id": "9f6b6dc200524487a8968ad4376d04cb"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_list0_90144b535320220002c6435723dc3488": {
                            "table": "sys_variable_value",
                            "id": "89ae6c5a69f24020bb7924f33110073c"
                        },
                        "sys_atf_step_atf-test-0_task0": {
                            "table": "sys_atf_step",
                            "id": "4de6b8b1501147b594c768aca58d0563"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task0_9024a37f671003007ba405225685efe5": {
                            "table": "sys_variable_value",
                            "id": "1c4f958ede924dc79c1fe8e5c7c1d09d"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task0_e6e3c7535320220002c6435723dc3496": {
                            "table": "sys_variable_value",
                            "id": "27adea2aeedf4a4cac3e4328f05a3a07"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task0_dd54cf535320220002c6435723dc34fd": {
                            "table": "sys_variable_value",
                            "id": "8d55efa88a9f4365b86f04cfea26fc4d"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task0_90144b535320220002c6435723dc3488": {
                            "table": "sys_variable_value",
                            "id": "f4ddff65ea164518990e3695ca6d2687"
                        },
                        "sys_atf_step_atf-test-0_task1": {
                            "table": "sys_atf_step",
                            "id": "6a2fb6a6b61040418385580c56a64cf9"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task1_9024a37f671003007ba405225685efe5": {
                            "table": "sys_variable_value",
                            "id": "fe021687e37c426b807d2890bf8176cf"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task1_e6e3c7535320220002c6435723dc3496": {
                            "table": "sys_variable_value",
                            "id": "aef5ccbc08804de4a3955ddd8e7dad0e"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task1_dd54cf535320220002c6435723dc34fd": {
                            "table": "sys_variable_value",
                            "id": "ac754713aea84b46b46bd8b6574e3aa1"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_task1_90144b535320220002c6435723dc3488": {
                            "table": "sys_variable_value",
                            "id": "e32eae49d3cf4b9bb1c9828e4644ec0b"
                        },
                        "sys_atf_step_atf-test-0_update-task0": {
                            "table": "sys_atf_step",
                            "id": "32eae732d06c45af852a5273a41038c6"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task0_334b7bb7675003007ba405225685ef72": {
                            "table": "sys_variable_value",
                            "id": "599f9ad765ef48da9788ffe144b3e4c4"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task0_46dbcb535320220002c6435723dc3409": {
                            "table": "sys_variable_value",
                            "id": "a4581a1fa8cb490c8fbe0168e30a949d"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task0_bc4c43935320220002c6435723dc34a2": {
                            "table": "sys_variable_value",
                            "id": "80597149394f4df2bc3d7a78c94b4622"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task0_501c8f535320220002c6435723dc34da": {
                            "table": "sys_variable_value",
                            "id": "218aebcdab2b41b697362a335a5c89f2"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_update-task0_record_id": {
                            "table": "sys_element_mapping",
                            "id": "ddfc1fe05d484c01b16384d13a89e668"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task0_53fb0f535320220002c6435723dc34ec": {
                            "table": "sys_variable_value",
                            "id": "a59a9d273aa5402aba2efdb7b8123704"
                        },
                        "sys_atf_step_atf-test-0_update-task1": {
                            "table": "sys_atf_step",
                            "id": "aa3b0ca26e264be1a9bd0c4d7e1fd280"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task1_334b7bb7675003007ba405225685ef72": {
                            "table": "sys_variable_value",
                            "id": "a1c829da23ec457a93cea961e1f3c24f"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task1_46dbcb535320220002c6435723dc3409": {
                            "table": "sys_variable_value",
                            "id": "8ce112e7e8924cbe8d0d4bca2c4812e9"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task1_bc4c43935320220002c6435723dc34a2": {
                            "table": "sys_variable_value",
                            "id": "d34d41213c34468a80f003e7f1b03937"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task1_501c8f535320220002c6435723dc34da": {
                            "table": "sys_variable_value",
                            "id": "92f598c5cc6c4ff29a79dc6324dd43d1"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_update-task1_record_id": {
                            "table": "sys_element_mapping",
                            "id": "632542fdf9de4ef783cbafdbe25f926c"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_update-task1_53fb0f535320220002c6435723dc34ec": {
                            "table": "sys_variable_value",
                            "id": "0a65ccfb621044498a49838503073663"
                        },
                        "sys_atf_step_atf-test-0_validate-task0": {
                            "table": "sys_atf_step",
                            "id": "21569e3f26b24771b6939884071a5afd"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task0_67400008676003007ba405225685efa4": {
                            "table": "sys_variable_value",
                            "id": "4cede2d0c7794c5cb81ff4905b4493e7"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task0_cbddfa135320220002c6435723dc3415": {
                            "table": "sys_variable_value",
                            "id": "43149d04ad8e41f58821cd9c5ff27912"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task0_ff6e125353a0220002c6435723dc3442": {
                            "table": "sys_variable_value",
                            "id": "1cc84907a7f24aeb80a79d03a31bc282"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task0_52ed1e5b5360220002c6435723dc3421": {
                            "table": "sys_variable_value",
                            "id": "a7d9cb55ee9c4e9fb4a2ab9a642749c9"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_validate-task0_record_id": {
                            "table": "sys_element_mapping",
                            "id": "8587abc8061e41e3b94ad41c4e7dc439"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task0_6aad5a575360220002c6435723dc34b0": {
                            "table": "sys_variable_value",
                            "id": "3452a600e4f54d398257e80613b4b969"
                        },
                        "sys_atf_step_atf-test-0_validate-task1": {
                            "table": "sys_atf_step",
                            "id": "40ecf7f201234406b4d5ab61dbd6dbaf"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task1_67400008676003007ba405225685efa4": {
                            "table": "sys_variable_value",
                            "id": "8725a19f65c24dc1a8df3a84667ce20c"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task1_cbddfa135320220002c6435723dc3415": {
                            "table": "sys_variable_value",
                            "id": "d8dc16ac7fd84d388ba0c12fb728606f"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task1_ff6e125353a0220002c6435723dc3442": {
                            "table": "sys_variable_value",
                            "id": "4cc6288b5a4146c8825d77ea625774f7"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task1_52ed1e5b5360220002c6435723dc3421": {
                            "table": "sys_variable_value",
                            "id": "c4d325faf13f4d40a02ca05f85128edc"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_validate-task1_record_id": {
                            "table": "sys_element_mapping",
                            "id": "38b10bca3e4148578b0125a8a54a227d"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-task1_6aad5a575360220002c6435723dc34b0": {
                            "table": "sys_variable_value",
                            "id": "a3837a0e76ac44728d374632cf1f38fe"
                        },
                        "sys_atf_step_atf-test-0_validate-list0": {
                            "table": "sys_atf_step",
                            "id": "0e4768043ec744b384778aea6ae862e8"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-list0_67400008676003007ba405225685efa4": {
                            "table": "sys_variable_value",
                            "id": "1700f8e0c9da47faa17db61124c21004"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-list0_cbddfa135320220002c6435723dc3415": {
                            "table": "sys_variable_value",
                            "id": "71342341f6d84f59b37fd2de80f750d3"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-list0_ff6e125353a0220002c6435723dc3442": {
                            "table": "sys_variable_value",
                            "id": "f4b796557ae44673b263833b63ed5f8c"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-list0_52ed1e5b5360220002c6435723dc3421": {
                            "table": "sys_variable_value",
                            "id": "5f52679c30124e19bcdd2b6e5f0973d1"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_validate-list0_record_id": {
                            "table": "sys_element_mapping",
                            "id": "7ed64fd04b8545b88c99e6089e5fdb41"
                        },
                        "sys_variable_value_atf-test-0_sys_atf_step_atf-test-0_validate-list0_6aad5a575360220002c6435723dc34b0": {
                            "table": "sys_variable_value",
                            "id": "3976c865ac8a4613891456aaf98537fe"
                        },
                        "atf-test-0": {
                            "table": "sys_atf_test",
                            "id": "85b83c244a2141828473aaf21f0ad2c5"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_task0_field_values": {
                            "table": "sys_element_mapping",
                            "id": "a3740bc8836a40d6b143fb77cd217131"
                        },
                        "sys_element_mapping_atf-test-0_sys_atf_step_atf-test-0_task1_field_values": {
                            "table": "sys_element_mapping",
                            "id": "7a89685321d244a1b987de2eb90c81b3"
                        },
                        "src_server_utils_ts": {
                            "table": "sys_module",
                            "id": "fa943080fcf44b5ea5369e055a348646"
                        },
                        "set-scratchpad-br": {
                            "table": "sys_script",
                            "id": "e84435d454cf4f50bedcbb1615e08cab"
                        }
                    };
                composite: [
                        {
                            "table": "sys_security_acl_role",
                            "id": "f91db4c7526d409999e60e46a30b01a4",
                            "key": {
                                "sys_security_acl": "list_create_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "e614e4e6bdbe484a816fb1e3b3a702ab",
                            "key": {
                                "sys_security_acl": "list_read_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "1e37d227c28c4f46b27097a8494f6dd2",
                            "key": {
                                "sys_security_acl": "list_write_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "3e02b2df066b4c0a8dadab2e7dcf6537",
                            "key": {
                                "sys_security_acl": "list_delete_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "230f8e81722f40218da108e59e238bf6",
                            "key": {
                                "sys_security_acl": "task_create_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "08271537cbe3481884875edc5826343c",
                            "key": {
                                "sys_security_acl": "task_read_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "f8e0cb2587384fc4b6cfdb619d021d22",
                            "key": {
                                "sys_security_acl": "task_write_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "a97f1cd19109428fbe7fc5f1ff99642c",
                            "key": {
                                "sys_security_acl": "task_delete_acl",
                                "sys_user_role": "user_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "8f870766a37448349d39994fa8539002",
                            "key": {
                                "sys_security_acl": "category_create_acl",
                                "sys_user_role": "admin_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "bd7a73c939ba4d17b35a0ab2292bae90",
                            "key": {
                                "sys_security_acl": "category_read_acl",
                                "sys_user_role": "admin_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "f32e747179a94c6a95034f33f3c87877",
                            "key": {
                                "sys_security_acl": "category_write_acl",
                                "sys_user_role": "admin_role"
                            }
                        },
                        {
                            "table": "sys_security_acl_role",
                            "id": "0aec41b408294913b0718b874de95261",
                            "key": {
                                "sys_security_acl": "category_delete_acl",
                                "sys_user_role": "admin_role"
                            }
                        },
                        {
                            "table": "sys_user_role_contains",
                            "id": "4cd533ae31814e4b9168e88a1e8af7dc",
                            "key": {
                                "role": "de2e802c8a50401383bbac5b99f32465",
                                "contains": "a2e336209fd343b697d82a081cf58ce1"
                            }
                        },
                        {
                            "table": "sys_user_role_contains",
                            "id": "4cd533ae31814e4b9168e88a1e8af7dc",
                            "key": {
                                "role": "user_role",
                                "contains": "a2e336209fd343b697d82a081cf58ce1"
                            }
                        },
                        {
                            "table": "sys_user_role_contains",
                            "id": "a920729a60234d9abbd0874d3d88413a",
                            "key": {
                                "role": "a2e336209fd343b697d82a081cf58ce1",
                                "contains": "a2e336209fd343b697d82a081cf58ce1"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "1f1ed6ece3d243288fc50f1efa7fcff0",
                            "key": {
                                "module": "moment@2.30.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "e14be255b1144ec79d537a40998679ca",
                            "key": {
                                "module": "moment@2.30.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "f6603d1ad4a545f8bfe6d5c36c5fad70",
                            "key": {
                                "module": "moment@2.30.1",
                                "file": "package.json"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "e7fc3a68f45746f0899a9a7609294fe8",
                            "key": {
                                "list": "da4739004f4122107b614d94b2ce0be9",
                                "element": "name"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "f0726d478cf34a16b7be6381c0f0f47f",
                            "key": {
                                "list": "53abf90e4ff422107b614d94b2ce0b18",
                                "element": "name"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "0d69850b9ca34f7aa7b6625a4c729224",
                            "key": {
                                "list": "53abf90e4ff422107b614d94b2ce0b18",
                                "element": "active"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "4bf61d90b18f4073a74a352bef83cfcc",
                            "key": {
                                "list": "53abf90e4ff422107b614d94b2ce0b18",
                                "element": "category"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "a352453c86e04de8830ade9bedf73e1a",
                            "key": {
                                "list": "53abf90e4ff422107b614d94b2ce0b18",
                                "element": "description"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "7f2cc479da324c4c8feb0967ce37f979",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "title"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "ef78b9d8c3d349d6a2935057205368ca",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "state"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "45a5d80463424e52be3a60c58ac4620d",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "active"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "9b30ebaf75a94042b6fd048301f588ae",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "closed_on"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "1283016810844bb0b00cc39b49bf37f5",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "list"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "69e8f24d746440839e0f474926148f2f",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "list.category"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "39eae8059350409298046526a53f27da",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "order"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "2fc3dce626304267ad48d42c5b8bd17c",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "sys_created_on"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "d77d7fa86ee845d6b14e4a984562f7b0",
                            "key": {
                                "list": "a3777d004f4122107b614d94b2ce0b48",
                                "element": "sys_updated_on"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "9bd363a4c31248fd9e9b16e64c45de6c",
                            "key": {
                                "list": "d88ac0664ff462107b614d94b2ce0b4f",
                                "element": "title"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "d6b7951f91414246886ec88174f3b6a6",
                            "key": {
                                "list": "d88ac0664ff462107b614d94b2ce0b4f",
                                "element": "state"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "f35374a645c844e1b393827f68f4a31d",
                            "key": {
                                "list": "d88ac0664ff462107b614d94b2ce0b4f",
                                "element": "order"
                            }
                        },
                        {
                            "table": "sys_ui_list_element",
                            "id": "cacfec1e37af445b82643bf01aac3b44",
                            "key": {
                                "list": "d88ac0664ff462107b614d94b2ce0b4f",
                                "element": "sys_created_on"
                            }
                        }
                    ];
                deleted: {
                        "sys_module": [
                            "6f2f2c3ff1e443e6b05270e1480e33cb",
                            "bdc4be3412a34a6cb3ab6acb489d900b",
                            "b17dbf5474c5449189d34344cfdffe2f",
                            "a4a5f0f835d243beade9a0a7c78f518b"
                        ],
                        "sys_ui_list_element": [
                            "48104d23184d4bccb3b07dc7b4dcd3c6",
                            "9ff20a5edd974a5c902550b3e8331dd6",
                            "d212910db4c84b6f8711f76f672698c7",
                            "159a019d733149fbb117312898e29d8d",
                            "5a2311b8d34b441a82cc8127afa0dc8c",
                            "d9cc730f3b4049b7ab3bd20772d551a4",
                            "3558a99d581c493d9f47ee01b50aa3e8",
                            "b473206c8199489fada1b6209bdaf720",
                            "7585895b8abc4eb7badd1e5a04d8ef0d",
                            "6139dace24b141b8872020a00c61dabb",
                            "badc3ee77c6e44c0b1c7fda4491c0715",
                            "f779fe5d36cd48079bb1759af15872ed",
                            "ffe506b4761943d79aafec51a0a959ad",
                            "80ee2c5b8dbc451786291d0723ab22d8",
                            "a016b299c5554085b298235869cf74be",
                            "765e07c0f3694ce986efc9939314a6cd",
                            "1f814dab5a2b429da40de7016021257d",
                            "0bcbf72d9edc47da95d141595356895c",
                            "8e094c172ff5468a93334d13fff8d200",
                            "57cef58038264c6db53645c1b5d78da2",
                            "5068ffac7abb4625b767e703ecebd16a",
                            "76d22646abe54b31a3aa2b47213a1e7f",
                            "bf788f095bc445d4a46e5ee9210cf519",
                            "68b6c5ac00424d47919dac0e0bfcf630",
                            "aa720d8338a74e1da017fa5d2564c3a5",
                            "79063117dd0a4592a4205c74e24653ed",
                            "65a03706ee9c44be90d6af4deb593f18",
                            "367736652dac465fa709039cae799ff2",
                            "fd6c58df7e324c28a0a25dae2a780955"
                        ]
                    };
            }
        }
    }
}
