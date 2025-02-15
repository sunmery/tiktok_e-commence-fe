import {createLazyFileRoute} from '@tanstack/react-router'
// import {Link} from 'react-router-dom'
import {useMemo} from 'react'
import {
	CASDOOR_SDK,
	getSigninUrl,
	getUserinfo,
	goToLink,
	isLoggedIn,
	showMessage,
} from '@/utils/casdoor.ts'
import type {Account} from '@/types/account'
// 如果需要静默登录，返回 SilentSignin 组件，它会帮你发起登录请求，登录成功后会调用函数 handleReceivedSilentSigninSuccessEvent ，登录失败时也会调用函数 handleReceivedSilentSigninFailureEvent
import {isSilentSigninRequired, SilentSignin} from 'casdoor-react-sdk'
import {Button} from '@mui/joy'
import {setAccount, userStore} from '@/store/user.ts'
import {useSnapshot} from 'valtio/react'

/**
 *@returns JSXElement
 */
export default function Profile() {
	const {account} = useSnapshot(userStore)

	// 辅助函数：判断 account 是否为空或默认状态
	const isAccountEmpty = (account: Account): boolean => {
		return Object.values(account).every((value) => value === '')
	}

	useMemo(() => {
		if (isLoggedIn()) {
			getUserinfo().then((res) => {
				console.log('res.data.balance', res.data.balance)
				console.log('res.balance', res.balance)
				if (res?.state === 'ok') {
					setAccount({
						id: res.data.id,
						avatar: res.data.avatar,
						email: res.data.email,
						name: res.data.name,
						owner: res.data.owner,
						type: res.data.type,
						balance: res.data.balance,
					})
				} else {
					showMessage(`getUserinfo() error: ${res?.msg}`)
				}
			})
		}
	}, [])
	return (
		<main>
			{isAccountEmpty(account) ? (
				<>
					You are not logged in. Please log in first.
					<Button onClick={() => goToLink(getSigninUrl())}>Login</Button>
				</>
			) : (
				<>
					<table>
						<caption>Account</caption>
						<thead>
							<tr>
								<th>id</th>
								<th>email</th>
								<th>name</th>
								<th>owner</th>
								<th>type</th>
								<th>avatar</th>
								<th>balance</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{account.id}</td>
								<td>{account.email}</td>
								<td>{account.name}</td>
								<td>{account.owner}</td>
								<td>{account.type}</td>
								<td>
									<img
										src={account.avatar}
										alt={account.name}
									/>
								</td>
								<td>{account.name}</td>
								<td>{account.balance}</td>
							</tr>
						</tbody>
					</table>

					{/* 静默登录组件, 不需要静默登录注释掉即可 */}
					{/* 如果需要静默登录，返回 SilentSignin 组件，它会帮你发起登录请求，登录成功后会调用函数 handleReceivedSilentSigninSuccessEvent ，登录失败时也会调用函数 handleReceivedSilentSigninFailureEvent */}
					<div>
						call:
						{isSilentSigninRequired() ?? (
							<div
								style={{
									marginTop: 200,
									textAlign: 'center',
									alignItems: 'center',
								}}
							>
								<SilentSignin
									sdk={CASDOOR_SDK}
									isLoggedIn={isLoggedIn}
									handleReceivedSilentSigninSuccessEvent={() => goToLink('/')}
									handleReceivedSilentSigninFailureEvent={() => {}}
								/>
								<p>Logging in...</p>
							</div>
						)}
					</div>
				</>
			)}
		</main>
	)
}

export const Route = createLazyFileRoute('/profile/')({
	component: () => <Profile />,
})
