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
})