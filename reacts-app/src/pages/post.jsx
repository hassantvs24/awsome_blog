import React from 'react';
import Layout from '../include/layout';

function Post({title}) {
    return ( 
        <Layout title={title}>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="my-5">
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating">
                                    <input className="form-control" id="name" type="text" placeholder="Enter blog title..." data-sb-validations="required" />
                                    <label htmlFor="name">Blog Title</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A title is required.</div>
                                </div>
                                <div className="form-floating">
                                    <textarea className="form-control" id="message" placeholder="Write your blog here..." style={{height: '12rem'}} data-sb-validations="required" defaultValue={""} />
                                    <label htmlFor="message">Write a Blog</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                                <br />
                                <button className="btn btn-primary text-uppercase disabled" id="submitButton" type="submit">Send</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
     );
}

export default Post;