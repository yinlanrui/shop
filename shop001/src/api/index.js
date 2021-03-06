import axios from "axios";

let baseUrl="http://47.95.13.193/myToiletries";

//获取分类商品
export function getClass(limit=10) {
    return axios.get(`${baseUrl}/biz/queryAllCategory?limit=${limit}`)
}
//跳到指定
export function getShopDetail(id) {
    return axios.get(`${baseUrl}/biz/queryCommodityById?id=${id}`)
}
export function getHot(limit=5) {
    return axios.get(`${baseUrl}/biz/queryAllCommodity?limit=${limit}`)
}

//封装搜索商品的api    /biz/queryCommodityByName?name=男士
export function getSearch(keywords){
    return axios.get(`${baseUrl}/biz/queryCommodityByName?name=${keywords}`)
}

//获取通过分类查询所有的商品
export function getAllClassify(cateld) {
    //模板字符串
    return axios.get(`${baseUrl}/biz/queryCommodityByCateId?cateId=${cateld}`)
}

export function getClassify() {
    //模板字符串
    return axios.get(`${baseUrl}/biz/queryAllCategory`)
}

export default {
    getClass,
    getShopDetail,
    getHot,
    getSearch,
    getAllClassify,
    getClassify


}