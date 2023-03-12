 //Selecting All Required Elements
Const DropArea = Document.QuerySelector(".Drag-Area"),
DragText = DropArea.QuerySelector("Header"),
Button = DropArea.QuerySelector("Button"),
Input = DropArea.QuerySelector("Input");
Let File; //This Is A Global Variable And We'll Use It Inside Multiple Functions




Button.Onclick = ()=>{
  Input.Click(); //If User Click On The Button Then The Input Also Clicked
}




Input.AddEventListener("Change", Function(){
  //Getting User Select File And [0] This Means If User Select Multiple Files Then We'll Select Only The First One
  File = This.Files[0];
  DropArea.ClassList.Add("Active");
  ShowFile(); //Calling Function
});
//If User Drag File Over DropArea
DropArea.AddEventListener("Dragover", (Event)=>{
  Event.PreventDefault(); //Preventing From Default Behaviour
  DropArea.ClassList.Add("Active");
  DragText.TextContent = "Release To Upload File";
});




//If User Leave Dragged File From DropArea
DropArea.AddEventListener("Dragleave", ()=>{
  DropArea.ClassList.Remove("Active");
  DragText.TextContent = "Drag & Drop To Upload File";
});




//If User Drop File On DropArea
DropArea.AddEventListener("Drop", (Event)=>{
  Event.PreventDefault(); //Preventing From Default Behaviour
  //Getting User Select File And [0] This Means If User Select Multiple Files Then We'll Select Only The First One
  File = Event.DataTransfer.Files[0];
  ShowFile(); //Calling Function
});




Function ShowFile(){
  Let FileType = File.Type; //Getting Selected File Type
  Let ValidExtensions = ["Image/Jpeg", "Image/Jpg", "Image/Png"]; //Adding Some Valid Image Extensions In Array
  If(ValidExtensions.Includes(FileType)){ //If User Selected File Is An Image File
    Let FileReader = New FileReader(); //Creating New FileReader Object
    FileReader.Onload = ()=>{
      Let FileURL = FileReader.Result; //Passing User File Source In FileURL Variable
      Let ImgTag = `<Img Src="${FileURL}" Alt="Image">`; //Creating An Img Tag And Passing User Selected File Source Inside Src 
Attribute
      DropArea.InnerHTML = ImgTag; //Adding That Created Img Tag Inside DropArea Container
    }
    FileReader.ReadAsDataURL(File);
  }Else{
    Alert("This Is Not An Image File!");
    DropArea.ClassList.Remove("Active");
    DragText.TextContent = "Drag & Drop To Upload File";
  }
}
