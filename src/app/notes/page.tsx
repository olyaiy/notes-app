import Link from 'next/link';
import styles from './Notes.module.css';
import PocketBase from 'pocketbase';

console.log('This log is at the top level of the file');

const pb = new PocketBase('http://127.0.0.1:8090');


// fetch a paginated records list
async function getNotes() {
    console.log('Attempting to fetch notes...');
    try {
        const resultList = await pb.collection('notes').getList(1, 50);
        console.log('API call successful:', resultList);
        return resultList.items;
    } catch (error) {
        console.error('API call failed:', error);
        return [];
    }
}


export default async function NotesPage() {
    const notes = await getNotes();


  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
            return <Note key={note.id} note={note} />
        })}
      </div>

    </div>
  )
}

function Note({ note }: any) {
    const { id, title, content, created } = note || {};
  
    return (
      <Link href={`/notes/${id}`}>
        <div className={styles.note}>
          <h2>{title}</h2>
          <h5>{content}</h5>
          <p>{created}</p>
        </div>
      </Link>
    );
  }