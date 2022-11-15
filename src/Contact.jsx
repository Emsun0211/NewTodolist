function MyApp() {
	return (
		// <div className='bg-gradient-to-b  h-96 w-full'>
		<div className='w-full flex items-center justify-center my-12'>
			<div className='absolute top-40 bg-white  rounded py-12 lg:px-28 px-8'>
				<p className='md:text-3xl text-xl font-bold leading-7 text-left text-gray-700'>
					Contact Me
				</p>
				<p className='text-s leading-3 text-gray-600 mt-4'>
					Contact Me Hi there, contact me to ask me about anything you have in
					mind.
				</p>
				<div className='md:flex items-center mt-12'>
					<div className='md:w-72 flex flex-col'>
						<label className='text-base font-semibold leading-none text-gray-800'>
							First name
						</label>
						<input
							tabIndex={0}
							arial-label='Please input name'
							type='name'
							className='placeholder:text-slate-400 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
							placeholder='Please input your first name'
						/>
					</div>
					<div className='md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4'>
						<label className='text-base font-semibold leading-none text-gray-800'>
							Last name
						</label>
						<input
							tabIndex={0}
							arial-label='Please input email address'
							type='name'
							className='placeholder:text-slate-400 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100'
							placeholder='Please input your last name'
						/>
					</div>
				</div>
				<div className='md:flex items-center mt-8'>
					<div className='md:w-full flex flex-col'>
						<label className='text-base font-semibold leading-none text-gray-800'>
							Email
						</label>
						<input
							placeholder='Please input your email'
							tabIndex={0}
							role='input'
							arial-label='Please input your email'
							type='name'
							className='placeholder:text-slate-400 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 '
						/>
					</div>
				</div>
				<div>
					<div className='w-full flex flex-col mt-8'>
						<label className='text-base font-semibold leading-none text-gray-800'>
							Message
						</label>
						<textarea
							tabIndex={0}
							aria-label='leave a message'
							role='textbox'
							type='name'
							className='placeholder:text-slate-400 h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none'
							placeholder='Send your message and I will reply soon'
						/>
					</div>
				</div>
				<div className='flex justify-center items-center p-2'>
					<div className='rounded-full mx-2 mt-3'>
						<input type='checkbox' />
					</div>
					<p className='text-xs leading-3 text-gray-600 mt-4'>
						By clicking submit you agree to our terms of service, privacy policy
						and how we use data as stated
					</p>
				</div>
				<div className='flex items-center justify-center w-full'>
					<button className='w-full  mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-blue-500 rounded hover:bg-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none'>
						Send message
					</button>
				</div>
			</div>
		</div>
		// </div>
	);
}

export default MyApp;
