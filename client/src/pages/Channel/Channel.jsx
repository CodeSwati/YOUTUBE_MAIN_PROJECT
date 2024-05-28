import React from 'react'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import vid from '../../components/Video/vid.mp4'
import DescribeChannel from './DescribeChannel';
import { useParams } from 'react-router';

function Channel({setEditcreateChannelbtn}) {

   const {Cid} = useParams();

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
        <div className='container_pages_app'>
          <LeftSidebar/>
            <div className='container2_pages_app'> 
            <DescribeChannel Cid ={Cid} setEditcreateChannelbtn={setEditcreateChannelbtn}/>
            <ShowVideoGrid vids={vids}/>
            </div>
        </div>
      )
}

export default Channel