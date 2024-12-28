import React, { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import s from './qrCodeScanner.module.css';
import { SCAN_DATA } from '../../constans';

export const QrCodeScanner = () => {
  const [qrValue, setQrValue] = useState('Отсканируйте QR-код');

  const scanHandler = (result) => {
    setQrValue(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    console.log('scanData:', data);

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    );
  };

  return (
    <div>
      <Scanner
        classNames="qr-scanner"
        allowMultiple
        onScan={scanHandler}
        styles={{
          container: {
            height: 200,
            width: 200,
            margin: '0 auto',
            marginTop: '20px',
          }
        }}
        components={{
          finder: false,
        }}
      />

      <p className={s.text}>{qrValue}</p>
    </div >
  );
};