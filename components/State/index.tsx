import React from "react";

type Props = {
  prefName: string;
};
const State = ({ prefName }: Props) => {
  return (
    <div>
      <input id="prefName" type="checkbox" />
      <label htmlFor="prefName">{prefName}</label>
    </div>
  );
};

export default State;
