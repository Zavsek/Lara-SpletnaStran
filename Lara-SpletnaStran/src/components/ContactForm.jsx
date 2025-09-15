import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";


export const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4z8p9xn",    // EmailJS Service ID
        "template_uqzfr6t",   // EmailJS Template ID
        form.current,
        "7K21HfOZR4GIqhi7i"     // EmailJS Public Key
      )
      .then(
        () =>setSuccess(true),
        () => alert("❌ Prišlo je do napake pri pošiljanju.")
      );
  };

   if (success) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-green-50">
        <div className="p-10 rounded-xl shadow-xl bg-white border border-green-300 text-center max-w-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-4">✅ Hvala!</h2>
          <p className="text-gray-700">
            Tvoje sporočilo je bilo uspešno poslano. Oglasim se ti kmalu!
          </p>
        </div>
      </div>
    )
  }

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-base-100 shadow-xl rounded-2xl p-8 w-full flex flex-col gap-5"
    >
      <h3 className="text-2xl font-semibold text-neutral-700 mb-2">Piši mi!</h3>

      <input
        type="text"
        name="name"
        placeholder="Vaše ime"
        className="input input-bordered w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Vaš email"
        className="input input-bordered w-full"
        required
      />
      <textarea
        name="message"
        placeholder="Vaše sporočilo"
        className="textarea textarea-bordered w-full min-h-[120px]"
        required
      />
      <input type="hidden" name="date" value={new Date().toLocaleString()} />



      <button type="submit" className="btn btn-primary w-full mt-3">
        Pošlji sporočilo
      </button>
    </form>
  );
};
