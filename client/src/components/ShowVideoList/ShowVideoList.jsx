import React from 'react'
import vid from '../../components/Video/vid.mp4'
import ShowVideo from '../ShowVideo/ShowVideo';
import { useSelector } from 'react-redux';

function ShowVideoList({videoId}) {

  const vids = useSelector(s=> s.videoReducer);
  console.log(vids.data);
    // const vids =[
    //     {
    //       _id : 1,
    //       video_src: vid,
    //       Channel: "cdd",
    //       Uploder: "abc",
    //       title: "video 1",
    //       description: "discription of video 1"
    //     },
    //     {
    //       _id : 2,
    //       video_src: vid,
    //       Channel: "cdd",
    //       Uploder: "abc",
    //       title: "video 2",
    //       description: "discription of video 2"
    //     },
    //     {
    //       _id : 3,
    //       video_src: vid,
    //       Channel: "add",
    //       Uploder: "abc",
    //       title: "video 3",
    //       description: "discription of video 3"
    //     },
    //     {
    //       _id : 4,
    //       video_src: vid,
    //       Channel: "add",
    //       Uploder: "abc",
    //       title: "video 4",
    //       description: "discription of video 4"
    //     },
    //   ];
  
  
    return (

      <>
        <div className='container_showvideogrid'>
        {
            vids?.data?.filter(q=>q._id===videoId).map(vi=>
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
</>
  )
}

export default ShowVideoList