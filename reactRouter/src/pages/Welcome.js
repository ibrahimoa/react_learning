import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <p>Use code NEW_USER for 5% discount!</p>
      </Route>
    </section>
  );
};

export default Welcome;
