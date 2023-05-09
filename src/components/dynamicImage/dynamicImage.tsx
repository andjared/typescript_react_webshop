import React, { useState, useEffect } from 'react';

export interface Props {
    path: string;
    title: string;
}

export default function DynamicImage({ path, title }: Props) {
    const [imgSrc, setImgSrc] = useState<string>('');

    useEffect(() => {
        const importImage = async () => {
            const image = await import(`../../assets${path}`);
            setImgSrc(image.default);
        };

        importImage();
    }, [path]);

    return <img src={imgSrc} alt={title} />;
}
