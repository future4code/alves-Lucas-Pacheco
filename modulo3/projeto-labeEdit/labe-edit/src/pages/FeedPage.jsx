import React, {useState, useEffect} from 'react'
import CardFeed from '../components/CardFeed'
import CardCreatePost from '../components/CardCreatePost'
import { useGetData } from '../hooks/useGetData'
export default function FeedPage() {
  const [stateLike, setStateLike] = useState(false)

  const { dados, loading, erro } = useGetData(stateLike,"/posts")

  return (
    <div>
        <CardCreatePost stateLike={stateLike} setStateLike={setStateLike} />
        <CardFeed dados={dados} loading={loading} erro={erro} stateLike={stateLike} setStateLike={setStateLike}/>
    </div>
  )
}
