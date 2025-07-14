import React from 'react'

const Landingpages = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 dark:via-gray-900 dark:to-gray-700 min-h-screen'>
        {/* Navbar */}
        <header className='flex justify-between items-center p-5'>
            <h1 className='font-bold text-xl text-white '>TodoMaster</h1>
            <nav className='flex gap-2 text-white'>
                <a href='#features'>Features</a>
                <a href='#about'>About</a>
                <a href='#Contact'>Contact</a>
            </nav>
        </header>
        {/*Hero Section */}
        <section className='text-center py-20 '>
            <h1 className='font-extrabold text-3xl text-white'>Simplify your <span className='text-yellow-400'>tasks</span></h1>
            <p className='text-sm text-white px-25 tracking-tighter dark:text-gray-400 mt-1'>Organize your life with our powerful and easy-to-use Todo App</p>
            <div className='mt-5'>
                <a href='/login'className='bg-yellow-400 px-2 py-1 rounded-lg text-gray-900 font-semibold hover:bg-yellow-700'>Get started</a>
                < a href='/about' className='border border-white text-white ml-3 px-2 py-1 rounded-lg hover:bg-yellow-600'>Learn More</a>
            </div>
        </section>

        {/* Features section */}
        <section className='py-18 bg-white  dark:bg-gray-800 text-gray-900 dark:text-gray-100'>
            <div className='max-w-5xl mx-auto text-center'>
                <h2 className='text-4xl font-bold '>Why Choose TodoMaster?</h2>
                <p className='text-lg text-gray-600 mt-3'>Packed with features to make task management effort </p>
            </div>
            <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto  '> 
            <FeatureCard
            title="Intuitive Design"
            description="Easily add, edit, and delete tasks with a clean interface."
            color="purple-600"
          />
          <FeatureCard
            title="Smart Notifications"
            description="Never miss a deadline with timely reminders."
            color="blue-600"
          />
          <FeatureCard
            title="Cross-Platform"
            description="Access your tasks on any device, anywhere, anytime."
            color="pink-600"
          />
            </div>
        </section>
            
      {/*About section*/}
      <section className='py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-center dark:from-gray-800 dark:to-gray-700'>
          <div >
            <h1 className='text-white font-extrabold text-3xl'>About TodoMaster</h1>
            <p className='text-sm text-grey-600 mt-4 px-70 dark:text-gray-400'>Todo master is designed to make your daily task management as easy 
                and efficient as possible.Our mission is to help you stay productive and organized
                </p>
          </div>
      </section>
        {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold">Stay in Touch</h3>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have questions? We'd love to hear from you!
          </p>
          <form className="mt-8 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

        
    </div>
  )
}

const FeatureCard = ({ title, description, color }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg hover:shadow-xl">
      <h4 className={`text-xl font-bold text-${color} dark:text-${color}`}>
        {title}
      </h4>
      <p className="mt-2 text-gray-700 dark:text-gray-200">{description}</p>
    </div>
  );
};


export default Landingpages;