import React, { useState, useEffect } from 'react';

const EditableItem = ({ label, initialValue }) => {
    const [value, setValue] = useState(initialValue);
    const [editorVisible, setEditorVisible] = useState(false);

    const toggleEditor = () => {
        setEditorVisible(!editorVisible);
    };

    useEffect(() => {
        console.log(value);
    });

    return (
        <>
            {editorVisible ? (
                <label>
                    {label}
                    <input
                        id={label}
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </label>
            ) : (
                <span>{value}</span>
            )}
            <button type="button" onClick={toggleEditor}>{editorVisible ? 'Done' : 'Edit'}</button>
        </>
    );
};

export default EditableItem;
