

async function getApple(){

    try {
        let apple = await axios.get ('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

        document.getElementById("title").innerHTML = apple.data[0].productTitle
        document.getElementById("title").style.color="black"

        document.getElementById("price").innerHTML = "price: N" + apple.data[0].productPrice
        document.getElementById("price").style.color="black"
        document.getElementById("description").innerHTML = apple.data[0].productDescription
        document.getElementById("description").style.color="black"
        document.getElementById("description").style.fontSize="20px"
        document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[0].productImage 

        document.getElementById("title2").innerHTML = apple.data[1].productTitle;
        document.getElementById("title2").style.color="black" 
        document.getElementById("price2").innerHTML = "Price: N" + apple.data[1].productPrice;
        document.getElementById("price2").style.color="black"
        document.getElementById("description2").innerHTML = apple.data[1].productDescription;
        document.getElementById("description2").style.color="black"
        document.getElementById("description2").style.fontSize="20px"
        document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[1].productImage;

        document.getElementById("title3").innerHTML = apple.data[2].productTitle
        document.getElementById("title3").style.color="black"
        document.getElementById("price3").innerHTML = "price: N" + apple.data[2].productPrice
        document.getElementById("price3").style.color="black"
        document.getElementById("description3").innerHTML = apple.data[2].productDescription
        document.getElementById("description3").style.color="black"
        document.getElementById("description3").style.fontSize="20px"
        document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[2].productImage

    }
    catch (err){
        console.error(err)
    }
}
    getApple()



    mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

    function scrollFunction(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            mybutton.style.display = "block"
        }
        else {
            mybutton.style.display = "none";
        }
    }

    function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }




    function malt() {
        var x = document.getElementById("myTopnav");
        if (x.className === "ear") {
          x.className += " responsive";
        } else {
          x.className = "ear";
        }
      } 
    
    



