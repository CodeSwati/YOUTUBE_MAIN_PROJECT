import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideolist({page, VideoList}) {
  return (
    <>
    {
        VideoList.map(m => { 
            return (
                <>
                <ShowVideoList videoid={m._id} key={m._id}/>
                </>
            )
        })
    }
    </>
  )
}

export default WHLVideolist