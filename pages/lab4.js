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
        image: "https://www.dogster.com/wp-content/uploads/2024/03/jagdterrier-dog-up-close_Snowboy_Shutterstock.jpg",
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
        image: "https://i.ebayimg.com/images/g/X1QAAOSwsyNeg~nJ/s-l400.jpg",
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
        image: "https://i.pinimg.com/736x/ab/6f/02/ab6f025fd947c7895cf9718a681bcf56.jpg",
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
        image: "https://www.gethucinema.com/wp-content/uploads/2024/05/JessicaBelkin21-jUk9e25755-254x300.jpg",
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
        job: "Imaginary ego",
        active: false,
        height: 180,
        image: "https://i.scdn.co/image/ab67616d00001e0203f29060e8ea0d21a476dc76",
        items: [
            {
                id: 7,
                name: "cigarette",
            },
            {
                id: 7,
                name: "red leather jacket",
            }
        ]
    },
 
    { //8
        id: 8,
        firstName: "Azzaya",
        lastname: "Trnshan",
        job: "arhichin",
        active: true,
        height: 150,
        image: "https://cdn.vectorstock.com/i/500p/40/18/homeless-vector-824018.jpg",
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
        image: "https://wallpapers.com/images/featured/matt-sturniolo-cejl2ehs2591gcqh.jpg",
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
        height: 175,
        image: "https://koshka.top/uploads/posts/2021-11/thumbs/1638240041_71-koshka-top-p-mokraya-koshka-v-vannoi-84.jpg",
        items: [
            {
                id: 10,
                name: "Vans",
            },
            {
                id: 10,
                name: "halzan muur",
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
      image: "https://koshka.top/uploads/posts/2021-12/thumbs/1639487491_46-koshka-top-p-mokraya-koshka-47.jpg",
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
    height: 165,
    image: "https://f12.pmo.ee/8jNTOWB6NJV2BgTk_WdeMVpyflQ=/685x0/filters:format(webp)/nginx/o/2018/07/15/9094507t1h25fa.jpg",
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
  height: 165,
  image: "https://imgix.ranker.com/user_node_img/50051/1001019802/original/1-photo-u1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=355",
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
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/ClaraBow2.1.jpg/1200px-ClaraBow2.1.jpg",
  items: [
      {
          id: 14,
          name: "bettyboop",
      },
      {
          id: 14,
          name: "haircurler",
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
  image: "https://i.scdn.co/image/ab6761610000e5ebe03a98785f3658f0b6461ec4",
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
  firstName: "Tsolmon",
  lastname: "",
  job: "student",
  active: true,
  height: 165,
  image: "https://preview.redd.it/vn48q55ev4i31.jpg?width=640&crop=smart&auto=webp&s=ef05b658be94de5d882e565709c2ffcf26b79ec5",
  items: [
      {
          id: 16,
          name: "vans",
      },
      {
          id: 16,
          name: "viola",
      }
  ]
},

{ //17
  id: 17,
  firstName: "Serjmyadg",
  lastname: "",
  job: "student",
  active: true,
  height: 165,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIbJB9MpQ2VF9pHPpD0AfCRFBPHRd71SRz72JCvwn1LMJpdM8Q5oNKUv_tnf4ammAzhc&usqp=CAU",
  items: [
      {
          id: 17,
          name: "glasses",
      },
      {
          id: 17,
          name: "",
      }
  ]
},

{ //18
  id: 18,
  firstName: "Telmuun",
  lastname: "",
  job: "student",
  active: true,
  height: 165,
  image: "https://thumb.photo-ac.com/e7/e798611ac2f3202c9734999e5cad884b_t.jpeg",
  items: [
      {
          id: 18,
          name: "glasses",
      },
      {
          id: 18,
          name: "notebook",
      }
  ]
},

{ //19
  id: 19,
  firstName: "20",
  lastname: "syl",
  job: "DJ",
  active: false,
  height: 180,
  image: "https://i.scdn.co/image/7f878e01ac715e2b0d636b5372598a9b648e9aa9",
  items: [
      {
          id: 19,
          name: "studio",
      },
      {
          id: 19,
          name: "headphones",
      }
  ]
},

{ //20
  id: 20,
  firstName: "Chris",
  lastname: "Sturniolo",
  job: "influencer",
  active: false,
  height: 180,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AZ7Q_q9-HXALkqTwvGgvkI2OD3LRiGyIzg&s",
  items: [
      {
          id: 20,
          name: "bracelet",
      },
      {
          id: 20,
          name: "car",
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
    <div className="min-h-screen bg-white p-8">
      <div className="fixed top-0 left-0 w-full bg-white flex justify-between items-center p-4 shadow-lg z-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search items..."
          className="border p-3 rounded-lg w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      <button
          className="bg-indigo-500 text-white p-3 rounded-lg shadow-md hover:bg-indigo-200 transition"
          onClick={() => setIsCardView((prevState) => !prevState)}
        >
          {isCardView ? "Row View" : "Card View"}
        </button>
      </div>

      <div className="pt-20">
        {isCardView ? (
          <div className="flex flex-col gap-8">
            {filteredItems.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-lg border-r-black rounded-lg p-6 flex items-center w-full space-x-6 hover:shadow-xl transition"
              >
                <img
                  src={person.image}
                  alt={`${person.firstName} ${person.lastname}`}
                  className="w-16 h-16 rounded-full border-4 border-gray-300"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {person.firstName} {person.lastname}
                  </h2>
                  <p className="text-gray-600 text-sm">{person.job}</p>
                  <p className="text-gray-500 text-xs mt-1">Height: {person.height}</p>
                  <p className={`text-xs mt-1 ${person.active ? 'text-green-500' : 'text-red-500'}`}>
                    {person.active ? "Active" : "Inactive"}
                  </p>
                  {person.items && person.items.length > 0 && (
                    <div className="text-gray-500 text-xs mt-2">
                      <h3 className="font-medium text-sm">Items:</h3>
                      {person.items.map((item, itemIndex) => (
                        <span key={itemIndex} className="block">
                          ID: {item.id}, Name: {item.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
            {filteredItems.map((person, index) => (
              <div
                key={index}
                className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center transition hover:shadow-2xl"
              >
                <img
                  src={person.image}
                  alt={`${person.firstName} ${person.lastname}`}
                                                   y
                  className="w-24 h-24 rounded-full border-4 border-gray-200 mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-900">
                  {person.firstName} {person.lastname}
                </h2>
                <p className="text-gray-600 text-sm">{person.job}</p>
                <p className="text-gray-500 text-xs">Height: {person.height}</p>
                <p className={`text-xs mt-2 ${person.active ? 'text-green-500' : 'text-red-500'}`}>
                  {person.active ? "Active" : "Inactive"}
                </p>
                {person.items && person.items.length > 0 && (
                  <div className="text-gray-500 text-xs mt-2 w-full">
                    <h3 className="font-medium text-sm">Items:</h3>
                    {person.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        ID: {item.id}, Name: {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
