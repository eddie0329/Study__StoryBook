import MyButton from "../components/MyButton";

export default { title: "MyButton" };

const Template = (args, { argTypes }) => ({
  components: { MyButton },
  props: Object.keys(argTypes),
  methods: {
    onClick() {
      console.log("HELLO");
    },
  },
  template: `
  <div>
    <my-button :btn-type="btnType" @click="onClick">{{ title }}</my-button>
  </div>
  `,
});

export const Primary = Template.bind({});
Primary.args = { btnType: "blue", title: "HELLO" };

export const Secondary = Template.bind({});
Secondary.args = { btnType: "red", title: "HELLO" };
