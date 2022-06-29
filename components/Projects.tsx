import React from 'react';

import { IFeaturedProject, IProject } from "../utils/Project";
import { AiOutlineGithub } from 'react-icons/ai';
import SectionWithDescription from './SectionWithDescription';

import featuredProjectStyles from "../styles/components/featuredProject.module.scss";
import cardStyles from "../styles/components/card.module.scss";

interface CardProps {
    proj: IProject
};
const Card: React.FC<CardProps> = ({ proj }) => {
    return (
        <div className={`card mb-3 bg-background text-main border-highlight ${cardStyles.projectCard}`}>
                <img src={proj.imagePath} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title">{proj.title}</h5>
                        <a className="card-title display-8 text-main" href={proj.url} target="_blank"><AiOutlineGithub /></a>
                    </div>
                    <h6 className="card-subtitle mb-4 text-muted">{proj.language}</h6>
                    <p className="card-text">{proj.description}</p>
                </div>
        </div>
    )
};

interface FeaturedProjectProps {
    proj: IFeaturedProject
}
export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ proj }) => {
    return (
        <>
        <div className={`mx-lg-5 w-75 ${featuredProjectStyles.featuredProjectContainer}`}>
            <Card proj={proj} />
        </div>

        <SectionWithDescription title='Featured Project' content={proj.longDescription} />
        </>
    );
};

interface ProjectProps {
    proj: IProject
}
export const Project: React.FC<ProjectProps> = ({ proj }) => {
    return (
        <div className="col-lg-4 mb-5 d-flex align-items-stretch">              
            <Card proj={proj} />
        </div>
    )
}
