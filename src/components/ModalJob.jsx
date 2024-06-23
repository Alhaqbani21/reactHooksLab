import React, { useState } from 'react';

function ModalJob(props) {
  const [currentColor, setCurrentColor] = useState('#008000');
  const [fontSize, setfontSize] = useState(12);

  const increaseFontSize = () => {
    setfontSize(fontSize + 1);
  };
  const decreaseFontSize = () => {
    setfontSize(fontSize - 1);
  };

  const handleColorChange = () => {
    setCurrentColor(e.target.value);
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            يرجى التأكيد من المعلومات المدخلة
          </h3>
          <div className="py-4">
            الأسم :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {props.name}
            </span>
          </div>
          <div className="py-4">
            الجنس :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {props.gender}
            </span>
          </div>
          <div className="py-4">
            الدولة التي تعيش فيها :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {props.city}
            </span>
          </div>
          <div className="py-4">
            مسوى اللغة الانجليزية :{' '}
            <span style={{ color: currentColor, fontSize: fontSize + 'px' }}>
              {props.englishLevel === 0
                ? 'مبتدئ'
                : props.englishLevel === 25
                ? 'مستوى ما قبل المتوسط'
                : props.englishLevel === 50
                ? 'المستوى المتوسط'
                : props.englishLevel === 75
                ? 'المستوى فوق المتوسط'
                : 'المستوى المتقدم'}
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button onClick={increaseFontSize} className="btn btn-secondary">
              +
            </button>
            <button onClick={decreaseFontSize} className="btn btn-secondary">
              -
            </button>
            <input
              value={currentColor}
              onChange={handleColorChange}
              type="color"
            />
          </div>
          <div className="modal-action flex justify-center items-center">
            <form
              className="flex gap-10 justify-center items-center w-[100%]"
              method="dialog"
            >
              <button className="btn bg-orange-600 text-white">تعديل</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalJob;
