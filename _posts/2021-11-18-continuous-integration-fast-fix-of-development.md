---
layout: post
date: 2021-11-18 19:00:00
title: "Continuous Integration: быстро чиним разработку"
excerpt: "Всеволод Нечаев рассказывает о том, что общего между разработкой программ и автомобильным конвеером."
image: "https://github.com/progmsk/progmsk.github.io/assets/10639110/d9c82e06-8141-4896-a9ad-2d78232c6dd8"
videos:
  - "https://www.youtube.com/embed/X9oqLxQv268"
---

Стоимость компьютерных экспериментов всегда была непомерно высока. Вы помните все эти фото из книг об истории компьютеров — огромные залы, бобины размером с колесо автомобиля, люди в белых халатах.

Вычислительные машины стоили дорого, так что купить их могли только крупные компании и крупные университеты.

Каждый эксперимент на таком компьютере был непозволительной роскошью. Семь раз отмерь — один отрежь: прежде, чем отправить программу на выполнение, её нужно было тщательно спроектировать и практически даже отладить. Вручную.

Ситуация стала меняться с появлением персональных компьютеров. Но не сразу. Персональные компьютеры были слишком слабы для развитых языков программирования. Smalltalk, хорошо зарекомендовавший себя на рабочих станциях Xerox, не влезал в маломощный IBM PC.

Даже достаточно железному C++ пришлось десять лет дожидаться, пока персональные компьютеры обретут достаточную мощность. Программисты писали на языке Ассемблера, C и Pascal. Экспериментировать на персональном компьютере было не так дорого, как на большом или среднем, но вы попробуйте поэкспериментировать на языке не очень высокого уровня! Замучаешься переписывать.

Всё это время планирование было нашим лучшим другом. А потом ситуация изменилась.

На рубеже XX и XXI веков программисты осознали, что эксперименты стали стоить совсем недорого. Не бесплатно, но и не так, как тридцать и даже десять лет назад.

Нашими друзьями стали наши инструменты. Системы контроля версий позволяли нам спокойно откатываться к стабильной версии когда. Интегрированные среды облегчили написание и отладку. Мы смогли отказаться от далеко идущих планов и сконцентрировались на ближайшей работе.

Позже всё это назвали гибкой разработкой программ. Одной из важнейших практик, пришедших к нам из *экстремального программирования* (*eXtremal Programming* — XP) стала непрерывная интеграция кода. Программисты в небольших командах отказались от длительной работы на отшибе. Вместо этого они стали сливать код как можно чаще, чтобы выявлять проблемы сливания как можно раньше.

Но практика применения Continuous Integration оказалась гораздо шире, чем это виделось основоположникам XP. Оказалось, что на этапе интеграции удобно проводить и дополнительный анализ кода, и выполнять специальные — интеграционные — тесты. И мы на нашем заседании поговорили об ещё одной точке зрения на CI, точке зрения системного мышления.

Рассказал нам об этом Всеволод Нечаев, Java-программист. Он долго пытался разобраться, почему CI выглядит так, как выглядит, а потом неожиданно разобрался. Ему помогла практика системного мышления, про которую мы тоже поговорили.

## Слайды

[Скачать в формате PDF](https://github.com/progmsk/progmsk.github.io/files/14731594/continuous-integration-fast-fix-of-development.pdf).

## Ссылки из доклада

* [Continuous Integration on a Dollar a Day](https://www.jamesshore.com/v2/blog/2006/continuous-integration-on-a-dollar-a-day)
* [Искусство системного мышления](https://www.litres.ru/dzhozef-o-konnor-3/iskusstvo-sistemnogo-myshleniya-neobhodimye-znaniya-o-s/chitat-onlayn/)
* [Азбука системного мышления](https://www.litres.ru/donella-medouz/azbuka-sistemnogo-myshleniya/chitat-onlayn/)
* [Пятая дисциплина](https://www.litres.ru/piter-senge/pyataya-disciplina/)
* [Lean Enterprise](https://www.amazon.com/Lean-Enterprise-Performance-Organizations-Innovate/dp/1449368425)

## Ссылки на видео

* [Олег Сорока: Что такое Continuous Integration (CI/CD) и где его взять?](https://www.youtube.com/watch?v=kVuqRSnGtn4)
* [BMW и непрерывная интеграция модулей: Multi-Stage-CI with Jenkins in an Embedded World](https://www.youtube.com/watch?v=AB5RTabEtEI)
* [Multi-stage CI для микросервисов: QAOps, или почему тестировщик должен построить CI/CD (Дмитрий Красильников, DINS)](https://www.youtube.com/watch?v=rg2PK0jECeM)
* [Continuous Integration at scale](https://www.youtube.com/watch?v=tIklVsDXfB8)
