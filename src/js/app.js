// ФУНКЦИИ =======================================================================
import * as functions from "./modules/functions.js";

// Проверка поддержки WebP
functions.isWebp();

// Исправление наложения нижней панели на смартфонах
functions.fullVHfix();

// Скролл фиксированного header
functions.headerScroll();

// КОМПОНЕНТЫ ====================================================================

// Бургер меню
import "./modules/components/headerMenu.js";

// Попап
// import "./modules/components/popup.js";

// Спойлеры
// import "./modules/components/spoilers.js";

// Табы
// import "./modules/components/tabs.js";

// БИБЛИОТЕКИ ====================================================================

// Swiper
import "./modules/libs/sliders.js";

// РАБОТА С ФОРМАМИ ==============================================================
import * as forms from "./modules/forms.js";

// Валидация формы
forms.formFieldsInit();

// Отправка формы (Требуется подключение попапа)
// forms.formSubmit();

// ПРОЧЕЕ ========================================================================

// Параллакс мышью
import "./modules/parallax-mouse.js";

// Динамический адаптив
import "./modules/dynamic-adapt.js";

// Анимация при скролле
// import "./modules/scroll.js";

// Свои скрипты
import "./modules/script.js";