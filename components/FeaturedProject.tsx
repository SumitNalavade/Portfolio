import React from 'react';

import { FeaturedProject } from "../utils/Project";
import { AiOutlineGithub } from 'react-icons/ai';
import SectionWithDescription from './SectionWithDescription';

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
                        <a className="card-title display-8 text-main" href={proj.link} target="_blank"><AiOutlineGithub /></a>
                    </div>
                    <p className="card-text">{proj.description}</p>
                </div>
            </div>
        </div>

        <SectionWithDescription title='Featured Project' content={proj.longDescription} />
        </>
    );
};

export default Featured;