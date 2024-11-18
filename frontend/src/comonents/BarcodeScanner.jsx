import React, { useEffect, useRef } from 'react';
import Quagga from 'quagga'; 

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    // Initialize QuaggaJS
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          target: scannerRef.current,
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment',
          },
        },
        decoder: {
          readers: ['code_128_reader', 'ean_reader', 'ean_8_reader'], 
        },
      },
      (err) => {
        if (err) {
          console.error('Error initializing Quagga:', err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      onDetected(data.codeResult.code); 
    });

    return () => {
      Quagga.stop();
    };
  }, [onDetected]);

  return <div ref={scannerRef} style={{ width: '100%', height: '100%' }} />;
};

export default BarcodeScanner;
