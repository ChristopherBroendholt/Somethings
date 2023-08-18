import ReactQuill from 'react-quill';
import { ThingProps } from './thing';
import { useState } from 'react';
import Button from '../button/button';
import 'react-quill/dist/quill.snow.css';

interface ThingModalProps {
    thing?:ThingProps;
    edit:boolean;
    open:boolean;
    onClose:() => void;
    onConfirm:() => void;
}

const ThingModal = ({thing, edit, open, onClose, onConfirm} : ThingModalProps) => {

    const [thingValues, setThingValues] = useState<ThingProps>(thing?? {} as ThingProps);
    
    if(!open){
        return null
    }

    return(
        <div>
            <div>
                <h1>{edit ? "Edit this thing" : "Create new thing"}</h1>
            </div>
            <div>
                <input 
                    type="text" 
                    value={thingValues.title}
                    placeholder='Some title'
                    onChange={(e) => setThingValues({...thingValues, title: e.target.value})}
                />
            </div>
            <div>
                <ReactQuill
                    theme="snow"
                    value={thingValues.description}
                    onChange={(value) => setThingValues({...thingValues, description: value})}
                /> 
            </div>

            <div>
                <Button
                    label='Save'
                    onClick={() => console.log(thingValues)}
                />
                <Button
                    label="Close"
                    onClick={onClose}
                />
            </div>
        </div>
    )
}

export default ThingModal;