import ReactQuill from 'react-quill';
import { ThingProps } from './thing';
import { useState } from 'react';
import Button from '../button/button';
import 'react-quill/dist/quill.snow.css';

interface ThingModalEditProps {
    thing?:ThingProps;
    open:boolean;
    onClose:() => void;
    onConfirm:() => void;
}

const ThingModalEdit = ({thing, open, onClose, onConfirm} : ThingModalEditProps) => {

    const [thingValues, setThingValues] = useState<ThingProps>(thing?? {} as ThingProps);
    
    if(!open){
        return null
    }

    return(
        <div>
            <div>
                <h1>{"Edit this thing"}</h1>
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

export default ThingModalEdit;