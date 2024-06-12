import React from "react";
import { BlockItem } from "./components/item";
import styles from "./App.module.scss";
import { useSelector} from "react-redux";
import { InfoModal } from "./components/modal/modal";
import { blockContent } from "./data";

function App() {
  const showModal = useSelector((state) => state.modals.showModal)
  console.log(showModal);
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.services}>
            <div className={styles.services__left}>
              <h2 className={styles.servicesBlock__title}>Сервис</h2>
              <div className={styles.services__title}>
                От идеи до незабываемого и измеримого результата.
              </div>
              <div className={styles.services__line}></div>
              <div className={styles.services__text}>
                Интеграция безупречного производства, передовых технологий и
                тщательного измерения производительности
              </div>
            </div>
            <div className={styles.services__right}>
              <div className={styles.servicesBlock}>
                <ul className={styles.servicesBlock__content}>
                  {blockContent.map((item) => (
                    <BlockItem
                      key={item.id}
                      id={item.id}
                      img={item.svg}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {showModal && <InfoModal/>}
      </div>
    </div>
  );
}

export default App;
