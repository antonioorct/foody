import { useState } from "react";

export default function useForm() {
  const [state, setState] = useState({});

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  return [state, handleChange];
}
