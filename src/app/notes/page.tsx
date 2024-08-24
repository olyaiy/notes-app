import Link from 'next/link';
import styles from './Notes.module.css';
import PocketBase from 'pocketbase';
import CreateNotes from './CreateNotes';


export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = 0;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';


// fetch a paginated records list
async function getNotes() {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const data = await pb.collection('notes').getList();
    return data.items;
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

      <CreateNotes />

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