//export const SUPPORT_EMAIL = "zakaz@tehtelecom.ru";
export const SUPPORT_EMAIL = "toucan305@gmail.com";
export const SUPPORT_EMAIL_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const SUPPORT_PHONE = "+7 (977) 953 39 11";
export const SUPPORT_PHONE_TEL = "tel:+79779533911";

export const links = [
  { text: "ГЛАВНАЯ", path: "/" },
  { text: "КОТЕЛЬНЫЕ", path: "/boiler-room", extraMatchPath: "kotelnye" },
  { text: "УСЛУГИ", path: "/service" },
  { text: "МОБИЛЬНЫЕ КОТЕЛЬНЫЕ", path: "/car" },
  { text: "НОВОСТИ", path: "/news" },
  { text: "О НАС", path: "/us" },
];

import { ref, computed } from "vue";

export const clientName = ref("");
export const clientEmail = ref("");
export const clientPhone = ref("");
export const count = ref(1);
export const fields = [clientName, clientEmail, clientPhone];

export const isSubmitDisabled = computed(() => {
  return (
    !clientName.value.trim() ||
    !clientEmail.value.trim() ||
    !clientPhone.value.trim()
  );
});
