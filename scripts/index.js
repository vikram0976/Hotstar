

let movies_data = [
    {
        image_url : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_Sonic2/615d993d-d50a-4cc9-84bf-6d91628a32f3._UR3000,600_SX3000_FMwebp_.jpeg",
    },
    {
        image_url : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Correctivemeasures_LP/426ae7d6-e059-4b8b-8bf0-9e9b69d21595._UR3000,600_SX3000_FMwebp_.jpeg"
    },
    {
        image_url : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSOD/ce02ee71-2928-4f4b-8b9c-e5658c48145f._UR3000,600_SX3000_FMwebp_.jpeg"
    },
    {
        image_url : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SpiderNoWayHomeRevised_Launch/2a2b2cc2-e20b-492f-b53b-984627f3eb4e._UR3000,600_SX3000_FMwebp_.jpeg"
    },
    {
        image_url : "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_JohnWick3_LP_PC/5f4ec9b1-be13-467a-9de0-5847d1b2990a._UR3000,600_SX3000_FMwebp_.jpeg"

    }
]

let count=0;
function slider(){
    count++;
   
    if(count==movies_data.length-1){
        count=0;
    }
    let slideshow=document.querySelector('#slideshow img')
    slideshow.src=movies_data[count].image_url;
}
setInterval(slider,1000);


// for images 

let data= [
    {
      imgUrl:
        "https://s3-ap-southeast-1.amazonaws.com/engpeepingmoon/130522012714-627e0f5a3a48cjug-jugg-jeeyo-resized-varun-anil-neetu-kiara-resized.jpg",
      name: "Samrat Prithviraj",
      date: "03 JUNE, 2022",
      rating:4.2,
      
    
    },
    {
      imgUrl:
        "https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/05/01162627/jungle-cry.jpeg",
      name: "Jungle Cry",
      rating:3.2,
      
    },
    {
      imgUrl:
        "https://s3-ap-southeast-1.amazonaws.com/engpeepingmoon/130522012714-627e0f5a3a48cjug-jugg-jeeyo-resized-varun-anil-neetu-kiara-resized.jpg",
      name: "Jugjugg Jeeyo",
      date: "03 JUNE, 2022",
      rating:3.9,
    },
    {
      imgUrl:
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/pirates-of-caribbean-6-(1).jpg",
      name: "Pirates of the Caribbean",
      date: "03 JUNE, 2022",
      rating:4.8,
    },
    {
    imgUrl:"https://s3-ap-southeast-1.amazonaws.com/engpeepingmoon/130522012714-627e0f5a3a48cjug-jugg-jeeyo-resized-varun-anil-neetu-kiara-resized.jpg",
    name:"Dhaakad",
    date: "03 JUNE, 2022",
    rating:4.5,
    },
    {
      imgUrl:"https://s3-ap-southeast-1.amazonaws.com/engpeepingmoon/130522012714-627e0f5a3a48cjug-jugg-jeeyo-resized-varun-anil-neetu-kiara-resized.jpg",
      name:"Thar",
      date: "03 JUNE, 2022",
      rating:3.3,
    },
    {
      imgUrl:"https://s3-ap-southeast-1.amazonaws.com/engpeepingmoon/130522012714-627e0f5a3a48cjug-jugg-jeeyo-resized-varun-anil-neetu-kiara-resized.jpg",
      name:"Villan",
      date: "03 JUNE, 2022",
      rating:2.8,
    },
    {
      imgUrl:"https://i.ytimg.com/vi/Q1NKMPhP8PY/maxresdefault.jpg",
      name:"pushpa",
      date: "03 JUNE, 2022",
      rating:5.0,
    },
    {
        imgUrl:"https://i.ytimg.com/vi/Q1NKMPhP8PY/maxresdefault.jpg",
        name:"pushpa",
        date: "03 JUNE, 2022",
        rating:1.5,
      },
  ];
  localStorage.setItem('movies',JSON.stringify(data))
  function display(data){
  let movies=document.getElementById('movies');
  movies.innerHTML='';
  data.forEach(function(e){
   let div=document.createElement('div');
   let img=document.createElement('img');
   img.src=e.imgUrl;
   let h1=document.createElement('h3');
   h1.innerText=e.name;
   let p1=document.createElement('p')
   p1.innerText=e.date;
   let p2=document.createElement('p');
   p2.innerText=e.rating;
   div.append(img,h1,p1,p2)
   movies.append(div);
  })
}
display(data);


document.getElementById('select').addEventListener('change',function(){
    let select=document.getElementById('select').value;
    if(select=='low'){
       data=data.sort(function(a,b){
            if(a.rating>b.rating) return 1;
            if(a.rating<b.rating) return -1;
            return 0;

        })
        display(data)
        
    }
    else{
        data= data.sort(function(a,b){
            if(a.rating>b.rating) return -1;
            if(a.rating<b.rating) return 1;
            return 0;

        })
        display(data)
    }
    console.log(select)
})