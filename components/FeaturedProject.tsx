import React from 'react';
import Image from 'next/image';

import { FeaturedProject } from "../utils/Project";

interface Props {
    proj: FeaturedProject
}

const Featured: React.FC<Props> = ({ proj }) => {
    return (
        <>
        <div className='mx-lg-5 w-75'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={proj.imagePath} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{proj.title}</h5>
                            <p className="card-text">{proj.description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container d-flex mx-md-3 mx-lg-5 my-5 flex-column text-main'>  
            <u className={`text-tertiary`} style={{"textDecorationThickness": "5px"}}><p className="display-6 text-main">Featured Project</p></u>
                <div className=''>
                    {proj.longDescription}
                </div>
        </div>
        </>
    );
};

export default Featured;