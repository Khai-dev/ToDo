function App() {

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-600
     to-emerald-900">

      <div className="bg-white shadow-lg rounded-3xl">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-6"> TO DO LIST</h3>

        <div className="mb-4 flex">
          <input type="text" placeholder="Add a New To Do" className="flex-grow px-3 py-2 
          border-rounded-1-lg focus:outline-none focus:ring-2 focus:ring-violet-500"/>
          <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg">Add</button>
        </div> 



      </div>

     
  

      



   
    </div>
    
  )
}

export default App;
