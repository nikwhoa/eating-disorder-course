// create component with result of test

export default function Result({ userAnswers }) {
  return (
    <div className="result flex-col overflow-auto h-screen">
      <h1 className="text-xl mt-14">Ви закінчили тест!</h1>
      <div className="flex flex-col justify-center items-center mt-6">
        <p className="text-xl">
          Ваш результат: <span className="font-bold text-3xl">{userAnswers.map((answer) => answer.answer.answerWeight).reduce((a, b) => a + b, 0)}</span>
        </p>
        <p className="leading-7 mt-6">
          Результать понад двадцять? Настав час для більш уважного погляду професіонала. Але не дозволяйте цифрі менше 20 заспокоїти вас і дати хибне відчуття безпеки. Розлади харчової поведінки можуть бути хитрими і часто ховаються під маскою заперечення. Тому, якщо у вас немає 20 балів, але ви все
          ще відчуваєте дистрес, не соромтеся звертатися за допомогою. Пам&apos;ятайте, що цей тест - це путівник, а не євангеліє - тільки фахівець може розставити всі крапки над &quot;і&quot; для повної картини. Якщо ваші стосунки з їжею та тілом не в порядку, незалежно від вашого балу, зверніться
          за професійною порадою. Завжди є час подбати про своє здоров&apos;я
        </p>
        {/* <p className="text-xl"></p> */}
      </div>
    </div>
  );
}
