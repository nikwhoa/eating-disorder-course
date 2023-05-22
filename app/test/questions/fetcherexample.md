 const fetcher = (url) =>
   fetch(url)
       .then((res) => res.json())
       .then((data) => setDataQuestions(data));
  const { data, error, isLoading } = useSWR(`${process.env.DB_HOST}:4000/api/questions`, fetcher);

  if (error) return 'An error has occurred.';
  if (isLoading) return 'Loading...';
  console.log(dataQuestions);


  2443530c-5fc63f1babbc4e1d.js	200	script	questions	51.0 kB	19 ms		Script139-ad1759494bd898c4.js	200	script	questions	29.3 kB	19 ms		Script632-43119d1f211c19eb.js	200	script	webpack-d831fd5fe86a3a69.js:1	3.6 kB	9 ms		Scriptwebpack-d831fd5fe86a3a69.js	200	script	questions	2.1 kB	11 ms		Scriptpage-822a906622f9bd16.js	200	script	webpack-d831fd5fe86a3a69.js:1	1.9 kB	9 ms		Scriptmain-app-ba34fc98395831bb.js	200	script	questions	736 B	11 ms