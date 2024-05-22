import React from 'react'
import vid from '../../components/Video/vid.mp4'
import ShowVideo from '../ShowVideo/ShowVideo';

function ShowVideoList({videoid}) {
    const vids =[
        {
          _id : 1,
          video_src: vid,
          chanel: "cdd",
          uploader: "abc",
          title: "video 1",
          description: "discription of video 1"
        },
        {
          _id : 2,
          video_src: vid,
          chanel: "cdd",
          uploader: "abc",
          title: "video 2",
          description: "discription of video 2"
        },
        {
          _id : 3,
          video_src: vid,
          chanel: "add",
          uploader: "abc",
          title: "video 3",
          description: "discription of video 3"
        },
        {
          _id : 4,
          video_src: vid,
          chanel: "add",
          uploader: "abc",
          title: "video 4",
          description: "discription of video 4"
        },
      ];
  return (
    <div className='container_showvideogrid'>
    {
        vids?.filter(q=>q._id===videoid).map(vi=>
            {
                return(
                    <div key={vi._id} className='video_box_app'>
                          <ShowVideo vid={vi} />
                    </div>
                )
            }
        )
    }
</div>
  )
}

export default ShowVideoList