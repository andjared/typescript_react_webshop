import { useEffect, useState } from 'react';

function useMountTransition(isFormVisible: boolean, unmountDelay: number) {
    const [hasTransitionedIn, setHasTransitionedIn] = useState<boolean>(false);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        if (isFormVisible && !hasTransitionedIn) {
            setHasTransitionedIn(true);
        } else if (!isFormVisible && hasTransitionedIn) {
            timeoutId = setTimeout(
                () => setHasTransitionedIn(false),
                unmountDelay
            );
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [unmountDelay, isFormVisible, hasTransitionedIn]);

    return hasTransitionedIn;
}

export default useMountTransition;
