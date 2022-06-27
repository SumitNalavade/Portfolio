import React from 'react';

import SectionHeader from './SectionHeader';

interface Props {
    title: string
    content: string
}

const SectionWithDescription: React.FC<Props> = ({ title, content }) => {
    return (
        <div className='container d-flex mx-md-3 mx-lg-5 flex-column text-main'> 
            <SectionHeader title={title} />
            <div>
                {content}
            </div>
        </div>
    )
};

export default SectionWithDescription;
