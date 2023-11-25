"use client";
import Button from "@/common/components/elements/Button";
import InputField from "@/common/components/elements/InputField";
import TextArea from "@/common/components/elements/TextArea";
import { sendEmail } from "@/common/utils/email/SendEmail";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true);
        await sendEmail(values);
        resetForm();
        console.log("Form values reset successfully:", formik.values);
      } catch (error) {
        console.error("Error sending email", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full grid grid-cols-2 grid-rows-2 gap-5"
    >
      <div className="col-span-2 lg:col-span-1">
        <InputField
          label={"Name"}
          type={"text"}
          name={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
          className="mb-5"
        />

        <InputField
          label={"Email"}
          type={"email"}
          name={"email"}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className="col-span-2 lg:col-span-1">
        <TextArea
          label={"Message"}
          name={"message"}
          value={formik.values.message}
          onChange={formik.handleChange}
        />
      </div>
      <div className="col-span-2 mx-auto">
        <Button text={"Submit"} disabled={formik.isSubmitting} />
      </div>
    </form>
  );
};

export default Form;
