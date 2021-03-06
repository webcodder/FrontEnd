/**
 *  用以请求接口数据
 */

import axios from './axios'

let base = "/admin";

/**
 * common
 */
// 上传图片
export const getImgURI = params => {
    return  axios({
        url: `${base}/upload/uploadImage`,
        method: 'post',
        data: params
    });
};

// 上传视频
export const getVideoURI = params => {
    return  axios({
        url: `${base}/upload/uploadVideo`,
        method: 'post',
        data: params
    });
};

// 地址
export const getAddress = () => {
    return  axios({
        url: `${base}/province/search`,
        method: 'get',
    });
};


/**
 *  登录/注销/修改密码
 */
// 登录
export const Login = params => {
    return  axios({
        url: `${base}/user/login`,
        method: 'post',
        data: params
    });
};

// 获取用户
export const getUser = params => {
    return  axios({
        url: `${base}/user/get`,
        method: 'get',
        params: params
    });
};

// 注销
export const Logout = () => {
    return  axios({
        url: `${base}/user/logout`,
        method: 'post'
    });
};

// 修改密码
export const ModifyPassword = params => {
    return  axios({
        url: `${base}/user/modify`,
        method: 'post',
        data: params
    });
};


/**
 *  资讯管理
 */
// 获取资讯列表
export const getConsultation = params => {
    return  axios({
        url: `${base}/consultation/search`,
        method: 'get',
        params: params
    });
};

// 获取资讯分类列表
export const getConsultationType = params => {
    return  axios({
        url: `${base}/consultationType/search`,
        method: 'get',
        params: params
    });
};

// 添加资讯
export const addConsultation = params => {
    return  axios({
        url: `${base}/consultation/add`,
        method: 'post',
        data: params
    });
};

// 根据id获取资讯
export const getConsultationById = params => {
    return  axios({
        url: `${base}/consultation/get`,
        method: 'get',
        params: params
    });
};

// 编辑资讯
export const editConsultation = params => {
    return  axios({
        url: `${base}/consultation/modify`,
        method: 'post',
        data: params,
        /*headers: {
            "Content-Type": "application/json;charset=utf-8"
        }*/
    });
};

// 删除资讯
export const delConsultation = params => {
    return  axios({
        url: `${base}/consultation/remove`,
        method: 'post',
        params: params
    });
};


/**
 *  用户管理
 */
// 获取用户列表
export const getUserInfoList = params => {
    return  axios({
        url: `${base}/userinfo/search`,
        method: 'get',
        params: params
    });
};

// 根据用户id获取用户
export const getUserInfoById = params => {
    return  axios({
        url: `${base}/userinfo/get`,
        method: 'get',
        params: params
    });
};

// 资质认证审核
export const reviewUser = params => {
    return  axios({
        url: `${base}/identificationInfo/modify`,
        method: 'post',
        params: params
    });
};


/**
 *  投票管理
 */
// 获取投票列表
export const getVote = params => {
    return  axios({
        url: `${base}/vote/search`,
        method: 'get',
        params: params
    });
};

// 添加投票
export const addVote = params => {
    return  axios({
        url: `${base}/vote/add`,
        method: 'post',
        data: params
    });
};

// 编辑投票
export const editVote = params => {
    return  axios({
        url: `${base}/vote/modify`,
        method: 'post',
        data: params
    });
};

// 删除投票
export const delVote = params => {
    return  axios({
        url: `${base}/vote/remove`,
        method: 'post',
        params: params
    });
};

// 获取投票候选项列表
export const getVoteOptionList = params => {
    return  axios({
        url: `${base}/voteOption/get`,
        method: 'get',
        params: params
    });
};

// 添加投票候选项
export const addVoteOption = params => {
    return  axios({
        url: `${base}/voteOption/add`,
        method: 'post',
        data: params
    });
};

// 编辑投票候选项
export const editVoteOption = params => {
    return  axios({
        url: `${base}/voteOption/modify`,
        method: 'post',
        data: params
    });
};

// 删除投票候选项
export const delVoteOption = params => {
    return  axios({
        url: `${base}/voteOption/remove`,
        method: 'post',
        params: params
    });
};

/**
 * banner管理
 */
// 获取banner列表
export const getBannerList = params => {
    return  axios({
        url: `${base}/banner/search`,
        method: 'get',
        params: params
    });
};

// 添加banner
export const addBanner = params => {
    return  axios({
        url: `${base}/banner/add`,
        method: 'post',
        data: params
    });
};

// 修改banner
export const editBanner = params => {
    return  axios({
        url: `${base}/banner/modify`,
        method: 'post',
        data: params
    });
};

// 删除banner
export const delBanner = params => {
    return  axios({
        url: `${base}/banner/remove`,
        method: 'post',
        params: params
    });
};

/**
 * 工地管理
 */
// 获取工地列表
export const getSite = params => {
    return  axios({
        url: `${base}/construction/place/search`,
        method: 'get',
        params: params
    });
};

// 根据id获取工地
export const getSiteById = params => {
    return  axios({
        url: `${base}/construction/place/get`,
        method: 'get',
        params: params
    });
};

// 添加工地
export const addSite = params => {
    return  axios({
        url: `${base}/construction/place/add`,
        method: 'post',
        data: params
    });
};

// 修改工地
export const updateSite = params => {
    return  axios({
        url: `${base}/construction/place/modify`,
        method: 'post',
        data: params
    });
};

// 删除工地
export const delSite = params => {
    return  axios({
        url: `${base}/construction/place/remove`,
        method: 'post',
        data: params
    });
};

/**
 * 驿站管理
 */
// 获取驿站列表
export const getPostStation = params => {
    return  axios({
        url: `${base}/store/search`,
        method: 'get',
        params: params
    });
};

// 新增驿站
export const addPostStation = params => {
    return  axios({
        url: `${base}/store/add`,
        method: 'post',
        data: params
    });
};

// 编辑驿站
export const updatePostStation = params => {
    return  axios({
        url: `${base}/store/modify`,
        method: 'post',
        data: params
    });
};

// 删除驿站
export const delPostStation = params => {
    return  axios({
        url: `${base}/store/remove`,
        method: 'post',
        data: params
    });
};

/**
 * 商品分类
 */
// 获取分类列表
export const getCategoryList = params => {
    return  axios({
        url: `${base}/category/search`,
        method: 'get',
        params: params
    });
};

// 根据id获取分类
export const getCategoryById = params => {
    return  axios({
        url: `${base}/category/get`,
        method: 'get',
        params: params
    });
};

// 添加分类
export const addCategory = params => {
    return  axios({
        url: `${base}/category/add`,
        method: 'post',
        data: params
    });
};

// 编辑分类
export const updateCategory = params => {
    return  axios({
        url: `${base}/category/modify`,
        method: 'post',
        data: params
    });
};

// 删除分类
export const delCategory = params => {
    return  axios({
        url: `${base}/category/remove`,
        method: 'post',
        data: params
    });
};

/**
 * 商品管理
 */
// 获取商品列表
export const getProductList = params => {
    return  axios({
        url: `${base}/product/search`,
        method: 'get',
        params: params
    });
};

// 添加商品
export const addProduct = params => {
    return  axios({
        url: `${base}/product/add`,
        method: 'post',
        data: params,
        /*header: {
            "Content-Type": "application/json;charset=utf-8"
        }*/
    });
};

// 编辑商品
export const updateProduct = params => {
    return  axios({
        url: `${base}/product/modify`,
        method: 'post',
        data: params,
        header: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
};

// 删除商品
export const delProduct = params => {
    return  axios({
        url: `${base}/product/remove`,
        method: 'post',
        data: params
    });
};

/**
 *  统计
 */
// 消费数据统计
export const getConsumerStatistics = params => {
    return  axios({
        url: `${base}/statistics/consumer/search`,
        method: 'get',
        params: params
    });
};

// 用户数据统计
export const getUserStatistics = params => {
    return  axios({
        url: `${base}/statistics/user/search`,
        method: 'get',
        params: params
    });
};