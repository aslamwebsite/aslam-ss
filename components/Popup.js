import { useState } from 'react';
import styles from './Popup.module.css';

export default function Popup() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div>
      <button onClick={togglePopup}>Click Me</button>
      {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h2>Popup Content</h2>
            <p>This is a popup with animation.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
