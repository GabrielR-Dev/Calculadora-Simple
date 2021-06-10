let d = document,
  $numP = d.getElementById("num")
;



d.addEventListener("click", e =>{
    
    if(e.target.matches("button")){
        if(e.target.textContent != "=" && e.target.textContent != "CE"){
            $numP.textContent += e.target.textContent;
        }else {
            if(e.target.textContent === "="){
                if($numP.textContent.length < 8){
                    $numP.textContent = eval($numP.textContent);
                } else{
                    $numP.textContent = eval($numP.textContent).toFixed(8);
                }
            } else {
                $numP.textContent = "";
            };
        };
    };
});