import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');


// fetch a paginated records list
async function getNotes() {
    const resultList = await pb.collection('notes').getList(1, 50, {
        filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
    });

    return resultList.items as any[];



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

function Note({note}: {note: any}) {
    const {id, title, content, created } = note || {};
    return <div>
        <h2>{note.title}</h2>
        <h5>{note.created}</h5>
        <p>{note.content}</p>
    </div>
}

