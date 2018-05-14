//reusables
var image_1 = "url(https://i-cdn.phonearena.com/images/article/101562-two_lead/Googles-Portrait-Mode-has-been-ported-to-most-Android-phones-including-Samsung-Galaxies-with-Exynos-processors.jpg)";
var image_2 = "url(https://pixel.nymag.com/imgs/daily/vulture/2018/02/12/12-b-obama-portrait.nocrop.w710.h2147483647.jpg)";
var image_3 = "url(https://s3.amazonaws.com/images.charitybuzz.com/images/152805/detail.png)";
var image_4 = "url(https://1.bp.blogspot.com/-9QM7ciGXRkQ/V1hsB-wNLBI/AAAAAAAAMoA/eYbSHs00PTAjrI4QAmvYAIGCUe1AuRAnwCLcB/s1600/bryan_cranston_0095.jpg)";
var image_5 = "url(http://www.digitalphoto.de/media/digitalphoto/styles/tec_frontend_large/public/images/2016/10/image-282149--328856.png)";
var image_6 = "url(https://cdnb.artstation.com/p/assets/images/images/001/863/575/large/irakli-nadar-artstation-da.jpg)";
var image_7 = "url(https://img00.deviantart.net/08d0/i/2017/300/6/f/portrait_by_selenada-dbrulfe.jpg)";
var image_8 = "url(http://blogs.brighton.ac.uk/princess/files/2017/05/0c8ee31468534deac0302f374e03f7ba-1vr71cx.jpg)";
var image_9 = "url(http://www.blackenterprise.com/wp-content/blogs.dir/1/files/2017/11/iStock-172370812-1080x675.jpg)";
var image_10 = "url(http://2xm.rte.ie/wp-content/uploads/2017/08/Tyler-The-Creator-608x264.jpg)";
var image_11 = "url(http://d3vsdfvkxh87qp.cloudfront.net/articles_images/z4/1510181695614/image.jpg)";
var image_12 = "url(http://d3vsdfvkxh87qp.cloudfront.net/articles_images/b8/1510181760378/image.jpg)";

//functions




    function image_filler(div, image, _name, _department, _bio, _socialmedia){
        
        document.getElementById(div).style.width = "2.5em";
        document.getElementById(div).style.height = "4.2em";
        document.getElementById(div).style.backgroundImage = image;
        document.getElementById(div).style.backgroundPosition = "center";
        document.getElementById(div).style.backgroundRepeat = "no-peat";
        document.getElementById(div).style.backgroundSize = "cover";
        document.getElementById(div).onclick=function(){return image_popup(div, image, _name, _department, _bio, _socialmedia); }

    }
//----------

var array = [
           {image : image_1, name : "Tsehla", surname : "user_surname", cohort : "9c", department : "Coding", bio : "Hello ther my name is Tsehla and im from  coding department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_2, name : "Sabelo", surname : "user_surname", cohort : "10", department : "Multimedia", bio : "Hello ther my name is Sabelo and im from Multimedia department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_3, name : "Peace", surname : "user_surname", cohort : "11", department : "Graphics", bio : "Hello ther my nam is Peace and im from Graphics department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_4, name : "Chad", surname : "user_surname", cohort : "20", department : "Strategy", bio : "Hello ther my nam is Chad and im from Strategy department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_5, name : "Pritty", surname : "user_surname", cohort : "50", department : "Coding", bio : "Hello ther my nam is Pritty and im from Coding department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_6, name : "Yoli", surname : "user_surname", cohort : "1", department : "Multimedia", bio : "Hello ther my nam Yoli is  and im from Multimedia department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_7, name : "Bukelwa", surname : "user_surname", cohort : "5", department : "Graphics", bio : "Hello ther my nam is Bukelwa and im from Graphics department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_8, name : "Nokwazi", surname : "user_surname", cohort : "90", department : "Strategy", bio : "Hello ther my nam is Nokwazi and im from Strategy department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_9, name : "Victor", surname : "user_surname", cohort : "55", department : "Data Science", bio : "Hello ther my nam is Victor and im from Data Science department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_10, name : "Nick", surname : "user_surname", cohort : "17", department : "Coding", bio : "Hello ther my nam is Nick and im from Coding department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_11, name : "Dibwe", surname : "user_surname", cohort : "2", department : "Multimedia", bio : "Hello ther my nam is Dibwe and im from Multimedia department" , socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
           {image : image_12, name : "Lindelani", surname : "user_surname", cohort : "0", department : "Graphics", bio : "Hello ther my nam Lindelani is  and im from Graphics department", socialmedia : {facebook : "my fb link", twitter : "my twitter", instagram: "my insta"}},
          ];

var image_filler_loop_counter = 0;
var image_filler_loop_counter_rectify = 1;

function fuck(){// this shit works only when grouped to function not when called within loop
    var image_in_array = array[image_filler_loop_counter % array.length].image;
    var user_name = array[image_filler_loop_counter % array.length].name+" "+array[image_filler_loop_counter % array.length].surname;
    var department_cohort = array[image_filler_loop_counter % array.length].department+" Cohort : "+array[image_filler_loop_counter % array.length].cohort;
    var user_bio=array[image_filler_loop_counter % array.length].bio;
    var user_socialmedia=array[image_filler_loop_counter % array.length].socialmedia;
    
    
     image_filler(image_filler_loop_counter_rectify, image_in_array, user_name, department_cohort, user_bio, user_socialmedia);
    
}


while (image_filler_loop_counter!=200){
    fuck();
    image_filler_loop_counter_rectify = image_filler_loop_counter_rectify + 1;
    image_filler_loop_counter = image_filler_loop_counter + 1;
}


//image pop up,
function image_popup(div, image, _name, _department, _bio, _socialmedia){

    var _div=document.getElementById("image_pop");
    _div.style.display="block";
    _div.style.width = "20em";
    _div.style.height = "15em";
    _div.style.backgroundImage = image;
    _div.style.backgroundSize = "cover";
    _div.style.backgroundRepeat = "no-peat";
    _div.style.backgroundPosition = "center";
   document.getElementById("image_details").innerHTML=_name;
   document.getElementById("image_link").innerHTML="Department : "+_department;
   document.getElementById("profile_view").onclick=function(){ return show_profile(image, _name, _department, _bio, _socialmedia);}    
    
}


function pop_hide(){
    
    document.getElementById("image_pop").style.display="none";
}

//profile pop
function show_profile(image, _name, _department, _bio, _socialmedia){
    //window.location.href="profile/index.html";
    document.getElementById("image_pop").style.display="none";
    var department="navalue";
    
    if(_department=="Coding"){department="<a href='#' onclick='departments('coding')'>Coding</a>"}
    else if(_department=="Multimedia"){department="<a href='#' onclick='departments('multimedia')'>Coding</a>"}
    else if(_department=="Graphics"){department="<a href='#' onclick='departments('graphics')'>Coding</a>"}
    else if(_department=="Strategy"){department="<a href='#' onclick='departments('strategy')'>Coding</a>"}
    
    
    var _div=document.getElementById("profile_pop");
    _div.style.display="block";
    _div.style.width = "25em";
    _div.style.height = "20em";
    _div.style.backgroundImage = image;
    _div.style.backgroundSize = "cover";
    _div.style.backgroundRepeat = "no-peat";
    _div.style.backgroundPosition = "center";
   document.getElementById("profile_details").innerHTML=_name+" "+"Department : "+department;
   document.getElementById("profile_bio").innerHTML=_bio;
   document.getElementById("profile_social_links").innerHTML="Contact me on facebook: "+_socialmedia.facebook+" or twitter: "+_socialmedia.twitter;
    
    
}

function profile_hide(){
    
    document.getElementById("profile_pop").style.display="none";
}

//menu
var menu="open";

function menu_open(){
         
   document.getElementById("menu_text").innerHTML="Close menu";
   document.getElementById("menu_container").style.display="block";
      
    return menu="close";
}

function menu_close(){
            
    document.getElementById("menu_text").innerHTML="Open menu";
    document.getElementById("menu_container").style.display="none";
    menu="open";
}

function menu_close_or_open(){
 
    if(menu=="open"){
        menu_open();
    }
    
    else if(menu=="close"){
        menu_close();
    }
}
    
    
//departments

function departments(_value){
    alert("User is from "+_value+" department");
}
    









