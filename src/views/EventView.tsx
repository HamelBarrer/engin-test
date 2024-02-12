import { useEffect, useState } from 'react';
import AlertErrorAtom from '../components/ui/atoms/AlertErrorAtom';
import ButtonAtom from '../components/ui/atoms/ButtonAtom';
import FormEventMolecule from '../components/ui/molecules/FormEventMolecule';
import ModalOrganism from '../components/ui/organisms/ModalOrganism';
import { listEventService } from '../services/event.service';
import { EventLog } from '../types/event.type';

const EventView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<EventLog[]>([]);
  const [event, setEvent] = useState<EventLog>();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (data: EventLog) => {
    setIsOpen(true);
    setEvent(data);
  };

  useEffect(() => {
    listEventService()
      .then((res) => setEvents(res))
      .catch((error) => {
        setEvents([]);
        const err = error as Error;
        setIsError(true);
        setErrorMessage(err.message);

        setTimeout(() => {
          setIsError(false);
          setErrorMessage('');
        }, 5000);
      });
  }, []);

  return (
    <section>
      {isError && <AlertErrorAtom message={errorMessage} />}
      <ButtonAtom buttonName="Add" onClick={() => setIsOpen(true)} />
      <div className="grid grid__fluid__3">
        {events.length === 0 ? (
          <p>No content</p>
        ) : (
          <>
            {events.map((event) => (
              <article
                className="bg-white shadow-lg rounded-md p-2 w-80 duration-300 hover:scale-105 hover:cursor-pointer"
                key={event.id}
                onClick={() => handleClick(event)}
              >
                <div className="flex items-center justify-between">
                  <p className="font-bold">{event.name}</p>
                  <p className="font-semibold">{event.date}</p>
                </div>
                <p className="font-light">price: ${event.description}</p>
              </article>
            ))}
          </>
        )}
      </div>
      {isOpen && (
        <ModalOrganism setIsOpen={setIsOpen} setData={setEvent}>
          <FormEventMolecule event={event} />
        </ModalOrganism>
      )}
    </section>
  );
};

export default EventView;
