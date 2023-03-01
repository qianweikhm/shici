import { useEffect, useState } from 'react';
import './index.scss'
function Header() {

  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    if (localStorage.getItem('userInfo')) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      setAvatar(userInfo.avatar.url)
    }
  })
  return <>
    <div className="header">
      <img src="data:image/png;base64,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" alt="" className="logo"></img>
      {
        avatar ? <img className='avatar' src={avatar} alt='' /> : <p>登录</p>
      }
    </div>

  </>;
}

export default Header;