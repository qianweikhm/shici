import http from '../utils/request';

/**
 * 登录
 */
export const login = (data) => {
  return new Promise((resolve, reject) => {
    http("post", '/login', data).then(res => {
      resolve(res);
    }, error => {
      reject(error)
    })
  })
}


export const getH5BannerByHost = (data) => {
  return new Promise((resolve, reject) => {
    http("post", '/call/getH5BannerByHost', data).then(res => {
      resolve(res);
    }, error => {
      reject(error)
    })
  })
}
export const getHotAuthorsByLikers = (data) => {
  return new Promise((resolve, reject) => {
    http("post", '/call/getHotAuthorsByLikers', data).then(res => {
      resolve(res);
    }, error => {
      reject(error)
    })
  })
}
export const getAllCollections = (data) => {
  return new Promise((resolve, reject) => {
    http("post", '/call/getAllCollections', data).then(res => {
      resolve(res);
    }, error => {
      reject(error)
    })
  })
}
// getAuthorById2
export const getAuthorById2 = (data) => {
  return new Promise((resolve, reject) => {
    http("post", '/call/getAuthorById2', data).then(res => {
      resolve(res);
    }, error => {
      reject(error)
    })
  })
}
// getWorksByAuthor
export const getWorksByAuthor = (data) => {
  return new Promise((resolve, reject) => {
    http("post", '/call/getWorksByAuthor', data).then(res => {
      resolve(res);
    }, error => {
      reject(error)
    })
  })
}