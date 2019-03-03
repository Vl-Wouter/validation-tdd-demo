import React from "react";
import Enzyme, { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

Enzyme.configure({ adapter: new Adapter() });

const store = configureMockStore({});

it("shows title", () => {
  const appComponent = shallow(<App store={store} />);

  expect(appComponent.find("h1").text()).toBe("Validation rules");
});
