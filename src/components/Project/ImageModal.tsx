import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageModalProps {
    images: string[];
    descriptions: string[];
    currentIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, descriptions, currentIndex, onClose, onNext, onPrev }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowRight') {
                onNext();
            } else if (event.key === 'ArrowLeft') {
                onPrev();
            }
        };

        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-40">
            <div
                ref={modalRef}
                className="relative bg-background p-5 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[80vh] flex flex-col justify-center items-center overflow-hidden"
            >
                <button className="absolute top-4 right-4 text-secondary" onClick={onClose}>
                    &times;
                </button>
                <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary" onClick={onPrev}>
                    &#10094;
                </button>
                <div className="flex justify-center items-center w-4/5 lg:w-1/2 p-4">
                    <Image
                        src={require(`../../assets/img/${images[currentIndex]}`).default}
                        alt={`Image ${currentIndex + 1}`}
                        className="object-contain w-full h-full"
                    />
                </div>
                <p className="text-secondary mt-2 mb-2 text-center">{descriptions[currentIndex]}</p>
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-secondary" onClick={onNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
