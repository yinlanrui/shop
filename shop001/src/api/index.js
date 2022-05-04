import axios from "axios";

let baseUrl="http://47.95.13.193/myToiletries";

//获取分类商品
export function getClass(limit=10) {
    return axios.get(`${baseUrl}/biz/queryAllCategory?limit=${limit}`)
}
export function getShopDetail(id) {
    return axios.get(`${baseUrl}/biz/queryCommodityById?id=${id}`)

}
export function getHot(limit=5) {
    return axios.get(`${baseUrl}/biz/queryAllCommodity?limit=${limit}`)
}
export default {
    getClass,
    getShopDetail,
    getHot
}