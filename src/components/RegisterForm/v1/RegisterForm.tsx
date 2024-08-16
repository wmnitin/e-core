import { useDispatch, useSelector } from "react-redux";
import { Form, ButtonToolbar, Button } from "rsuite";
import { RootState } from "../../../redux/store/configureStore";
import { changeComponentState } from "../../../redux/reducers/appReducer";

const RegisterForm = () => {
  const data = {
    name: "RegisterForm",
    version: "v1",
  };

  const currentState = useSelector(
    (state: RootState) => state.app.componentState
  );
  const formState = currentState[data.name]?.[data.version] || {};
  const formStateV2 = currentState[data.name]?.v2 || {};

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
          version: "v2",
          state: { ...formStateV2, email: formValue.email },
        })
      );
    }
  };

  return (
    <div>
      <h1 style={{ width: "80%", margin: "auto" }}>
        <h1>Register Form V1</h1>
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
