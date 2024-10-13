export default function SadhanaTable({data}) {    
    return (    
      <table className="table-auto w-full rounded-lg shadow-md overflow-hidden text-sm font-sans">    
        <thead className="bg-gray-300">    
          <tr>    
            <th className="border px-4 py-2 text-center">14-20 Oct, 2024</th>    
            <th className="border px-4 py-2 text-center">Monday</th>    
            <th className="border px-4 py-2 text-center">Tuesday</th>    
            <th className="border px-4 py-2 text-center">Wednesday</th>    
            <th className="border px-4 py-2 text-center">Thursday</th>    
            <th className="border px-4 py-2 text-center">Friday</th>    
            <th className="border px-4 py-2 text-center">Saturday</th>    
            <th className="border px-4 py-2 text-center">Sunday</th>    
          </tr>    
        </thead>    
        <tbody>    
          {data.map((Report, index) => (    
            <tr key={index} className={`border-b border-gray-300 ${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-100`}>    
              <td className="border px-4 py-2 text-center">{Report.name}</td>    
              {Report.values.map((day, i) => (    
                <td key={i} className="border px-4 py-2 text-center">{day}</td>    
              ))}    
            </tr>    
          ))}    
        </tbody>    
      </table>    
    )    
}    


  