import { Form, ButtonToolbar, Button } from "rsuite";
import { changeComponentState } from "../../../redux/reducers/appReducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/configureStore";

const RegisterForm = () => {
  const data = {
    name: "RegisterForm",
    version: "v2",
  };

  const currentState = useSelector(
    (state: RootState) => state.app.componentState
  );
  const formState = currentState[data.name]?.[data.version] || {};
  const formStateV1 = currentState[data.name]?.v1 || {};
  const dispatch = useDispatch();

  const onChange = (formValue: any) => {
    dispatch(
      changeComponentState({
        name: data.name,
        version: data.version,
        state: formValue,
      })
    );
    if (formValue.email) {
      dispatch(
        changeComponentState({
          name: data.name,
          version: "v1",
          state: { ...formStateV1, email: formValue.email },
        })
      );
    }
  };

  return (
    <div>
      <h1 style={{ width: "80%", margin: "auto" }}>
        <h1>Register Form V2</h1>
      </h1>
      <Form
        onChange={onChange}
        formValue={formState}
        fluid
        style={{ width: "80%", margin: "auto" }}
      >
        <Form.Group controlId="name">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Form.Control name="name" />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.ControlLabel>Email (shared state)</Form.ControlLabel>
          <Form.Control name="email" type="email" />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control name="password" type="password" />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.ControlLabel>Confirm Password</Form.ControlLabel>
          <Form.Control name="confirmPassword" type="password" />
        </Form.Group>

        <ButtonToolbar>
          <Button appearance="primary" type="submit">
            Submit
          </Button>
        </ButtonToolbar>
      </Form>
    </div>
  );
};

export default RegisterForm;
