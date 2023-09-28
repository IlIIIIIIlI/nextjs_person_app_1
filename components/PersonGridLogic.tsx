// components/PersonGridLogic.tsx
import React, { useEffect, useState } from 'react';
import PersonGrid from './PersonGrid';
import { Person } from '@/types/types';

const PersonGridLogic: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const response = await fetch('/api/people');
      if (response.ok) {
        const data = await response.json();
        setPeople(data);
      } else {
        console.error('Error fetching people data.');
      }
    } catch (error) {
      console.error('Error fetching people data:', error);
    }
  };

  const handleEditCellChange = async (updatedPerson: Person) => {
    try {
      // Send the updated data to your API endpoint
      console.log('handleEditCellChange');
      const response = await fetch(`/api/people/${updatedPerson.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPerson),
      });

      if (response.ok) {
        const updatedPersonFromServer: Person = await response.json();
        setPeople((prevPeople) =>
          prevPeople.map((person) =>
            person.id === updatedPersonFromServer.id ? updatedPersonFromServer : person
          )
        );
      } else {
        console.error('Error updating the record.');
      }
    } catch (error) {
      console.error('Error updating the person:', error);
    }
  };

  const handleDeleteButtonClick = async (id: number) => {
    try {
      const response = await fetch(`/api/people/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
      } else {
        console.error('Error deleting the record.');
      }
    } catch (error) {
      console.error('Error deleting the person:', error);
    }
  };

  return (
    <PersonGrid
      people={people}
      onEditCellChange={handleEditCellChange}
      onDeleteButtonClick={handleDeleteButtonClick}
    />
  );
};

export default PersonGridLogic;
