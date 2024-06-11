import React from "react";
import { BlockItem } from "./components/item";
import styles from "./App.module.scss";

function App() {
  const blockContent = [
    {
      id: 1,
      svg: "strategy.png",
      title: "СТРАТЕГИЯ",
      text: "Думаю у тебя не займет это больше двух-трех минут",
    },
    {
      id: 2,
      svg: "analytics.png",
      title: "АНАЛИЗ",
      text: "Подумай как это будет работать на разных разрешениях и при скролле",
    },
    {
      id: 3,
      svg: "socialmedia.png",
      title: "СОЦ СЕТИ",
      text: "Чтобы мы могли тебе доверить подобные задачи в будущем",
    },
    {
      id: 4,
      svg: "design.png",
      title: "РАЗВИТИЕ",
      text: "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
    },
  ];
  return (
    <div className="App">
      <div className={styles.secondBlock}>
        <h2 className={styles.secondBlock__title}>Как это работает</h2>
        <ul className={styles.secondBlock__content}>
          {blockContent.map((item) => (
            <BlockItem
              key={item.id}
              svg={item.svg}
              title={item.title}
              text={item.text}
            />
          ))}
        </ul>
      </div>
      <div className={styles.thirdBlock}>
        <div className={styles.thirdBlock__left}>
          <div className={styles.thirdBlock__title}>
            Круто, ты дошел до третьего блока
          </div>
          <div className={styles.thirdBlock__text}>
            63% опрошенных пользовались кредитами из-за того, что не могли
            покрыть непредвиденные расходы свыше 15 000 ₽.
            <br />
            <br />
            Доступ к заработанным деньгам помогает отказаться от кредитов и
            экономить деньги на процентах и штрафах.
          </div>
        </div>
        <div className={styles.thirdBlock__right}></div>
      </div>
    </div>
  );
}

export default App;
