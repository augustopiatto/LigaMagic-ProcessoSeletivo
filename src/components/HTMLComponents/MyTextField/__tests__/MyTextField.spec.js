import { test, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";
import MyTextField from "../MyTextField.vue";

describe("MyTextField.vue", () => {
  test("Componente sendo montado", () => {
    const wrapper = mount(MyTextField);
    expect(wrapper).toBeTruthy();
  });

  test("Texto digitado", async () => {
    const wrapper = mount(MyTextField, {});
    const textInput = wrapper.find("input");

    await textInput.setValue("Tomas");

    expect(wrapper.emitted("update:modelValue")).toEqual([["Tomas"]]);
    expect(textInput.element.value).toBe("Tomas");
  });
});
