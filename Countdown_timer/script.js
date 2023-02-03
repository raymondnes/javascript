(Function () {
Const Second = 1000,
Minute = Second * 60,
Hour = Minute * 60,
Day = Hour * 24;
//I'm Adding This Section So I Don't Have To Keep Updating This Pen Every Year :-)
//Remove This If You Don't Need It
Let Today = New Date(),
Dd = String(Today.GetDate()).PadStart(2, "0"),
Mm = String(Today.GetMonth() + 1).PadStart(2, "0"),
Yyyy = Today.GetFullYear(),
NextYear = Yyyy + 1,
DayMonth = "05/29/",
Birthday = DayMonth + Yyyy;
Today = Mm + "/" + Dd + "/" + Yyyy;
If (Today > Birthday) {
Birthday = DayMonth + NextYear;
}
//End
Const CountDown = New Date(Birthday).GetTime(),
X = SetInterval(Function() {
Const Now = New Date().GetTime(),
Distance = CountDown - Now;
Document.GetElementById("Days").InnerText = Math.Floor(Distance / (Day)),
Document.GetElementById("Hours").InnerText = Math.Floor((Distance % (Day)) / (Hour)),
Document.GetElementById("Minutes").InnerText = Math.Floor((Distance % (Hour)) / (Minute)),
Document.GetElementById("Seconds").InnerText = Math.Floor((Distance % (Minute)) / Second);
//Do Something Later When Date Is Reached
If (Distance < 0) {
Document.GetElementById("Headline").InnerText = "It's My Birthday!";
Document.GetElementById("Countdown").Style.Display = "None";
Document.GetElementById("Content").Style.Display = "Block";
ClearInterval(X);
}
//Seconds
}, 0)
}());
