export function getUserProfileSync() {
	console.log('userInfouserInfo=>');
	return new Promise((resolve,reject) => {
		wx.getUserProfile({
			desc: '获取用户信息',
			success: (res) => {
				resolve({res})
			},
			// fail(e){
			// 	console.log(e, '报没报错');
			// 	// reject(e)
			// }
		})
	})
}
