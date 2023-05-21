export default async function Page() {
  const res = await fetch(`http://${process.env.DB_HOST}:4000/api/questions`);
  const data = await res.json();
  return (
    <>
      <div className="lg:max-w-lg">
        <ul className="mt-6">
          {data.map((question, i) => (
            <li className="mt-4 text-xl" key={question.id}>
              {i + 1}. {question.question}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
