<template>
    <section class="main_cont">
        <!-- 表单 -->
        <el-row>
            <el-form :inline="true">
                <el-col class="toolbar bdr_radiu" :span="24">
                    <el-col :span="22">
                        <el-form-item>
                            <el-button type="primary" @click="addBanner" v-on:click="addBannerVisible = true">添加banner</el-button>
                        </el-form-item>
                    </el-col>
                </el-col>
            </el-form>
        </el-row>

        <!-- banner列表 -->
        <el-row>
            <el-table class="banner_list" :data="banner_info" border highlight-current-row v-loading="listLoading" height="calc(100vh - 242px)">
                <!--<el-table-column type="selection" width="55" align="center"></el-table-column>-->
                <!--<el-table-column type="index" width="60" align="center"></el-table-column>-->
                <el-table-column prop="id" label="banner_id" width="100" align="center"></el-table-column>
                <el-table-column prop="title" label="名称" width="100" align="center"></el-table-column>

                <el-table-column label="banner图" width="100" align="center">
                    <template slot-scope="scope">
            		<img :src="scope.row.img" class="tabimg" />
            	</template>
                </el-table-column>

                <el-table-column label="类型" width="100" align="center" :formatter="formatType"></el-table-column>

                <el-table-column label="访问链接" width="100" show-overflow-tooltip>
                    <template slot-scope="scope">
                        <a :href="scope.row.target" target="_blank" class="buttonText">链接</a>
                    </template>
                </el-table-column>

                <el-table-column prop="desc" label="描述" width="auto"></el-table-column>

                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button type="text" size="small" @click="updateBanner(scope.row)" v-on:click="updateBannerVisible = true">编辑</el-button>
                        <el-button type="text" size="small" @click="delBanner(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!-- 分页 -->
            <el-col :span="24" class="toolbar f-cb">
                <el-pagination class="f-fr pagination"
                   :current-page.sync='page_arg.page_index'
                   :page-sizes="page_arg.page_sizes"
                   :page-size="page_arg.page_size"
                   :layout="page_arg.layout"
                   :total="page_arg.total"
                   @current-change='handleCurrentChange'
                   @size-change='handleSizeChange'>
                </el-pagination>
            </el-col>
        </el-row>

        <!-- 添加banner -->
        <el-dialog title="添加banner" @keyup.enter.native="addBannerSubmit('addBannerForm')" :close-on-click-modal="false" :visible.sync="addBannerVisible" :before-close="handleClose">
            <el-form :model="addBannerData" status-icon :rules="addBannerRules" ref="addBannerForm" label-width="120px">
                <el-form-item label="跳转目标" prop="target">
                    <el-input v-model="addBannerData.target"  placeholder="请输入跳转目标" clearable></el-input>
                </el-form-item>
                <el-form-item label="banner标题" prop="title">
                    <el-input v-model="addBannerData.title" placeholder="请输入banner标题" clearable></el-input>
                </el-form-item>
                <el-form-item label="banner类型" prop="type">
                    <el-input v-model="addBannerData.type" placeholder="请输入banner类型" clearable></el-input>
                    <ul class="tip">
                        <li>0：视频</li>
                        <li>1：平台</li>
                        <li>2: URL</li>
                    </ul>
                </el-form-item>

                <el-form-item label="上传banner图">
                    <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        ref='upload'
                        :before-remove="beforeRemove"
                        :on-change="addHandleChange"
                        multiple
                        :limit="upload_arg.limit"
                        :on-exceed="handleExceed"
                        :file-list="upload_arg.fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>

                <el-form-item label="banner路径" prop="img">
                    <el-input v-model="addBannerData.img" placeholder="请输入banner路径" clearable></el-input>
                </el-form-item>
                <el-form-item label="banner描述" prop="desc">
                    <el-input type="textarea" v-model="addBannerData.desc" placeholder="请输入banner描述" clearable></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="addBannerSubmit('addBannerForm')">提交</el-button>
                    <el-button @click="resetForm('addBannerForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- 编辑banner -->
        <el-dialog title="编辑banner" @keyup.enter.native="updateBannerSubmit('updateBannerForm')" :close-on-click-modal="false" :visible.sync="updateBannerVisible" :before-close="handleClose">
            <el-form :model="updateBannerData" status-icon :rules="updateBannerRules" ref="updateBannerForm" label-width="110px">
                <el-form-item label="bannerId" prop="id">
                    <el-input v-model="updateBannerData.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="跳转目标" prop="target">
                    <el-input v-model="updateBannerData.target"  placeholder="请输入跳转目标" clearable></el-input>
                </el-form-item>
                <el-form-item label="banner标题" prop="title">
                    <el-input v-model="updateBannerData.title" placeholder="请输入banner标题" clearable></el-input>
                </el-form-item>
                <el-form-item label="banner类型" prop="type">
                    <el-input v-model="updateBannerData.type" placeholder="请输入banner类型" clearable></el-input>
                    <ul class="tip">
                        <li>0：视频</li>
                        <li>1：平台</li>
                        <li>2: URL</li>
                    </ul>
                </el-form-item>

                <el-form-item label="上传banner图">
                    <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            ref='upload'
                            :before-remove="beforeRemove"
                            :on-change="updateHandleChange"
                            multiple
                            :limit="upload_arg.limit"
                            :on-exceed="handleExceed"
                            :file-list="upload_arg.fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>

                <el-form-item label="banner路径" prop="img">
                    <el-input v-model="updateBannerData.img" placeholder="请输入banner路径" clearable></el-input>
                </el-form-item>
                <el-form-item label="banner描述" prop="desc">
                    <el-input type="textarea" v-model="updateBannerData.desc" placeholder="请输入banner描述" clearable></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="updateBannerSubmit('updateBannerForm')">提交</el-button>
                    <el-button @click="resetForm('updateBannerForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </section>
</template>

<script>
    import {
        findBannerList,  // 获取管理员和员工列表
        getImgURI,  // 上传图片
        addBanner,  // 添加banner
        updateBanner,  // 编辑banner
        delBanner  // 删除banner
    } from '../../api/api.js';

    export default {
        name: 'banner',

        data() {
            // banner类型验证
            let validateType = (rule, value, callback) => {
                let reg = /^[0-2]$/;

                if (!reg.test(value)) {
                    return callback(new Error('banner类型只能输入0-2！'));
                }

                callback();
            };

            // url验证
            let validateUrl = (rule, value, callback) => {
                let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;

                if (!reg.test(value)) {
                    return callback(new Error('url输入不正确！'));
                }

                callback();
            };

            return {
                /**
                 * common
                 */
                listLoading: false,  // lodding动画
                dialogVisible: false,  // 关闭提示

                // 分页参数
                page_arg: {
                    page_index: 1, // 当前位于哪页
                    total: 0, // 总数
                    page_size: 10, // 1页显示多少条
                    page_sizes: [5, 10, 15, 20, 50], //每页显示多少条
                    layout: "total, sizes, prev, pager, next, jumper" // 翻页属性
                },

                // 上传图片参数
                upload_arg: {
                    limit:1,
                    imgFile: [],
                    fileList: []
                },

                /**
                 * banner列表
                 */
                banner_info: [],  // 存放项目信息列表数据

                /**
                 * 添加banner
                 */
                // 添加banner数据
                addBannerData: {
                    target: "http://",  // 目标
                    type: "0",  // 类型 0：视频，1：平台, 2: URL, 为 NULL 前端不跳转
                    title: "",  // 标题
                    img: "https://",  // 图片
                    desc: "",  // 描述文字
                },

                // 验证添加用户界面数据
                addBannerRules: {
                    target: [
                        { validator: validateUrl, trigger: 'blur' }
                    ],
                    type: [
                        { validator: validateType, trigger: 'blur' }
                    ],
                    title: [
                        { required: true, message: '标题不能为空！', trigger: 'blur' }
                    ],
                    img: [
                        { required: true, message: '图片路径不能为空！', trigger: 'blur' },
                        { validator: validateUrl, trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '描述文字不能为空！', trigger: 'blur' }
                    ]
                },

                /**
                 * 编辑banner
                 */
                // 编辑banner数据
                updateBannerData: {
                    id: "",
                    bannerId: "",
                    target: "http://",  // 目标
                    type: "",  // 类型 0：视频，1：平台, 2: URL, 为 NULL 前端不跳转
                    title: "",  // 标题
                    img: "https://",  // 图片
                    desc: "",  // 描述文字
                },

                // 验证添加用户界面数据
                updateBannerRules: {
                    target: [
                        { validator: validateUrl, trigger: 'blur' }
                    ],
                    type: [
                        { validator: validateType, trigger: 'blur' }
                    ],
                    title: [
                        { required: true, message: '标题不能为空！', trigger: 'blur' }
                    ],
                    img: [
                        { required: true, message: '图片路径不能为空！', trigger: 'blur' },
                        { validator: validateUrl, trigger: 'blur' }
                    ],
                    desc: [
                        { required: true, message: '描述文字不能为空！', trigger: 'blur' }
                    ]
                },

                /**
                 *  弹出表单界面(true 显示, false 隐藏)
                 */
                addBannerVisible: false,  // 添加banner界面
                updateBannerVisible: false,  // 编辑banner界面
            }
        },
        methods: {
            /**
             * common
             */
            // 关闭提示
            handleClose(done) {
                this.$confirm('确认关闭？').then(() => {
                    done();
                }).catch(() => {});
            },
            // 表单重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            //获取文件后缀名
            getFileType(fileName){
                let fileLength = fileName.length,  //文件名总长度
                    beforeFileLength = fileName.lastIndexOf('.');  //文件名长度

                //截取字符串，获取文件后缀名
                let suffix = fileName.substring(beforeFileLength+1, fileLength);

                return suffix;
            },

            /**
             *  分页
             */
            // 点击页码
            handleCurrentChange() {
                this.getBannerList();  // 加载分页数据
            },
            // 设置每页条数
            handleSizeChange(page_size) {
                // console.log(page_size);

                // 切换size
                this.page_arg.page_size = page_size;

                // 获取接口数据
                this.getBannerList();
            },

            /**
             * el-upload common
             */
            // 文件超出个数限制时的钩子
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 ${this.upload_arg.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            // 删除文件之前的钩子
            beforeRemove(file) {
                this.addBannerData.img = "";
                this.updateBannerData.img = "";
                return this.$confirm(`确定移除 ${ file.name }？`);
            },

            /**
             *  api
             *  获取banner信息
             */
            getBannerList () {
                //接口参数
                let param = {
                    pageNum: this.page_arg.page_index,  // 当前页码
                    pageSize: this.page_arg.page_size,  // 每页条数
                };

                // 获取接口数据
                findBannerList(qs.stringify(param)).then(res => {
                    // console.log(res.data.data);

                    this.banner_info = res.data.data.list;

                    // 返回分页总数
                    this.page_arg.total = res.data.data.total;
                }).catch({});
            },
            // banner类型
            formatType (row) {
                switch (row.type) {
                    case 0:
                        return "视频";
                        break;
                    case 1:
                        return "平台";
                        break;
                    case 2:
                        return "url";
                        break;
                    default :
                        return "null";
                        break;
                }
            },

            /**
             *  api
             *  添加banner
             */
            //点击添加banner
            addBanner () {
                // console.log("添加banner");

                this.upload_arg.fileList = [];  //清空上传img file
            },
            //el-upload
            // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
            addHandleChange(file){
                // console.log("文件状态改变时的钩子");

                //上传文件变化时将文件对象push进files数组
                this.upload_arg.imgFile.push(file.raw);

                // console.log(this.upload_arg.imgFile);

                //上传图片
                this.addUpload();
            },

            // 获取img url
            addUpload(){
                let formData = new FormData();

                formData.append('logoFile', this.upload_arg.imgFile[0]);

                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                getImgURI(formData, config).then(res => {
                    // console.log(res);

                    this.addBannerData.img = res.data.data.imgUrl;
                });
            },
            // 提交添加用户表单
            addBannerSubmit (formName) {
                // 点击提交开始加载loading
                this.listLoading = true;

                // 验证表单
                this.$refs[formName].validate((valid) => {
                    // 如果验证成功，请求接口数据
                    if (valid) {
                        addBanner(qs.stringify(this.addBannerData)).then(() => {
                            this.$message({
                                message: "添加成功！",
                                type: "success"
                            });

                            // 隐藏添加banner信息界面
                            this.addBannerVisible = false;

                            // 请求成功停止加载loading
                            this.listLoading = false;

                            // 刷新列表数据
                            this.getBannerList();
                        }).catch({});
                    } else {  // 验证失败跳出
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            /**
             *  api
             *  编辑banner
             */
            //el-upload
            // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
            updateHandleChange(file){
                // console.log("文件状态改变时的钩子");

                //上传文件变化时将文件对象push进files数组
                this.upload_arg.imgFile.push(file.raw);

                // console.log(this.upload_arg.imgFile);

                // 上传图片
                this.updateUpload();
            },

            // 获取img url
            updateUpload (){
                let formData = new FormData();

                formData.append('logoFile', this.upload_arg.imgFile[0]);

                let config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                getImgURI(formData, config).then(res => {
                    // console.log(res);

                    this.updateBannerData.img = res.data.data.imgUrl;
                    // console.log(this.updateBannerData.img);
                });
            },
            // 编辑banner(浅拷贝列表数据到表单)
            updateBanner (row) {
                // console.log("编辑banner");

                this.upload_arg.fileList = [];  // 清空上传img file

                this.updateBannerData = Object.assign({}, row);

                this.updateBanner.bannerId = this.updateBannerData.id
                // console.log(this.updateBanner.bannerId);
            },

            // 提交编辑banner表单
            updateBannerSubmit (formName) {
                this.listLoading = true;  //点击提交开始加载loading

                // 验证表单
                this.$refs[formName].validate((valid) => {
                    if (valid) {  // 如果验证成功，请求接口数据
                        updateBanner(qs.stringify(this.updateBannerData)).then(() => {
                            this.$message({
                                message: "编辑成功！",
                                type: "success"
                            });

                            this.updateBannerVisible = false;  //隐藏编辑banner界面

                            this.listLoading = false;  //请求成功停止加载loading

                            this.getBannerList();  //刷新列表数据
                        }).catch({});
                    } else {  //验证失败跳出
                        console.log('error submit!!');
                        return false;
                    }
                });
            },

            /**
             *  api
             *  删除banner
             */
            // 单个兑换码删除
            delBanner (row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    let id = Object.assign({}, row).id;

                    let params = {
                        id: id
                    }

                    // console.log(params);

                    delBanner(qs.stringify(params)).then(() => {
                        this.$message({
                            message: "删除成功！",
                            type: "success"
                        });

                        this.getBannerList();  // 加载分页数据
                    }).catch({});
                }).catch(() => {});
            },
        },
        // 预处理
        created () {
            this.getBannerList();
        }
    }
</script>

<style scoped>
    .toolbar {
        padding-bottom: 0;
    }

    .tip{
        height: 22px;
        line-height: 22px;
    }

    .tip li{
        display: inline-block;
        font-size: 12px;
        color: #4ba8cc;
        margin-right: 28px;
    }

    .tabimg{
        width: 75px;
    }
</style>