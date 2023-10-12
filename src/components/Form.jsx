import { useForm, Controller } from 'react-hook-form';


const MyForm = () => {
  const { control, handleSubmit, formState, reset } = useForm();
  const onSubmit = (data) => {
    // You can handle form submission here
    // console.log(data);
    alert(`Hi ${data.name}, thanks for getting in touch. We will get back to you within 24 hours.`)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=''>
      <div className="relative border-b hover:border-b-2">
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: `Name is required!` }}
          render={({ field }) => (
            <input
              type="text"
              {...field}
              className="w-full p-2  bg-peach bg-opacity-0 text-sm placeholder-white/70  placeholder- border-none outline-none "
              placeholder="Name"
            />
          )} 
        />
        {formState.errors.name && (
          <span className="text-xs sm:text-sm absolute inset-y-0 right-0 top-3 pr-2 italic">
            {formState.errors.name.message}
          </span>
        )}
      </div>

      <div className="relative border-b hover:border-b-2">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: 'Email is required!',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email format',
            },
          }}
          render={({ field }) => (
            <input
              type="email"
              {...field}
              className="w-full p-2 bg-peach text-sm placeholder-white/70 border-none outline-none"
              placeholder="Email"
            />
          )}
        />
        {formState.errors.email && (
          <span className="text-xs sm:text-sm absolute inset-y-0 right-0 top-3 pr-2 italic">
            {formState.errors.email.message}
          </span>
        )}
      </div>

      <div className="relative border-b hover:border-b-2">
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: 'Phone is required!' }}
          render={({ field }) => (
            <input
              type="tel"
              {...field}
              className="w-full p-2 bg-peach text-sm placeholder-white/70 border-none outline-none"
              placeholder="Phone"
            />
          )}
        />
        {formState.errors.phone && (
          <span className="text-xs sm:text-sm absolute inset-y-0 right-0 top-3 pr-2 italic">
            {formState.errors.phone.message}
          </span>
        )}
      </div>

      <div className="relative border-b hover:border-b-2">
        <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{ required: 'Message is required!' }}
          render={({ field }) => (
            <textarea
              {...field}
              className="w-full p-2 bg-peach text-sm placeholder-white/70 border-none outline-none"
              placeholder="Your Message"
            />
          )}
        />
        {formState.errors.message && (
          <span className="text-xs sm:text-sm absolute inset-y-0 right-0 top-3 pr-2 italic">
            {formState.errors.message.message}
          </span>
        )}
      </div>
        <div className='text-center lg:text-right'>
            <button 
                type="submit"
                className='bg-white text-black text-sm mt-8 mb-10 py-2 px-8 rounded-lg hover:bg-lightPeach hover:text-white'
                >
                    SUBMIT
                </button>
        </div>
    </form>
  );
};

export default MyForm;
