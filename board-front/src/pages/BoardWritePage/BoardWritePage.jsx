import Quill from 'quill';
import "quill/dist/quill.snow.css";
import React, { useEffect, useRef } from 'react';



function BoardWritePage(props) {
    const containerRef = useRef();
    useEffect(() => {
        const toolbarOptions = [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
          
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
          
            ['clean']                                         // remove formatting button
          ];
        const quill = new Quill(containerRef.current, {
            modules: {
                toolbar: toolbarOptions,
            },
            theme: "snow",
        });
    }, [])
    
    return (
        <div ref={containerRef}>
            
        </div>
    );
}

export default BoardWritePage;