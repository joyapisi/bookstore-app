import ListofBooks from './ListofBooks';
import AddaBook from './AddaBook';
import Sample from './Sample';

export default function Books() {
  return (
    <>
      <article className="whole-body">
        <ListofBooks />
        <AddaBook />
        <Sample />
      </article>
    </>
  );
}
