Const CarouselContainer = Document.QuerySelector(".CarouselContainer");  
 Const Slides = Document.QuerySelectorAll('.Slides');  
 Const Next = Document.QuerySelector('#Next');  
 Const Prev = Document.QuerySelector('#Prev');  
 Let Counter = 1 ;  
 Const Size = Slides[0].ClientWidth;  
 CarouselContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
 Next.AddEventListener('Click',()=>{  
   If (Counter>=Slides.Length)Return;  
   CarouselContainer.Style.Transition = 'Transform 0.4s Ease-In-Out';  
   Counter++;  
   CarouselContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
 });  
 Prev.AddEventListener('Click',()=>{  
   If (Counter<=0)Return;  
   CarouselContainer.Style.Transition = 'Transform 0.4s Ease-In-Out';  
   Counter--;  
   CarouselContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
 });  
 CarouselContainer.AddEventListener('Transitionend',()=>{  
   Console.Log(Slides[Counter]);  
   If(Slides[Counter].Id ==='Lastslide'){  
   CarouselContainer.Style.Transition = 'None';  
   Counter = Slides.Length - 2;      
   CarouselContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
   }  
 });  
 CarouselContainer.AddEventListener('Transitionend',()=>{  
   Console.Log(Slides[Counter]);  
   If(Slides[Counter].Id ==='Firstslide'){  
   CarouselContainer.Style.Transition = 'None';  
   Counter = Slides.Length - Counter;      
   CarouselContainer.Style.Transform = 'TranslateX(' + (-Size * Counter ) + 'Px';  
   }  
 });
