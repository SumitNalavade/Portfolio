import React from 'react';
import Image from 'next/image';

import { FeaturedProject } from "../utils/Project";
import { AiOutlineGithub } from 'react-icons/ai';

import styles from "../styles/components/featuredProject.module.scss";

interface Props {
    proj: FeaturedProject
}

const Featured: React.FC<Props> = ({ proj }) => {
    return (
        <>
        <div className={`mx-lg-5 w-75 ${styles.featuredProjectContainer}`}>
            <div className="card mb-3 bg-background text-main border-main border-highlight">
                <img src={proj.imagePath} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title">{proj.title}</h5>
                        <p className="card-title display-8"><AiOutlineGithub /></p>
                    </div>
                    <p className="card-text">{proj.description}</p>
                </div>
            </div>
        </div>

        <div className='container d-flex mx-md-3 mx-lg-5 flex-column align-items-start text-main'>  
            <u className={`text-tertiary`} style={{"textDecorationThickness": "5px"}}><p className="display-6 text-main">Featured Project</p></u>
                <div className=''>
                    {proj.longDescription}
                </div>
        </div>
        </>
    );
};

export default Featured;