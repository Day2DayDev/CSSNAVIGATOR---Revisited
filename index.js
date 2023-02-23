                            /* global functions for each button */





                            /*buttons with specific attributes*/

document.getElementById("boldBtn").addEventListener
    ("click",function(){
       
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("testText").style.fontWeight="900";
        document.getElementById("testText2").style.fontWeight="900";
        styleCode.textContent = "font-weight: bold, bolder, lighter, etc.;";      
    })


document.getElementById("underlineBtn").addEventListener
    ("click",function(){

        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("testText").style.textDecorationLine="underline";
        document.getElementById("testText2").style.textDecorationLine="underline";
        styleCode.textContent = "text-decoration-line: underline";     
    })


document.getElementById("linkBtn").addEventListener
    ("click",function(){

        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        
        document.getElementById("testText").style.color="blue";
        document.getElementById("testText2").style.color="blue";
        document.getElementById("testText").style.cursor="pointer";
        document.getElementById("testText2").style.cursor="pointer";
        styleCode.textContent = '<a href="link here">text here</a>.';
        
    })


document.getElementById("fontSizeBtn").addEventListener
    ("click",function(){

        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        
        document.getElementById("testText").style.fontSize="small";
        document.getElementById("testText2").style.fontSize="medium";
        styleCode.textContent = 'font-size:small, medium, 20px, 30px, etc.';

    })

document.getElementById("fontFamilyBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        
        document.getElementById("testText").style.fontFamily="fantasy";
        document.getElementById("testText2").style.fontFamily="fantasy";
        styleCode.textContent = 'font-family: roboto, sans-serif, etc.';
    })

document.getElementById("backgroundColorBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("mainSection").style.backgroundImage= 'url("./grey.jpg")';
        styleCode.textContent = 'background-color: green, blue, gradient, etc.';
     })    

document.getElementById("backgrounImageBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        
        document.getElementById("mainSection").style.backgroundImage= 'url("./robotwallpaper.png")';
        document.getElementById("mainSection").style.backgroundColor="white"
        document.getElementById("testText").style.fontFamily="Roboto";
        document.getElementById("testText2").style.fontFamily="Roboto";
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("testText").style.color="black";
        document.getElementById("testText2").style.color="black";

        styleCode.textContent = 'background-image:url("./robotwallpaper.png")';
    })    

    


document.getElementById("lineSpaceBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("testText").style.letterSpacing="80px";
        document.getElementById("testText2").style.letterSpacing="40px";

        styleCode.textContent = 'letter-spacing: 40px, 80px, etc.';
     })   


document.getElementById("fontStyleBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("testText").style.fontStyle="italic";
        document.getElementById("testText2").style.fontStyle="oblique";

        styleCode.textContent = 'font-style: (Italic, normal, oblique etc.)   ';

    })    
        
document.getElementById("borderBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("cssTap").style.border="5px black solid";
        styleCode.textContent = 'border: 5px solid black';


     })   
document.getElementById("boxShadowBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("cssTap").style.boxShadow="5px 10px #888888";
        styleCode.textContent = 'border-shadow: 5px 10px #888888';

     })   

    
document.getElementById("borderRadiusBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("cssTap").style.border="5px black solid";
        document.getElementById("cssTap").style.borderRadius="25px";
        styleCode.textContent = 'border-radius: 15px';
        
     })   

     
document.getElementById("marginBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("cssTap").style.border="5px black solid";
        document.getElementById("testText").style.border="5px darkgrey solid";        
        document.getElementById("testText2").style.border="5px darkgrey solid";
        document.getElementById("testText").style.margin="10px";        
        document.getElementById("testText2").style.margin="20px";
        styleCode.textContent = 'margin:10px, 20px, etc. ';
        
    })   

      
document.getElementById("paddingBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("cssTap").style.border="5px black solid";
        document.getElementById("testText").style.border="5px darkGrey solid";        
        document.getElementById("testText2").style.border="5px darkGrey solid";
        document.getElementById("testText").style.padding="10px";        
        document.getElementById("testText2").style.padding="15px";
        styleCode.textContent = 'padding: 10px, 15px, etc.   ';

        
    })   

    
document.getElementById("displayFlexBtn").addEventListener
    ("click",function(){   
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("cssTap").style.display="flex";
        document.getElementById("testText").style.border="5px darkGrey solid";        
        document.getElementById("testText2").style.border="5px darkGrey solid";
        styleCode.textContent = 'display:flex';
        
    })   

    
document.getElementById("textDirectionBtn").addEventListener
    ("click",function(){    
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("cssTap").style.rotate="3 .5 2 15deg";     
        document.getElementById("testText").style.rotate="-15deg";      
        document.getElementById("testText2").style.colorScheme="dark";   
        styleCode.textContent = 'rotate: -45deg';
  
    })   

       
document.getElementById("textOutlineBtn").addEventListener
    ("click",function(){    
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("testText").style.textShadow="-6px 0 darkGray";      
        document.getElementById("testText2").style.textShadow="-1px 0 black, 0 5px black, 1px 0 black, 0 -1px black";
        styleCode.textContent = 'textShadow: -6px 0 red';
        
    })   

        
document.getElementById("fontColorBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("testText").style.color="darkGrey";        
        document.getElementById("testText2").style.color="darkGrey";
        styleCode.textContent = 'color:grey';
    })   

    
document.getElementById("opacityBtn").addEventListener

       ("click",function(){    
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")

        document.getElementById("testText").style.fontSize="30";        
        document.getElementById("testText2").style.fontSize="30"; 
        document.getElementById("testText").style.opacity="10%";        
        document.getElementById("testText2").style.opacity="10%";  
        document.getElementById("testText").style.fontWeight="bolder";        
        document.getElementById("testText2").style.fontWeight="bolder"; 
        styleCode.textContent = 'opcaity:10%, 25%, 30%';

        
    })   

    


    
document.getElementById("cursorBtn").addEventListener
    ("click",function(){
        document.getElementById("testText").removeAttribute("style");
        document.getElementById("testText2").removeAttribute("style");
        document.getElementById("mainSection").removeAttribute("style");
        document.getElementById("cssTap").removeAttribute("style")


        document.getElementById("cssTap").style.cursor="crosshair";        
        styleCode.textContent = 'cursor:crosshair, pointer, grab, move, etc.';
        
    })   

    