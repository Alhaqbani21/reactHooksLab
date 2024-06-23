import React, { useState } from 'react';
import Input1 from './Input1';
import SubmitButton from './SubmitButton';
import CityDropdown from './CityDropdown';

import RadioButton from './RadioButton';
import ModalJob from './ModalJob';

function Hero() {
  const [name, setName] = useState('');
  const [nameAlert, setNameAlert] = useState('');

  const [selectedCity, setselectedCity] = useState('');
  const [selectedCityAlert, setselectedCityAlert] = useState('');

  const [genderRadio, setGenderRadio] = useState('');
  const [genderRadioAlert, setGenderRadioAlert] = useState('');

  const [englishLevel, setEnglishLevel] = useState(25);

  function applyToJob() {
    let valid = true;

    if (name.length < 1) {
      setNameAlert('الاسم يجب أن يكون أطول من 3 أحرف');
      valid = false;
    } else {
      setNameAlert('');
    }

    if (genderRadio == '') {
      setGenderRadioAlert('حقل مطلوب');
      valid = false;
    } else {
      setGenderRadioAlert('');
    }
    if (selectedCity == '') {
      setselectedCityAlert('حقل مطلوب');
      valid = false;
    } else {
      setselectedCityAlert('');
    }

    if (valid) {
      document.getElementById('my_modal_4').showModal();
    }
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-300  ">
        <div className="hero-content text-center ">
          <div className="max-w-[100vw] flex flex-col justify-center gap-5 bg-base-100 p-7 rounded lg:p-28 max-md:p-8 max-md:w-[75vw] lg:w-[90vw]">
            <h1 className="text-xl max-md:text-sm text-primary">نموذج تقديم</h1>
            <Input1
              name="ادخل الأسم"
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={nameAlert}
              type="text"
              value={name}
            />
            <RadioButton
              value1="ذكر"
              value2="انثى"
              name="اختر الجنس"
              onChange={(e) => {
                setGenderRadio(e);
              }}
              value={genderRadio}
              error={genderRadioAlert}
            />

            <CityDropdown
              name="اختر الدولة التي تعيش فيها"
              onChange={(e) => {
                setselectedCity(e.target.value);
              }}
              error={selectedCityAlert}
              value={selectedCity}
            />
            <p>مستوى اللغة الانجليزية</p>
            <input
              type="range"
              min={0}
              max="100"
              value={englishLevel}
              className="range"
              step="25"
              onChange={(e) => {
                setEnglishLevel(e.target.value);
              }}
            />
            <div className="flex w-full justify-between px-2 text-xs">
              <span>مبتدئ</span>
              <span>مستوى ما قبل المتوسط</span>
              <span>المستوى المتوسط</span>
              <span>المستوى فوق المتوسط</span>
              <span>المستوى المتقدم</span>
            </div>

            <ModalJob
              name={name}
              city={selectedCity}
              gender={genderRadio}
              englishLevel={englishLevel}
              onClickSend={() => {
                setName('');

                setselectedCity('');

                setNameAlert('');

                setselectedCityAlert('');

                setShowSuccess(true);
              }}
            />

            <SubmitButton onClick={applyToJob} name="تقديم" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
