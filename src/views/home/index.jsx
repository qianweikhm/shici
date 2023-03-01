import Header from '../../components/header'
import { Tabs } from 'react-vant'
import { Routes, Route, useNavigate, useLocation, } from 'react-router-dom'
import Library from '../Library'
import Discover from '../Discover'
import Author from '../Author'
import AuthorDetail from '../Author/detail'
import './index.scss'
import { useEffect, useState } from 'react'
const items = [
  { path: '/library', label: '文库' },
  { path: '/discover', label: '活动' },
  { path: '/author', label: '作者' },
  { path: '/poetry', label: '作品' },
  { path: '/quote', label: '名句' },
  { path: '/cipai', label: '词牌' },
  { path: '/lists', label: '诗单' },
]

function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const [active, setActive] = useState(0)
  const getTab = (name, event) => {
    navigate(items[name.index].path)
    setActive(name.index)
  }
  useEffect(() => {
    setActive(items.findIndex(ele => ele.path == `/${location.pathname.split('/')[1]}`))
  })
  return (<>
    <Header />
    <Tabs className='tabs' onClickTab={getTab} active={active} defaultActive={0} swipeThreshold='7' color="#92130a">
      {items.map(item => (
        <Tabs.TabPane key={item.path} title={`${item.label}`}> </Tabs.TabPane>
      ))}
    </Tabs>
    <main className='content'>
      <Routes>
        <Route path='/' element={<Library />} />
        <Route path='/library' element={<Library />} />
        <Route path='/discover' element={<Discover />} />
        <Route path='/author' element={<Author />} />
        <Route path='/author/:id' element={<AuthorDetail />} />
        <Route path='/poetry' element={<Library />} />
        <Route path='/quote' element={<Library />} />
        <Route path='/cipai' element={<Library />} />
        <Route path='/lists' element={<Library />} />
      </Routes>
    </main>
  </>);
}

export default Home;