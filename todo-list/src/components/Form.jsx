const InputField = ({text , handleInput, handleSubmit}) => {
    return (
        <label>
        <input
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button onClick={handleSubmit}>ADD</button>
      </label>
    );
  };
  
  export default InputField;