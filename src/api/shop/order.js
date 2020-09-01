import request from '@/utils/request'

// 查询订单列表
export function listOrder(query) {
  return request({
    url: '/shop/order/list',
    method: 'get',
    params: query
  })
}

// 查询订单详细
export function getOrder(orderId) {
  return request({
    url: '/shop/order/' + orderId,
    method: 'get'
  })
}

// 删除订单
export function delOrder(orderId) {
  return request({
    url: '/shop/order/' + orderId,
    method: 'delete'
  })
}

// 订单退款
export function refundOrder(orderId) {
  return request({
    url: '/shop/order/refund/' + orderId,
    method: 'post'
  })
}

export function listChannel() {
  return request({
    url: '/shop/order/listChannel',
    method: 'post'
  })
}