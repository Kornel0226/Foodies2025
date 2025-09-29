'use client'

import classes from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from 'next/image'

const ImagePicker = ({label, name}) => {
    const [pickedImage, setPickedImage] = useState(null)


    const imageInputRef = useRef();
    
    const handlePickClick = () => {
        imageInputRef.current?.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
        }

        const reader = new FileReader();

        reader.onload = () => {
            setPickedImage(reader.result)
        }

        reader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor="image">{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && typeof(pickedImage) === "string" && (<Image src={pickedImage} alt={"Uploaded image"} fill/>)}
                </div>
                <input className={classes.input} type="file" id="image" accept="image/png, image/jpeg" name={name}
                    ref={imageInputRef} onChange={handleImageChange} />
                <button className={classes.button} type="button" onClick={handlePickClick}>
                    Pick an image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker