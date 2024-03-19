const Menu = [
  {
    id: 1,
    image: "images/maggi_new.jpg",
    name: "maggi",
    category: ["breakfast","evening"],
    price: "40₹",
    description:
      " A beloved instant noodle brand, Maggi offers quick and convenient meals with its signature thin noodles, flavorful seasoning, and optional additions like vegetables providing a comforting and satisfying dish enjoyed by people of all ages.",
  },

  {
    id: 2,
    image: "images/kelavada2.jpg",
    name: "Kela vada",
    category: ["evening"],
    price: "90₹",
    description:
      "A popular Indian snack, Kela Vada features ripe bananas mashed with spices, coated in a gram flour batter, and deep-fried until golden and crispy, offering a unique blend of sweet and savory flavors in every bite.",
  },
  {
    id: 3,
    image: "images/best-corn.jpg",
    name: "Corn",
    category: ["breakfast","evening"],
    price: "35₹",
    description:
      "A delightful street food favorite, Roasted Corn is whole corn cobs grilled or roasted over an open flame until charred and caramelized, then seasoned with salt, chili powder, and lime juice, providing a smoky and flavorful snack enjoyed especially during monsoon seasons.",
  },
  {
    id: 4,
    image: "../images/chole-puri2.jpg",
    name: "Chole Puri",
    category: ["lunch","dinner"],
    price: "150₹",
    description:
      "A classic North Indian dish, Chole Puri comprises spicy chickpea curry cooked with onions, tomatoes, and aromatic spices, served alongside fluffy deep-fried bread called puri, creating a hearty and satisfying meal enjoyed during festive occasions or as a weekend treat.",
  },
  {
    id: 5,
    image: "../images/Pizza_new.jpg",
    name: "Pizza",
    category: ["dinner","lunch"],
    price: "180₹",
    description:
      " A globally beloved dish, pizza is a savory Italian creation featuring a thin crust topped with tomato sauce, cheese, and a variety of toppings such as pepperoni, vegetables, or mushrooms, baked to perfection in a hot oven.",
  },
  {
    id: 6,
    image: "../images/fixpunjabithali.jpg",
    name: "Punjabi Thali",
    category: ["lunch","dinner"],
    price: "300₹",
    description:
      "The Punjabi fixed thali is a hearty and diverse meal featuring a selection of traditional Punjabi dishes served on a single platter. Typically, it includes staples like creamy Dal Makhani, spicy Chole, tangy Raita, fragrant Basmati rice, buttery naan bread, crispy papad, and a variety of pickles and chutneys.",
  },
  {
    id: 7,
    image: "../images/sweet.jpg",
    name: "Sweets",
    category: ["dinner","lunch"],
    price: "300₹",
    description:
      " An integral part of Indian cuisine, Indian sweets encompass a wide variety of delectable treats such as Gulab Jamun, Rasgulla, Barfi, and Jalebi, made from ingredients like milk, sugar, flour, and nuts, offering a burst of sweetness and indulgence in every bite."},
  {
    id: 8,
    image: "../images/Rajma_Chawal.jpg",
    name: "Rajma Chawal",
    category: ["lunch"],
    price: "180₹",
    description:
      "A quintessential North Indian comfort food, Rajma Chaval features kidney bean curry cooked in a thick tomato-based gravy with aromatic spices, served alongside steamed Basmati rice, offering a hearty and nutritious meal enjoyed across households in India.",
  },
  {
    id: 9,
    image: "../images/samosa.jpg",
    name: "samosa",
    category: ["evening"],
    price: "85₹",
    description:
      "A popular Indian snack, Samosa consists of crispy, flaky pastry filled with a savory mixture of spiced potatoes, peas, and sometimes meat or lentils, deep-fried until golden and served with tangy chutneys, providing a delicious and satisfying treat for any occasion.",
  },
  {
    id: 10,
    image: "images/Bhelpuri.jpg",
    name: "Bhelpuri",
    category: ["evening","dinner"],
    price: "80₹",
    description:
      "Bhel Puri is a popular Indian street food snack known for its explosive flavors and crunchy texture. Made from a mix of puffed rice, chopped vegetables, tangy tamarind chutney, and spicy mint chutney, it's a refreshing and savory delight enjoyed across the country.",
  },
  {
    id: 11,
    image: "images/sevpuri.jpg",
    name: "Sevpuri",
    category: ["evening","dinner"],
    price: "80₹",
    description:"A popular Indian chaat delicacy, Sev Puri is a crispy, tangy, and spicy snack made from small, round puris filled with mashed potatoes, chopped onions, tangy chutneys, and topped with crunchy sev (fried gram flour vermicelli), creating a burst of flavors in every mouthful."
  },
  {
    id: 12,
    image: "images/bhel.jpg",
    name: "Bhel",
    category: ["evening","dinner"],
    price: "80₹",
    description:"Bhel is a popular Indian street food snack made from a delightful mix of puffed rice, chopped vegetables like onions, tomatoes, and potatoes, along with tangy tamarind chutney, spicy mint chutney, and a sprinkle of chaat masala. Its crunchy texture and explosive blend of sweet, sour, and spicy flavors make it a beloved snack enjoyed across the country."
  },
  {
    id: 13,
    image: "images/sandwich.jpg",
    name: "Sandwich",
    category: ["evening","dinner","lunch","breakfast"],
    price: "160₹",
    description:"A versatile and satisfying meal option, a sandwich typically consists of layers of ingredients such as cheese, vegetables, and condiments sandwiched between two slices of bread, offering a convenient and customizable eating experience for any palate."
  },
  {
    id: 14,
    image: "images/macroni.jpg",
    name: "Macroni",
    category: ["dinner","lunch"],
    price: "200₹",
    description:"A comforting and hearty dish, macaroni features elbow-shaped pasta cooked to al dente perfection and tossed with a creamy cheese sauce made from ingredients like cheddar or parmesan cheese, milk, and butter, creating a rich and indulgent pasta experience."
  },
  {
    id: 15,
    image: "images/pasta.jpg",
    name: "Pasta",
    category: ["evening","dinner","lunch"],
    price: "170₹",
    description:"A beloved Italian staple, pasta consists of durum wheat dough shaped into various forms like spaghetti or penne, served with a myriad of sauces including marinara, alfredo, or pesto, creating a comforting and versatile meal for pasta lovers worldwide."
  },
  {
    id: 16,
    image: "images/pulav.jpg",
    name: "Pulav",
    category: ["dinner","lunch"],
    price: "₹100",
    description:"A fragrant and flavorful rice dish, pulav is cooked with aromatic spices, vegetables, and sometimes meat or seafood, resulting in a delightful one-pot meal enjoyed in many cultures, including Indian and Middle Eastern cuisines."
  },
  {
    id: 17,
    image: "images/dosa_final.jpg",
    name: "Dosa",
    category: ["evening","dinner","lunch","breakfast"],
    price: "170₹",
    description:"A South Indian culinary treasure, dosa is a thin, crispy crepe made from fermented rice and lentil batter, served with a variety of savory fillings such as spiced potatoes or chutneys, offering a delicious and satisfying meal or snack."
  },
  {
    id: 18,
    image: "images/uttapam.jpg",
    name: "Uttapam",
    category: ["evening","dinner","lunch","breakfast"],
    price: "160₹",
    description:" A savory South Indian pancake, uttapam is made from a fermented batter of rice and lentils, topped with chopped onions, tomatoes, cilantro, and sometimes other vegetables, creating a hearty and flavorful breakfast or snack option."
  },
  {
    id: 19,
    image: "images/manchurian.jpg",
    name: "Manchurian",
    category: ["dinner","lunch"],
    price: "190₹",
    description:"A popular Indo-Chinese dish, Manchurian features deep-fried vegetable or meat balls coated in a tangy and spicy sauce made from soy sauce, vinegar, garlic, and ginger, offering a tantalizing fusion of flavors and textures."
  },
  {
    id: 20,
    image: "images/Noodles.jpg",
    name: "Noodles",
    category: ["dinner","lunch"],
    price: "180₹",
    description:"A versatile and comforting dish, noodles are made from unleavened dough stretched, rolled, and cut into thin strips, cooked in boiling water, and served with a variety of sauces, vegetables, and proteins, providing a satisfying and quick meal option enjoyed worldwide."
  },
  {
    id: 21,
    image: "images/paneer_chilli.jpeg",
    name: "Paneer Chilli",
    category: ["dinner","lunch"],
    price: "200₹",
    description:" A mouthwatering Indo-Chinese appetizer, Paneer Chilli consists of cubes of paneer (Indian cottage cheese) marinated in a spicy batter, deep-fried until crispy, and then tossed with bell peppers, onions, garlic, and chili sauce, creating a delectable blend of flavors and textures."
  },
  {
    id: 22,
    image: "images/paneer_tikka_dry2.jpg",
    name: "Paneer Tikka Dry",
    category: ["dinner","lunch"],
    price: "210₹",
    description:"A popular North Indian dish, Paneer Tikka Dry features marinated cubes of paneer skewered and grilled until charred and aromatic, served with lemon wedges and mint chutney, offering a delightful appetizer or snack option."
  },
  {
    id: 23,
    image: "images/veg_chaumin.jpg",
    name: "Veg. Chaumin",
    category: ["dinner","lunch"],
    price: "180₹",
    description:"A savory and satisfying Indo-Chinese noodle dish, Veg Chawmein is stir-fried with a colorful assortment of vegetables, soy sauce, and aromatic spices, resulting in a flavorful and hearty meal that's popular among street food enthusiasts."
  },
  {
    id: 24,
    image: "images/schezwan_fried_rice.jpg",
    name: "Schezwan Fried Rice",
    category: ["dinner","lunch"],
    price: "110₹",
    description:"A fiery and flavorful Chinese-inspired dish, Schezwan Fried Rice is cooked with cooked rice, stir-fried with Schezwan sauce, diced vegetables, and sometimes scrambled eggs or meat, creating a spicy and aromatic fried rice dish that's sure to tantalize taste buds."
  },
  {
    id: 25,
    image: "images/veg_hara_bhara.jpg",
    name: "Veg.Hara Bhara",
    category: ["dinner","lunch"],
    price: "150₹",
    description:"A vibrant and nutritious Indian appetizer, Veg Hara Bhara are made from a mixture of mashed potatoes or bananas, spinach, peas, and spices, shaped into patties and shallow-fried until golden and crispy, offering a delightful burst of green flavors in every bite."},
  {
    id: 26,
    image: "images/spring_rolls.jpg",
    name: "Spring rolls",
    category: ["dinner","lunch"],
    price: "100₹",
    description:"A popular Asian snack, Spring Rolls consist of thin wrappers filled with a mixture of vegetables, sometimes meat or seafood, rolled tightly, and deep-fried until crispy and golden, offering a crunchy and satisfying appetizer or finger food option."
  },
  {
    id: 27,
    image: "images/paneer-tikka-masala.jpg",
    name: "Paneer Tikka Masala ",
    category: ["dinner","lunch"],
    price: "200₹",
    description:" A classic North Indian dish, Paneer Tikka Masala features succulent cubes of paneer marinated in yogurt and spices, grilled until charred, and then simmered in a rich and creamy tomato-based gravy, offering a tantalizing blend of smoky flavors and aromatic spices."
  },
  {
    id: 28,
    image: "images/cheese_butter_masala.jpg",
    name: "Cheese butter Masala",
    category: ["dinner","lunch"],
    price: "250₹",
    description:"An indulgent vegetarian delight, Cheese Butter Masala showcases paneer cubes simmered in a creamy and velvety tomato-based gravy enriched with butter, cream, and aromatic spices, creating a decadent and irresistible dish that's sure to please cheese lovers."
  },
  {
    id: 29,
    image: "images/paneer_labbadar.jpg",
    name: "Paneer lababdar",
    category: ["dinner","lunch"],
    price: "210₹",
    description:"A luxurious Punjabi delicacy, Paneer Lababdar features paneer cubes cooked in a rich and flavorful tomato-based gravy, enhanced with cream, butter, and a medley of spices, resulting in a luscious and satisfying dish that's perfect for special occasions."
  },
  {
    id: 30,
    image: "images/veg_handi.jpg",
    name: "Veg.Handi",
    category: ["dinner","lunch"],
    price: "190₹",
    description:"A wholesome and aromatic vegetable curry, Veg Handi is prepared by slow-cooking assorted vegetables in a thick and creamy tomato-based gravy, infused with aromatic spices and finished with a touch of cream, creating a delightful and comforting dish that pairs perfectly with rice or bread."
  },
  {
    id: 31,
    image: "images/veg_toofani.jpg",
    name: "Veg.Toofani",
    category: ["dinner","lunch"],
    price: "210₹",
    description:"A fiery and flavorful vegetarian curry, Veg Tufani is prepared by sautéing mixed vegetables in a spicy and tangy tomato-based gravy, seasoned with robust Indian spices and finished with a dash of fresh herbs, offering a bold and tantalizing culinary experience."
  },
  {
    id:32,
    image: "images/paneer_bhurji.jpg",
    name: "Paneer bhurji",
    category: ["dinner","lunch"],
    price: "230₹",
    description:"A delectable Indian dish, Paneer Bhurji features scrambled paneer cooked with onions, tomatoes, and aromatic spices, resulting in a flavorful and satisfying dish that's perfect for breakfast, lunch, or dinner."
  },
  {
    id: 33,
    image: "images/tofu_tikka_masala.jpg",
    name: "Tofu tikka masala",
    category: ["dinner","lunch"],
    price: "210₹",
    description:"Tofu Tikka Masala is a vegetarian twist on the classic Indian dish, featuring marinated tofu cubes grilled until charred and simmered in a rich and aromatic tomato-based gravy infused with spices like garam masala, cumin, and coriander. Creamy and flavorful, it offers a satisfying alternative to traditional tikka masala, perfect for tofu lovers and vegetarians alike."
  },
  
  {
    id: 35,
    image: "images/plain_roti.jpg",
    name: "Plain Roti",
    category: ["dinner","lunch"],
    price: "20₹",
    description:"A simple and staple Indian flatbread, Plain Roti is made from whole wheat flour dough rolled into thin circles and cooked on a hot griddle until puffed and lightly browned, offering a versatile accompaniment to various curries and dishes."
  },
  {
    id: 36,
    image: "images/butter_roti.jpg",
    name: "Butter Roti",
    category: ["dinner","lunch"],
    price: "25₹",
    description:" A rich and indulgent variation of the traditional roti, Butter Roti is made from whole wheat flour dough, rolled into thin circles, cooked on a hot griddle, and then generously brushed with melted butter, resulting in a soft and flavorful flatbread that pairs perfectly with creamy gravies or dal."
  },
  {
    id: 37,
    image: "images/tawa_roti.jpg",
    name: "Tawa Roti",
    category: ["dinner","lunch"],
    price: "17₹",
    description:"A rustic and hearty Indian flatbread, Tawa Roti is made from whole wheat flour dough flattened into circles and cooked on a hot tawa (griddle), imparting a slightly charred and smoky flavor, making it an excellent choice to accompany a wide range of Indian dishes."
  },
  {
    id: 38,
    image: "images/dal_fry.jpg",
    name: "Dal Fry",
    category: ["dinner","lunch"],
    price: "90₹",
    description:"A comforting and nutritious lentil dish, Dal Fry features a blend of cooked lentils tempered with aromatic spices like cumin, mustard seeds, and garlic, creating a flavorful and wholesome accompaniment to rice or roti."
  },
  {
    id: 39,
    image: "images/dal_makhani.jpg",
    name: "Dal Makhani",
    category: ["dinner","lunch"],
    price: "110₹",
    description:"Dal Makhani is a rich and creamy Indian lentil dish made from black lentils (urad dal) simmered with kidney beans, tomatoes, onions, garlic, and aromatic spices. Slow-cooked until velvety smooth, it's finished with a generous dollop of butter and cream, resulting in a luxurious and indulgent dish enjoyed with rice or bread."
  },
  {
    id: 40,
    image: "images/Thai_Green_Curry.jpg",
    name: "Thai Green Curry",
    category: ["dinner","lunch"],
    price: "200₹",
    description:"Thai green curry is a fragrant and vibrant dish featuring a creamy coconut milk base infused with green curry paste, lemongrass, and kaffir lime leaves. Packed with vegetables, tofu, it offers a perfect balance of spiciness, sweetness, and herbal flavors, creating a deliciously aromatic and satisfying Thai culinary experience."
  },
  {
    id: 41,
    image: "images/Thai_basil_fried_rice.jpg",
    name: "Thai Basil Fried rice",
    category: ["dinner","lunch"],
    price: "150₹",
    description:"Thai basil fried rice is a flavorful Thai dish made by stir-frying cooked rice with aromatic Thai basil leaves, garlic, chili peppers, and a combination of soy sauce . It typically includes vegetables, tofu, resulting in a fragrant and savory fried rice dish with a delightful hint of spice and herbal freshness."
  },
];
export default Menu;
