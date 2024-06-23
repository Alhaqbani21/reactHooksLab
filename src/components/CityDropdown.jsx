import React from 'react';

function CityDropdown(props) {
  return (
    <label className="form-control  w-[100%]" dir="rtl">
      <div className="label flex flex-row">
        <span className="label-text text-right">{props.name}</span>
      </div>
      <select
        className="select select-bordered w-full max-w-xs text-right"
        value={props.value}
        onChange={props.onChange}
        aria-describedby="error-message"
      >
        <option value="">اختر الدولة</option>
        <option value="المملكة العربية السعودية">
          المملكة العربية السعودية
        </option>
        <option value="الكويت">الكويت</option>
        <option value="العراق">العراق</option>
        <option value="قطر">قطر</option>
        <option value="عمان">عمان</option>
      </select>
      <div className="label flex justify-center">
        <span id="error-message" className="label-text-alt text-red-700">
          {props.error}
        </span>
      </div>
    </label>
  );
}

export default CityDropdown;
