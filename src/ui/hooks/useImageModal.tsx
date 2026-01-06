import { useState } from "react";

export function useImageModal() {
    const [isImageOpen, setIsImageOpen] = useState(false);
    const [imageModal, setImageModal] = useState("");

    const onClickImage = (image: string) => {
        setIsImageOpen(true);
        setImageModal(image);
    };

    const onClickModal = () => {
        setIsImageOpen(false);
        setImageModal("");
    };

    return {
        isImageOpen,
        imageModal,
        onClickImage,
        onClickModal
    };
}