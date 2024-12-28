import { useState } from 'react';
import { SCAN_DATA, GENERATE_DATA } from '../../constans';
import s from './history.module.css';

export const History = () => {

  const scanData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  const generateData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  const [scan, setScan] = useState(scanData);
  const [generate, setGenerate] = useState(generateData);

  const delHistory = () => {
    localStorage.removeItem(SCAN_DATA);
    localStorage.removeItem(GENERATE_DATA);

    setScan([]);
    setGenerate([]);
  }

  return (
    <div className={s.container}>
      <h2 className={s.title}>История сканирования</h2>
      <ul>
        {scanData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className={s.title}>История генерации</h2>
      <ul>
        {generateData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button className={s.button} onClick={delHistory}>Очистить историю</button>
    </div>
  );

}