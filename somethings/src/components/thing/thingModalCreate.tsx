import ReactQuill from 'react-quill';
import { ThingProps } from './thing';
import { useState } from 'react';
import Button from '../button/button';
import 'react-quill/dist/quill.snow.css';
import './thingModal.scss'

interface ThingModalCreateProps {
    thing?:ThingProps;
    open:boolean;
    onClose:() => void;
    onConfirm:(thing:ThingProps) => void;
}

const ThingModalCreate = ({thing, open, onClose, onConfirm} : ThingModalCreateProps) => {

    const [thingValues, setThingValues] = useState<ThingProps>(thing?? {} as ThingProps);
    
    if(!open){
        return null
    }

    return(
        <div className='modal-backdrop'>
            <div className="modal-container">

                <div>
                    <h1>{"Create new thing"}</h1>
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
                        onClick={() => onConfirm(thingValues)}
                    />
                    <Button
                        label="Close"
                        onClick={onClose}
                    />
                </div>
            </div>
        </div>
    )
}

export default ThingModalCreate;