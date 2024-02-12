import React, { useEffect, useState } from 'react';
import {
  createEventService,
  listSpotService,
  updateEventService,
} from '../../../services/event.service';
import { EventLog, Spots } from '../../../types/event.type';
import ButtonAtom from '../atoms/ButtonAtom';
import InputAtom from '../atoms/InputAtom';
import LabelAtom from '../atoms/LabelAtom';
import SelectInputAtom from '../atoms/SelectInputAtom';

interface Props {
  event: EventLog | undefined;
}

export default function FormEventMolecule({ event }: Props) {
  const [formData, setFormData] = useState({
    name: event?.name ?? '',
    description: event?.description ?? '',
    date: event?.date ?? '',
    spotId: event?.quantity ?? 0,
    quantity: event?.quantity ?? 0,
  });
  const [spots, setSpots] = useState<Spots[]>([]);

  const { name, description, date, quantity } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (event?.id) {
      await updateEventService(event.id, formData);
    } else {
      await createEventService(formData);
    }
  };

  useEffect(() => {
    listSpotService().then((res) => setSpots(res));
  }, []);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <LabelAtom labelName="name">
        <InputAtom name="name" value={name} onChange={handleChange} />
      </LabelAtom>
      <LabelAtom labelName="description">
        <InputAtom
          name="description"
          value={description}
          onChange={handleChange}
        />
      </LabelAtom>
      <LabelAtom labelName="date">
        <InputAtom name="date" value={date} onChange={handleChange} />
      </LabelAtom>
      <LabelAtom labelName="spot">
        <SelectInputAtom
          spots={spots}
          formData={formData}
          setFormData={setFormData}
        />
      </LabelAtom>
      <LabelAtom labelName="quantity">
        <InputAtom name="quantity" value={quantity} onChange={handleChange} />
      </LabelAtom>
      <ButtonAtom type="submit" buttonName="Save" />
    </form>
  );
}
