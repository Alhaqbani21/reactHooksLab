import React, { useState } from 'react';

function JobDetails() {
  const [currentColor, setCurrentColor] = useState('#008000');
  const [fontSize, setfontSize] = useState(12);

  const increaseFontSize = () => {
    setfontSize(fontSize + 1);
  };
  const decreaseFontSize = () => {
    setfontSize(fontSize - 1);
  };

  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-5">
        <div className="flex flex-col justify-center items-center bg-gray-200 rounded-lg px-5 py-10 ">
          <h3 className="font-bold text-lg"></h3>
          <div className="py-4">
            الأسم :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {localStorage.getItem('name')}
            </span>
          </div>
          <div className="py-4">
            الجنس :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {localStorage.getItem('genderRadio')}
            </span>
          </div>
          <div className="py-4">
            الدولة التي تعيش فيها :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {localStorage.getItem('selectedCity')}
            </span>
          </div>
          <div className="py-4">
            مسوى اللغة الانجليزية :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {localStorage.getItem('englishLevel') === 0
                ? 'مبتدئ'
                : localStorage.getItem('englishLevel') === 25
                ? 'مستوى ما قبل المتوسط'
                : localStorage.getItem('englishLevel') === 50
                ? 'المستوى المتوسط'
                : localStorage.getItem('englishLevel') === 75
                ? 'المستوى فوق المتوسط'
                : 'المستوى المتقدم'}
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex flex-col justify-center items-center">
            حجم الخط
            <div>
              <button onClick={increaseFontSize} className="btn btn-secondary">
                +
              </button>
              {fontSize}
              <button onClick={decreaseFontSize} className="btn btn-secondary">
                -
              </button>
            </div>
          </div>
        </div>
        <input value={currentColor} onChange={handleColorChange} type="color" />
      </div>
    </>
  );
}

export default JobDetails;
