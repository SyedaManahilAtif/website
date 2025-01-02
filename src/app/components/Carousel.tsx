import React from 'react'

export default function Carousel(){
    return(
        <div>
            <section className='bg-gradient-to-r from-black to-grey-700'>
                <div className='py-4 px-2 mx-auto max-w-screen-xl sm:y-4 lg:px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
                          <a href=''
                          className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>

                            <img src="https://thumbs.dreamstime.com/b/street-style-burger-small-patty-veggies-ai-generated-street-style-burger-small-patty-veggies-332535698.jpg" 
                            alt="burger 1"
                            className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                            
                            <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'>

                            </div>
                            <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Classic Bites</h3>
                            </a>
                        </div>

                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col' >
                            <a href=""
                            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg"
                                alt="burger 2"
                                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'   />
                                  <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'>

</div>
<h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Gourmet Chesse Grill</h3>
                            </a>


                            <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
                            <a href=""
                            className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40'>
                                <img src="https://img.freepik.com/premium-photo/tandoori-chicken-sandwich-burger-with-traditional-spices_641503-89129.jpg"
                                alt="burger 3"
                                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Spicy Masala</h3>
                                 </a> 

                                <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                <img src="https://images.unsplash.com/photo-1661529515593-bba89f12e8de?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZlZ2dpZSUyMGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="burger 4"
                                className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out'/>
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Veggie</h3>     
                                </a>

                            

                        </div>

                        </div>




                        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
                            <a href=""
                            className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://static.vecteezy.com/system/resources/previews/039/626/804/non_2x/ai-generated-grilled-beef-burger-with-cheese-tomato-and-fresh-vegetables-generated-by-ai-photo.jpg"
                                alt="burger 5"
                                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5'></div>
                                <h3 className='z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Chessy Delights</h3>     


                            </a>

                        </div>



                       
                    </div>

                </div>

            </section>
        </div>
    );
}