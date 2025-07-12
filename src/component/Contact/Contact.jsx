import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";
const Contact = () => {
  const form = useRef();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });
  const sendEmail = (values, { setSubmitting, resetForm }) => {
    emailjs
      .sendForm(
        "service_whifq85",
        "template_xzhn5sk",
        form.current,
        "jxrJJXO1pe8kitiEN"
      )
      .then(
        () => {
          swal({
            title: "Thanks",
            text: "I will contact with you ASAP.",
            icon: "success",
            button: "OK",
          });
          setSubmitting(false);
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmitting(false);
        }
      );
  };
  return (
    <section className="min-h-screen w-full bg-[#14121A] pt-20 px-4">
  <div className="max-w-7xl mx-auto pb-24">
    {/* Title Section */}
    <div className="text-center mb-8 mt-20">
      <h2 className="text-3xl font-serif font-bold text-white">Contact Me</h2>
      <p className="text-gray-400 mt-2">
        I’d love to hear from you — let’s connect!
      </p>
    </div>

    {/* Contact Form Container */}
    <div className="flex justify-center ">
      <div className="w-full bg-[#1e1c26] p-8 rounded-2xl shadow-xl border border-fuchsia-500">
        <Formik
          initialValues={{ name: "", email: "", phone: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
        >
          {({ isSubmitting }) => (
            <Form className="w-full space-y-5">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Left Column */}
                <div className="w-full sm:w-1/2 space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="mt-1 p-3 w-full bg-transparent border border-gray-500 rounded-xl text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      className="mt-1 p-3 w-full bg-transparent border border-gray-500 rounded-xl text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white">
                      Phone
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Enter your phone"
                      className="mt-1 p-3 w-full bg-transparent border border-gray-500 rounded-xl text-white focus:ring-2 focus:ring-fuchsia-500 outline-none"
                    />
                    <ErrorMessage name="phone" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                </div>

                {/* Right Column */}
                <div className="w-full sm:w-1/2 flex flex-col justify-between">
                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium text-white">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows="9"
                      placeholder="Type your message"
                      className="mt-1 p-3 w-full bg-transparent border border-gray-500 rounded-xl text-white focus:ring-2 focus:ring-fuchsia-500 outline-none resize-none h-full"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-[30%] bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold p-3 rounded-xl transition duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
