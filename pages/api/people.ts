import { NextApiRequest, NextApiResponse } from 'next';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { Person } from '../../types/types';  // Adjust the path based on your project structure.
import { Database } from './Database';


// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json');

// Configure lowdb to write data to JSON file


const adapter = new JSONFile(file);
const defaultData: Database = { people: [] };

const db = new Low(adapter, defaultData);


export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Read the data before accessing it
  await db.read();

  if (req.method === 'GET') {
    const people = (db.data as Database).people;
    res.status(200).json(people);

  } else if (req.method === 'POST') {
    const newPerson: Person = req.body;
    const database = db.data as Database; // Asserting the type
    const data = db.data as Database;

  // Get the current maximum ID from the database

  const maxId = data.people.reduce((max: number, person: Person) => (person.id > max ? person.id : max), 0);

  // Automatically increment the ID
  newPerson.id = maxId + 1;

    database.people.push(newPerson);
    await db.write();
    res.status(200).json(newPerson);
    
  } else {
    res.status(405).end();  // Method Not Allowed
  }
};
