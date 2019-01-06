/**
 * 用以请求接口数据
 */

import axios from './axios'

//登录
// export const Login = params => { return  axios.post(`${base}/user/login`, params)};
export const Login = params => {
    return  axios({
        url: 'user/login',
        method: 'post',
        data: params
    });
};

//修改密码
// export const ModifyPassword = params => { return  axios.post(`${base}/user/modifyPassword`, params); };
export const ModifyPassword = params => {
    return axios.post({
        url: 'user/modifyPassword',
        method: 'post',
        data: params
    });
};

//获取项目列表
// export const getProjectList = params => { return  axios.post(`${base}/item/findList`, { params: params }); };
export const getProjectList = params => {
    return  axios({
        url: 'item/findList',
        method: 'post',
        data: params
    });
};

//根据id查询项目
// export const findOne = params => { return  axios.get(`${base}/item/findOne`, { params: params }); };
export const findOne = params => {
    return  axios.get({
        url: 'item/findOne',
        method: 'get',
        params
    });
};

//修改项目
// export const updateProject = params => { return  axios.post(`${base}/item/update`, params); };
export const updateProject = params => {
    return  axios.post({
        url: 'item/update',
        method: 'post',
        data: params
    });
};

//添加项目
// export const addProject = params => { return  axios.post(`${base}/item/add?title=qq&desc=11qqqqq&amount=1000&type=1`, params); };
export const addProject = params => {
    return  axios.post({
        url: 'item/add?title=qq&desc=11qqqqq&amount=1000&type=1',
        method: 'post',
        data: params
    });
};