import React from 'react'
import vid from '../../components/Video/vid.mp4'
import WHL from '../../components/WHL/WHL';

function WatchHistory() {
  const history =[
    {
      _id : 1,
      video_src: vid,
      channel: "cdd",
      Uploder: "abc",
      title: "video 1",
      description: "discription of video 1"
    },
    {
      _id : 2,
      video_src: vid,
      channel: "cdd",
      Uploder: "abc",
      title: "video 2",
      description: "discription of video 2"
    },
    {
      _id : 3,
      video_src: vid,
      channel: "add",
      Uploder: "abc",
      title: "video 3",
      description: "discription of video 3"
    },
    {
      _id : 4,
      video_src: vid,
      channel: "add",
      Uploder: "abc",
      title: "video 4",
      description: "discription of video 4"
    },
  ];

  return (
    <WHL page={"History"} VideoList={history} />
  )
}

export default WatchHistory