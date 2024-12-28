import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from './qrCodeGenerator.module.css';
import { GENERATE_DATA } from '../../constans';

export const QrCodeGenerator = () => {

  const [value, setValue] = useState('');
  const [resalt, setResalt] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setResalt('');
  };

  const generateQRCode = () => {
    setResalt(value);
    setValue('');

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    );
  };

  return (
    <div>
      <input className={s.input} type="text" value={value} onChange={handleChange} placeholder="Введите текст" />
      <button className={s.button} type="button" onClick={generateQRCode}>Сгенерировать QR код</button>
      <div className={s.qrCode}>
        {resalt !== '' && <QRCodeSVG value={resalt} />}
      </div>
    </div>
  );
} 