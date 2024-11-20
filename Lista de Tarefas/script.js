$(document).ready(
    function(){
        $("#btn").click(function(e){
            const tarefa = $("#tarefa").val();
            if (tarefa==""){
                alert("Digite uma tarefa válida");
            }
            else {
                $("#lista").append(
                    `
                    <li>
                        <i class="fas fa-check-circle check"></i>
                        <span>${tarefa}</span>
                        <i class="fas fa-trash-can exclude"></i>
                    </li>
                    `
                );
                $("#tarefa").val("");
            }
        
            $(".exclude").each(function(){
                $(this).click(function(){
                    $(this).parent().remove();
                })
            });
        
            $("#lista li").click(function(){
                $(this).find(".check").css("color","#349223");
                $(this).find("span").css("textDecoration","line-through");
            })
        
        })
        

    }


)






/* CÓDIGO SEM JQUERY

const tarefa=document.querySelector("#tarefa");
const btn=document.querySelector("#btn");
const lista=document.querySelector("#lista")



btn.addEventListener("click",function(){
    if (tarefa.value==""){
        alert("Digite uma tarefa válida")
    }
    else {
        lista.innerHTML+=
            `
            <li>
                <i class="fas fa-check-circle check"></i>
                <span>${tarefa.value}</span>
                <i class="fas fa-trash-can exclude"></i>
            </li>
            `
    }
    tarefa.value=""; //Apagar do campo após incluir

    const exclude=document.querySelectorAll(".exclude");    
    for (let i=0;i<exclude.length;i++){
            exclude[i].addEventListener("click", function(){
                exclude[i].parentElement.remove();
            })
    }

    lista.addEventListener("click", function(e){
        e.target.parentElement.querySelector(".check").style.color="#349223";
        e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
    })
})
    */

