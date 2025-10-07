'use client';
import { useRouter } from 'next/navigation';
import { FC, FormEvent, useState } from 'react';

import { BOOK_FORM_DEFAULT_STATE, INPUT_FIELDS, RADIO_FIELDS } from '@/data';

//components
import Button from '@/components/ui/Button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';

interface Props { }

const Index: FC<Props> = () => {
  const [form, setForm] = useState(BOOK_FORM_DEFAULT_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { push } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xrbylvar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert('Thank you for your submission! We will get back to you soon.');
        setForm(BOOK_FORM_DEFAULT_STATE); // Reset form
        push('/'); // Redirect to home page
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-1-light dark:bg-bg-1-dark transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <button
            className="group absolute left-0 top-0 z-10 rounded-full bg-stone-800 p-2 hover:bg-stone-700 transition-colors duration-300"
            onClick={() => push('/')}
          >
            <svg
              focusable="false"
              className="h-5 w-5 fill-stone-400 transition group-hover:fill-stone-300"
              viewBox="0 0 24 24"
            >
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"></path>
            </svg>
          </button>
          <h1 className="text-center text-4xl md:text-5xl font-bold text-text-1-light dark:text-text-1-dark transition-colors duration-300">
            Request form
          </h1>
        </div>

        <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Radio Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RADIO_FIELDS.map((item) => (
                <RadioGroup
                  onValueChange={(value) => setForm((prev) => ({ ...prev, [item.formKey]: value }))}
                  key={item.title}
                  className="space-y-3"
                  required={true}
                >
                  <h4 className="text-lg font-medium text-text-1-light dark:text-text-1-dark transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="space-y-2">
                    {item.radioArray.map((radio) => (
                      <div key={radio.value} className="flex items-center space-x-3">
                        <RadioGroupItem value={radio.value} id={radio.name} required={true} />
                        <label htmlFor={radio.name} className="text-sm text-text-1-light dark:text-text-1-dark transition-colors duration-300">
                          {radio.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              ))}
            </div>

            {/* Input Fields */}
            <div className="space-y-6">
              {INPUT_FIELDS.map((item) => (
                <div key={item.label} className="w-full">
                  <label htmlFor={item.label} className="block mb-2 text-sm font-medium text-text-1-light dark:text-text-1-dark transition-colors duration-300">
                    {item.label}
                  </label>
                  <input
                    onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                    type={item.type || 'text'}
                    name={item.name}
                    id={item.label}
                    className="h-12 w-full appearance-none rounded border border-black/80 dark:border-primary-dark/80 bg-white dark:bg-transparent px-4 py-3 text-sm text-text-1-light dark:text-text-1-dark placeholder:text-text-1-light/50 dark:placeholder:text-text-1-dark/50 transition-colors duration-300 shadow-sm dark:shadow-none"
                    required={item.required}
                  />
                </div>
              ))}

              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-text-1-light dark:text-text-1-dark transition-colors duration-300" htmlFor="message">
                  Tell us about your project
                </label>
                <textarea
                  minLength={20}
                  maxLength={500}
                  onChange={({ target: { name, value } }) => setForm((prev) => ({ ...prev, [name]: value }))}
                  id="message"
                  name="message"
                  className="min-h-32 w-full resize-none border rounded text-sm border-black/80 dark:border-primary-dark/80 bg-white dark:bg-transparent px-4 py-3 text-text-1-light dark:text-text-1-dark placeholder:text-text-1-light/50 dark:placeholder:text-text-1-dark/50 transition-colors duration-300 shadow-sm dark:shadow-none"
                />
              </div>
            </div>

            <Button
              title={isSubmitting ? "Submitting..." : "Submit"}
              type="submit"
              disabled={isSubmitting}
              classes={`py-4 px-8 text-sm bg-bg-1-light/90 dark:bg-bg-1-dark/90 hover:bg-bg-1-light/80 dark:hover:bg-bg-1-dark/80 transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              btnClasses="p-1 capitalize"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Index;
