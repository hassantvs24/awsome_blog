import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../include/layout';
function Home({title}) {
    return ( 
        <Layout title={title}>
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {/* Post preview*/}
                        <div className="post-preview">
                            <Link to="/blog">
                                <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                                <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
                            </Link>
                            <p className="post-meta">
                                Posted by
                                Namul Hossain
                                on September 24, 2021
                            </p>
                        </div>
                        {/* Divider*/}
                        <hr className="my-4" />
                        {/* Pager*/}
                        <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
                    </div>
                    </div>
                </div>
        </Layout>
     );
}

export default Home;