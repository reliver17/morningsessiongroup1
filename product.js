async function getApple(){

    try {
        let apple = await axios.get ('https://tbhpwebdevapi.azurewebsites.net/api/Bonsai')

        document.getElementById("title").innerHTML = apple.data[0].productTitle
        document.getElementById("title").style.color="black"
        document.getElementById("price").innerHTML = "price: N" + apple.data[0].productPrice
        document.getElementById("price").style.color="black"
        document.getElementById("description").innerHTML = apple.data[0].productDescription
        document.getElementById("description").style.color="black"
        document.getElementById("image").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[0].productImage 

        document.getElementById("title2").innerHTML = apple.data[1].productTitle;
        document.getElementById("title2").style.color="black" 
        document.getElementById("price2").innerHTML = "Price: N" + apple.data[1].productPrice;
        document.getElementById("price2").style.color="black"
        document.getElementById("description2").innerHTML = apple.data[1].productDescription;
        document.getElementById("description2").style.color="black"
        document.getElementById("image2").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[1].productImage;

        document.getElementById("title3").innerHTML = apple.data[2].productTitle
        document.getElementById("title3").style.color="black"
        document.getElementById("price3").innerHTML = "price: N" + apple.data[2].productPrice
        document.getElementById("price3").style.color="black"
        document.getElementById("description3").innerHTML = apple.data[2].productDescription
        document.getElementById("description3").style.color="black"
        document.getElementById("image3").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[2].productImage 


        document.getElementById("title4").innerHTML = apple.data[3].productTitle
        document.getElementById("title4").style.color="black"
        document.getElementById("price4").innerHTML = "price: N" + apple.data[3].productPrice
        document.getElementById("price4").style.color="black"
        document.getElementById("description4").innerHTML = apple.data[3].productDescription
        document.getElementById("description4").style.color="black"
        document.getElementById("image4").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[3].productImage 

        document.getElementById("title5").innerHTML = apple.data[4].productTitle;
        document.getElementById("title5").style.color="black" 
        document.getElementById("price5").innerHTML = "Price: N" + apple.data[4].productPrice;
        document.getElementById("price5").style.color="black"
        document.getElementById("description5").innerHTML = apple.data[4].productDescription;
        document.getElementById("description5").style.color="black"
        document.getElementById("image5").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[4].productImage;

        document.getElementById("title6").innerHTML = apple.data[5].productTitle
        document.getElementById("title6").style.color="black"
        document.getElementById("price6").innerHTML = "price: N" + apple.data[5].productPrice
        document.getElementById("price6").style.color="black"
        document.getElementById("description6").innerHTML = apple.data[5].productDescription
        document.getElementById("description6").style.color="black"
        document.getElementById("image6").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[5].productImage 


        document.getElementById("title7").innerHTML = apple.data[6].productTitle
        document.getElementById("title7").style.color="black"
        document.getElementById("price7").innerHTML = "price: N" + apple.data[6].productPrice
        document.getElementById("price7").style.color="black"
        document.getElementById("description7").innerHTML = apple.data[6].productDescription
        document.getElementById("description7").style.color="black"
        document.getElementById("image7").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[6].productImage 

        document.getElementById("title8").innerHTML = apple.data[7].productTitle;
        document.getElementById("title8").style.color="black" 
        document.getElementById("price8").innerHTML = "Price: N" + apple.data[7].productPrice;
        document.getElementById("price8").style.color="black"
        document.getElementById("description8").innerHTML = apple.data[7].productDescription;
        document.getElementById("description8").style.color="black"
        document.getElementById("image8").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[7].productImage;

        document.getElementById("title9").innerHTML = apple.data[8].productTitle
        document.getElementById("title9").style.color="black"
        document.getElementById("price9").innerHTML = "price: N" + apple.data[8].productPrice
        document.getElementById("price9").style.color="black"
        document.getElementById("description9").innerHTML = apple.data[8].productDescription
        document.getElementById("description9").style.color="black"
        document.getElementById("image9").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[8].productImage 


        document.getElementById("title10").innerHTML = apple.data[9].productTitle
        document.getElementById("title10").style.color="black"
        document.getElementById("price10").innerHTML = "price: N" + apple.data[9].productPrice
        document.getElementById("price10").style.color="black"
        document.getElementById("description10").innerHTML = apple.data[9].productDescription
        document.getElementById("description10").style.color="black"
        document.getElementById("image10").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[9].productImage 

        document.getElementById("title11").innerHTML = apple.data[10].productTitle;
        document.getElementById("title11").style.color="black" 
        document.getElementById("price11").innerHTML = "Price: N" + apple.data[10].productPrice;
        document.getElementById("price11").style.color="black"
        document.getElementById("description11").innerHTML = apple.data[10].productDescription;
        document.getElementById("description11").style.color="black"
        document.getElementById("image11").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[10].productImage;

        document.getElementById("title12").innerHTML = apple.data[11].productTitle
        document.getElementById("title12").style.color="black"
        document.getElementById("price12").innerHTML = "price: N" + apple.data[11].productPrice
        document.getElementById("price12").style.color="black"
        document.getElementById("description12").innerHTML = apple.data[11].productDescription
        document.getElementById("description12").style.color="black"
        document.getElementById("image12").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[11].productImage 

        document.getElementById("title13").innerHTML = apple.data[12].productTitle
        document.getElementById("title13").style.color="black"
        document.getElementById("price13").innerHTML = "price: N" + apple.data[12].productPrice
        document.getElementById("price13").style.color="black"
        document.getElementById("description13").innerHTML = apple.data[12].productDescription
        document.getElementById("description13").style.color="black"
        document.getElementById("image13").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[12].productImage 

        document.getElementById("title14").innerHTML = apple.data[13].productTitle;
        document.getElementById("title14").style.color="black" 
        document.getElementById("price14").innerHTML = "Price: N" + apple.data[13].productPrice;
        document.getElementById("price14").style.color="black"
        document.getElementById("description14").innerHTML = apple.data[13].productDescription;
        document.getElementById("description14").style.color="black"
        document.getElementById("image14").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[13].productImage;

        document.getElementById("title15").innerHTML = apple.data[14].productTitle
        document.getElementById("title15").style.color="black"
        document.getElementById("price15").innerHTML = "price: N" + apple.data[14].productPrice
        document.getElementById("price15").style.color="black"
        document.getElementById("description15").innerHTML = apple.data[14].productDescription
        document.getElementById("description15").style.color="black"
        document.getElementById("image15").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[14].productImage 


        document.getElementById("title16").innerHTML = apple.data[15].productTitle
        document.getElementById("title16").style.color="black"
        document.getElementById("price16").innerHTML = "price: N" + apple.data[15].productPrice
        document.getElementById("price16").style.color="black"
        document.getElementById("description16").innerHTML = apple.data[15].productDescription
        document.getElementById("description16").style.color="black"
        document.getElementById("image16").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[15].productImage 

        document.getElementById("title17").innerHTML = apple.data[16].productTitle;
        document.getElementById("title17").style.color="black" 
        document.getElementById("price17").innerHTML = "Price: N" + apple.data[16].productPrice;
        document.getElementById("price17").style.color="black"
        document.getElementById("description17").innerHTML = apple.data[16].productDescription;
        document.getElementById("description17").style.color="black"
        document.getElementById("image17").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[16].productImage;

        document.getElementById("title18").innerHTML = apple.data[17].productTitle
        document.getElementById("title18").style.color="black"
        document.getElementById("price18").innerHTML = "price: N" + apple.data[17].productPrice
        document.getElementById("price18").style.color="black"
        document.getElementById("description18").innerHTML = apple.data[17].productDescription
        document.getElementById("description18").style.color="black"
        document.getElementById("image18").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[17].productImage 


        document.getElementById("title19").innerHTML = apple.data[18].productTitle
        document.getElementById("title19").style.color="black"
        document.getElementById("price19").innerHTML = "price: N" + apple.data[18].productPrice
        document.getElementById("price19").style.color="black"
        document.getElementById("description19").innerHTML = apple.data[18].productDescription
        document.getElementById("description19").style.color="black"
        document.getElementById("image19").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[18].productImage 

        document.getElementById("title20").innerHTML = apple.data[19].productTitle;
        document.getElementById("title20").style.color="black" 
        document.getElementById("price20").innerHTML = "Price: N" + apple.data[19].productPrice;
        document.getElementById("price20").style.color="black"
        document.getElementById("description20").innerHTML = apple.data[19].productDescription;
        document.getElementById("description20").style.color="black"
        document.getElementById("image20").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[19].productImage;

        document.getElementById("title21").innerHTML = apple.data[20].productTitle
        document.getElementById("title21").style.color="black"
        document.getElementById("price21").innerHTML = "price: N" + apple.data[20].productPrice
        document.getElementById("price21").style.color="black"
        document.getElementById("description21").innerHTML = apple.data[20].productDescription
        document.getElementById("description21").style.color="black"
        document.getElementById("image21").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[20].productImage 


        document.getElementById("title22").innerHTML = apple.data[21].productTitle
        document.getElementById("title22").style.color="black"
        document.getElementById("price22").innerHTML = "price: N" + apple.data[21].productPrice
        document.getElementById("price22").style.color="black"
        document.getElementById("description22").innerHTML = apple.data[21].productDescription
        document.getElementById("description22").style.color="black"
        document.getElementById("image22").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[21].productImage 

        document.getElementById("title23").innerHTML = apple.data[22].productTitle;
        document.getElementById("title23").style.color="black" 
        document.getElementById("price23").innerHTML = "Price: N" + apple.data[22].productPrice;
        document.getElementById("price23").style.color="black"
        document.getElementById("description23").innerHTML = apple.data[22].productDescription;
        document.getElementById("description23").style.color="black"
        document.getElementById("image23").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[22].productImage;

        document.getElementById("title24").innerHTML = apple.data[23].productTitle
        document.getElementById("title24").style.color="black"
        document.getElementById("price24").innerHTML = "price: N" + apple.data[23].productPrice
        document.getElementById("price24").style.color="black"
        document.getElementById("description24").innerHTML = apple.data[23].productDescription
        document.getElementById("description24").style.color="black"
        document.getElementById("image24").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[23].productImage
        

        document.getElementById("title25").innerHTML = apple.data[24].productTitle
        document.getElementById("title25").style.color="black"
        document.getElementById("price25").innerHTML = "price: N" + apple.data[24].productPrice
        document.getElementById("price25").style.color="black"
        document.getElementById("description25").innerHTML = apple.data[24].productDescription
        document.getElementById("description25").style.color="black"
        document.getElementById("image25").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[24].productImage 

        document.getElementById("title26").innerHTML = apple.data[25].productTitle;
        document.getElementById("title26").style.color="black" 
        document.getElementById("price26").innerHTML = "Price: N" + apple.data[25].productPrice;
        document.getElementById("price26").style.color="black"
        document.getElementById("description26").innerHTML = apple.data[25].productDescription;
        document.getElementById("description26").style.color="black"
        document.getElementById("image26").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[25].productImage;

        document.getElementById("title27").innerHTML = apple.data[26].productTitle
        document.getElementById("title27").style.color="black"
        document.getElementById("price27").innerHTML = "price: N" + apple.data[26].productPrice
        document.getElementById("price27").style.color="black"
        document.getElementById("description27").innerHTML = apple.data[26].productDescription
        document.getElementById("description27").style.color="black"
        document.getElementById("image27").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[26].productImage
        

        document.getElementById("title28").innerHTML = apple.data[27].productTitle
        document.getElementById("title28").style.color="black"
        document.getElementById("price28").innerHTML = "price: N" + apple.data[27].productPrice
        document.getElementById("price28").style.color="black"
        document.getElementById("description28").innerHTML = apple.data[27].productDescription
        document.getElementById("description28").style.color="black"
        document.getElementById("image28").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[27].productImage 

        document.getElementById("title29").innerHTML = apple.data[28].productTitle;
        document.getElementById("title29").style.color="black" 
        document.getElementById("price29").innerHTML = "Price: N" + apple.data[28].productPrice;
        document.getElementById("price29").style.color="black"
        document.getElementById("description29").innerHTML = apple.data[28].productDescription;
        document.getElementById("description29").style.color="black"
        document.getElementById("image29").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[28].productImage;

        document.getElementById("title30").innerHTML = apple.data[29].productTitle
        document.getElementById("title30").style.color="black"
        document.getElementById("price30").innerHTML = "price: N" + apple.data[29].productPrice
        document.getElementById("price30").style.color="black"
        document.getElementById("description30").innerHTML = apple.data[29].productDescription
        document.getElementById("description30").style.color="black"
        document.getElementById("image30").src = "https://project1-bonsai-jacobtimms.vercel.app/" + apple.data[29].productImage 
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