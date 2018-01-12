const api = {
  seller: {
    method: 'get',
    url: '/api/seller'
  },
  goods: {
    method: 'get',
    url: '/api/goods'
  },
  ratings: {
    method: 'post',
    url: '/api/ratings'
  },
  list: {
    method: 'get',
    url: '/api/list'
  },
}

module.exports = {
  api
}
