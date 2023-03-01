import './detail.scss'
import { getAuthorById2, getWorksByAuthor } from '@/api'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function AuthorDetail() {
  const { id } = useParams()
  const [infoObj, setInfoObj] = useState({})
  const [work, setWork] = useState([])
  const getData = async () => {
    const res = await getAuthorById2({ authorId: id })
    setInfoObj(res.result)

    const work = await getWorksByAuthor({ authorId: id, "page": 1, "perPage": 20 })
    setWork(work.result)
  }
  useEffect(() => {
    getData()
  }, [])
  return <div className="author">
    <div className='name'>{infoObj.name}</div>
    <div className='dynasty'>[{infoObj.dynasty}]  {infoObj.birthYear}年  ~  {infoObj.deathYear}年</div>
    <div className='subtitle'>简介</div>
    <div className='desc'>{infoObj.desc}</div>
    <div className='subtitle works-subtitle'>作品 / {infoObj.worksCount}</div>
    <div className='works'>
      {
        work.map((item, index) => <div key={index} className='work-item'>
          <div className='title'>
            {item.title}
          </div>
          <div className='content'>
            {item.content}
          </div>
        </div>)
      }
    </div>
  </div>
}

export default AuthorDetail;