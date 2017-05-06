import React from 'react';

const TwoPlayerField = (props) => {
  return(
    <form>
      <label>
        Player 1
      <input type="text" name="username" />
      </label>
      <label>
        Player 2
      <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>

  );
}

export default TwoPlayerField;
