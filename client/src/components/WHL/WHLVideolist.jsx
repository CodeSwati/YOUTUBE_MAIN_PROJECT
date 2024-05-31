import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideolist({page,currentUser ,VideoList}) {

  console.log(VideoList);
  return (
    <>
    {
        VideoList?.data?.filter(q=> q?.Viewer === currentUser).reverse().map(m => { 
            return (
                <>
                <ShowVideoList videoId={m?.videoId} key={m?._id}/>
                </>
            )
        })
    }
    </>
  )
}

export default WHLVideolist