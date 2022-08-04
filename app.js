(function($){

    var galery = $('.galery');          // prepojenie classu v cssku s clasou v jsku

    galery.find('img').css({            // najdenie obrázkov v cssku a nastavenie na menšiu opacitu.
        opacity: 0.9
    }).on('mouseenter mouseleave', function(event){  //nastavenie vstupu a výstupu myšky a následnej kontroly v console.
       // console.log( event.type );
    })
 
    var overlay = $('<div/>', { id:'overlay' });      // vytvorenie nového divu v javascripte a následneho pripnutie ho na body elementu a následného schovania.
        overlay.appendTo('body').hide();
    
    galery.find('img').on('click', function(event){  // keď klikneš na obrázok tak sa ti zobrazí overlay.
        var href = $(this).attr('src'); // naviazanie premennej href na obrazok cez atribut .attr
            image= $('<img>',{ src: href, alt: 'learn2code'}); // vytvorenie nového img divu a následného zobrazenia.
            overlay.html( image )
                   .show();
        console.log( href );

        overlay.show();
        
    })
    overlay.on('click', function(){   // keď klikneš znova tak sa ti schová overlay 
        overlay.hide();
    })

    var navBar = $('.nav_bar');
    navBar.find('a').on('click', function(event){ // zabránenie defaultnej funkcií na mojom nav_bare.
        event.preventDefault();
    })



    //                                                       ================= SCROLOVANIE ========================




    var menu = $(' .nav_bar');    // zapísanie môjho html nav baru do javascriptu
        menuLinks = menu.find('a'); // najdenie a hrefu v mojom nav bare 

    menuLinks.on('click', function(event){  // klasicka on click funkcia
        $('html,body').animate({ scrollTop: $(this.hash).offset().top}, 1000);  // hladám v html/body , ktoré budem animovať cez funckiu scrolltop "this.hash" patrí ku môjmu hashu
        event.preventDefault();
    })    

    // Ked chcem použiť SCROLOVANIE a prepojiť môj nav_bar s obrázkami a galériou , tak miesto linkov ktoré som si urobil tak do hrefu napíšem
    // napríklad #Dragon, a následne keď si vytvorím galériu ktorú chcem spojiť s mojim nav_Barom tak do tej galérie prídam IDčko s mojim dragonom
    // čiže div class dragon id dragon. , následne môžem použiť klasickú on click funkciu kde budem animovať moju galériu. 



    //                                               =============================== BACK TO TOP =========================

   var backToTop = $('<a>',{
       href:'#home',
       class: 'back_to_top',
       html: '<h1> CHCES HORE?  </h1>'
   })

   backToTop
   .appendTo('body')
   
   .on('click', function(){
       $('html,body').animate({scrollTop: 0 });       // Toto mi nefungovalo s body, musel som pridať HTML, dotedy to neanimovalo , neviem prečo -_- ...
    console.log(backToTop);
   })



  //                                        ====================================== CITY MAPS SLIDER =========================================
  

    // var city = $('#citymap'),            // Deklarácia premenných
    //  citys= $('.citymaps');

    //  var sliderInterval = setInterval(function(){         // používam funckiu setInterval ktorá koluje donekonečna , posledného potomka nechám zmiznuť a predposledného nechám 
    //      citys.children(':last')                           // nalepiť na začiatok obrázkov.
    //             .fadeOut(1500, function(){ $(this).prependTo (citys)})
    //             .prev().fadeIn(500);
    //  })



// ======================================================== SLIDER SETTINGS ==========================================================

    var city = $('#citymap'),            // Deklarácia premenných
    citys= $('.citymaps');
     
    
    
    var Slider ={
         intervalID: null,
         prepinac: false,

        //  set: function( id ){
        //      this.intervalID = id;
        //  },
        //  get: function(){
        //      return 'IDcko intervaluje je:' + this.intervalID;
        //  },

         start: function(){
            this.intervalID= setInterval(function(){         // používam funckiu setInterval ktorá koluje donekonečna , posledného potomka nechám zmiznuť a predposledného nechám 
                citys.children(':last')                           // nalepiť na začiatok obrázkov.
                       .fadeOut(4500, function(){ $(this).prependTo(citys)})
                       .prev().fadeIn(2500) })
            this.prepinac = true;   
            console.log('zacali sme');
         },

         pause: function(){
            clearInterval( this.intervalID);  // Clearneme Interval a nastavíme prepinac na false
            this.intervalID = null;
            this.prepinac = false;
            console.log('TERAZ SI DAME PAUZU');
            console.log(this.prepinac);
         },

         resume: function(){
           if( !this.intervalID) this.start(); // Ak sme zapauzovany, ak intervalID neexistuje, tak pustíce časovač znova
           console.log(this.prepinac);
           
            },
            

         toggle: function(){
           if( this.prepinac ) this.pause();
           else this.resume();
         } 

    }

    
    Slider.toggle();
    citys.on('click', function(){
        Slider.toggle();
        console.log('klikol som');
        
    })
   



    //=============================================================================== BACKGROUND SETTINGS ====================================

  // if ($(this).is ('animated')) return;     používame na zastavenie anímácií ktoré sa naskladajú na seba, aby to neblikalo donekonečna. 

//   galery.hide();

//   var selected= $('.nav_bar').find('.selected'),
//       selectedGallery;

//  function showGallery (selected){
//     if ( selected.length ){
//         var id = selected.find('a').attr('href');
//         selectedGallery= $(id);
//     }
//     selectedGallery.length ? selectedGallery.show() : galery.eq(0).show();
//   }

//   $('a').on('click', function(){
//        var li = $(this).parent();
//             li.addClass('selected')
//               .siblings().removeClass('selected');
//               showGallery( li );
       
//  })
//  showGallery(selected);





// var selectedGallery;

// if( selected.length){
//     var id = selected.find('a').attr('href');
//     selectedGallery=$(id);
  
    // console.log(selectedGallery);
   
// }

// galery.eq(1).show()
// console.log(selectedGallery);

// selectedGallery.show()
// // selectedGallery.length ? galery.show()


console.log('ahoj tu som');
let number1 = 6;
let number2 = 8;
let number3 = 4;

console.log('Prvé čislo má hodnotu: ', number1);

function pinKod(a, b, c){
    if(number1 ===a && number2===b && number3===c){
        console.log('Zadali ste správny Pin Kód');
    }
    else{
        console.log('Zlý PIN, skúste to znovu');
    }
 }

 pinKod(6,8,4);


 let toDo = ["Zostrihať video", "Upratať izbu", "Vyluxovať"];


 console.log(toDo);
// keď chcem samostatne vypísať veci z pola, tak dám názov pola  [i] .....
 for (let i=0; i<toDo.length; i++){
    
    console.log(`${i}: `, `${toDo[i]}`);

 }

let prazdnePole = [];

// keď chcem naplniť prazdne pole niečim
for (let j=0; j< 5; j++){
    
    prazdnePole.push(j);
    
}
console.log(prazdnePole);
 


})(jQuery);

