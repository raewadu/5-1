import React from 'react'
import UserCard from '../UserCard/UserCard.jsx';
import './style.css'

const ViewUsers = () => {
  const users = [
    {
      name: "Adel",
      age: 18,
      city: "Bishkek",
      job: "Student",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Aibek",
      age: 20,
      city: "Osh",
      job: "Developer",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Nursultan",
      age: 22,
      city: "Tokmok",
      job: "Designer",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Aigerim",
      age: 19,
      city: "Karakol",
      job: "Teacher",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Bekzat",
      age: 21,
      city: "Talas",
      job: "Engineer",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Alina",
      age: 23,
      city: "Bishkek",
      job: "Doctor",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Timur",
      age: 24,
      city: "Osh",
      job: "Manager",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Dana",
      age: 20,
      city: "Naryn",
      job: "Student",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Ruslan",
      age: 26,
      city: "Bishkek",
      job: "Driver",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },
    {
      name: "Elina",
      age: 22,
      city: "Osh",
      job: "Photographer",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg",
      premium: true
    },

    {
      name: "Azamat",
      age: 25,
      city: "Tokmok",
      job: "Chef",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Madina",
      age: 21,
      city: "Karakol",
      job: "Nurse",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Ermek",
      age: 27,
      city: "Talas",
      job: "Farmer",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Sabina",
      age: 19,
      city: "Bishkek",
      job: "Student",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Kuba",
      age: 28,
      city: "Osh",
      job: "Builder",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Aizada",
      age: 23,
      city: "Naryn",
      job: "Artist",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Bakyt",
      age: 30,
      city: "Bishkek",
      job: "Police",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Gulnaz",
      age: 24,
      city: "Osh",
      job: "Makeup Artist",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Tilek",
      age: 29,
      city: "Tokmok",
      job: "Programmer",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    },
    {
      name: "Nazgul",
      age: 22,
      city: "Karakol",
      job: "Teacher",
      avatar: "https://images.meme-arsenal.com/b8690790badfaec32a70e0234a7de333.jpg"
    }
  ];

  return (
    <div className="container">
      {users.map(user => (
        <UserCard key={user.name} user={user} />
      ))}
    </div>
  );
}

export default ViewUsers
