import { IFormdata } from "@/common/interface/IFormData";
import Swal from "sweetalert2";

export const sendEmail = async (formData: IFormdata) => {
  try {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    const data = await response.json();
    Swal.fire({
      icon: "success",
      title: "Email Sent!",
      text: "Your email has been sent successfully.",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "An error occurred while sending the email.",
    });
  }
};
