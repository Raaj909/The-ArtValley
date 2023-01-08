const Category = [
  {
    id: 1,
    price: "5eth",
    name: "hassan",
    image: "https://miro.medium.com/max/670/0*iXFSD9fZ-AD73K3P.jpg",
  },
  {
    id: 2,
    price: "2eth",
    name: "hassan",
    image:
      "https://unframed.lacma.org/sites/default/files/field/image/Screen%20Shot%202021-06-09%20at%205.21.55%20PM.png",
  },
  {
    id: 4,
    price: "8eth",
    name: "hassan",
    image:
      "https://www.cnet.com/a/img/resize/c89f82e1f00558858ba1f43ca45a57db89918681/hub/2022/05/11/4efd87fd-8d98-45ee-8bb7-16721edd3685/1-cdn3l9ehkspsxirjfrysyw.png?auto=webp&fit=crop&height=1200&width=1200",
  },
  {
    id: 11,
    price: "5eth",
    name: "hassan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt0IkjvERqi_G-SY00bmACK_QDq7g6pEwh6w&usqp=CAU",
  },
  {
    id: 12,
    price: "5eth",
    name: "hassan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofDU5DNb-G_NM6pPHz0T0wN9iCjvc1isEUA&usqp=CAU",
  },
  {
    id: 13,
    price: "5eth",
    name: "hassan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9ADDnJyCQ6debQxHWHIg0CjgH6zYEjI3gw&usqp=CAU",
  },
  {
    id: 8,
    price: "5eth",
    name: "hassan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrN66l2pItX7IBqoiJ713NH5k_sb4PO3nGQ&usqp=CAU",
  },
  {
    id: 8,
    price: "5eth",
    name: "hassan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDJSTU9EeMFwSGMTpQhoxi3KD-HzfAKX-wQ&usqp=CAU",
  },
  {
    id: 8,
    price: "5eth",
    name: "hassan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTljoPNHNoSKvICEdoMStryO63bZ9FUkn1GA&usqp=CAU",
  },
  {
    id: 18,
    price: "5eth",
    name: "hassan",
    image:"data:image/jpeg;base64,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"
   },
   {
    id: 19,
    price: "5eth",
    name: "hassan",
    image:"https://visionarymarketing.com/wp-content/uploads/2022/02/art-nfts-auction-2021-esther-barend.jpg" 
  },
  {
    id: 20,
    price: "5eth",
    name: "hassan",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSAYuHePsYd3DK2YlL76jMkBON9Jn1zi6SaA&usqp=CAU"
  },
];
export default Category;