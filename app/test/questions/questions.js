const questions = [
  {
    question: 'Мене лякає зайва вага',
    id: 1,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я не їм, коли відчуваю голод',
    id: 2,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я зациклений на їжі',
    id: 3,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я продовжую їсти до тих пір, поки не відчуваю, що не зможу зупинитися',
    id: 4,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я подрібнюю їжу на маленькі шматочки',
    id: 5,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Усвідомлюю калорійність продуктів, які споживаю',
    id: 6,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я намагаюся уникати їжі з високим вмістом вуглеводів (тобто хліба, рису, картоплі і т.д.).',
    id: 7,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я відчуваю, що інші хотіли б, щоб я їв більше',
    id: 8,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Мене нудить після того, як я поїм',
    id: 9,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я відчуваю сильне почуття провини після вживання їжі',
    id: 10,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Мене охоплює бажання схуднути',
    id: 11,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я думаю про спалювання калорій, під час тренувань',
    id: 12,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Інші люди вважають, що я маю надто низьку вагу',
    id: 13,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Мене турбує думка про наявність жиру на моєму тілі',
    id: 14,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я витрачаю більше часу на споживання їжі, ніж інші',
    id: 15,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я уникаю продуктів, що містять цукор',
    id: 16,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я їм дієтичні продукти',
    id: 17,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я контролюю себе щодо їжі',
    id: 19,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я відчуваю, що інші намагаються змусити мене їсти',
    id: 20,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я маю постійні думки про їжу',
    id: 21,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Відчуваю дискомфорт після вживання солодощів',
    id: 22,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Я дотримуюсь дієти',
    id: 23,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Мені подобається, коли мій шлунок порожній',
    id: 24,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'В мене виникають позиви до блювоти після їжі',
    id: 25,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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
    question: 'Мені подобається куштувати нову насичену їжу',
    id: 26,
    answers: [
      {
        text: 'Завжди',
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
        text: 'Іноді',
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