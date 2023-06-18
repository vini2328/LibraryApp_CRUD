import { Counter } from "./Counter";

export default function Profile({ name, pic }) {
  return (
    <div className="user-container">
      <img className="Profile_pic" src={pic} alt="img" />
      <h1> Hello {name}😍😍😍</h1>
      <Counter />

    </div>
  );
}
