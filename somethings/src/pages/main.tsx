import { useEffect, useState } from 'react';
import Button from '../components/button/button';
import Thing, { ThingProps } from '../components/thing/thing';
import ThingModalCreate from '../components/thing/thingModalCreate';
import { addThing, getThings } from '../firebase/access';


const MainPage = () => {

    const [modalEditOpen, setModalEditOpen] = useState<boolean>(true);
    const [modalCreateOpen, setModalCreateOpen] = useState<boolean>(true);

    const [things, setThings] = useState<ThingProps[]>([]);

    const handleAddThing = (thing:ThingProps) => {
        addThing(thing).then(
            () => handleGetThings()
        )
    }

    const handleGetThings = () => {
        getThings().then(setThings)
    }

    useEffect(() => {
        handleGetThings();
    }, [])

    return(
        <div>
            <ThingModalCreate
                open={modalCreateOpen}
                onClose={() => setModalCreateOpen(false)}
                onConfirm={handleAddThing}
                thing={undefined}
            />
            <Button
                label='Create something'
                onClick={() => setModalCreateOpen(true)}
            />
            {things.map((thing, index) => {
                return(
                    <Thing
                        key={index}
                        title={thing.title}
                        description={thing.description}
                    />
                )
            })}
        </div>
    )
}

export default MainPage;