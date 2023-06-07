const questions = [
  {
    question: 'Мене лякає думка про зайву вагу',
    id: 1,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я утримуюсь від їжі, коли відчуваю голод',
    id: 2,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я стурбована/ий думкою про їжу',
    id: 3,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'У мене виникає безконтрольне переїдання, коли я їм та не можу зупинитись',
    id: 4,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я ділю їжу/порції на маленькі шматки',
    id: 5,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я підраховую калорії в їжі',
    id: 6,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я уникаю їжу з великим вмістом вуглеводів (наприклад, хліб, картопля, рис та інше)',
    id: 7,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Мені здається, що оточуючі хочуть щоб я більше їла (їв)',
    id: 8,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Мене рве після їжі',
    id: 9,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я відчуваю провину після прийому їжі',
    id: 10,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Мене турбують думки про схуднення',
    id: 11,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Коли займаюсь спортом, я думаю про втрачені калорії',
    id: 12,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Оточуючі вважають мене надто худою (худим)',
    id: 13,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я стурбована/ий думкою про кількість жиру в моєму тілі',
    id: 14,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я витрачаю більше часу на пережовування їжі, ніж інші',
    id: 15,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я уникаю продукти, що містять цукор',
    id: 16,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я споживаю дієтичні продукти',
    id: 17,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я відчуваю, що їжа контролює моє життя',
    id: 18,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я контролюю себе в питаннях їжі',
    id: 19,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я відчуваю, що оточуючі намагаються змусити мене їсти більше',
    id: 20,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я витрачаю достатньо часу на думки про їжу',
    id: 21,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я відчуваю дискомфорт після вживання солодощів',
    id: 22,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я дотримуюсь дієт',
    id: 23,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Мені подобається відчуття порожнього шлунку',
    id: 24,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Після їжі у мене виникає імпульсивне прагнення викликати блювоту',
    id: 25,
    answers: [
      {
        text: 'Постійно',
        value: 3,
      },
      {
        text: 'Зазвичай',
        value: 2,
      },
      {
        text: 'Часто',
        value: 1,
      },
      {
        text: 'Періодично',
        value: 0,
      },
      {
        text: 'Рідко',
        value: 0,
      },
      {
        text: 'Ніколи',
        value: 0,
      },
    ],
  },
  {
    question: 'Я отримую задоволення, коли куштую нові та смачні страви',
    id: 26,
    answers: [
      {
        text: 'Постійно',
        value: 0,
      },
      {
        text: 'Зазвичай',
        value: 0,
      },
      {
        text: 'Часто',
        value: 0,
      },
      {
        text: 'Періодично',
        value: 1,
      },
      {
        text: 'Рідко',
        value: 2,
      },
      {
        text: 'Ніколи',
        value: 3,
      },
    ],
  },
];

export default questions;
