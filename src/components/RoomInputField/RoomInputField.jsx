import * as S from "./RoomInputField.style";

const RoomInputField = ({ label, value, onChange, maxLength, placeholder }) => {
  const inputCount = value.length;

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <S.InputBox>
      <p>{label}</p>
      <div>
        <input
          onChange={handleInputChange}
          type="text"
          value={value}
          maxLength={maxLength}
          placeholder={placeholder}
        />
        <span>
          {inputCount}/{maxLength}
        </span>
      </div>
    </S.InputBox>
  );
};

export default RoomInputField;
