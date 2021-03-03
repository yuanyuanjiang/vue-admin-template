const Mock = require('mockjs')

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    createTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
    creator: '@cname',
    updateTime: '@datetime(yyyy-MM-dd HH:mm:ss)',
  }))
}

module.exports = [
  {
    url: '/vue-admin-template/list/list',
    type: 'get',
    response: config => {
      const { pageNum = 1, pageSize = 10 } = config.query

      let mockList = List.filter(item => {
        return true
      })

      const pageList = mockList.filter((item, index) => index < pageSize * pageNum && index >= pageSize * (pageNum - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          list: pageList
        }
      }
    }
  },

  {
    url: '/vue-admin-template/list/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-admin-template/list/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
