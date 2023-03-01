import { getH5BannerByHost, getHotAuthorsByLikers, getAllCollections } from '@/api'
import { useEffect, useState } from 'react';
import { Swiper, Search, Empty, Skeleton } from 'react-vant';
import { Arrow } from '@react-vant/icons';
import './index.scss'
import { Link, useNavigate } from 'react-router-dom';

// 用典

const Collections = () => {
  const [list1, setList1] = useState([])
  const [list2, setList2] = useState([])
  const [list3, setList3] = useState([])
  const [list4, setList4] = useState([])
  const getData = async () => {
    const res = await getAllCollections()
    setList1(res.result.filter(ele => ele.kindId == 9))
    setList2(res.result.filter(ele => ele.kindId == 1 && ele.order <= 16))
    setList3(res.result.filter(ele => ele.kindId == 2 && ele.order <= 20))
    setList4(res.result.filter(ele => ele.kindId == 7 && ele.order <= 16))
  }

  useEffect(() => {
    getData()
  }, [])

  const List = (props) => {
    const { list } = props
    return <>
      {
        list.length ? <div className='collections'>
          {
            list.map((item, index) => (
              <div className='collection' key={index}>
                <img src={item.cover} className='cover' />
                <span className='name'>{item.name}</span>
              </div>
            ))
          }
        </div> : <Empty description="暂无数据" />
      }
    </>
  }

  const Box = ({ title, list }) => {
    return <>
      <div className='box'>
        <div className='subtitle'>
          {title}
        </div>
        <List list={list} />
      </div>
    </>
  }

  return <>
    <Box title='用典' list={list1} />
    <Box title='选集' list={list2} />
    <Box title='主题' list={list3} />
    <Box title='词牌' list={list4} />
  </>
}
// 作者
const Author = () => {
  const [list, setList] = useState([])
  const Navigate = useNavigate()
  const getData = async () => {
    const res = await getHotAuthorsByLikers({ "page": 1, "perPage": 24 })
    setList(res.result)
  }
  useEffect(() => {
    getData()
  }, [])
  return <div className='box'>
    <div className='subtitle' onClick={() => Navigate('/author')}>
      作者
      <span className='more'>更多<Arrow /></span>
    </div>
    {
      list.length ? <div className='list'>
        {
          list.map((item, index) => (
            <div className='item' key={index}>
              <Link to={`/author/${item.objectId}`}>{item.name}</Link>
            </div>
          ))
        }
      </div> : <Empty description="暂无数据" />
    }
  </div>
}


function Library() {
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const res = await getH5BannerByHost({ host: 'lib.xcz.im' })
    setBanner(res.result.image.url)
    setLoading(false)
  }
  const [banner, setBanner] = useState('')
  useEffect(() => {
    getData()
  }, [])
  const [value, setValue] = useState('');


  return (<>
    <Skeleton title loading={loading} className='loading' row={16}>
      <div className="market">
        <Swiper autoplay={5000}>
          <Swiper.Item >
            {banner && <img src={banner} alt='banner' />}
          </Swiper.Item>
        </Swiper>
      </div>
      <Search
        showAction
        actionText={<div onClick={() => Toast.info(value)}>搜索</div>}
        value={value}
        onChange={setValue}
        placeholder="搜索诗词"
      />
      <Author />
      <Collections />
    </Skeleton>

  </>);
}

export default Library;