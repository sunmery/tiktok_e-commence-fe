import {createLazyFileRoute} from '@tanstack/react-router'
import {AuthCallback} from 'casdoor-react-sdk'
import {CASDOOR_SDK, goToLink, serverUrl, setToken} from '@/utils/casdoor.ts'
import type {SigninReply} from '@/types/callback.ts'

export const Route = createLazyFileRoute('/callback/')({
	component: () => (
		<AuthCallback
			sdk={CASDOOR_SDK}
			serverUrl={serverUrl}
			saveTokenFromResponse={saveToken}
			isGetTokenSuccessful={verifyToken}
		/>
	),
})

// 获取服务器的登录接口返回的token
const saveToken = (res: Response) => {
	const result = res as unknown as SigninReply
	setToken(result.data)
	goToLink('/profile')
}

// 根据服务器返回的字段来判断请求是否成功
const verifyToken = (res: Response) => {
	console.log('isGetTokenSuccessful res:', res)
	const result = res as unknown as SigninReply
	return result.state === 'ok'
}
