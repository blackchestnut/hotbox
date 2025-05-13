<template>
  <div class="pictures">
    <img
      src="\src\assets\images\partners\Bosch-logosvg.svg"
      alt="Bosch Logo"
      class="bosch-logo"
    />
    <img
      src="\src\assets\images\partners\caldera-logo.png"
      alt="caldera Logo"
      class="caldera-logo"
    />
    <img
      src="\src\assets\images\partners\Weishaupt-Logo.png"
      alt="Weishaupt Logo"
      class="weishaupt-logo"
    />
    <img
      src="\src\assets\images\partners\Legrand-logo.png"
      alt="Legrand Logo"
      class="legrand-logo"
    />
    <img
      src="\src\assets\images\partners\Schneider-Electric-l.png"
      alt="Schneider-Electric-l Logo"
      class="she-logo"
    />
    <img
      src="\src\assets\images\partners\Temron-logo.png"
      alt="Temron Logo"
      class="temron-logo"
    />
    <img
      src="\src\assets\images\partners\Group.png"
      alt="Group Logo"
      class="group-logo"
    />
    <img
      src="\src\assets\images\partners\Siemens-logo.png"
      alt="Siemens Logo"
      class="siemens-logo"
    />
    <img
      src="\src\assets\images\partners\CNP-logo.png"
      alt="CNP Logo"
      class="cnp-logo"
    />
    <img
      src="\src\assets\images\partners\ABB-logo.png"
      alt="ABB Logo"
      class="abb-logo"
    />
    <img
      src="\src\assets\images\partners\Vector.png"
      alt="Vector Logo"
      class="vector-logo"
    />
    <img
      src="\src\assets\images\partners\Baltur-logo.png"
      alt="Baltur Logo"
      class="baltur-logo"
    />
  </div>
</template>

<style>
.pictures {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  column-gap: 80px;
  row-gap: 10px;
}
.pictures img {
  width: 100%;
}
@media (max-width: 1024px) {
  .pictures {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 34px;
    row-gap: 6px;
  }

  /* Указываем порядок логотипов */
  .bosch-logo {
    order: 3;
  }
  .caldera-logo {
    order: 2;
  }
  .weishaupt-logo {
    order: 1;
  }
  .legrand-logo {
    order: 5;
  }
  .she-logo {
    order: 8;
  }
  .temron-logo {
    order: 4;
  }
  .group-logo {
    order: 7;
  }
  .siemens-logo {
    order: 10;
  }
  .cnp-logo {
    order: 6;
  }
  .abb-logo {
    order: 11;
  }
  .vector-logo {
    order: 12;
  }
  .baltur-logo {
    order: 9;
  }
}
</style>
