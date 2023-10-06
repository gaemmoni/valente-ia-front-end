import React, { useEffect, useState } from 'react';

export default function withDelayUnmounting(Component) {
    return (props) => {

        const {
            visible,
            delay = 500,
        } = props;

        const [shouldRender, setShouldRender] = useState(visible)

        useEffect(() => {
            if (visible) {
                setShouldRender(true);
            }
            else {
                setTimeout(
                    () => setShouldRender(false),
                    delay
                );
            }

        }, [visible]);

        return shouldRender ? <Component {...props} /> : null;
    };
}