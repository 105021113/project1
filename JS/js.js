$(document).ready(function(){
    $('.moretype').click(function(){
            $('.typeList').append(`
            <li class="card">
            <a href="./sim.html">
                <img src="./img/type/wed.png">
                <span>婚紗攝影</span>
            </a>
        </li>
        <li class="card">
            <a href="./sim.html">
                <img src="./img/type/view.png">
                <span>風景攝影</span>
            </a>
        </li>
        <li class="card">
            <a href="./sim.html">
                <img src="./img/type/product.png">
                <span>商品攝影</span>
            </a>
        </li>
        <li class="card">
            <a href="./sim.html">
                <img src="./img/type/wild.png">
                <span>生態攝影</span>
            </a>
        </li>
            `)
        
    })
    $('.moreart').click(function(){
        $('.artList').append(`
        <li class="card" >
                <img src="./img/Emily/e785de451ef377349afdf04952ff0158.jpg" >
                <p class="card-text">
                    作品名稱 : 仰望<br>
                    作者 : Emily<br>
                    創作時間 : 2022.08.11<br>
                    <a href="./emilylook.html">了解作品</a>
                    <a href="./Emily.html">認識作者</a>
                </p>
            </li>
            <li class="card" >
                <img src="./img/Sally/fae6a723d99153feb25b013647a963f8.jpg" >
                <p class="card-text">
                    作品名稱 : Sleep<br>
                    作者 : Sally<br>
                    創作時間 : 2022.08.20<br>
                    <a href="./sallysleep.html">了解作品</a>
                    <a href="./sally.html">認識作者</a>
                </p>
            </li> 
            <li class="card" >
                <img src="./img/Sally/fae6a723d99153feb25b013647a963f8.jpg" >
                <p class="card-text">
                    作品名稱 : Sleep<br>
                    作者 : Sally<br>
                    創作時間 : 2022.08.20<br>
                    <a href="./sallysleep.html">了解作品</a>
                    <a href="./sally.html">認識作者</a>
                </p>
            </li> 
        `)
    })
    $('#ham').click(function(){
        $('.menu').toggleClass('hidden')
    })


    let user = [
                {"id": '人像攝影師',"name":"Andy","age":'3年'},
                {"id": '人像攝影師',"name":"Brian","age":'2年'},
                {"id": '人像攝影師',"name":"Carl","age":'2年'},
                {"id": '商品攝影師',"name":"Dale","age":'1年'},
                {"id": '商品攝影師',"name":"Eric","age":'5年'},
                {"id": '人像攝影師',"name":"Frank","age":'2年'},
                {"id": '商品攝影師',"name":"Gina","age":'2年'},
                {"id": '商品攝影師',"name":"Helen","age":'6年'},
                {"id": '商品攝影師',"name":"Irene","age":'5年'},
                {"id": '商品攝影師',"name":"Jess","age":'2年'},
                {"id": '婚禮攝影師',"name":"Kevin","age":'2年'},
                {"id": '人像攝影師',"name":"Lisa","age":'7年'},
                {"id": '人像攝影師',"name":"Maria","age":'2年'},
                {"id": '婚禮攝影師',"name":"Nancy","age":'2年'},
                {"id": '人像攝影師',"name":"Olivia","age":'10年'},
                {"id": '人像攝影師',"name":"Peter","age":'3年'},
                {"id": '婚禮攝影師',"name":"Qreen","age":'2年'},
                {"id": '婚禮攝影師',"name":"Rose","age":'5年'},
                {"id": '婚禮攝影師',"name":"Sally","age":'2年'},
                {"id": '婚禮攝影師',"name":"Tina","age":'2年'},
            ]
            
            $(function(){
                
                $('#search').keyup(function(){
                    
                    let searchText = $(this).val()
                    
                    if(searchText!=''){
                        let tableData = `<table width="300" border="1"cellspacing='0' cellpadding='1'>
                            <tr align = "center">
                                <td>攝影類型</td> 
                                <td>姓名</td> 
                                <td>資歷</td>    
                            </tr>
                        `
                        $.each(user,function(id,item){
                            if(item.name.indexOf(searchText)!=-1||item.age.indexOf(searchText)!=-1||item.id.indexOf(searchText)!=-1){
                                tableData +=
                                `<tr align = "center">
                                    <td>${item.id}</td> 
                                    <td>${item.name}</td> 
                                    <td>${item.age}</td>    
                                </tr>`
                            }
                            
                        })

                        tableData += `</table>`
                        $('#feedback').html(tableData)
                    }else{
                        $('#feedback').html('')
                    }
                })
            })
            $('.style').click(function(){
                $('.selectBox').toggleClass('hidden')
            })
            // document.addEventListener('click',function(){
            //     if($(this)!=$('.selectBox')){
            //         $('.selectBox').addClass('hidden')
            //     }
            // },false)
            $('.close').click(function(){
                $('.selectBox').addClass('hidden')
            })

})