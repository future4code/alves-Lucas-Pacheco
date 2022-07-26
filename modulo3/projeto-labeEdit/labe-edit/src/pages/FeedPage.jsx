import React, {useState, useEffect} from 'react'
import CardFeed from '../components/CardFeed'
import CardCreatePost from '../components/CardCreatePost'

export default function FeedPage() {
  const [stateLike, setStateLike] = useState(false)
  return (
    <div>
        <CardCreatePost stateLike={stateLike} setStateLike={setStateLike} />
        <CardFeed stateLike={stateLike} setStateLike={setStateLike}/>
    </div>
  )
}
