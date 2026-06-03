import React, { useState } from 'react'
const students = [
  {
    id: 1,
    name: "Akhil Kumar",
    age: 22,
    city: "Vijayawada",
    gender: "Male",
    contact: "9876543210",
    email: "akhil.kumar@gmail.com",
    fatherName: "Ramesh Kumar",
    branch: "CSE",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    age: 21,
    city: "Hyderabad",
    gender: "Female",
    contact: "9123456780",
    email: "sneha.reddy@gmail.com",
    fatherName: "Prasad Reddy",
    branch: "ECE",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    age: 23,
    city: "Bangalore",
    gender: "Male",
    contact: "9988776655",
    email: "rahul.sharma@gmail.com",
    fatherName: "Suresh Sharma",
    branch: "IT",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Divya Patel",
    age: 22,
    city: "Ahmedabad",
    gender: "Female",
    contact: "9012345678",
    email: "divya.patel@gmail.com",
    fatherName: "Mahesh Patel",
    branch: "CSE",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Kiran Kumar",
    age: 24,
    city: "Chennai",
    gender: "Male",
    contact: "9090909090",
    email: "kiran.kumar@gmail.com",
    fatherName: "Ravi Kumar",
    branch: "EEE",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Meena Iyer",
    age: 21,
    city: "Chennai",
    gender: "Female",
    contact: "9871234560",
    email: "meena.iyer@gmail.com",
    fatherName: "Srinivas Iyer",
    branch: "CSE",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    id: 7,
    name: "Arjun Verma",
    age: 23,
    city: "Delhi",
    gender: "Male",
    contact: "8887776665",
    email: "arjun.verma@gmail.com",
    fatherName: "Rajesh Verma",
    branch: "Mechanical",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: 8,
    name: "Pooja Singh",
    age: 22,
    city: "Lucknow",
    gender: "Female",
    contact: "9011223344",
    email: "pooja.singh@gmail.com",
    fatherName: "Anil Singh",
    branch: "Civil",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    id: 9,
    name: "Rohit Gupta",
    age: 24,
    city: "Mumbai",
    gender: "Male",
    contact: "9898989898",
    email: "rohit.gupta@gmail.com",
    fatherName: "Vinod Gupta",
    branch: "IT",
    image: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    id: 10,
    name: "Anjali Das",
    age: 21,
    city: "Kolkata",
    gender: "Female",
    contact: "9001122334",
    email: "anjali.das@gmail.com",
    fatherName: "Subhash Das",
    branch: "CSE",
    image: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    id: 11,
    name: "Vikram Rao",
    age: 23,
    city: "Hyderabad",
    gender: "Male",
    contact: "9123987654",
    email: "vikram.rao@gmail.com",
    fatherName: "Krishna Rao",
    branch: "ECE",
    image: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    id: 12,
    name: "Neha Kapoor",
    age: 22,
    city: "Delhi",
    gender: "Female",
    contact: "9345678901",
    email: "neha.kapoor@gmail.com",
    fatherName: "Raj Kapoor",
    branch: "MBA",
    image: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    id: 13,
    name: "Sandeep Yadav",
    age: 24,
    city: "Noida",
    gender: "Male",
    contact: "9876501234",
    email: "sandeep.yadav@gmail.com",
    fatherName: "Mahavir Yadav",
    branch: "Civil",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    id: 14,
    name: "Kavya Nair",
    age: 21,
    city: "Kochi",
    gender: "Female",
    contact: "9988123456",
    email: "kavya.nair@gmail.com",
    fatherName: "Raghavan Nair",
    branch: "CSE",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    id: 15,
    name: "Manoj Tiwari",
    age: 23,
    city: "Patna",
    gender: "Male",
    contact: "9000090000",
    email: "manoj.tiwari@gmail.com",
    fatherName: "Harish Tiwari",
    branch: "Mechanical",
    image: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: 16,
    name: "Ritika Jain",
    age: 22,
    city: "Jaipur",
    gender: "Female",
    contact: "9111222233",
    email: "ritika.jain@gmail.com",
    fatherName: "Amit Jain",
    branch: "Commerce",
    image: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    id: 17,
    name: "Harish Kumar",
    age: 24,
    city: "Chandigarh",
    gender: "Male",
    contact: "9887766554",
    email: "harish.kumar@gmail.com",
    fatherName: "Dinesh Kumar",
    branch: "EEE",
    image: "https://randomuser.me/api/portraits/men/17.jpg"
  },
  {
    id: 18,
    name: "Priya Sharma",
    age: 21,
    city: "Bhopal",
    gender: "Female",
    contact: "9776655443",
    email: "priya.sharma@gmail.com",
    fatherName: "Rakesh Sharma",
    branch: "Pharmacy",
    image: "https://randomuser.me/api/portraits/women/18.jpg"
  },
  {
    id: 19,
    name: "Aditya Singh",
    age: 23,
    city: "Kanpur",
    gender: "Male",
    contact: "9665544332",
    email: "aditya.singh@gmail.com",
    fatherName: "Suraj Singh",
    branch: "IT",
    image: "https://randomuser.me/api/portraits/men/19.jpg"
  },
  {
    id: 20,
    name: "Shreya Ghosh",
    age: 22,
    city: "Kolkata",
    gender: "Female",
    contact: "9554433221",
    email: "shreya.ghosh@gmail.com",
    fatherName: "Bikash Ghosh",
    branch: "Arts",
    image: "https://randomuser.me/api/portraits/women/20.jpg"
  }
];
export default function Filter() {
  const [user, setUser] = useState("")
  const [selected, setSelected] = useState('')
  const filteredItems = students.filter((i) => {
    return i.name.includes(user) &&
      (selected === "" || i.branch === selected)
  });

  return (
    <div className='p-2'>
      <div className='flex gap-3'>
        <input className='border border-black p-1 rounded-sm'
        type="text"
        placeholder='search'
        onChange={(e) => setUser(e.target.value)}
      />
      <select value={selected} className='border border-black p-1 rounded-sm'
        onChange={(e) => setSelected(e.target.value)}>
        <option value="">Select</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="IT">IT</option>
        <option value="EEE">EEE</option>
        <option value="Mechanical">Mechanical</option>
        <option value="Civil">Civil</option>
      </select>
      </div>
      <div className="min-h-[400px] max-h-[400px] overflow-auto mt-4">
        <table className="border border-gray-400 w-full text-center">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-1">Image</th>
              <th className="border p-1">Name</th>
              <th className="border p-1">Age</th>
              <th className="border p-1">City</th>
              <th className="border p-1">Gender</th>
              <th className="border p-1">Contact</th>
              <th className="border p-1">Email</th>
              <th className="border p-1">Father Name</th>
              <th className="border p-1">Branch</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td className="border p-1">
                  <img src={item.image} alt={item.name} className="w-12 h-12 mx-auto"/>
                </td>
                <td className="border p-1">{item.name}</td>
                <td className="border p-1">{item.age}</td>
                <td className="border p-1">{item.city}</td>
                <td className="border p-1">{item.gender}</td>
                <td className="border p-1">{item.contact}</td>
                <td className="border p-1">{item.email}</td>
                <td className="border p-1">{item.fatherName}</td>
                <td className="border p-1">{item.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  )
}
