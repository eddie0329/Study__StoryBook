import { addParameters } from "@storybook/vue";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addParameters({ docs: { page: null } });
