 const fetcher = (url) =>
   fetch(url)
       .then((res) => res.json())
       .then((data) => setDataQuestions(data));
  const { data, error, isLoading } = useSWR(`${process.env.DB_HOST}:4000/api/questions`, fetcher);

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';
  console.log(dataQuestions);