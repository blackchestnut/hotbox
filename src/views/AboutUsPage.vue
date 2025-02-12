<script setup>
import Menu from '@/components/Menu.vue';
</script>

<template>
    <Menu/>
    <div class="about-wrapper">
        <div class="about-company">
            <div class="text-wrapper">
                <div class="text">  
                    <h1 style="font-size: 40px; font-weight: bold;
                    padding-bottom: 30px;">О компании</h1>
                    <p>Наши БМАК проектируются и изготавливаются в габаритах морского контейнера 20 и 40 футов, а
                        также котлы наружного размещения в более компактных размерах 2580х1300х1900мм, что
                        позволяет оперативно и беспрепятственно доставить котельную установку по дорогам общего пользования на
                        территорию заказчика.</p>
                </div>
            <div class="company"></div>
            </div>  
        </div>
    </div>

    <div class="row">
            <div class="block">
                <div class="Nameline">
                    <div class="subtitle"><img src="\src\assets\images\area.svg" alt="Area Logo" class="area-logo" />Сфера применения</div>
                    <div class="description">БМАК предназначены для применения в сфере теплоснабжения жилых, общественных и промышленных зданий с рабочим (избыточным) давлением в системе теплоснабжения не
                        более 1,2 МПа (12 кгс/см2) и максимальной температурой нагрева теплоносителя до 115°С.</div>
                </div>
            </div>
            <div class="block">
                <div class="Nameline">
                    <div class="subtitle"><img src="\src\assets\images\format.svg" alt="Format Logo" class="format-logo" />Формат поставки</div>
                    <div class="description">БМАК поставляются в виде модульных котельных и
                        могут подключаться каскадным способом, тем самым возможно добиться требуемой мощности в
                        несколько десятков или сотен МВт.</div>
                </div>
            </div>
            <div class="block">
                <div class="Nameline">
                    <div class="subtitle"><img src="\src\assets\images\warranty.svg" alt="Warranty Logo" class="warranty-logo" />Гарантии</div>
                    <div class="description">Все оборудование используемое при производстве БМАК тщательно отбирается и
                        тестируется на собственном парке котельных установок. Таким образом мы уверены в
                        надежности выпускаемой продукции и предоставляем гарантию 12 месяцев.</div>
                </div>
            </div> 
    </div>

    <div class="partners-wrapper">
        <h1>Наши партнеры</h1>
        <div class="pictures">
            <img src="\src\assets\images\Bosch-logosvg.svg" alt="Bosch Logo" class="bosch-logo"/>
            <img src="\src\assets\images\caldera-logo.png" alt="caldera Logo" class="caldera-logo"/>
            <img src="\src\assets\images\Weishaupt-Logo.png" alt="Weishaupt Logo" class="weishaupt-logo"/>
            <img src="\src\assets\images\Legrand-logo.png" alt="Legrand Logo" class="legrand-logo"/>
            <img src="\src\assets\images\Schneider-Electric-l.png" alt="Schneider-Electric-l Logo" class="she-logo"/>
            <img src="\src\assets\images\Temron-logo.png" alt="Temron Logo" class="temron-logo"/>
            <img src="\src\assets\images\Group.png" alt="Group Logo" class="group-logo"/>
            <img src="\src\assets\images\Siemens-logo.png" alt="Siemens Logo" class="siemens-logo"/>
            <img src="\src\assets\images\CNP-logo.png" alt="CNP Logo" class="cnp-logo"/>
            <img src="\src\assets\images\ABB-logo.png" alt="ABB Logo" class="abb-logo"/>
            <img src="\src\assets\images\Vector.png" alt="Vector Logo" class="vector-logo"/>
            <img src="\src\assets\images\Baltur-logo.png" alt="Baltur Logo" class="baltur-logo"/>
        </div>
    </div>

    <div class="information-wrapper">
        <div class="content">
            <div class="full-name">
                <div class="contacts">Контакты</div>
                <div class="contac_information"><span class="appellation">Полное наименование:</span> Акционерное общество НТЦ
                    «Технологии телекоммуникаций и
                    автоматизированных систем»</div>
            </div>
            <div class="adress">
                <div class="contact_information"><span class="appellation">Юридический адрес:</span> 141002, Московская обл., г. Мытищи
                    ул. Колпакова, д. 2, корп. 15, офис 52</div>
            </div>
            <div class="adress-factory">
                <div class="contact_information"><span class="appellation">Адрес производства:</span> Квартал № 171
                    поселение Краснопахарское, Москва</div>
            </div>
            <div class="kpp">
                <div class="contact_information">
                    ОГРН - 1025003527856<br>
                    ИНН - 7704185209<br>
                    КПП - 50290100</div>
            </div>
            <div class="phones">
                <div class="contact_information"><span class="appellation">Телефоны:</span>
                    Офис: +7(977) 953-39-11
                    Производство: +7(999) 822-11-45</div>
            </div>
            <div class="email">
                <div class="contac_information"><span class="appellation">Email:</span> zakaz@tehtelecom.ru</div>
            </div>
        </div>
        <div class="map2"></div>
    </div>
</template>

<style scoped>
.about-wrapper {
    display: flex;
    justify-content: center; /* Центрирование по горизонтали */
    align-items: center; /* Центрирование по вертикали */
    padding-bottom: 60px;
}

.about-company {
    text-align: left; /* Центрирование текста внутри контейнера */
}

.text-wrapper {
    display: flex;
    flex-direction: row; /* Выравнивание по горизонтали */
    justify-content: center; /* Центрирование элементов внутри text-wrapper */
}

.company {
    background-image: url("/src/assets/images/company.png");
    height: 589px;
    width: 600px;
    background-size: cover; /* Чтобы изображение занимало весь блок */
    margin-left: 36px;
}
.subtitle {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px; 
}
.description {
    font-size: 20px;
    line-height: 30px;
}
.text {
    width: 500px;
    height: 630px;
    font-family: 'Inter', sans-serif; 
    font-size: 30px;
    line-height: 1.5;
}
.row {
    display: flex; 
    flex-direction: row; 
    justify-content: center;
    padding-bottom: 60px; 
}

.block {
    background-color: #EBEBEB; 
    margin: 10px;
    height: 455px; 
    width: 358px; 
    text-align: center;
    color: black;
    border-radius: 8px;
    text-align: left;
    font-family: 'Inter', sans-serif; 
    font-size: 20px; 
}
.Nameline {
    padding: 20px;
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
.partners-wrapper {
    text-align: center;
}

.information-wrapper {
    display: flex; /* Включаем Flexbox */
    justify-content: center; /* Центрирование содержимого по горизонтали */
    align-items: center; /* Центрирование содержимого по вертикали */
    margin: 0 auto; /* Центрируем контейнер на странице */
}

.content {
    text-align: left; /* Текст выровнен влево */
    font-family: 'Inter', sans-serif; 
    font-size: 20px;
    margin-right: 120px; /* Отступ между текстом и изображением */
    width: 383px;
    height: 719px;
    line-height: 30px;
}

.adress, .kpp, .email {
    padding: 30px 0; /* Отступ сверху и снизу */
}

.map2 {
    background-image: url("/src/assets/images/map2.png");
    height: 374px;
    width: 700px;
}
.contacts {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 600;
}
.contact_information {
    font-size: 20px;
}
.appellation {
    font-weight: bold;
}
</style>