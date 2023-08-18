import { useState } from 'react';
import Button from '../components/button/button';
import Thing from '../components/thing/thing';
import ThingModal from '../components/thing/thingModal';

const MainPage = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(true);

    return(
        <div>
            <ThingModal
                open={modalOpen}
                edit
                onClose={() => setModalOpen(false)}
                onConfirm={() => null}
                thing={undefined}
            />
            <Button
                label='Create something'
                onClick={() => console.log("TEST")}
            />
            <Thing
                title='Some thing'
                description="HEJ"
            />
        </div>
    )
}

export default MainPage;