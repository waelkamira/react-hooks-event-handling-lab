// Code Keypad Component Here

function Keypad() {
  function handleEvent(e) {
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" onChange={(e) => handleEvent(e)} />
    </div>
  );
}

export default Keypad;
