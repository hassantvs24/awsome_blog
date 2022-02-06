import React, { useEffect, useState } from 'react';
import Layout from '../include/layout';
import BlogList from './components/blogList';
import { getBlog } from "../services/blogService";
function Home({title}) {

    const [posts, setPosts] = useState([]);

    useEffect( async () => {
        const {data} = await getBlog();
        setPosts(data);
    }, []);

    return ( 
        <Layout title={title}>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {
                            //console.log(posts)
                             posts.map(post => (
                                 <BlogList ind={post._id} title={post.title} content={post.content} author={}/>
                             ))
                        }
            
                    </div>
                    </div>
                </div>
        </Layout>
     );
}

export default Home;