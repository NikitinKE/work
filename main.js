let ekran  ="0" // число на экране 
let schet = 0  // первое число мат действия
let znak = 0  // признак действия
let memory=0   // число в пямяти
let otvet ="0" // нажатие на клавишу =
let deistvie=0 // нажатие на коавишу действия
let dlina = 0 // размер экрана
let znak1 = ""// вывод знака действия
let h1 = document.querySelector('h1');

// 1
document.getElementById("but1").addEventListener("click",function(
    
)
{dlina=ekran.length
    if(dlina==10){
    ekran
    }
    else {
    if(ekran=="0"||otvet=="1"){
    otvet="0"
    ekran =  "1"}
    else ekran=ekran+"1"
    h1.innerText = ekran}
});
// 2
document.getElementById("but2").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran =  "2"}
        else ekran=ekran+"2"
        h1.innerText = ekran}
    });
// 3
document.getElementById("but3").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran =  "3"}
        else ekran=ekran+"3"
        h1.innerText = ekran}
    });
// 4
     document.getElementById("but4").addEventListener("click",function(
        ){dlina=ekran.length
            if(dlina==10){
            ekran
            }
            else {
            if(ekran=="0"||otvet=="1"){
            otvet="0"
            ekran =  "4"}
            else ekran=ekran+"4"
            h1.innerText = ekran}
        });
// 5
document.getElementById("but5").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran =  "5"}
        else ekran=ekran+"5"
        h1.innerText = ekran}
    });
// 6
document.getElementById("but6").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran =  "6"}
        else ekran=ekran+"6"
        h1.innerText = ekran}
    });
// 7
document.getElementById("but7").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran = "7" }
        else ekran=ekran+"7"
        h1.innerText = ekran}
    });
// 8
document.getElementById("but8").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran =  "8"}
        else ekran=ekran+"8"
    h1.innerText = ekran}
    });
// 9
document.getElementById("but9").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran =  "9"}
        else ekran=ekran+"9"
      h1.innerText = ekran} 

    });

   
// 0
document.getElementById("but0").addEventListener("click",function(
    )
    {dlina=ekran.length
        if(dlina==10){
        ekran
        }
        else {
        if(ekran=="0"||otvet=="1"){
        otvet="0"
        ekran = "0"}
        else 
        ekran=ekran+"0"
      h1.innerText = ekran}

    });
// разделитель
document.getElementById("butt").addEventListener("click",function(
    ){dlina=ekran.length
        if(dlina==9){
        ekran
        }
        else {
        if(~ ekran.indexOf("."))
        ekran = ekran 
        
        else ekran=ekran+"."
        h1.innerText = ekran}
        if(ekran=="0"||otvet=="1"){ekran="0."
                                   otvet="0" };
    

    });
// удаление последнего символа
document.getElementById("butb").addEventListener("click",function(
    )
    {let dlstr=1
    let minus
        dlstr =ekran.length

        if(dlstr==1)
              ekran = "0"
              
         else if (dlstr=="2")   {minus=ekran[0]
            
               if(minus=="-") {ekran =  "0"}
               else
               {ekran=String(ekran) 
                ekran=ekran.slice(0, -1)}}
    else
       {ekran=String(ekran) 
        ekran=ekran.slice(0, -1)}

        h1.innerText = ekran

    });
// смена знака
document.getElementById("butun").addEventListener("click",function(
    ){if(ekran==0)
        ekran 
        else ekran=-ekran
        h1.innerText = ekran

    });

// сброс

document.getElementById("cbros").addEventListener("click",function(
)
    {ekran ="0"
     schet=0
     h1.innerText = ekran
        document.getElementById("mr2").innerText = (schet)}
);
// сложение 1
document.getElementById("butpl").addEventListener("click",function(
    ){
        if(deistvie==0){
        schet=Number(ekran)
        ekran="0"
        znak=1
        znak1="+"
        h1.innerText = ekran
        document.getElementById("mr2").innerText = (schet+" "+znak1)
        deistvie=1}
        else
        {
        shett();
         schet=Number(ekran) 
         znak=1
         zn(); 
         document.getElementById("mr2").innerText = (schet+" "+znak1)
         
         h1.innerText = ekran
         ekran="0" 
         znak=1
        }

    });
// вычитание 2
document.getElementById("butmn").addEventListener("click",function(
    ){
        if(deistvie==0){
            schet=Number(ekran)
            ekran="0"
            znak=2
            znak1="-"
            h1.innerText = ekran
            document.getElementById("mr2").innerText = (schet+" "+znak1)
            deistvie=1}
            else
            {
            shett();
             schet=Number(ekran) 
             znak=2
             zn();
             document.getElementById("mr2").innerText = (schet+" "+znak1)
             h1.innerText = ekran
             ekran="0" 
             
            }
    
    });
// Умножение 3
document.getElementById("butum").addEventListener("click",function(
    ){if(deistvie==0){
        schet=Number(ekran)
        ekran="0"
        znak=3
        h1.innerText = ekran
        document.getElementById("mr2").innerText = (schet+" "+znak1)
        deistvie=1}
        else
        {
        shett();
         schet=Number(ekran) 
         znak=3
         zn();
         document.getElementById("mr2").innerText = (schet+" "+znak1) 
         h1.innerText = ekran
         ekran="0" 
        }

    });

// деление 4
document.getElementById("butdl").addEventListener("click",function(
    ){if(deistvie==0){
        schet=Number(ekran)
        ekran="0"
        znak=4
        h1.innerText = ekran
        document.getElementById("mr2").innerText = (schet+" "+znak1)
        deistvie=1}
        else
        {
        shett();
         schet=Number(ekran) 
         znak=4
         zn();
         document.getElementById("mr2").innerText = (schet+" "+znak1)
         h1.innerText = ekran
         ekran="0" 
         
        }

    });


// вычисление
    document.getElementById("butrv").addEventListener("click",function(
        ){shett();
        deistvie=0
        otvet="1"
        znak=0
        // schet=0
        // document.getElementById("mr2").innerText = (schet)
    })
        
        
// функция счета
function shett( ){
            ekran=Number(ekran)
            switch(znak){
            case(1):{
            ekran=schet+ekran
            ekran=String(ekran)
            if(~ ekran.indexOf(".")){
                ekran=Number(ekran)
                ekran=+ekran.toFixed(6)}
                else
                ekran}
            break;
            case(2):
            {ekran=schet-ekran
                ekran=String(ekran)
            if(~ ekran.indexOf(".")){
                ekran=Number(ekran)
                ekran=+ekran.toFixed(6)}
                else
                ekran}
            break;
            case(3):
            ekran=schet*ekran
            ekran=String(ekran)
            if(~ ekran.indexOf(".")){
            ekran=Number(ekran)
            ekran=+ekran.toFixed(6)
            }
 
            else
            ekran
            break;
            case(4):{ let ekc=Number(ekran)
            if(ekc==0){
            ekran = "error"}
            else
            ekran=schet/ekran
            ekran=String(ekran)
            if(~ ekran.indexOf(".")){
            ekran=Number(ekran)
            ekran=+ekran.toFixed(6)
            }
            else
            ekran
        }
            break;}
            // otvet="1"
            schet=Number(ekran)
            dlina=ekran.length
            if(dlina>10){
                ekran=Number(ekran)
                ekran=ekran.toExponential(2);
                }
                else {
                    ekran}
            
            h1.innerText = ekran
            document.getElementById("mr2").innerText = (schet)
                
        };
// добавление числа в пямять 

document.getElementById("butmpl").addEventListener("click",function(
    ){memory=Number(ekran)
        document.getElementById("mr1").innerText = (memory)

    });
// сбросс памяти 
document.getElementById("butmsb").addEventListener("click",function(
    ){memory=0
        document.getElementById("mr1").innerText = (memory)

    });
// вывод числа из памяти на дисплей
document.getElementById("butmdis").addEventListener("click",function(
    ){ekran=memory
        document.getElementById("mr1").innerText = (memory)
      h1.innerText = ekran
    });
function zn(){
switch(znak){
    case 1: {znak1="+"}
    break;
    case 2:{znak1="-"}
    break;
    case 3:{znak1="*"}
    break;
    case 4:{znak1="/"}
    break;}
   
};