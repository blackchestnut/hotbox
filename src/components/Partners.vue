<template>
    <div class="partners-wrapper">
        <div class="partners">
            <div class="production">
                В производстве мы используем оборудование только
                проверенных производителей
            </div>
            <div class="text">
                При разработке мобильных котельных применяются качественные европейские комплектующие.
                Вся продукция проходит обязательные испытания и соответствует нормативным документам
            </div>
        </div>
        <div class="pictures">
            <img src="\src\assets\images\partners\Bosch-logosvg.svg" alt="Bosch Logo" class="bosch-logo"/>
            <img src="\src\assets\images\partners\caldera-logo.png" alt="caldera Logo" class="caldera-logo"/>
            <img src="\src\assets\images\partners\Weishaupt-Logo.png" alt="Weishaupt Logo" class="weishaupt-logo"/>
            <img src="\src\assets\images\partners\Legrand-logo.png" alt="Legrand Logo" class="legrand-logo"/>
            <img src="\src\assets\images\partners\Schneider-Electric-l.png" alt="Schneider-Electric-l Logo" class="she-logo"/>
            <img src="\src\assets\images\partners\Temron-logo.png" alt="Temron Logo" class="temron-logo"/>
            <img src="\src\assets\images\partners\Group.png" alt="Group Logo" class="group-logo"/>
            <img src="\src\assets\images\partners\Siemens-logo.png" alt="Siemens Logo" class="siemens-logo"/>
            <img src="\src\assets\images\partners\CNP-logo.png" alt="CNP Logo" class="cnp-logo"/>
            <img src="\src\assets\images\partners\ABB-logo.png" alt="ABB Logo" class="abb-logo"/>
            <img src="\src\assets\images\partners\Vector.png" alt="Vector Logo" class="vector-logo"/>
            <img src="\src\assets\images\partners\Baltur-logo.png" alt="Baltur Logo" class="baltur-logo"/>
        </div>
    </div> 
    
</template>

<style scoped>

.production {
    font-family: 'Inter', sans-serif; /* Убедитесь, что шрифт Inter подключен */
    font-weight: 600; /* Semi Bold */
    font-size: 40px; /* Размер шрифта 40px */
    width: 1123px;
    text-align: center;
    padding-bottom: 60px;
}
.text {
    font-family: 'Regular', sans-serif;
    font-size: 30px;
    width: 1100px;
    text-align: center;
    padding-bottom: 150px;
}
.partners {
    width: 1148px;
    height: 1116.25;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
}
.pictures {
    display: flex; /* Включаем Flexbox */
    flex-wrap: wrap; /* Позволяем элементам переноситься на новую строку */
    justify-content: center;
}
.pictures img {
    margin: 80px; /* Отступы между изображениями */
    box-sizing: border-box; /* Учитываем отступы в ширине */
}
.bosch-logo{
    width:300px ;
    height:67.13px;
}
.legrand-logo{
    width:300px ;
    height:74.25px;
}
.group-logo {
    width:300px ;
    height:61.44px;
}
.abb-logo {
    width:300px ;
    height:119.25px;
}
.caldera-logo {
    width:300px ;
    height:102px;
}
.she-logo {
    width:300px ;
    height:120px;
}
.siemens-logo {
    width:300px ;
    height:168.75px;
}
.vector-logo {
    width:296.63px ;
    height:88.46px;
}
.weishaupt-logo {
    width:300px ;
    height:52.5px;
}
.temron-logo {
    width:300px ;
    height:162.5px;
}
.cnp-logo {
    width:300px ;
    height:123.75px;
}
.baltur-logo {
    width:300px ;
    height:94px;
}
</style>