import React, { useEffect, useState } from 'react';

const ImageSlider = (props) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const totalImages = 120; // Total number of images
    useEffect(() => {
        const preloadImages = () => {
            for (let i = 0; i < totalImages; i++) {
                const img = new Image();
                img.src = `/mobile/${i.toString().padStart(3, '0')}.jpg`;
            }
        };
        preloadImages();
    }, []);
    
    const { setleftBurst, leftBurst, setrightBurst, rightBurst } = props;

    const toggleRight = () => {
        setrightBurst(!rightBurst);
    };

    const toggleLeft = () => {
        setleftBurst(!leftBurst);
    };

    

    const transitionFrames = (startFrame, endFrame, direction) => {
        let frame = startFrame;
        const interval = setInterval(() => {
            if (direction === "forward") {
                frame = (frame + 1) % totalImages;
            } else {
                frame = (frame - 1 + totalImages) % totalImages;
            }
            setCurrentFrame(frame);

            if (frame === endFrame) {
                clearInterval(interval);
            }
        }, 50); // Adjust the interval to control speed (50ms per frame)
    };

    const handleNextFrame = () => {
        toggleRight();
        const nextFrame = (currentFrame + 20) % totalImages;
        transitionFrames(currentFrame, nextFrame, "forward");
    };

    const handlePreviousFrame = () => {
        toggleLeft();
        // Calculate the previous frame with wrapping
        const previousFrame = (currentFrame - 20 + totalImages) % totalImages;
        transitionFrames(currentFrame, previousFrame, "backward");
    };

    return (
        <div>
            <div style={{ position: 'absolute', top: '0px' }}>
                <img
                    src={`/mobile/${currentFrame.toString().padStart(3, '0')}.jpg`}
                    alt={`Frame ${currentFrame}`}
                    style={{ width: '70%', height: 'auto' }}
                />
                <div>
                    <button onClick={handlePreviousFrame}>Previous</button>
                    <button onClick={handleNextFrame}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
