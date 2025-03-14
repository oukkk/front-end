import Image from "next/image";
import React, { useState } from 'react';
import { useRouter } from 'next/router';
 
 
const datas = [
    { //1
        id: 1,
        firstName: "Oyuka",
        lastname: "Ch",
        job: "student",
        active: true,
        height: 170,
        image: "https://i.pinimg.com/736x/9c/a5/8f/9ca58fbafe49ef94e83caff4eb1ffeaa.jpg",
        items: [
            {
                id: 1,
                name: "glasses",
            },
            {
                id: 1,
                name: "vivi",
            }
        ]
 
    },
 
    { //2
        id: 2,
        firstName: "Betty",
        lastname: "Boop",
        job: "character",
        active: false,
        height: 150,
        image: "https://i.pinimg.com/736x/41/dc/c4/41dcc423f89d545d2d962a7ca745b277.jpg",
        items: [
            {
                id: 2,
                name: "lipstick",
            },
            {
                id: 2,
                name: "hair curler",
            }
        ]
    },
 
    { //3
        id: 3,
        firstName: "Egor",
        lastname: "Krid",
        job: "singer",
        active: false,
        height: 100,
        image: "https://i.pinimg.com/736x/35/f2/af/35f2af11d4304327b09ced2badb55629.jpg",
        items: [
            {
                id: 3,
                name: "mouse",
            },
            {
                id: 3,
                name: "computer",
            }
        ]
    },
 
    { //4
        id: 4,
        firstName: "Jessica",
        lastname: "Belkin",
        job: "Actor",
        active: true,
        height: 174,
        image: "https://i.pinimg.com/736x/90/77/6f/90776f90bf206a314a2269dc639a8edc.jpg",
        items: [
            {
                id: 4,
                name: "rings",
            },
            {
                id: 4,
                name: "piercing",
            }
        ]
    },
 
    { //5
        id: 5,
        firstName: "Angel",
        lastname: "Reese",
        job: "Basketball player",
        active: true,
        height: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFl-A0q6sfKg0DD3GxGuAwC7MIZ4cnBWQHQ&s",
        items: [
            {
                id: 5,
                name: "ball",
            },
            {
                id: 5,
                name: "backpack",
            }
        ]
    },
 
    { //6
        id: 6,
        firstName: "Zaha",
        lastname: "Hadid",
        job: "Architect",
        active: true,
        height: 156,
        image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Zaha_Hadid_in_Heydar_Aliyev_Cultural_center_in_Baku_nov_2013.jpg",
        items: [
            {
                id: 6,
                name: "pen",
            },
            {
                id: 6,
                name: "Ipad",
            }
        ]
    },
 
    { //7
        id: 7,
        firstName: "Tyler",
        lastname: "Durden",
        job: "Boxer",
        active: false,
        height: 180,
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-45641-00103112_lg.jpg?w=400",
        items: [
            {
                id: 7,
                name: "cigarette",
            },
            {
                id: 7,
                name: "boxing gloves",
            }
        ]
    },
 
    { //8
        id: 8,
        firstName: "Azzaya",
        lastname: "Amarbold",
        job: "arhichin",
        active: true,
        height: 150,
        image: "",
        items: [
            {
                id: 8,
                name: "arhi",
            },
            {
                id: 8,
                name: "nom",
            }
        ]
    },
 
    { //9
        id: 9,
        firstName: "Matt",
        lastname: "Sturniolo",
        job: "Influencer",
        active: true,
        height: 172,
        image: "https://i.pinimg.com/736x/64/86/23/6486239c973613821b455d8ccd9c4335.jpg",
        items: [
            {
                id: 9,
                name: "tattoo",
            },
            {
                id: 9,
                name: "camera",
            }
        ]
    },
 
    { //10
        id: 10,
        firstName: "Khulan",
        lastname: "",
        job: "bujigchin",
        active: true,
        height: 172,
        image: "",
        items: [
            {
                id: 10,
                name: "Vans",
            },
            {
                id: 10,
                name: " halzan muur",
            }
        ]
    },

    { //11
      id: 11,
      firstName: "YESU",
      lastname: "",
      job: "jujigchin",
      active: true,
      height: 175,
      image: "",
      items: [
          {
              id: 11,
              name: "muur",
          },
          {
              id: 11,
              name: "braces",
          }
      ]
  },

  { //12
    id: 12,
    firstName: "Gunsan",
    lastname: "",
    job: "student",
    active: true,
    height: 164,
    image: "",
    items: [
        {
            id: 12,
            name: "glasses",
        },
        {
            id: 12,
            name: "bomber",
        }
    ]
},

{ //13
  id: 13,
  firstName: "Minori",
  lastname: "",
  job: "student",
  active: true,
  height: 163,
  image: "",
  items: [
      {
          id: 13,
          name: "samsung",
      },
      {
          id: 13,
          name: "monopoly",
      }
  ]
},

{ //14
  id: 14,
  firstName: "Clara",
  lastname: "Bow",
  job: "actor",
  active: false,
  height: 171,
  image: "",
  items: [
      {
          id: 14,
          name: "",
      },
      {
          id: 14,
          name: "",
      }
  ]
},

{ //15
  id: 15,
  firstName: "Olivia",
  lastname: "Rodrigo",
  job: "singer",
  active: true,
  height: 175,
  image: "",
  items: [
      {
          id: 15,
          name: "microphone",
      },
      {
          id: 15,
          name: "guitar",
      }
  ]
},

{ //16
  id: 16,
  firstName: "YESU",
  lastname: "",
  job: "jujigchin",
  active: true,
  height: 175,
  image: "",
  items: [
      {
          id: 16,
          name: "",
      },
      {
          id: 16,
          name: "",
      }
  ]
},

{ //17
  id: 17,
  firstName: "YESU",
  lastname: "",
  job: "jujigchin",
  active: true,
  height: 175,
  image: "",
  items: [
      {
          id: 17,
          name: "",
      },
      {
          id: 17,
          name: "",
      }
  ]
},

{ //18
  id: 18,
  firstName: "YESU",
  lastname: "",
  job: "jujigchin",
  active: true,
  height: 175,
  image: "",
  items: [
      {
          id: 18,
          name: "",
      },
      {
          id: 18,
          name: "",
      }
  ]
},

{ //19
  id: 19,
  firstName: "YESU",
  lastname: "",
  job: "jujigchin",
  active: true,
  height: 175,
  image: "",
  items: [
      {
          id: 19,
          name: "",
      },
      {
          id: 19,
          name: "",
      }
  ]
},

{ //20
  id: 20,
  firstName: "YESU",
  lastname: "",
  job: "jujigchin",
  active: true,
  height: 175,
  image: "",
  items: [
      {
          id: 20,
          name: "",
      },
      {
          id: 20,
          name: "",
      }
  ]
},
]
 
 
 
 
 
 
 
export default function InfoCards() {
  const [isCardView, setIsCardView] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); 
 
  const filteredItems = datas.filter((item) => {
    return item?.firstName?.toLowerCase().includes(searchQuery?.toLowerCase() || '');
  });
 
  console.log(filteredItems);
 
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="fixed top-0 left-0 w-full bg-gray-100 flex justify-between p-4 shadow-md z-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search items..."
          className="border p-2 rounded w-full mb-4"
        />
 
        <button
          className="p-3 mb-5 shadow-lg shadow-indigo-500/40 text-purple-800"
          onClick={() => setIsCardView((prevState) => !prevState)}
        >
          {isCardView ? "Row View" : "Card View"}
        </button>
      </div>
 
      {isCardView ? (
        <div className="flex flex-col gap-6">
          {filteredItems.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-3 flex items-center w-full h-[60px] space-x-4"
            >
              <img
                src={person.image}
                alt={`${person.firstName} ${person.lastname}`}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
 
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-800">
                  {person.firstName} {person.lastname}
                </h2>
                <p className="text-gray-600 text-xs">{person.job}</p>
              </div>
 
              <div className="text-gray-400 text-xs">Height: {person.height}</div>
 
              <div className="text-green-500 text-xs">
                {person.alive ? "Alive" : "Dead"}
              </div>
 
              {person.items && person.items.length > 0 && (
                <div className="text-gray-500 text-xs">
                  {person.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="ml-2">
                      ID: {item.id}, Name: {item.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid xl:grid-cols-4 gap-6 w-full">
          {filteredItems.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center"
            >
              <img
                src={person.image}
                alt={`${person.firstName} ${person.lastname}`}
                className="w-24 h-24 rounded-full border-2 border-gray-300 mb-3"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                {person.firstName} {person.lastname}
              </h2>
              <p className="text-gray-600">{person.job}</p>
              <p className="text-gray-400 text-sm">Height: {person.height}</p>
              <p className="text-green-500 text-sm">
                {person.active ? "Active" : "Unactive"}
              </p>
 
              {person.items && person.items.length > 0 && (
                <div className="text-gray-500 text-sm mt-2">
                  <h3 className="font-semibold">Items:</h3>
                  <div>
                    {person.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        ID: {item.id}, Name: {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}