import { closeModal } from "../../modalSlice";
import styles from "./modal.module.scss";
import { useSelector, useDispatch } from 'react-redux'

export const InfoModal = () => {
    const modalContent = useSelector((state) => state.modals.modalContent)
const dispatch = useDispatch()
  return (
    <div className={styles.modalBg} onClick={() => dispatch(closeModal(false))}>
      <div className={styles.mainContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <div className={styles.btnClose} onClick={() => dispatch(closeModal(false))} />
          <div className={styles.modalContent__title}>
            {`Дополнительная информация ${modalContent.id}: ${modalContent.title}`}
          </div>
          <div className={styles.modalContent__text}>{modalContent.body}</div>
        </div>
      </div>
    </div>
  )
}