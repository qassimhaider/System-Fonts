
	/* by Qassim Haider.*********/
	/* (c) 2007 QassimHaider - all rights reserved.*****/
	/* www.qtypography.com ***************************/
	//LastUpdate 2016 Oct 2

#target illustrator

var NoPage = documents.length;
	if(NoPage == 0){
		documents.add ()
	}
	
	
	
	var NewText = prompt("Please type:","Simple Text","Text");
	var doc = documents[0];
	var myLayer = doc.layers.add();
	myLayer.name = "Typography";
	var i= new Number(0);
	
	
	var txtCont = myLayer.textFrames.add();
	
	txtCont.contents = NewText;
	

	var myStyles = txtCont.textRange.characterAttributes;
	
	var FontName = myStyles.textFont;
	
	var FontSize = 18;
	
 	myStyles.size = FontSize;	
	
	
	
	
	
	
	
 	var start = new Number(0);
	var End = new Number(0);
		End = app.textFonts.length;
	
	var x = 0;
	var y = 0;
	var k = 0;
 
    			
                  
                  for(i=start; i<End; i++){
						Duplicate(i);
						k +=1;
					} 
                      
            
            
                 
                
                
                
				function Duplicate(i){
					if(i % 20  != 0 ){
	
					}else{
						x += 200;
						y = 780;
					}
						y -= 30;
						myStyles.textFont = app.textFonts[i];
						txtCont.position = [x, y];
						txtCont.duplicate();	
				}
				 
				 
				 

	 
	
	alert("You have " + app.textFonts.length +" fonts. " + "\n" + "© 2007-2016 QassimHaider. \nall rights reserved. \n qassim@qtypography.com");
	
	
	
	
	
	
	
	
	
	


