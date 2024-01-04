import React, { useState } from 'react';
import '../styles/imageform.css'
function ImageUploadForm() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // You can handle the image data here, e.g., upload it to a server.
        // For now, let's just log it.
        console.log(selectedImage);
    };

    return (
        <div className='imageform'>
            <form onSubmit={handleFormSubmit} className='forms'>
                <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleImageDrop}
                    style={{
                        border: '2px dashed #cccccc',
                        borderRadius: '4px',
                        // padding: '20px',
                        textAlign: 'center',
                        position: 'relative',
                    }}
                    className='image-remove'
                >
                    {selectedImage ? (
                        <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', width: '100%' }} className='image-plus-button'>
                            <img
                                src={selectedImage}
                                alt="Selected"
                                style={{ maxWidth: '100%', maxHeight: '200px' }}
                                className='imageforimageform'
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                style={{
                                    position: 'absolute',
                                    // top: '5px',
                                    right: '3px',
                                    // left: '0.3px',
                                    background: 'red',
                                    color: 'white',
                                    border: 'none',
                                    // borderRadius: '50%',
                                    padding: '5px 10px',
                                    cursor: 'pointer',
                                }}
                                className='remove-button'

                            >
                                Remove
                            </button>
                        </div>
                    ) : (
                        <p>Drop an image here or click to select one.</p>
                    )}
                </div>
                <br />
                <div>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </div>
                <br />
                <div>
                    <button type="submit" className='submit'>Submit</button>
                </div>
            </form >
        </div >
    );
}

export default ImageUploadForm;
