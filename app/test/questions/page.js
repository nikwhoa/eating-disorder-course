'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function Page() {
  const [dataQuestions, setDataQuestions] = useState([]);

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `http://${process.env.DB_HOST}:4000/api/questions`,
    fetcher
  );


  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <>
      <div className="lg:max-w-lg">
        <ul className="mt-6">
          {/* {data.map((question, i) => (
            <li className="mt-4 text-xl" key={question.id}>
              {i + 1}. {question.question}
            </li>
          ))} */}
        </ul>
      </div>
    </>
  );
}
