import React from 'react';

import { IProject } from "../utils/Project";
import { AiOutlineGithub } from 'react-icons/ai';

import cardStyles from "../styles/components/card.module.scss";

interface CardProps {
    proj: IProject
};
export const Card: React.FC<CardProps> = ({ proj }) => {
    return (
        <div className={`card mb-3 bg-background text-main border-highlight ${cardStyles.projectCard}`}>
                <img src={proj.imagePath} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title">{proj.name}</h5>
                        <a className="card-title display-8 text-main" href={proj.url} target="_blank"><AiOutlineGithub /></a>
                    </div>
                    <h6 className="card-subtitle mb-4 text-muted">{proj.language}</h6>
                    <p className="card-text">{proj.description}</p>
                </div>
        </div>
    )
};
