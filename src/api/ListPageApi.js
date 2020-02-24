import request from '../utils/request.js'



export function getDatasetListApi(id) {
  return new Promise((resolve, reject) => {
    request({
      url: '/dataset',
      method: 'get',
      params: {
          gov_id: id 
      }
    }).then((res) => {
      resolve(res)
    }).catch((e) => {
      reject(e)
    })
  })
}