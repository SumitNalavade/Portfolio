import React from 'react';

interface Props {
    title: string
}

const SectionHeader: React.FC<Props> = ({ title }) => {
    return (
        <u className="text-tertiary" style={{"textDecorationThickness": "5px"}}><p className="display-6 text-main">{title}</p></u>
    )
};

export default SectionHeader;