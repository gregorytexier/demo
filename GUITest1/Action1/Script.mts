
SystemUtil.Run "C:\Program Files\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe","","C:\Program Files\HP\Unified Functional Testing\samples\Flights Application\",""
WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set DataTable("Username", dtGlobalSheet) @@ hightlight id_;_1901237168_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure "5612912474fa03db7731" @@ hightlight id_;_1899873744_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click @@ hightlight id_;_1899873984_;_script infofile_;_ZIP::ssf22.xml_;_
Window("Window").Click 233,22 @@ hightlight id_;_65664_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet) @@ hightlight id_;_1900183056_;_script infofile_;_ZIP::ssf27.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet) @@ hightlight id_;_1899859344_;_script infofile_;_ZIP::ssf29.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1899858096_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1899894432_;_script infofile_;_ZIP::ssf32.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfTable("flightsDataGrid").SelectCell 0,3 @@ hightlight id_;_1899893184_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1899892944_;_script infofile_;_ZIP::ssf34.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("passengerName").Set "zzz" @@ hightlight id_;_1899855408_;_script infofile_;_ZIP::ssf38.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("ORDER").Click @@ hightlight id_;_1899856080_;_script infofile_;_ZIP::ssf39.xml_;_
